/**
 * MonAra V3 — Main JavaScript
 * Editorial design interactions
 */
(function () {
    'use strict';

    // ─── Sticky header ───────────────────────────────────────
    const header = document.getElementById('siteHeader');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ─── Mobile navigation ───────────────────────────────────
    const toggle = document.querySelector('[data-mobile-toggle]');
    const nav = document.getElementById('mobileNav');
    const closeBtn = document.querySelector('[data-mobile-close]');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen);
            nav.setAttribute('aria-hidden', !isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                nav.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            });
        }

        nav.querySelectorAll('.mobile-nav__link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                nav.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            });
        });
    }

    // ─── Active navigation ───────────────────────────────────
    const page = document.documentElement.dataset.page;
    if (page) {
        document.querySelectorAll('.nav-link').forEach(a => {
            const href = a.getAttribute('href');
            if (href && href.includes('/' + page + '/')) {
                a.classList.add('is-active');
            }
        });
    }

    // ─── Reveal on scroll ────────────────────────────────────
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // ─── Count-up animation ──────────────────────────────────
    const statNums = document.querySelectorAll('.stat-num[data-count]');
    if (statNums.length && 'IntersectionObserver' in window) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const suffix = el.dataset.suffix || '';
                    const duration = 2000;
                    const start = performance.now();

                    const step = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        el.textContent = current + suffix;
                        if (progress < 1) requestAnimationFrame(step);
                    };

                    requestAnimationFrame(step);
                    countObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNums.forEach(el => countObserver.observe(el));
    }

    // ─── Form validation ─────────────────────────────────────
    document.querySelectorAll('form[novalidate]').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;

            this.querySelectorAll('[required]').forEach(field => {
                const error = field.parentElement.querySelector('.form-error');
                const isValid = field.value.trim() !== '' &&
                    (field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value));

                field.classList.toggle('is-invalid', !isValid);
                field.setAttribute('aria-invalid', !isValid);
                if (error) error.classList.toggle('is-visible', !isValid);

                if (!isValid) valid = false;
            });

            if (valid) {
                const btn = this.querySelector('[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<span class="btn-arrow">✓</span> SENT';
                btn.disabled = true;
                btn.classList.add('bg-green-600', 'border-green-600');

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-600', 'border-green-600');
                    this.reset();
                }, 3000);
            }
        });

        form.querySelectorAll('[required]').forEach(field => {
            field.addEventListener('blur', function () {
                const error = this.parentElement.querySelector('.form-error');
                const isValid = this.value.trim() !== '' &&
                    (this.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value));

                this.classList.toggle('is-invalid', !isValid && this.value.trim() !== '');
                this.setAttribute('aria-invalid', !isValid && this.value.trim() !== '');
                if (error) error.classList.toggle('is-visible', !isValid && this.value.trim() !== '');
            });
        });
    });

    // ─── File dropzone ───────────────────────────────────────
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');

    if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());

        ['dragenter', 'dragover'].forEach(event => {
            dropzone.addEventListener(event, (e) => {
                e.preventDefault();
                dropzone.classList.add('is-dragover');
            });
        });

        ['dragleave', 'drop'].forEach(event => {
            dropzone.addEventListener(event, (e) => {
                e.preventDefault();
                dropzone.classList.remove('is-dragover');
            });
        });

        dropzone.addEventListener('drop', (e) => {
            fileInput.files = e.dataTransfer.files;
            updateFileList(fileInput.files);
        });

        fileInput.addEventListener('change', () => {
            updateFileList(fileInput.files);
        });

        function updateFileList(files) {
            const list = dropzone.querySelector('.file-list');
            if (list) list.remove();

            if (files.length > 0) {
                const div = document.createElement('div');
                div.className = 'file-list mt-3 text-sm text-muted';
                Array.from(files).forEach(f => {
                    div.innerHTML += `<p class="flex items-center gap-2"><span class="text-brand">📎</span> ${f.name}</p>`;
                });
                dropzone.appendChild(div);
            }
        }
    }

    // ─── Parallax (subtle) ───────────────────────────────────
    const heroMedia = document.querySelector('.hero__media img');
    if (heroMedia && window.matchMedia('(min-width: 768px)').matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroMedia.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
        }, { passive: true });
    }

})();
