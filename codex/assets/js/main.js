(() => {
    'use strict';

    const arabicTranslations = {
        'Skip to main content': 'انتقل إلى المحتوى الرئيسي',
        'Doha, Qatar': 'الدوحة، قطر',
        'Home': 'الرئيسية',
        'About Us': 'من نحن',
        'Services': 'الخدمات',
        'Projects': 'المشاريع',
        'Clients': 'العملاء',
        'Careers': 'الوظائف',
        'Contact Us': 'اتصل بنا',
        'REQUEST A QUOTE': 'اطلب عرض سعر',
        'TRADING CONTRACTING & SERVICES': 'للتجارة والمقاولات والخدمات',
        'TRADING': 'التجارة',
        'CONTRACTING': 'المقاولات',
        'CONSTRUCTION': 'الإنشاءات',
        'TECHNICAL SERVICES': 'الخدمات الفنية',
        'EXPLORE OUR SERVICES': 'استكشف خدماتنا',
        'VIEW PROJECTS': 'عرض المشاريع',
        'Qatar Based': 'شركة قطرية',
        'Local Expertise': 'خبرة محلية',
        'Professional Team': 'فريق محترف',
        'Skilled & Experienced': 'ماهر وذو خبرة',
        'Quality Focused': 'نهتم بالجودة',
        'High Standards': 'معايير عالية',
        'Safety Driven': 'السلامة أولاً',
        'HSE Commitment': 'التزام بالصحة والسلامة',
        'Reliable Delivery': 'تسليم موثوق',
        'On Time, Every Time': 'في الموعد، دائماً',
        '15+': '+15',
        'YEARS OF': 'سنة من',
        'EXPERIENCE': 'الخبرة',
        'ABOUT MONARA': 'عن مونارا',
        'Building Partnerships': 'نبني شراكات',
        'That Last': 'تدوم طويلاً',
        'MonAra Trading Contracting & Services W.L.L. is a Qatar-based company providing a wide range of trading, contracting and integrated services. We are committed to quality project delivery with a focus on safety, reliability and client satisfaction.': 'مونارا للتجارة والمقاولات والخدمات ذ.م.م. شركة قطرية تقدم مجموعة واسعة من خدمات التجارة والمقاولات والخدمات المتكاملة. نلتزم بتنفيذ المشاريع بجودة عالية مع التركيز على السلامة والموثوقية ورضا العملاء.',
        'Our Vision': 'رؤيتنا',
        'To be a leading and trusted partner in Qatar.': 'أن نكون شريكاً رائداً وموثوقاً في قطر.',
        'Our Mission': 'رسالتنا',
        'Deliver quality services with integrity and excellence.': 'تقديم خدمات عالية الجودة بنزاهة وتميّز.',
        'Our Values': 'قيمنا',
        'Quality, safety, integrity and teamwork.': 'الجودة والسلامة والنزاهة والعمل الجماعي.',
        'Why MonAra': 'لماذا مونارا',
        'Client-focused, dependable and flexible.': 'نهتم بالعميل ونتميز بالمرونة والاعتمادية.',
        'DISCOVER MORE': 'اكتشف المزيد',
        'OUR SERVICES': 'خدماتنا',
        'What We Do': 'ماذا نقدم',
        'Contracting': 'المقاولات',
        'General contracting for residential, commercial and industrial projects.': 'مقاولات عامة للمشاريع السكنية والتجارية والصناعية.',
        'Trading': 'التجارة',
        'Supplying quality materials, equipment and industrial products.': 'توريد مواد ومعدات ومنتجات صناعية عالية الجودة.',
        'Civil Works': 'الأعمال المدنية',
        'Civil construction, structural works and infrastructure development.': 'الإنشاءات المدنية والأعمال الهيكلية وتطوير البنية التحتية.',
        'MEP Services': 'خدمات الميكانيكا والكهرباء والسباكة',
        'Mechanical, electrical and plumbing solutions with expert installation.': 'حلول ميكانيكية وكهربائية وسباكة مع تركيب احترافي.',
        'Maintenance': 'الصيانة',
        'Comprehensive maintenance and facility management services.': 'خدمات شاملة للصيانة وإدارة المرافق.',
        'Other Services': 'خدمات أخرى',
        'A wide range of integrated support services for your business.': 'مجموعة واسعة من خدمات الدعم المتكاملة لأعمالك.',
        'EXPLORE': 'استكشف',
        'FEATURED PROJECTS': 'مشاريع مميزة',
        'Our Recent Projects': 'أحدث مشاريعنا',
        'VIEW ALL PROJECTS': 'عرض جميع المشاريع',
        'COMPLETED': 'مكتمل',
        'ONGOING': 'قيد التنفيذ',
        'Luxury Villa Project': 'مشروع فيلا فاخرة',
        'Residential': 'سكني',
        'Commercial Building': 'مبنى تجاري',
        'Commercial': 'تجاري',
        'Mosque Construction': 'إنشاء مسجد',
        'Al Wakrah, Qatar': 'الوكرة، قطر',
        'Religious': 'ديني',
        'Industrial Facility': 'منشأة صناعية',
        'Mesaieed, Qatar': 'مسيعيد، قطر',
        'Industrial': 'صناعي',
        'WHY CHOOSE': 'لماذا تختار',
        'MONARA?': 'مونارا؟',
        'Quality First': 'الجودة أولاً',
        'We deliver the highest quality in every project.': 'نقدم أعلى مستويات الجودة في كل مشروع.',
        'Experienced Team': 'فريق ذو خبرة',
        'Skilled professionals with industry expertise.': 'متخصصون مهرة بخبرة واسعة في القطاع.',
        'We complete projects on time, every time.': 'ننجز المشاريع في الموعد، في كل مرة.',
        'Safety Commitment': 'الالتزام بالسلامة',
        'Safety is our priority in everything we do.': 'السلامة أولويتنا في كل ما نقوم به.',
        'Cost Effective': 'حلول اقتصادية',
        'Smart solutions with maximum value.': 'حلول ذكية تحقق أقصى قيمة.',
        'Client Focused': 'العميل محور اهتمامنا',
        'We build long-term partnerships.': 'نبني شراكات طويلة الأمد.',
        'COMPANY PROFILE': 'ملف الشركة',
        'Download our profile and know more about MonAra.': 'حمّل ملفنا وتعرّف أكثر على مونارا.',
        'DOWNLOAD PDF': 'تحميل PDF',
        'TRUSTED BY OUR CLIENTS': 'موثوقون لدى عملائنا',
        'Demonstration logo placeholders — client names to be confirmed.': 'شعارات تجريبية مؤقتة — سيتم تأكيد أسماء العملاء.',
        'HAVE A PROJECT': 'هل لديك مشروع',
        'IN MIND?': 'في ذهنك؟',
        'Tell us about your project and our team will get back to you.': 'أخبرنا عن مشروعك وسيتواصل معك فريقنا.',
        'REQUEST A QUOTATION': 'اطلب عرض سعر',
        'Full Name': 'الاسم الكامل',
        'Company Name': 'اسم الشركة',
        'Email Address': 'البريد الإلكتروني',
        'Phone Number': 'رقم الهاتف',
        'Service Required': 'الخدمة المطلوبة',
        'Select a service': 'اختر خدمة',
        'Project Location': 'موقع المشروع',
        'Project Details / Message': 'تفاصيل المشروع / الرسالة',
        'Upload Drawings / Files': 'رفع المخططات / الملفات',
        '(BOQ, Drawings, Documents)': '(جداول الكميات، المخططات، المستندات)',
        'Max file size: 10MB': 'الحد الأقصى لحجم الملف: 10 ميجابايت',
        'CHOOSE FILE': 'اختر ملفاً',
        'SUBMIT REQUEST': 'إرسال الطلب',
        'Professional trading, contracting, construction and integrated services in Qatar.': 'خدمات احترافية في التجارة والمقاولات والإنشاءات والخدمات المتكاملة في قطر.',
        'Company': 'الشركة',
        'MonAra Trading Contracting & Services W.L.L.': 'مونارا للتجارة والمقاولات والخدمات ذ.م.م.',
        'Address': 'العنوان',
        'B Ring Road': 'طريق الدائري الثاني',
        'Retaj Building 185': 'مبنى رتاج 185',
        'Floor 3, Office 311': 'الطابق 3، مكتب 311',
        'Quick Links': 'روابط سريعة',
        'Contact': 'تواصل معنا',
        '© 2026 MonAra Trading Contracting & Services W.L.L. All Rights Reserved.': '© 2026 مونارا للتجارة والمقاولات والخدمات ذ.م.م. جميع الحقوق محفوظة.',
        'Privacy Policy': 'سياسة الخصوصية',
        'Terms & Conditions': 'الشروط والأحكام'
    };

    const validationMessages = {
        en: {
            required: 'This field is required.',
            email: 'Enter a valid email address.',
            fileType: 'This file type is not supported.',
            fileSize: 'The selected file must be 10MB or smaller.',
            review: 'Please review the highlighted fields.',
            sending: 'SENDING…',
            success: 'Thank you. Your request has been validated and is ready to connect to a backend endpoint.',
            chooseFile: 'CHOOSE FILE'
        },
        ar: {
            required: 'هذا الحقل مطلوب.',
            email: 'يرجى إدخال بريد إلكتروني صحيح.',
            fileType: 'نوع الملف المحدد غير مدعوم.',
            fileSize: 'يجب ألا يتجاوز حجم الملف 10 ميجابايت.',
            review: 'يرجى مراجعة الحقول المحددة.',
            sending: 'جارٍ الإرسال…',
            success: 'شكراً لك. تم التحقق من طلبك وهو جاهز للربط بنظام الاستقبال.',
            chooseFile: 'اختر ملفاً'
        }
    };

    let currentLanguage = 'en';

    const body = document.body;
    const header = document.querySelector('#site-header');
    const menu = document.querySelector('#mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    const backToTop = document.querySelector('.back-to-top');
    const backToTopBlockers = new Set();

    const setMenu = (isOpen) => {
        menu.classList.toggle('open', isOpen);
        menuBackdrop.classList.toggle('open', isOpen);
        body.classList.toggle('menu-open', isOpen);
        menu.setAttribute('aria-hidden', String(!isOpen));
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) menuClose.focus();
    };

    menuToggle.addEventListener('click', () => setMenu(true));
    menuClose.addEventListener('click', () => setMenu(false));
    menuBackdrop.addEventListener('click', () => setMenu(false));
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
    });

    const updateScrollState = () => {
        const scrolled = window.scrollY > 20;
        header.classList.toggle('scrolled', scrolled);
        backToTop.classList.toggle('visible', window.scrollY > 700 && backToTopBlockers.size === 0);
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const backToTopObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) backToTopBlockers.add(entry.target);
            else backToTopBlockers.delete(entry.target);
        });
        updateScrollState();
    }, { threshold: 0.01 });
    document.querySelectorAll('.quote-section, .footer').forEach((section) => backToTopObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    document.querySelectorAll('.reveal:not(.visible)').forEach((element) => revealObserver.observe(element));

    const navLinks = [...document.querySelectorAll('.desktop-nav a')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const sectionObserver = new IntersectionObserver((entries) => {
        const current = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`));
    }, { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.2] });
    sections.forEach((section) => sectionObserver.observe(section));

    const translatableTextNodes = [];
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const value = node.nodeValue.trim();
            if (!value || node.parentElement?.closest('svg, script, style, noscript')) return NodeFilter.FILTER_REJECT;
            if (!arabicTranslations[value]) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    while (textWalker.nextNode()) {
        translatableTextNodes.push({ node: textWalker.currentNode, english: textWalker.currentNode.nodeValue.trim() });
    }

    const languageButtons = document.querySelectorAll('[data-lang]');
    const translate = (language) => {
        const isArabic = language === 'ar';
        currentLanguage = language;
        document.documentElement.lang = language;
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        document.title = isArabic
            ? 'مونارا | للتجارة والمقاولات والخدمات المتكاملة'
            : 'MonAra | Trading, Contracting & Integrated Services';
        document.querySelector('meta[name="description"]').content = isArabic
            ? 'مونارا للتجارة والمقاولات والخدمات ذ.م.م. تقدم خدمات التجارة والمقاولات والإنشاءات والخدمات المتكاملة في قطر.'
            : 'MonAra Trading Contracting & Services W.L.L. delivers trading, contracting, construction and integrated services in Qatar.';

        translatableTextNodes.forEach(({ node, english }) => {
            const leadingSpace = node.nodeValue.match(/^\s*/)?.[0] ?? '';
            const trailingSpace = node.nodeValue.match(/\s*$/)?.[0] ?? '';
            node.nodeValue = `${leadingSpace}${isArabic ? arabicTranslations[english] : english}${trailingSpace}`;
        });
        document.querySelectorAll('[data-en][data-ar]').forEach((element) => {
            element.textContent = element.dataset[language];
        });
        languageButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === language));
        menuToggle.setAttribute('aria-label', isArabic ? 'فتح قائمة التنقل' : 'Open navigation');
        menuClose.setAttribute('aria-label', isArabic ? 'إغلاق قائمة التنقل' : 'Close navigation');
        backToTop.setAttribute('aria-label', isArabic ? 'العودة إلى الأعلى' : 'Back to top');
        document.querySelector('.brand')?.setAttribute('aria-label', isArabic ? 'الصفحة الرئيسية لمونارا' : 'MonAra home');
        document.querySelector('.profile-card')?.setAttribute('aria-label', isArabic ? 'تحميل ملف الشركة المؤقت' : 'Download placeholder company profile');
        localStorage.setItem('monara-language', language);
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
    };
    languageButtons.forEach((button) => button.addEventListener('click', () => translate(button.dataset.lang)));
    const savedLanguage = localStorage.getItem('monara-language');
    if (savedLanguage === 'ar') translate('ar');

    const form = document.querySelector('#quote-form');
    const fileInput = document.querySelector('#attachment');
    const fileName = document.querySelector('#file-name');
    const formStatus = form.querySelector('.form-status');
    const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png'];
    const maxFileBytes = 10 * 1024 * 1024;

    const setFieldError = (control, message = '') => {
        const wrapper = control.closest('.field, .upload-field');
        if (!wrapper) return;
        wrapper.classList.toggle('invalid', Boolean(message));
        const error = wrapper.querySelector('.error');
        if (error) error.textContent = message;
        control.setAttribute('aria-invalid', String(Boolean(message)));
    };

    const validateControl = (control) => {
        let message = '';
        const value = control.value.trim();
        if (control.required && !value) message = validationMessages[currentLanguage].required;
        if (!message && control.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = validationMessages[currentLanguage].email;
        if (!message && control === fileInput && control.files[0]) {
            const file = control.files[0];
            const extension = file.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) message = validationMessages[currentLanguage].fileType;
            else if (file.size > maxFileBytes) message = validationMessages[currentLanguage].fileSize;
        }
        setFieldError(control, message);
        return !message;
    };

    form.querySelectorAll('input, select, textarea').forEach((control) => {
        control.addEventListener('blur', () => validateControl(control));
        control.addEventListener('input', () => {
            if (control.closest('.invalid')) validateControl(control);
        });
    });

    fileInput.addEventListener('change', () => {
        fileName.textContent = fileInput.files[0] ? fileInput.files[0].name : validationMessages[currentLanguage].chooseFile;
        validateControl(fileInput);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = '';
        const controls = [...form.querySelectorAll('input, select, textarea')];
        const isValid = controls.map(validateControl).every(Boolean);
        if (!isValid) {
            const firstError = form.querySelector('.invalid input, .invalid select, .invalid textarea');
            firstError?.focus();
            formStatus.style.color = '#ff8b71';
            formStatus.textContent = validationMessages[currentLanguage].review;
            return;
        }

        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.textContent = validationMessages[currentLanguage].sending;
        window.setTimeout(() => {
            formStatus.style.color = '#8de0a8';
            formStatus.textContent = validationMessages[currentLanguage].success;
            form.reset();
            fileName.textContent = validationMessages[currentLanguage].chooseFile;
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }, 650);
    });

    document.addEventListener('languagechange', () => {
        formStatus.textContent = '';
        fileName.textContent = fileInput.files[0] ? fileInput.files[0].name : validationMessages[currentLanguage].chooseFile;
        form.querySelectorAll('.invalid input, .invalid select, .invalid textarea').forEach(validateControl);
    });

    document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener('click', (event) => event.preventDefault());
    });
})();
