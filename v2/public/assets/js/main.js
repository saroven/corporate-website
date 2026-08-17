(() => {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ------------------------------------------------------------------ */
    /* Sticky header shadow                                               */
    /* ------------------------------------------------------------------ */
    const header = document.querySelector('[data-header]');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 10);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ------------------------------------------------------------------ */
    /* Mobile menu                                                         */
    /* ------------------------------------------------------------------ */
    const toggleBtn = document.querySelector('[data-menu-toggle]');
    const closeBtn = document.querySelector('[data-menu-close]');
    const mobileNav = document.querySelector('[data-mobile-nav]');

    if (toggleBtn && mobileNav) {
        const openMenu = () => {
            mobileNav.classList.add('is-open');
            toggleBtn.setAttribute('aria-expanded', 'true');
            mobileNav.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden');
            closeBtn?.focus();
        };
        const closeMenu = () => {
            mobileNav.classList.remove('is-open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            mobileNav.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');
            toggleBtn.focus();
        };

        toggleBtn.addEventListener('click', openMenu);
        closeBtn?.addEventListener('click', closeMenu);

        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) closeMenu();
        });

        mobileNav.querySelectorAll('[data-mobile-link]').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) closeMenu();
        });
    }

    /* ------------------------------------------------------------------ */
    /* Active nav link (based on current page)                             */
    /* ------------------------------------------------------------------ */
    const currentFile = (location.pathname.split('/').pop() || 'index.html').replace(/\.html?$/, '');
    const pageSlug = currentFile;
    document.querySelectorAll('[data-nav-link], [data-mobile-link]').forEach((link) => {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
        const href = (link.getAttribute('href') || '').replace(/\.html?$/, '');
        const match =
            href === pageSlug ||
            (pageSlug === 'index' && href === '') ||
            (href === 'index' && pageSlug === '');
        if (match) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        }
    });

    /* ------------------------------------------------------------------ */
    /* Reveal on scroll                                                    */
    /* ------------------------------------------------------------------ */
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        if (prefersReducedMotion) {
            revealEls.forEach((el) => el.classList.add('is-visible'));
        } else {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
            revealEls.forEach((el) => observer.observe(el));
        }
    }

    /* ------------------------------------------------------------------ */
    /* Count-up stat                                                       */
    /* ------------------------------------------------------------------ */
    const statEls = document.querySelectorAll('[data-count]');
    if (statEls.length && !prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.countSuffix || '';
                const duration = 1400;
                const start = performance.now();
                const format = (value) => (Number.isInteger(target) ? Math.round(value) : value.toFixed(1));
                const tick = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = format(target * eased) + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                    else el.textContent = format(target) + suffix;
                };
                requestAnimationFrame(tick);
                observer.unobserve(el);
            });
        }, { threshold: 0.5 });
        statEls.forEach((el) => observer.observe(el));
    }

    /* ------------------------------------------------------------------ */
    /* Quote form — front-end validation + dropzone                        */
    /* ------------------------------------------------------------------ */
    const form = document.querySelector('[data-quote-form]');
    const dropzone = document.querySelector('[data-dropzone]');
    const fileInput = document.querySelector('[data-file-input]');
    const fileLabel = document.querySelector('[data-file-label]');

    const ACCEPT = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png'];
    const MAX_BYTES = 10 * 1024 * 1024;

    const setError = (input, visible) => {
        input.classList.toggle('is-invalid', visible ? true : !!input.value);
        const err = input.closest('.field')?.querySelector('.form-error')
            || input.parentElement?.querySelector('.form-error');
        if (err) err.classList.toggle('is-visible', visible);
        if (visible) input.setAttribute('aria-invalid', 'true');
        else if (!input.value) input.removeAttribute('aria-invalid');
    };

    const validateField = (input) => {
        const validators = {
            text: () => input.value.trim().length > 0,
            email: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()),
            tel: () => input.value.trim().replace(/[\s-]/g, '').length >= 7,
            select: () => input.value !== '',
        };
        const fn = validators[input.dataset.rule] || validators.text;
        const valid = fn();
        setError(input, !valid && input.value !== '');
        return valid;
    };

    if (form) {
        const inputs = form.querySelectorAll('[data-rule]');
        inputs.forEach((input) => {
            input.addEventListener('blur', () => {
                if (input.value && input.dataset.rule !== 'select') setError(input, !validateField(input));
            });
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid')) setError(input, !validateField(input));
            });
            input.addEventListener('change', () => {
                if (input.dataset.rule === 'select' && input.classList.contains('is-invalid')) {
                    setError(input, !validateField(input));
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let firstInvalid = null;
            let valid = true;
            inputs.forEach((input) => {
                const ok = validateField(input);
                if (!ok && !firstInvalid) firstInvalid = input;
                if (!ok) valid = false;
            });
            if (!valid) {
                firstInvalid?.focus();
                return;
            }
            const btn = form.querySelector('[type="submit"]');
            const original = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = 'Sending…';
            // Static demo: simulate submission, then show success panel.
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = original;
                form.classList.add('hidden');
                const success = document.querySelector('[data-quote-success]');
                if (success) success.classList.remove('hidden');
            }, 900);
        });
    }

    if (dropzone && fileInput) {
        const isDark = dropzone.classList.contains('bg-white/5');
        const labelMain = isDark ? 'text-white' : 'text-ink';
        const labelSub = isDark ? 'text-white/60' : 'text-muted';
        const updateLabel = (file) => {
            if (!fileLabel) return;
            if (file) {
                fileLabel.innerHTML =
                    `<span class="${labelMain} font-semibold">${file.name}</span>
                     <span class="text-xs ${labelSub} block mt-0.5">${(file.size / 1024 / 1024).toFixed(2)} MB</span>`;
            } else {
                fileLabel.innerHTML =
                    `<span class="block font-semibold ${labelMain}">Upload Drawings / Files</span>
                     <span class="block text-xs ${labelSub} mt-1">(BOQ, Drawings, Documents)<br>Max file size: 10MB</span>`;
            }
        };
        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInput.click();
            }
        });
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (!file) return;
            const ext = file.name.split('.').pop().toLowerCase();
            if (!ACCEPT.includes(ext)) {
                alert('Unsupported file type. Please upload PDF, DOC, DOCX, XLS, XLSX, JPG, JPEG or PNG.');
                fileInput.value = '';
                updateLabel(null);
                return;
            }
            if (file.size > MAX_BYTES) {
                alert('File exceeds the 10MB maximum size.');
                fileInput.value = '';
                updateLabel(null);
                return;
            }
            updateLabel(file);
        });
        ['dragenter', 'dragover'].forEach((evt) =>
            dropzone.addEventListener(evt, (e) => {
                e.preventDefault();
                dropzone.classList.add('is-dragover');
            })
        );
        ['dragleave', 'drop'].forEach((evt) =>
            dropzone.addEventListener(evt, (e) => {
                e.preventDefault();
                dropzone.classList.remove('is-dragover');
            })
        );
        dropzone.addEventListener('drop', (e) => {
            const file = e.dataTransfer.files[0];
            if (!file) return;
            const transfer = new DataTransfer();
            transfer.items.add(file);
            fileInput.files = transfer.files;
            fileInput.dispatchEvent(new Event('change'));
        });
    }
})();