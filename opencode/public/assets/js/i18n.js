/* ============================================================
   MonAra — lightweight i18n (static preview)
   ------------------------------------------------------------
   Mirrors the Laravel lang/en + lang/ar structure used by the
   production CMS build. Keys map to [data-i18n] attributes.
   Toggling a language updates <html lang> / dir and swaps any
   [data-i18n] text. Works as a no-backend preview of the
   bilingual + RTL experience.
   ============================================================ */

const MONARA_TRANSLATIONS = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.clients': 'Clients',
        'nav.careers': 'Careers',
        'nav.contact': 'Contact Us',
        'cta.quote': 'Request A Quote',
        'hero.eyebrow': 'Building Value.',
        'hero.title': 'Delivering<br>Excellence.',
        'hero.subtitle': 'Professional Trading, Contracting & Integrated Services in Qatar',
        'hero.kw1': 'Trading',
        'hero.kw2': 'Contracting',
        'hero.kw3': 'Construction',
        'hero.kw4': 'Technical Services',
        'hero.cta1': 'Explore Our Services',
        'hero.cta2': 'View Projects',
        'trust.1': 'Qatar Based',
        'trust.1d': 'Local Expertise',
        'trust.2': 'Professional Team',
        'trust.2d': 'Skilled & Experienced',
        'trust.3': 'Quality Focused',
        'trust.3d': 'High Standards',
        'trust.4': 'Safety Driven',
        'trust.4d': 'HSE Commitment',
        'trust.5': 'Reliable Delivery',
        'trust.5d': 'On Time, Every Time',
        'about.eyebrow': 'About Monara',
        'about.title': 'Building Partnerships<br>That Last',
        'about.cta': 'Discover More',
        'services.eyebrow': 'Our Services',
        'services.title': 'What We Do',
        'services.all': 'All Services',
        'projects.eyebrow': 'Featured Projects',
        'projects.title': 'Our Recent Projects',
        'projects.all': 'View All Projects',
        'why.title': 'Why Choose<br>MonAra?',
        'clients.label': 'Trusted By Our Clients',
        'quote.title': 'Have A Project<br>In Mind?',
        'quote.cta': 'Request A Quotation',
        'quote.formTitle': 'Request A Quotation',
        'quote.submit': 'Submit Request',
        'footer.company': 'Company',
        'footer.quick': 'Quick Links',
        'footer.news': 'Newsletter',
        'footer.copyright': '© 2026 MonAra Trading Contracting & Services W.L.L. All Rights Reserved.',
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'من نحن',
        'nav.services': 'خدماتنا',
        'nav.projects': 'المشاريع',
        'nav.clients': 'العملاء',
        'nav.careers': 'الوظائف',
        'nav.contact': 'اتصل بنا',
        'cta.quote': 'اطلب عرض سعر',
        'hero.eyebrow': 'نبني القيمة.',
        'hero.title': 'نقدم<br>التميّز<span class="hero-dot">.</span>',
        'hero.subtitle': 'خدمات تداول ومقاولات وخدمات متكاملة احترافية في قطر',
        'hero.kw1': 'التداول',
        'hero.kw2': 'المقاولات',
        'hero.kw3': 'الإنشاءات',
        'hero.kw4': 'الخدمات الفنية',
        'hero.cta1': 'استكشف خدماتنا',
        'hero.cta2': 'عرض المشاريع',
        'trust.1': 'مقرّنا قطر',
        'trust.1d': 'خبرة محلية',
        'trust.2': 'فريق محترف',
        'trust.2d': 'مهارة وتجربة',
        'trust.3': 'الجودة أولاً',
        'trust.3d': 'معايير عالية',
        'trust.4': 'السلامة',
        'trust.4d': 'التزام بالصحة والسلامة',
        'trust.5': 'التسليم الموثوق',
        'trust.5d': 'في الموعد دائماً',
        'about.eyebrow': 'عن منارة',
        'about.title': 'شراكات<br>تدوم',
        'about.cta': 'اكتشف المزيد',
        'services.eyebrow': 'خدماتنا',
        'services.title': 'ماذا نقدم',
        'services.all': 'جميع الخدمات',
        'projects.eyebrow': 'مشاريع مختارة',
        'projects.title': 'أحدث مشاريعنا',
        'projects.all': 'عرض جميع المشاريع',
        'why.title': 'لماذا تختار<br>منارة؟',
        'clients.label': 'موثوقون من عملائنا',
        'quote.title': 'هل لديك مشروع<br>ببالك؟',
        'quote.cta': 'اطلب عرض سعر',
        'quote.formTitle': 'اطلب عرض سعر',
        'quote.submit': 'إرسال الطلب',
        'footer.company': 'الشركة',
        'footer.quick': 'روابط سريعة',
        'footer.news': 'النشرة الإخبارية',
        'footer.copyright': '© 2026 منارة للمقاولات والخدمات ش.م.م. جميع الحقوق محفوظة.',
    },
};

(() => {
    'use strict';

    const html = document.documentElement;
    const switchGroup = document.querySelector('[data-lang-switch]');
    if (!switchGroup) return;

    const apply = (lang) => {
        const dict = MONARA_TRANSLATIONS[lang] || MONARA_TRANSLATIONS.en;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key] != null) el.innerHTML = dict[key];
        });
        switchGroup.querySelectorAll('[data-lang]').forEach((btn) => {
            const active = btn.dataset.lang === lang;
            btn.setAttribute('aria-pressed', String(active));
            btn.classList.toggle('text-orange', active);
            btn.classList.toggle('text-white/80', !active);
        });
    };

    const saved = localStorage.getItem('monara-lang') || 'en';
    apply(saved);

    switchGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-lang]');
        if (!btn) return;
        apply(btn.dataset.lang);
        localStorage.setItem('monara-lang', btn.dataset.lang);
    });
})();