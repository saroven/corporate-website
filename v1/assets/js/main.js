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
        'Terms & Conditions': 'الشروط والأحكام',
        'ABOUT': 'عن',
        'MONARA': 'مونارا',
        'WHO WE ARE': 'من نحن',
        'Skilled Workforce': 'قوة عمل ماهرة',
        'ISO Certified': 'معتمد ISO',
        'Quality management systems in compliance with international standards.': 'أنظمة إدارة الجودة المتوافقة مع المعايير الدولية.',
        'A team of experienced professionals across all disciplines.': 'فريق من المحترفين ذوي الخبرة في جميع التخصصات.',
        'PROJECTS COMPLETED': 'مشاريع منجزة',
        'TEAM MEMBERS': 'أعضاء الفريق',
        'TRUSTED CLIENTS': 'عملاء موثوقون',
        'OUR FOUNDATION': 'أساسنا',
        'Vision, Mission & Values': 'رؤيتنا ورسالتنا وقيمنا',
        'Quality': 'الجودة',
        'Safety': 'السلامة',
        'Integrity': 'النزاهة',
        'Teamwork': 'العمل الجماعي',
        'We uphold the highest standards in every project we undertake.': 'نحافظ على أعلى المعايير في كل مشروع ننفذه.',
        'Safety is our priority. We maintain strict HSE protocols on every site.': 'السلامة أولويتنا. نحافظ على بروتوكول صارمة للصحة والسلامة في كل موقع.',
        'We operate with honesty, transparency and ethical standards in all dealings.': 'نتعامل بالصدق والشفافية والمعايير الأخلاقية في جميع تعاملاتنا.',
        'Collaboration and mutual respect drive our success across every project.': 'التعاون والاحترام المتبادل يدفع نجاحنا في كل مشروع.',
        'OUR JOURNEY': 'رحلتنا',
        'Building a Legacy': 'نبني إرثاً',
        'Company Established': 'تأسيس الشركة',
        'MonAra Trading Contracting & Services W.L.L. was founded in Doha, Qatar, to provide integrated trading and contracting solutions.': 'تم تأسيس مونارا للتجارة والمقاولات والخدمات ذ.م.م. في الدوحة، قطر، لتقديم حلول متكاملة للتجارة والمقاولات.',
        'First Major Projects': 'أول المشاريع الكبرى',
        'Completed our first major residential and commercial projects, establishing a reputation for quality and reliability.': 'أنجزنا أول مشاريعنا الكبرى السكنية والتجارية، ورسخنا سمعة للجودة والموثوقية.',
        'ISO Certification': 'شهادة ISO',
        'Achieved ISO 9001 certification for quality management systems, reinforcing our commitment to international standards.': 'حصلنا على شهادة ISO 9001 لإدارة الجودة، مما يعزز التزامنا بالمعايير الدولية.',
        'Expanded Services': 'توسيع الخدمات',
        'Expanded our service portfolio to include MEP, maintenance and comprehensive integrated facility services.': 'وسّعنا نطاق خدماتنا ليشمل الكهرباء والميكانيكا والسباكة والصيانة والخدمات المتكاملة الشاملة.',
        'Continued Growth': 'استمرار النمو',
        'Continuing to support Qatar National Vision 2030 with capable teams and a growing portfolio of completed projects.': 'نواصل دعم رؤية قطر الوطنية 2030 بفرق مؤهلة ومحفظة مشاريع متنامية.',
        'READY TO BUILD SOMETHING GREAT?': 'جاهز لبناء شيء عظيم؟',
        "Let's Start Your Next Project": 'لنبدأ مشروعك القادم',
        'Partner with MonAra for innovative, high-quality and reliable trading, contracting and integrated services tailored to your vision.': 'شارك مونارا في تقديم حلول مبتكرة وعالية الجودة في التجارة والمقاولات والخدمات المتكاملة مصممة وفق رؤيتك.',
        'REQUEST A QUOTATION': 'اطلب عرض سعر',
        'HOME': 'الرئيسية',
        'OUR SERVICES': 'خدماتنا',
        'Full-Range Service Portfolio': 'محفظة خدمات شاملة',
        'Residential buildings and villas': 'مباني وفيلات سكنية',
        'Commercial complexes and offices': 'مجمعات ومكاتب تجارية',
        'Industrial facilities': 'منشآت صناعية',
        'Government and institutional projects': 'مشاريع حكومية ومؤسسية',
        'Construction materials and supplies': 'مواد ومستلزمات البناء',
        'Industrial equipment and machinery': 'معدات وآلات صناعية',
        'Safety and PPE equipment': 'معدات السلامة والحماية',
        'Specialized technical products': 'منتجات تقنية متخصصة',
        'Structural concrete works': 'أعمال خرسانية هيكلية',
        'Road and infrastructure': 'طرق وبنية تحتية',
        'Drainage and utility networks': 'شبكات الصرف والمرافق',
        'Earthworks and site preparation': 'أعمال ترابية وتجهيز المواقع',
        'HVAC systems installation': 'تركيب أنظمة التكييف',
        'Electrical works and power distribution': 'أعمال كهربائية وتوزيع الطاقة',
        'Plumbing and fire fighting systems': 'أنظمة سباكة وإطفاء حرائق',
        'Low current and IT infrastructure': 'تيار ضعف والبنية التحتية لتكنولوجيا المعلومات',
        'Preventive and corrective maintenance': 'صيانة وقائية وتصحيحية',
        'Facility management services': 'خدمات إدارة المرافق',
        'Building repair and renovation': 'إصلاح وتجديد المباني',
        'Annual maintenance contracts': 'عقود صيانة سنوية',
        'Project management and consultancy': 'إدارة المشاريع والاستشارات',
        'Interior design and fit-out': 'تصميم داخلي وتجهيز',
        'Landscaping and external works': 'تنسيق حدائق وأعمال خارجية',
        'Specialized technical services': 'خدمات تقنية متخصصة',
        'READY TO START?': 'جاهز للبدء؟',
        "Let's Discuss Your Project": 'دعنا نناقش مشروعك',
        'Contact us today to learn how our services can bring value to your next project.': 'تواصل معنا اليوم لتعرف كيف يمكن لخدماتنا أن تضيف قيمة لمشروعك القادم.',
        'OUR PROJECTS': 'مشاريعنا',
        'Featured Projects': 'مشاريع مميزة',
        'VIEW ALL PROJECTS': 'عرض جميع المشاريع',
        'OUR CLIENTS': 'عملاؤنا',
        'Trusted Partners': 'شركاء موثوقون',
        'What Our Clients Say': 'ماذا يقول عملاؤنا',
        'CAREERS': 'الوظائف',
        'Why Work With MonAra': 'لماذا تعمل مع مونارا',
        'Growth Opportunities': 'فرص النمو',
        'Safety Culture': 'ثقافة السلامة',
        'Team Spirit': 'روح الفريق',
        'Competitive Benefits': 'مزايا تنافسية',
        'Learning & Development': 'التعلم والتطوير',
        'Open Positions': 'الوظائف الشاغرة',
        'Project Engineer': 'مهندس مشاريع',
        'Site Supervisor': 'مشرف موقع',
        'MEP Engineer': 'مهندس كهرباء وميكانيكا',
        'Safety Officer': 'مسؤول سلامة',
        'CONSTRUCTION': 'الإنشاءات',
        'Doha, Qatar': 'الدوحة، قطر',
        'Full Time': 'دوام كامل',
        'CONTACT US': 'اتصل بنا',
        'Get in Touch': 'تواصل معنا',
        'Send us a message': 'أرسل لنا رسالة',
        'Your Name': 'اسمك',
        'Company Name': 'اسم الشركة',
        'Email Address': 'البريد الإلكتروني',
        'Phone Number': 'رقم الهاتف',
        'Service Required': 'الخدمة المطلوبة',
        'Select a service': 'اختر خدمة',
        'Your Message': 'رسالتك',
        'SEND MESSAGE': 'إرسال الرسالة',
        'Our Address': 'عنواننا',
        'Call Us': 'اتصل بنا',
        'Email Us': 'راسلنا',
        'Working Hours': 'ساعات العمل',
        'Sunday - Thursday: 8:00 AM - 5:00 PM': 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',
        'Friday: Closed': 'الجمعة: مغلق',
        'Comprehensive Solutions for Every Project': 'حلول شاملة ومتكاملة لكافة المشاريع',
        'WHAT WE DO': 'ماذا نقدم',
        'OUR PORTFOLIO': 'محفظة مشاريعنا',
        'WHY WORK WITH MONARA': 'لماذا تعمل مع مونارا',
        'Grow Your Career With Us': 'طوّر مسيرتك المهنية معنا',
        'OPEN POSITIONS': 'الوظائف الشاغرة',
        'Join Our Team': 'انضم إلى فريقنا',
        'APPLY NOW': 'قدّم الآن',
        'ENGINEERING': 'الهندسة',
        'SITE OPERATIONS': 'عمليات الموقع',
        'HSE': 'الصحة والسلامة',
        'Full-Time': 'دوام كامل',
        'Send Us a Message': 'أرسل لنا رسالة',
        'Send us a message': 'أرسل لنا رسالة',
        'Luxury Villa': 'فيلا فاخرة',
        'West Bay Lagoon, Doha': 'لاغون الخليج الغربي، الدوحة',
        'Al Sadd, Doha': 'السد، الدوحة',
        'Industrial Area, Doha': 'المنطقة الصناعية، الدوحة',
        'Building Strong Client Relationships': 'نبني علاقات شراكة قوية مع عملائنا',
        'TESTIMONIALS': 'آراء العملاء',
        'What Our Clients Say': 'ماذا يقول عملاؤنا',
        'Ahmed Al-Thani': 'أحمد آل ثاني',
        'Fatima Al-Mohannadi': 'فاطمة المهندي',
        'Mohammed Al-Kubaisi': 'محمد الكبيسي',
        'Qatar Holdings — Project Director': 'قطر القابضة — مدير المشاريع',
        'UDC Development — Construction Manager': 'الشركة المتحدة للتنمية — مدير الإنشاءات',
        'AlMaha Group — Facilities Director': 'مجموعة المها — مدير المرافق',
        'MonAra delivered our commercial project on time and to the highest standard. Their professionalism and attention to detail were exceptional throughout the entire process.': 'نفذت مونارا مشروعنا التجاري في الموعد المحدد وبأعلى المعايير. كانت احترافيتهم واهتمامهم بالتفاصيل استثنائياً طوال فترة المشروع.',
        'We have worked with MonAra on multiple projects and they consistently exceed our expectations. Their team is reliable, skilled and always committed to quality delivery.': 'عملنا مع مونارا في عدة مشاريع ودائماً ما تفوق توقعاتنا. فريقهم موثوق وماهر وملتزم بتقديم أعلى مستويات الجودة.',
        'The maintenance services provided by MonAra have been outstanding. They keep our facilities running smoothly and their response time is always impressive.': 'خدمات الصيانة التي تقدمها مونارا متميزة للغاية. يضمنون سير العمل في مرافقنا بسلاسة وسرعة استجابتهم مبهرة.',
        'Manage and coordinate construction projects from inception to completion, ensuring quality and timely delivery.': 'إدارة وتنسيق مشاريع الإنشاءات من البداية حتى التسليم، مع ضمان الجودة والالتزام بالموعد.',
        'Oversee daily site operations, manage work crews and ensure safety and quality standards are maintained.': 'الإشراف على العمليات اليومية في الموقع وإدارة فرق العمل وضمان تطبيق معايير السلامة والجودة.',
        'Design and oversee mechanical, electrical and plumbing installations for building projects.': 'تصميم والإشراف على تركيبات الميكانيكا والكهرباء والسباكة لمشاريع المباني.',
        'Implement and monitor health, safety and environmental protocols across all project sites.': 'تطبيق ومتابعة بروتوكولات الصحة والسلامة والبيئة في جميع مواقع المشاريع.',
        'We take pride in the long-standing relationships we have built with our clients. From government entities to leading private sector organizations, our portfolio of trusted partners reflects our commitment to quality, reliability and professional excellence. Every project we undertake is an opportunity to strengthen these partnerships and exceed expectations.': 'نفخر بالعلاقات طويلة الأمد التي بنيناها مع عملائنا. من الجهات الحكومية إلى كبرى شركات القطاع الخاص، تعكس محفظة شركائنا الموثوقين التزامنا بالجودة والموثوقية والتميز المهني. كل مشروع ننفذه يمثل فرصة لتعزيز هذه الشراكات وتجاوز التوقعات.',
        'We deliver end-to-end contracting services for residential, commercial and industrial projects. From planning to handover, our experienced team ensures every detail meets the highest standards of quality and safety.': 'نقدم خدمات مقاولات شاملة للمشاريع السكنية والتجارية والصناعية من التخطيط إلى التسليم بأعلى معايير الجودة والسلامة.',
        'MonAra supplies a wide range of construction materials, equipment and industrial products. We source from trusted global manufacturers to deliver competitive pricing and reliable supply chains.': 'توفر مونارا مجموعة واسعة من مواد البناء والمعدات والمنتجات الصناعية من موردين عالميين موثوقين بأسعار تنافسية.',
        'Our civil engineering team handles infrastructure and construction projects with precision. We specialize in earthworks, road construction and structural works that form the backbone of any development.': 'يتولى فريق الهندسة المدنية لدينا مشاريع البنية التحتية والإنشاءات بدقة عالية، متخصصين في أعمال الحفر وتسوية الأراضي وبناء الهياكل.',
        'We provide complete mechanical, electrical and plumbing solutions for all building types. Our MEP division ensures systems are designed, installed and maintained to the highest performance standards.': 'نقدم حلولاً متكاملة للأعمال الميكانيكية والكهربائية والسباكة لجميع أنواع المباني وفق أعلى معايير الأداء.',
        'Our maintenance services keep your facilities running at peak performance. We offer preventive and corrective maintenance programs tailored to protect your investment and extend asset lifecycles.': 'تحافظ خدمات الصيانة لدينا على عمل مرافقك بأعلى كفاءة عبر برامج صيانة وقائية وعلاجية مخصصة لحماية أصولك.',
        'Beyond our core offerings, MonAra provides specialized services to meet diverse project requirements. We adapt to unique challenges and deliver creative solutions that add value to every engagement.': 'إلى جانب خدماتنا الأساسية، تقدم مونارا حلولاً متخصصة لتلبية متطلبات المشاريع المتنوعة والتكيف مع التحديات لإضافة قيمة حقيقية.',
        'General Contracting': 'مقاولات عامة',
        'Design & Build': 'تصميم وبناء',
        'Project Management': 'إدارة المشاريع',
        'Fit-out & Finishing': 'تجهيز وتشطيبات',
        'Building Materials Supply': 'توريد مواد البناء',
        'Equipment Trading': 'تجارة المعدات',
        'Industrial Products': 'منتجات صناعية',
        'Procurement Solutions': 'حلول التوريد',
        'Earthworks & Excavation': 'أعمال ترابية وحفريات',
        'Road & Infrastructure': 'طرق وبنية تحتية',
        'Structural Works': 'أعمال إنشائية',
        'Concrete Works': 'أعمال خرسانية',
        'Electrical Systems': 'أنظمة كهربائية',
        'Mechanical Installations': 'تركيبات ميكانيكية',
        'Plumbing & Drainage': 'سباكة وشبكات صرف',
        'HVAC Solutions': 'حلول التكييف والتهوية',
        'Preventive Maintenance': 'صيانة وقائية',
        'Corrective Maintenance': 'صيانة علاجية',
        'Facility Management': 'إدارة المرافق',
        'Asset Lifecycle Support': 'دعم دورة حياة الأصول',
        'Consulting & Advisory': 'استشارات وتوجيه',
        'Logistics Support': 'دعم لوجستي',
        'Specialized Projects': 'مشاريع متخصصة',
        'Custom Solutions': 'حلول مخصصة',
        'ALL PROJECTS': 'جميع المشاريع',
        'RESIDENTIAL': 'سكني',
        'COMMERCIAL': 'تجاري',
        'RELIGIOUS': 'ديني',
        'INDUSTRIAL': 'صناعي',
        'Corporate Headquarters': 'المقر الرئيسي للشركة',
        'Lusail Marina, Qatar': 'مارينا لوسيل، قطر',
        'Residential Compound': 'مجمع سكني فاخر',
        'The Pearl, Qatar': 'اللؤلؤة، قطر',
        'Explore a curated selection of residential, commercial, religious and industrial developments delivered with uncompromising quality across Qatar.': 'استكشف مجموعة مختارة من المشاريع السكنية والتجارية والدينية والصناعية المنفذة بأعلى مستويات الجودة في قطر.',
        'HOW WE WORK': 'كيف نعمل',
        'Our Execution Methodology': 'منهجية التنفيذ لدينا',
        'From concept feasibility to long-term facility care, our structured four-phase delivery framework guarantees quality, precision and safety at every stage.': 'من دراسة الجدوى المبدئية إلى رعاية المرافق على المدى الطويل، يضمن إطار عملنا الرباعي الجودة والدقة والسلامة في كل مرحلة.',
        'Consultation & BOQ': 'الاستشارة وجداول الكميات',
        'Detailed requirement analysis, technical feasibility review and transparent Bill of Quantities preparation.': 'تحليل متطلبات المشروع ودراسة الجدوى الفنية وإعداد جداول كميات دقيقة وشفافة.',
        'Engineering & Planning': 'الهندسة والتخطيط',
        'Comprehensive architectural, civil and MEP design integration with optimized construction timelines.': 'تكامل التصاميم المعمارية والمدنية والكهروميكانيكية مع جداول زمنية دقيقة للتنفيذ.',
        'Execution & QA/QC': 'التنفيذ وضمان الجودة',
        'Rigorous on-site project management adhering to ISO 9001 quality audits and stringent HSE protocols.': 'إدارة مشاريع صارمة في الموقع وفق تدقيق الجودة ISO 9001 وبروتوكولات السلامة الصارمة.',
        'Handover & Warranty': 'التسليم والضمان',
        'Seamless authority approvals, client handover, documentation and continuous preventive maintenance support.': 'اعتمادات الجهات الرسمية والتسليم النهائي للمشروع والتوثيق مع دعم الصيانة الوقائية المستمرة.',
        'ISO 9001 Certified': 'معتمد ISO 9001',
        'International quality management protocols benchmarked across all contracting operations.': 'بروتوكولات دولية لإدارة الجودة مطبقة في جميع عمليات المقاولات.',
        'HSE Zero-Harm Policy': 'سياسة السلامة بدون حوادث',
        'Strict Qatar Construction Specifications (QCS) safety compliance for zero-incident project sites.': 'التزام صارم بمواصفات قطر للإنشاءات (QCS) لضمان بيئة عمل آمنة خالية من الحوادث.',
        'On-Time Guarantee': 'ضمان الالتزام بالمواعيد',
        'Robust supply chain network ensuring timely milestone delivery without compromising craftsmanship.': 'شبكة توريد قوية تضمن تسليم المراحل في المواعيد المحددة دون المساس بدقة التنفيذ.',
        'FREQUENTLY ASKED QUESTIONS': 'الأسئلة الشائعة',
        'Frequently Asked Questions': 'الأسئلة الأكثر شيوعاً',
        'Find prompt answers to common inquiries regarding our services, tendering procedures and project execution capabilities.': 'تعرف على إجابات سريعة للأسئلة الشائعة حول خدماتنا وإجراءات المناقصات وقدرات تنفيذ المشاريع.',
        'What scale and types of projects does MonAra handle in Qatar?': 'ما هي أحجام ونوعيات المشاريع التي تنفذها مونارا في قطر؟',
        'MonAra delivers residential, commercial, industrial and infrastructure projects across Qatar. Our capabilities range from luxury private compounds and multi-storey commercial developments to industrial facilities, MEP infrastructure, and comprehensive ongoing maintenance contracts.': 'تنفذ مونارا مشاريع سكنية وتجارية وصناعية ومشاريع بنية تحتية في كافة أنحاء قطر، بدءاً من المجمعات السكنية الفاخرة والأبراج التجارية وصولاً إلى المنشآت الصناعية وعقود الصيانة المتكاملة.',
        'How fast can I receive a technical quotation or BOQ review?': 'ما هي المدة اللازمة للحصول على عرض سعر فني أو دراسة جدول الكميات؟',
        'Our dedicated estimating engineering team typically delivers initial assessments within 24 to 48 hours for standard scopes. Comprehensive tender proposals with itemized BOQ breakdowns are provided within 3 to 5 business days upon receiving complete drawings.': 'يقدم فريق التسعير الهندسي لدينا تقديرات أولية خلال 24 إلى 48 ساعة للمشاريع القياسية، بينما يتم تقديم العطاءات التفصيلية الكاملة خلال 3 إلى 5 أيام عمل من استلام المخططات.',
        'Does MonAra hold official QHSE and ISO certifications?': 'هل تمتلك مونارا شهادات الجودة والسلامة ISO المعتمدة؟',
        'Yes. MonAra operates under ISO 9001 certified quality management systems and strictly adheres to Qatar Construction Specifications (QCS) and Ministry of Municipality safety regulations.': 'نعم، تعمل مونارا وفق أنظمة إدارة الجودة المعتمدة ISO 9001 وتلتزم تماماً بمواصفات قطر للإنشاءات (QCS) واشتراطات وزارة البلدية.',
        'Can MonAra supply certified construction materials and machinery?': 'هل توفر مونارا توريد مواد البناء والمعدات المعتمدة؟',
        'Through our dedicated Trading division, we source and distribute certified structural steel, concrete additives, MEP equipment, PPE safety gear and specialized industrial machinery with full manufacturer warranties.': 'من خلال قسم التجارة والتوريد، نوفر حديد التسليح والمواد الخرسانية ومعدات الميكانيكا والكهرباء وأدوات السلامة والآلات الصناعية مع الضمانات المعتمدة.',
        'Quantity Surveyor (QS)': 'مهندس حساب كميات',
        'Prepare BOQs, manage contract administration, verify subcontractor claims and control project costs.': 'إعداد جداول الكميات، إدارة العقود، التحقق من مستخلصات مقاولي الباطن والتحكم في تكاليف المشاريع.',
        'Procurement Officer': 'مسؤول مشتريات وتوريد',
        'TRADING & SUPPLY': 'التجارة والتوريد',
        'Manage vendor relationships, source high-grade construction materials and negotiate competitive supply contracts.': 'إدارة العلاقات مع الموردين، استقطاب مواد البناء عالية الجودة والتفاوض على عقود التوريد بأسعار تنافسية.',
        'SEND YOUR CV': 'أرسل سيرتك الذاتية',
        'RESIDENTIAL DEVELOPMENT': 'تطوير سكني',
        'COMMERCIAL COMPLEX': 'مجمع تجاري',
        'RELIGIOUS & CIVIC': 'مشاريع دينية ومدنية',
        'INDUSTRIAL INFRASTRUCTURE': 'بنية تحتية صناعية',
        'CORPORATE HEADQUARTERS': 'مقر الشركات',
        'RESIDENTIAL ESTATE': 'مجمع سكني راقٍ',
        'Luxury Villa Residence': 'مشروع فيلا سكنية فاخرة',
        'Commercial Business Tower': 'برج الأعمال التجاري',
        'Grand Community Mosque': 'جامع المنطقة الكبير',
        'Industrial Manufacturing Facility': 'منشأة تصنيع صناعية',
        'Corporate Headquarters Complex': 'مجمع المقر الرئيسي للشركات',
        'Pearl Compound Residences': 'مجمع فلل اللؤلؤة السكني',
        'INQUIRE ABOUT THIS PROJECT': 'استفسر عن هذا المشروع',
        'Turnkey Delivery': 'تسليم مفتاح',
        'Civil & MEP': 'أعمال مدنية وكهروميكانيكية',
        'Compound Development': 'تطوير مجمع سكني',
        '18 Units': '18 وحدة',
        '1,450 m²': '1,450 م²',
        '5,000 m²': '5,000 م²',
        '12,000 m²': '12,000 م²',
        '1,800 Capacity': 'سعة 1,800 مصلٍ',
        '8 Floors': '8 طوابق',
        'Turnkey construction of a contemporary luxury villa featuring bespoke finishing, private pool, and smart building automation.': 'تنفيذ متكامل لفيلا عصرية فاخرة تشمل تشطيبات راقية ومسبحاً خاصاً وأنظمة أتمتة المباني الذكية.',
        'Structural concrete works, architectural curtain glazing, and complete MEP infrastructure installation for prime office spaces.': 'أعمال الخرسانة الهيكلية والواجهات الزجاجية وأنظمة الكهروميكانيك المتكاملة لمساحات مكتبية راقية.',
        'Specialized religious architecture featuring ornate dome engineering, traditional stone cladding, and acoustic interior fit-out.': 'عمارة إسلامية متخصصة تشمل هندسة القباب والكسوة الحجرية التقليدية والتجهيزات الصوتية الداخلية.',
        'Heavy industrial warehouse construction with reinforced slab foundations, structural steel framing, and certified fire safety systems.': 'إنشاء مستودع صناعي متطور بقواعد خرسانية مسلحة وهياكل فولاذية وأنظمة إطفاء معتمدة.',
        'State-of-the-art office development with sustainable energy architecture, high-speed elevators, and luxury executive floor fit-outs.': 'تطوير مكاتب حديثة بتصاميم مستدامة ومصاعد سريعة وتجهيزات فاخرة للأدوار التنفيذية.',
        'Master-planned residential compound consisting of multi-family villas, recreation facilities, hard landscaping, and internal roadway networks.': 'مجمع سكني متكامل يضم فللاً ومرافق ترفيهية وتنسيق حدائق وشبكات طرق داخلية.',
        '15+ Years in Qatar': 'أكثر من 15 عاماً في قطر',
        'Proven Project Excellence': 'سجل حافل بالتميز في المشاريع',
        'International Quality Standards': 'معايير جودة دولية معتمدة',
        '6 Core Sectors': '6 قطاعات رئيسية متكاملة',
        'Turnkey Project Capabilities': 'قدرات تسليم مشاريع متكاملة',
        'HSE Zero-Harm': 'سياسة السلامة أولاً',
        'QCS Rigorous Safety Protocols': 'التزام صارم باشتراطات QCS',
        '250+ Delivered': 'أكثر من 250 مشروعاً منجزاً',
        '250+ Completed': 'أكثر من 250 مشروعاً منجزاً',
        'Completed On Schedule': 'تسليم دقيق في المواعيد المحددة',
        'Qatar-Wide Reach': 'تغطية شاملة لجميع مناطق قطر',
        'Qatar-Wide Footprint': 'حضور واسع في جميع مناطق قطر',
        'Doha, Lusail, Al Wakrah': 'الدوحة، لوسيل، الوكرة',
        '50+ Trusted Partners': 'أكثر من 50 شريكاً موثوقاً',
        'Long-Term Client Retention': 'علاقات شراكة استراتيجية مستدامة',
        '99% Client Satisfaction': 'نسبة رضا عملاء 99%',
        'Verified Project Reviews': 'تقييمات موثقة للمشاريع',
        '100+ Team Members': 'أكثر من 100 خبير وموظف',
        'Diverse & Skilled Workforce': 'كفاءات هندسية وفنية ماهرة',
        'Growth & Training': 'برامج تطوير وتدريب مستمرة',
        'Continuous Career Pathways': 'مسارات نمو مهني متقدمة',
        'Direct Project Hotline': 'خط الاتصال المباشر للمشاريع',
        'Tender & RFP Submissions': 'استقبال طلبات التسعير والمناقصات'
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
        const body = document.body;
        const pageTitle = body.dataset.pageTitle;
        const pageDesc = body.dataset.pageDesc;
        if (pageTitle) {
            document.title = isArabic ? body.dataset.pageTitleAr : pageTitle;
        }
        if (pageDesc) {
            document.querySelector('meta[name="description"]').content = isArabic ? body.dataset.pageDescAr : pageDesc;
        }

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

    const forms = document.querySelectorAll('#quote-form, #contact-page-form');
    forms.forEach((form) => {
        const fileInput = form.querySelector('#attachment');
        const fileName = form.querySelector('#file-name');
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
            if (!message && control === fileInput && control.files && control.files[0]) {
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

        if (fileInput && fileName) {
            fileInput.addEventListener('change', () => {
                fileName.textContent = fileInput.files[0] ? fileInput.files[0].name : validationMessages[currentLanguage].chooseFile;
                validateControl(fileInput);
            });
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (formStatus) formStatus.textContent = '';
            const controls = [...form.querySelectorAll('input, select, textarea')];
            const isValid = controls.map(validateControl).every(Boolean);
            if (!isValid) {
                const firstError = form.querySelector('.invalid input, .invalid select, .invalid textarea');
                firstError?.focus();
                if (formStatus) {
                    formStatus.style.color = '#ff8b71';
                    formStatus.textContent = validationMessages[currentLanguage].review;
                }
                return;
            }

            const submitButton = form.querySelector('[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.textContent = validationMessages[currentLanguage].sending;
            window.setTimeout(() => {
                if (formStatus) {
                    formStatus.style.color = '#8de0a8';
                    formStatus.textContent = validationMessages[currentLanguage].success;
                }
                form.reset();
                if (fileName) fileName.textContent = validationMessages[currentLanguage].chooseFile;
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }, 650);
        });

        document.addEventListener('languagechange', () => {
            if (formStatus) formStatus.textContent = '';
            if (fileInput && fileName) {
                fileName.textContent = fileInput.files[0] ? fileInput.files[0].name : validationMessages[currentLanguage].chooseFile;
            }
            form.querySelectorAll('.invalid input, .invalid select, .invalid textarea').forEach(validateControl);
        });
    });

    // Category Filter Buttons (Projects, Services, Careers)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            const target = btn.dataset.filter || btn.dataset.category;
            const items = document.querySelectorAll('[data-category]');
            items.forEach((item) => {
                const category = item.dataset.category;
                const match = target === 'all' || category === target;
                item.style.display = match ? '' : 'none';
            });
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach((button) => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener('click', (event) => event.preventDefault());
    });
})();
