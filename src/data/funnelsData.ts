import { FunnelMapData, FunnelCategory, SelectionMatrixItem } from '../types/funnel';

export const CATEGORIES: FunnelCategory[] = [
  {
    id: 'lead-generation',
    titleAr: 'فانلز توليد العملاء المحتملين',
    titleEn: 'Lead Generation Funnels',
    descriptionAr: 'بناء قاعدة بيانات قوية من العملاء المستهدفين عبر تقديم قيمة فورية ومنخفضة المقاومة.',
    funnelCount: 3,
    iconName: 'Users'
  },
  {
    id: 'service-funnels',
    titleAr: 'فانلز مقدمي الخدمات والاستشارات',
    titleEn: 'Service & Agency Funnels',
    descriptionAr: 'تصفية وتأهيل العملاء المهتمين وحجز استشارات تشخيصية عالية القيمة.',
    funnelCount: 3,
    iconName: 'Briefcase'
  },
  {
    id: 'course-digital',
    titleAr: 'فانلز المنتجات الرقمية والدورات',
    titleEn: 'Course & Digital Product Funnels',
    descriptionAr: 'تحويل المعرفة إلى مبيعات متكررة عبر إطلاقات ذكية ومسارات بيع مصغرة.',
    funnelCount: 3,
    iconName: 'GraduationCap'
  },
  {
    id: 'affiliate-funnels',
    titleAr: 'فانلز التسويق بالعمولة (الأفلييت)',
    titleEn: 'Affiliate Marketing Funnels',
    descriptionAr: 'بناء جسور الثقة والمقارنة قبل توجيه الزائر لرابط الإحالة لزيادة معدل الإتمام.',
    funnelCount: 3,
    iconName: 'Link2'
  },
  {
    id: 'webinar-funnels',
    titleAr: 'فانلز الويبينارات والمحاضرات',
    titleEn: 'Webinar & Event Funnels',
    descriptionAr: 'تعليم الجمهور وتغيير قناعاتهم عبر جلسات مرئية مكثفة تنتهي بعروض حصرية.',
    funnelCount: 3,
    iconName: 'Video'
  },
  {
    id: 'call-booking',
    titleAr: 'فانلز حجز المكالمات والتأهيل',
    titleEn: 'Call Booking & Qualification',
    descriptionAr: 'ملء جدول المبيعات بمكالمات مؤهلة وتصفية غير المناسبين عبر استمارات مدروسة.',
    funnelCount: 2,
    iconName: 'Calendar'
  },
  {
    id: 'ecommerce-funnels',
    titleAr: 'فانلز التجارة الإلكترونية والمنتجات',
    titleEn: 'E-commerce & Direct Sales',
    descriptionAr: 'تعظيم متوسط قيمة الطلب (AOV) من خلال عروض المتابعة وترقيات بنقرة واحدة.',
    funnelCount: 2,
    iconName: 'ShoppingBag'
  },
  {
    id: 'content-to-offer',
    titleAr: 'فانلز تحويل المحتوى إلى صفقات',
    titleEn: 'Content-to-Offer Funnels',
    descriptionAr: 'استثمار الأصول المجانية (فيديوهات، أدلة، دراسات حالة) لتغذية عروض البيع بسلاسة.',
    funnelCount: 2,
    iconName: 'BookOpen'
  },
  {
    id: 'application-funnels',
    titleAr: 'فانلز التقديم للعروض عالية القيمة',
    titleEn: 'High-Ticket Application',
    descriptionAr: 'خلق حصرية وهيبة حول برامج التدريب والاستشارات الخاصة عبر نماذج القبول.',
    funnelCount: 2,
    iconName: 'ShieldCheck'
  },
  {
    id: 'nurture-email',
    titleAr: 'فانلز التغذية والمتابعة البريدية',
    titleEn: 'Nurture & Retention Funnels',
    descriptionAr: 'تحويل المشتركين الخاملين إلى مشترين أوفياء عبر سلاسل بريدية استراتيجية مؤتمتة.',
    funnelCount: 1,
    iconName: 'Mail'
  }
];

export const FUNNEL_MAPS: FunnelMapData[] = [
  // 1. Lead Magnet Funnel
  {
    number: 1,
    id: 'lead-magnet-funnel',
    nameAr: 'Funnel مغناطيس العملاء',
    nameEn: 'Lead Magnet Funnel',
    tagline: 'بناء قاعدة البيانات بجذب العملاء المحتملين بقيمة مجانية مركزة وفورية',
    category: 'lead-generation',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '1 - 2 يوم',
    goal: 'جمع بيانات الاتصال (الاسم والبريد/واتساب) للزوار المهتمين مقابل مورد مجاني يحل مشكلة واحدة ومحددة.',
    bestFor: 'صناع المحتوى، مقدمي الخدمات، وأصحاب الدورات التدريبية الذين يرغبون في بناء أصل تسويقي مستدام يملكونه مباشرة.',
    trafficSources: ['إعلانات إنستغرام وتيك توك', 'منشورات لينكد إن العضوية', 'روابط السيرة الذاتية (Bio)', 'مقاطع يوتيوب'],
    steps: [
      {
        id: 's1',
        titleAr: 'مصدر الترافيك',
        titleEn: 'Traffic Source',
        type: 'traffic',
        descriptionAr: 'زائر مهتم يرى محتوى أو إعلانًا يعالج ألمًا محددًا ويعد بحل فوري.',
        tacticalTip: 'اذكر النتيجة الدقيقة في العنوان بدلاً من اسم الملف المجاني.'
      },
      {
        id: 's2',
        titleAr: 'صفحة الهبوط (Opt-in Page)',
        titleEn: 'Lead Capture Landing Page',
        type: 'page',
        descriptionAr: 'صفحة نظيفة بوعد وحيد، 3 نقاط فائدة، ونموذج إدخال مبسط.',
        benchmarkRate: '35% - 55% تحويل',
        tacticalTip: 'احذف أي قوائم تشتيت أو روابط خارجية؛ الخيار الوحيد هو إدخال البيانات أو المغادرة.'
      },
      {
        id: 's3',
        titleAr: 'إدخال البيانات والتسجيل',
        titleEn: 'Data Submission',
        type: 'conversion',
        descriptionAr: 'الزائر يملأ الاسم والبريد الإلكتروني ويضغط على زر الدعوة للعمل (CTA).',
        isPrimary: true
      },
      {
        id: 's4',
        titleAr: 'صفحة الشكر وتأكيد الاستلام',
        titleEn: 'Thank You Page',
        type: 'page',
        descriptionAr: 'تأكيد إرسال الملف، توجيه لفحص البريد، ودعوة للخطوة المنطقية التالية.',
        tacticalTip: 'استغل هذه الصفحة لعرض اشتراك في مجتمع مجاني أو متابعة حسابك الاجتماعي.'
      },
      {
        id: 's5',
        titleAr: 'سلسلة الترحيب والتسليم البريدي',
        titleEn: 'Email Delivery & Welcome Flow',
        type: 'followup',
        descriptionAr: 'إرسال رابط التحميل فوراً + 3 رسائل ترحيبية لبناء الثقة وتمهيد العرض المستقبلي.',
        benchmarkRate: '60%+ معدل فتح للإيميل الأول'
      }
    ],
    whyItWorks: [
      'يكسر حاجز التردد لدى الزائر الجديد لأن التكلفة النقدية صفر.',
      'يمنح العميل تجربة نجاح سريعة تؤكد احترافيتك قبل طلب أي التزام مالي.',
      'يحول الترافيك العابر إلى أصل رقمي مملوك (قائمة بريدية) يمكن مراسلته مجاناً.'
    ],
    whenToUse: 'عندما تبدأ من الصفر في جمع جمهورك، أو عندما ترغب في خفض كلفة الاستحواذ على العملاء عبر الإعلانات.',
    commonMistake: 'تقديم ملف عام وضخم جداً مثل كتاب من 100 صفحة؛ الجمهور يفضل ورقة عمل تنفيذية أو تشك لست تُطبق في 10 دقائق.',
    implementationNote: 'تأكد من أن رسالة التسليم تصل في أقل من دقيقة واحدة إلى صندوق الوارد الأساسي للعميل.',
    keyMetric: 'معدل التحويل في صفحة الهبوط (Opt-in Rate > 40%)'
  },

  // 2. Email Capture Funnel
  {
    number: 2,
    id: 'email-capture-funnel',
    nameAr: 'Funnel التقاط القائمة البريدية المباشر',
    nameEn: 'Email Capture Funnel',
    tagline: 'تحويل الزوار إلى مشتركين مستمرين عبر نوافذ وقوالب تسجيل ذكية',
    category: 'lead-generation',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: 'يوم واحد',
    goal: 'جذب القراء والمشترين المتصفحين لموقعك أو مدونتك للاشتراك المستمر في مجتمعك البريدي.',
    bestFor: 'أصحاب المدونات، المتاجر الإلكترونية، والمواقع الإخبارية والمتخصصة.',
    trafficSources: ['ترافيك جوجل العضوي (SEO)', 'زوار الموقع المباشرين', 'مقالات المدونة'],
    steps: [
      {
        id: 'ec1',
        titleAr: 'زيارة مقال أو صفحة رئيسية',
        titleEn: 'Blog Post / Site Visit',
        type: 'traffic',
        descriptionAr: 'الزائر يقرأ مقالاً نوعياً أو يتصفح الموقع ويستفيد من المحتوى.'
      },
      {
        id: 'ec2',
        titleAr: 'نافذة التقاط منبثقة أو شريط علوي',
        titleEn: 'Smart Slide-in / Exit Popup',
        type: 'conversion',
        descriptionAr: 'ظهور عرض اشتراك عند التمرير 50% أو عند نية الخروج من الموقع.',
        benchmarkRate: '3% - 8% تحويل إجمالي الزوار'
      },
      {
        id: 'ec3',
        titleAr: 'تأكيد الاشتراك المزدوج (Double Opt-in)',
        titleEn: 'Confirmation Email',
        type: 'followup',
        descriptionAr: 'رسالة تلقائية تطلب تأكيد البريد لضمان نظافة القائمة وتجنب السبام.'
      },
      {
        id: 'ec4',
        titleAr: 'صفحة الترحيب والانضمام للقائمة',
        titleEn: 'Welcome & Value Hub',
        type: 'page',
        descriptionAr: 'توجيه المشترك لأفضل 3 مقالات في الموقع أو كود خصم ترحيبي.',
        isPrimary: true
      }
    ],
    whyItWorks: [
      'يستهدف الزوار وهم في ذروة تفاعلهم مع محتوى موقعك.',
      'لا يعطل تجربة التصفح الأساسية عند ضبط توقيت الظهور باحترافية.',
      'ينمي القائمة البريدية بشكل تلقائي وتراكمي دون كلفة إعلانية إضافية.'
    ],
    whenToUse: 'عندما تمتلك ترافيكاً بالفعل على موقعك أو مدونتك ولكنك تفقد معظم الزوار دون جمع بياناتهم.',
    commonMistake: 'استخدام عبارة باهتة مثل "اشترك في نشرتنا البريدية"؛ يجب صياغة القيمة مثل "احصل على استراتيجية الأسبوع الحصرية".',
    implementationNote: 'قم بتعطيل النافذة المنبثقة لمن سجل بالفعل حتى لا تفسد تجربة المستخدم.',
    keyMetric: 'نسبة تحويل زوار الموقع لمشتركين (Site-wide Opt-in Rate)'
  },

  // 3. Tripwire Funnel
  {
    number: 3,
    id: 'tripwire-funnel',
    nameAr: 'Funnel العرض الأولي منخفض التكلفة',
    nameEn: 'Tripwire Funnel',
    tagline: 'تغطية تكاليف الإعلانات فورياً بتحويل المشترك المجاني إلى مشترٍ مدفوع بقرار فوري',
    category: 'lead-generation',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '3 - 5 أيام',
    goal: 'تحويل العميل المحتمل إلى مشترٍ حقيقي بعرض لا يُقاوم سعره بين 7$ إلى 27$ لتصفير كلفة الإعلانات (Self-Liquidating).',
    bestFor: 'المسوقين، أصحاب المنتجات الرقمية، وصناع الدورات الذين يعتمدون على إعلانات ممولة مستمرة.',
    trafficSources: ['إعلانات فيسبوك وإنستغرام الممولة', 'إعلانات تيك توك', 'ترافيك المؤثرين'],
    steps: [
      {
        id: 'tw1',
        titleAr: 'إعلان لجذب عميل محتمل مجاني',
        titleEn: 'Paid Ad for Free Lead Magnet',
        type: 'traffic',
        descriptionAr: 'الترويج لهدية مجانية لحصد اهتمام أولي عالي واستهداف منخفض التكلفة.'
      },
      {
        id: 'tw2',
        titleAr: 'صفحة التسجيل المجاني',
        titleEn: 'Opt-in Page',
        type: 'page',
        descriptionAr: 'تسجيل البريد للحصول على الدليل المجاني الموعود.'
      },
      {
        id: 'tw3',
        titleAr: 'صفحة العرض الحصري لمرة واحدة (OTO)',
        titleEn: 'Tripwire Offer Page (One-Time-Offer)',
        type: 'page',
        descriptionAr: 'صفحة الشكر تتحول إلى عرض فوري مدفوع برقم رمزي (مثل 17$) متاح لدقائق فقط.',
        benchmarkRate: '5% - 15% شراء من المسجلين',
        isPrimary: true
      },
      {
        id: 'tw4',
        titleAr: 'صفحة الدفع السريع + Order Bump',
        titleEn: 'Checkout + Order Bump',
        type: 'checkout',
        descriptionAr: 'إتمام الشراء بسلاسة مع مربع اختيار لإضافة ملحق صغير بـ 9$.',
        tacticalTip: 'الـ Order Bump يرفع قيمة السلة بنسبة 30% إلى 45% بدون أي مجهود.'
      },
      {
        id: 'tw5',
        titleAr: 'سلسلة تسليم المنتج وعرض الترقية',
        titleEn: 'Buyer Onboarding & Upsell Flow',
        type: 'followup',
        descriptionAr: 'تسليم المنتج الرقمي وتثبيت هوية المشتري، ثم فتح الباب لعرض الدورة الكبرى.'
      }
    ],
    whyItWorks: [
      'المشتري الذي ينفق دولاراً واحداً أكثر استعداداً بـ 10 أضعاف لشراء دورة بـ 500$ مقارنة بالمسجل المجاني.',
      'يحقق توازناً مالياً لحملاتك الإعلانية في نفس اللحظة التي تكتسب فيها العميل.',
      'سعر الـ Tripwire منخفض لدرجة تلغي التردد وتعتمد على الشراء الاندفاعي المدروس.'
    ],
    whenToUse: 'عندما تدفع ميزانيات إعلانية يومية وتريد استرداد ميزانيتك أولاً بأول لتدويرها والتوسع دون نفاد السيولة.',
    commonMistake: 'عرض منتج غير متصل بالمغناطيس المجاني؛ يجب أن يكون الـ Tripwire هو النسخة السريعة أو القالب المساعد لما تم تحميله.',
    implementationNote: 'استخدم عداداً تنازلياً حقيقياً ومبرراً (Urgency) يوضح أن السعر سينتقل لسعره الأصلي فور مغادرة الصفحة.',
    keyMetric: 'معدل استرداد الإنفاق الإعلاني الفوري (ROAS on Day 0)'
  },

  // 4. Service Inquiry Funnel
  {
    number: 4,
    id: 'service-inquiry-funnel',
    nameAr: 'Funnel استفسارات الخدمات الاحترافية',
    nameEn: 'Service Inquiry Funnel',
    tagline: 'استقطاب طلبات مشاريع عالية الجودة وتصفية غير الجادين قبل إرسال العروض',
    category: 'service-funnels',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '2 - 3 أيام',
    goal: 'جذب عملاء الشركات والأفراد المحتاجين لخدماتك مع جمع تفاصيل الميزانية ونطاق العمل مسبقاً.',
    bestFor: 'وكالات التسويق، المصممين، المطورين المستقلين، وكتاب المحتوى، ومستشاري الأعمال.',
    trafficSources: ['ملف لينكد إن الشخصي', 'مشاريع بيهانس وبورتفوليو', 'محركات البحث (SEO)', 'إحالات العملاء السابقين'],
    steps: [
      {
        id: 'si1',
        titleAr: 'زيارة صفحة الخدمة أو البورتفوليو',
        titleEn: 'Service Page / Case Study',
        type: 'page',
        descriptionAr: 'صفحة تشرح مخرجات الخدمة بالأرقام، مع نماذج أعمال حقيقية وشهادات عملاء موثقة.'
      },
      {
        id: 'si2',
        titleAr: 'استمارة طلب الاستفسار المخصص',
        titleEn: 'Detailed Inquiry Form',
        type: 'conversion',
        descriptionAr: 'نموذج يسأل: ما التحدي الحالي؟ ما الميزانية التقريبية؟ ما الموعد النهائي المتوقع؟',
        benchmarkRate: '8% - 14% تحويل الزوار المؤهلين',
        isPrimary: true
      },
      {
        id: 'si3',
        titleAr: 'صفحة تأكيد المراجعة وتحديد الخطوات',
        titleEn: 'Expectation Setting Page',
        type: 'page',
        descriptionAr: 'شرح ماذا سيحدث تالياً: سنراجع طلبك خلال 24 ساعة ونرسل رابط تحديد موعد إن كنت مؤهلاً.'
      },
      {
        id: 'si4',
        titleAr: 'الفرز والرد المقترح',
        titleEn: 'Qualification & Discovery Call',
        type: 'outcome',
        descriptionAr: 'تصفية الطلبات: إرسال عرض مخصص للمشاريع المناسبة أو توجيه الصغار لحلول بديلة.'
      }
    ],
    whyItWorks: [
      'يحميك من إضاعة ساعات عمل ثمينة في مكالمات مع أشخاص لا يملكون ميزانية الخدمة.',
      'يضعك في موقع الخبير المرغوب بدلاً من مندوب المبيعات الذي يلاحق الجميع.',
      'يجهزك للمحادثة الأولى بمعلومات دقيقة عن آلام العميل وأهدافه.'
    ],
    whenToUse: 'عندما تقدم خدمات تنفيذية متخصصة تبدأ من 1,000$ وأكثر وتتطلب تفاصيل عمل مخصصة لكل عميل.',
    commonMistake: 'وضع استمارة اتصال عامة تحتوي فقط على "الاسم، البريد، الرسالة"؛ هذا يجذب رسائل سبام وعملاء بلا ميزانية.',
    implementationNote: 'أضف حقلاً إجبارياً لمجال الميزانية مع خيارات واضحة تبدأ من الحد الأدنى المقبول لديك.',
    keyMetric: 'نسبة العملاء المؤهلين من إجمالي الطلبات (Lead Qualification Rate)'
  },

  // 5. Call Booking Funnel
  {
    number: 5,
    id: 'call-booking-funnel',
    nameAr: 'Funnel حجز المكالمات الاستشارية',
    nameEn: 'Call Booking Funnel',
    tagline: 'تحويل الزائر المهتم إلى موعد تقويمي محجوز ومؤكد بنسبة حضور مرتفعة',
    category: 'call-booking',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '2 - 3 أيام',
    goal: 'حجز جلسة استراتيجية أو مكالمة مبيعات فردية مع عميل مؤهل عبر تقويم إلكتروني منظم.',
    bestFor: 'الكوتشز، المستشارين، مقدمي الخدمات B2B، ومديري الحسابات للمشاريع الكبيرة.',
    trafficSources: ['حملات إعلانية تستهدف متخذي القرار', 'منشورات لينكد إن التخصصية', 'قوائم المتابعة البريدية'],
    steps: [
      {
        id: 'cb1',
        titleAr: 'صفحة العرض والفيديو التعريفي',
        titleEn: 'Short VSL / Value Page',
        type: 'page',
        descriptionAr: 'فيديو قصير (5-10 دقائق) يشرح منهجيتك وكيف تحقق نتائج ملموسة لعملائك.'
      },
      {
        id: 'cb2',
        titleAr: 'تقويم الحجز والأسئلة التأهيلية',
        titleEn: 'Calendar Embed & Survey',
        type: 'conversion',
        descriptionAr: 'اختيار اليوم والساعة المناسبة مع الإجابة على 3-4 أسئلة تأهيلية إجبارية.',
        benchmarkRate: '15% - 25% من مشاهدي الصفحة',
        isPrimary: true
      },
      {
        id: 'cb3',
        titleAr: 'صفحة تأكيد الموعد والتجهيز',
        titleEn: 'Call Confirmation Hub',
        type: 'page',
        descriptionAr: 'عرض فيديو يشرح ما الذي يجب تجهيزه قبل المكالمة لرفع معدل الحضور.'
      },
      {
        id: 'cb4',
        titleAr: 'سلسلة التذكيرات متعددة القنوات',
        titleEn: 'SMS / WhatsApp & Email Reminders',
        type: 'followup',
        descriptionAr: 'رسالة قبل 24 ساعة + رسالة قبل ساعتين + رسالة قبل 10 دقائق مع رابط الاجتماع.',
        tacticalTip: 'التذكير عبر واتساب يرفع معدل الحضور (Show-up Rate) من 50% إلى أكثر من 85%.'
      }
    ],
    whyItWorks: [
      'يقضي على متاعب تنسيق المواعيد اليدوية ذهاباً وإياباً.',
      'يضمن وصول العميل للمكالمة ولديه فهم مسبق لأسلوبك وقيمتك.',
      'يحافظ على معدلات حضور عالية بفضل التذكيرات الآلية متعددة القنوات.'
    ],
    whenToUse: 'عندما تكون المكالمة هي بوابة الإغلاق الأساسية لخدمات تتراوح بين 500$ إلى 5,000$.',
    commonMistake: 'عدم تذكير العميل أو إتاحة الحجز لمواعيد بعد أكثر من 5 أيام؛ اهتمام العميل يبرد سريعاً جداً.',
    implementationNote: 'حدد نافذة الحجز القصوى بـ 3 إلى 4 أيام عمل فقط لفرض الشعور بالجدية والندرة.',
    keyMetric: 'معدل الحضور الفعلي للمكالمات (Show-up Rate > 80%)'
  },

  // 6. High-Ticket Application Funnel
  {
    number: 6,
    id: 'high-ticket-application-funnel',
    nameAr: 'Funnel التقديم للعروض عالية القيمة',
    nameEn: 'High-Ticket Application Funnel',
    tagline: 'خلق هيبة استثنائية وقبول انتقائي للعروض التي تفوق 3,000$ إلى 10,000$+',
    category: 'application-funnels',
    complexity: 'متقدم',
    estimatedTimeToLaunch: '4 - 7 أيام',
    goal: 'جذب النخبة من العملاء الذين لا يبحثون عن مجرد خدمة، بل يبحثون عن شراكة استراتيجية أو برنامج إرشادي مغلق.',
    bestFor: 'برامج الماستر مايند، الاستشارات المؤسسية، والوكالات المتخصصة في حلول النمو الشاملة.',
    trafficSources: ['إعلانات مدفوعة موجهة للرؤساء التنفيذيين', 'المؤتمرات وشبكات العلاقات', 'البودكاست المتخصص'],
    steps: [
      {
        id: 'ht1',
        titleAr: 'صفحة دراسة الحالة المركزة (Case Study VSL)',
        titleEn: 'Breakthrough Case Study VSL',
        type: 'page',
        descriptionAr: 'فيديو تفصيلي يستعرض تفكيك استراتيجية حقيقية حققت نتائج استثنائية بالأرقام.'
      },
      {
        id: 'ht2',
        titleAr: 'استمارة التقديم الشاملة (Application Form)',
        titleEn: 'Comprehensive Application',
        type: 'conversion',
        descriptionAr: 'أسئلة تكشف الإيرادات الحالية، حجم الفريق، وأكبر عائق استراتيجي يواجهه المتقدم.',
        benchmarkRate: '20% - 30% معدل إكمال الاستمارة',
        isPrimary: true
      },
      {
        id: 'ht3',
        titleAr: 'صفحة مراجعة الطلب وواجب المشاهدة',
        titleEn: 'Homework & Homework Page',
        type: 'page',
        descriptionAr: 'فيديو يطلب مراجعة وثائق محددة قبل الموافقة على جدولة جلسة المراجعة التشخيصية.'
      },
      {
        id: 'ht4',
        titleAr: 'جلسة المقابلة والإغلاق (Triage & Strategy Session)',
        titleEn: 'High-Ticket Closing Call',
        type: 'outcome',
        descriptionAr: 'مكالمة لا تبيع بابتذال، بل تقرر ما إذا كان مقدم الطلب يستحق الانضمام للبرنامج أم لا.'
      }
    ],
    whyItWorks: [
      'يقلب ديناميكية البيع: العميل يقنعك بقبوله بدلاً من أن تتوسل إليه للشراء.',
      'يحمي وقت المؤسس بالتعامل الحصري مع من يملكون القدرة المالية والاستعداد التنفيذي.',
      'يرفع قيمة العرض في ذهن العميل لأن القبول غير متاح للجميع.'
    ],
    whenToUse: 'عندما يكون عرضك يبدأ من 3,000$ فما فوق ولا يمكن بيعه بنقرة زر على صفحة بيع تقليدية.',
    commonMistake: 'قبول أي متقدم للمكالمة حتى وإن كانت إجاباته ضعيفة أو تفتقر للميزانية؛ هذا يدمر هيبة العرض.',
    implementationNote: 'ارفض بأدب الطلبات غير المؤهلة عبر بريد إلكتروني أنيق يقترح مصادر مجانية بديلة.',
    keyMetric: 'معدل إغلاق المكالمات المؤهلة (Close Rate on Qualified Apps > 30%)'
  },

  // 7. Webinar Registration Funnel
  {
    number: 7,
    id: 'webinar-registration-funnel',
    nameAr: 'Funnel تسجيل الويبينار المباشر',
    nameEn: 'Live Webinar Registration Funnel',
    tagline: 'ملء قاعة الويبينار بجمهور متعطش للتعلم ومستعد للاستثمار في العرض النهائي',
    category: 'webinar-funnels',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '3 - 5 أيام',
    goal: 'حصد أكبر عدد من التسجيلات لحدث تدريبي مباشر عبر الإنترنت مع تأمين أعلى نسبة حضور وتفاعل.',
    bestFor: 'الخبراء، مدربي المهارات المتقدمة، مسوقي برمجيات SaaS، وأصحاب برامج التدريب الاحترافية.',
    trafficSources: ['حملات إعلانية قصيرة المدى (5-7 أيام قبل الحدث)', 'النشرة البريدية', 'حملات الشركاء والتعاونات'],
    steps: [
      {
        id: 'wb1',
        titleAr: 'صفحة تسجيل الويبينار (Webinar Opt-in)',
        titleEn: 'High-Converting Registration Page',
        type: 'page',
        descriptionAr: 'عنوان صادم يعد بكشف أسرار محددة + 3 محاور + سيرة مقدم الندوة + زر التسجيل.',
        benchmarkRate: '40% - 60% تحويل الزوار'
      },
      {
        id: 'wb2',
        titleAr: 'صفحة الشكر وتثبيت الموعد بالتقويم',
        titleEn: 'Add to Calendar & VIP Invite',
        type: 'page',
        descriptionAr: 'زر أوتوماتيكي لإضافة الموعد لتقويم جوجل/آبل + دعوة للانضمام لمجموعة واتساب/تيليجرام حصرية.',
        isPrimary: true
      },
      {
        id: 'wb3',
        titleAr: 'سلسلة التغذية والإحماء قبل الحدث',
        titleEn: 'Pre-Webinar Indoctrination Sequence',
        type: 'followup',
        descriptionAr: 'إرسال 3 رسائل فيديو تثقيفية لبناء الثقة ورفع الترقب للحدث المباشر.'
      },
      {
        id: 'wb4',
        titleAr: 'بث الويبينار والعرض المباشر',
        titleEn: 'Live Broadcast & Offer Pitch',
        type: 'conversion',
        descriptionAr: '45 دقيقة محتوى دسم يغير القناعات + 15 دقيقة لطرح العرض مع بونص للحاضرين فقط.',
        benchmarkRate: '25% - 40% نسبة الحضور الفعلي'
      },
      {
        id: 'wb5',
        titleAr: 'سلسلة إعادة البث والإغلاق (Replay Sequence)',
        titleEn: '48-Hour Replay & Urgency Flow',
        type: 'followup',
        descriptionAr: 'إرسال رابط التسجيل لمدة 48 ساعة فقط قبل غلق العرض والبونصات الاستثنائية.'
      }
    ],
    whyItWorks: [
      'يتيح الويبينار وقتاً كافياً (60-90 دقيقة) لهدم المعتقدات الخاطئة وبناء الرغبة الجارفة بالعرض.',
      'التفاعل الحي والإجابة عن الأسئلة المباشرة تزيل كل التردد وتخلق إثباتاً اجتماعياً فورياً.',
      'الندرة المحددة بوقت البث تدفع المترددين لاتخاذ قرار الشراء فوراً.'
    ],
    whenToUse: 'لبيع عروض تتراوح بين 297$ إلى 1,997$ أو عند اختبار رسالة تسويقية جديدة قبل أتمتتها.',
    commonMistake: 'بدء الحملة الإعلانية قبل أسبوعين من الحدث؛ هذا يجعل الناس ينسون الموعد. الفترة الذهبية هي 4 إلى 6 أيام فقط.',
    implementationNote: 'قدم بونصاً مجانياً حصرياً يُوزع فقط في الدقيقة الأخيرة لمن يحضر الويبينار حتى النهاية.',
    keyMetric: 'مبيعات الويبينار الإجمالية من الحاضرين (Conversion on Attendees > 10%)'
  },

  // 8. Evergreen Webinar Funnel
  {
    number: 8,
    id: 'evergreen-webinar-funnel',
    nameAr: 'Funnel الويبينار المسجل الدائم',
    nameEn: 'Evergreen Automated Webinar Funnel',
    tagline: 'ماكينة مبيعات مؤتمتة تعمل 24/7 تبث المحتوى وتبيع منتجك على مدار الساعة',
    category: 'webinar-funnels',
    complexity: 'متقدم',
    estimatedTimeToLaunch: '5 - 7 أيام',
    goal: 'أتمتة عملية بيع العروض المتوسطة والعالية دون الحاجة للبث المباشر أسبوعياً.',
    bestFor: 'صناع الدورات والبرامج التي تم إثبات تحويلها بالفعل في ويبينارات مباشرة سابقة.',
    trafficSources: ['إعلانات يوتيوب وبحث جوجل', 'إعلانات ميتا المستمرة', 'ترافيك المحتوى دائم الخضرة'],
    steps: [
      {
        id: 'eg1',
        titleAr: 'صفحة التسجيل الفوري (Just-in-Time)',
        titleEn: 'Just-in-Time Registration',
        type: 'page',
        descriptionAr: 'اختيار مشاهدة العرض فوراً خلال 10 دقائق أو في موعد مجدول خلال اليوم.'
      },
      {
        id: 'eg2',
        titleAr: 'غرفة المشاهدة المؤتمتة',
        titleEn: 'Automated Broadcast Room',
        type: 'page',
        descriptionAr: 'مشغل فيديو متطور بدون إمكانية التقديم السريع يحاكي البث المباشر الاحترافي.'
      },
      {
        id: 'eg3',
        titleAr: 'ظهور زر العرض في الدقيقة المحددة',
        titleEn: 'Timed CTA Appearance',
        type: 'conversion',
        descriptionAr: 'ظهور صندوق العرض المؤقت تحت الفيديو تماماً عند بدء فقرة البيع (Pitch).',
        isPrimary: true
      },
      {
        id: 'eg4',
        titleAr: 'سلسلة التقسيم بناءً على سلوك المشاهدة',
        titleEn: 'Behavioral Email Branching',
        type: 'followup',
        descriptionAr: 'من لم يحضر -> تذكير، من حضر ولم يشاهد العرض -> ملخص، من شاهد العرض -> مهلة العرض.'
      }
    ],
    whyItWorks: [
      'يمنحك حرية الوقت ويوفر دخلًا مستمرًا دون الحاجة للوقوف أمام الكاميرا أسبوعياً.',
      'يتيح للمهتم مشاهدة العرض في اللحظة التي يكون فيها بأعلى درجات الفضول بدلاً من الانتظار لأيام.',
      'تخصيص الرسائل بناءً على الدقيقة التي توقف عندها المشاهد يضاعف المبيعات الضائعة.'
    ],
    whenToUse: 'فقط بعد أن تنجح في تحويل عرضك في ويبينار مباشر واحد على الأقل وتتأكد من سلامة الأرقام.',
    commonMistake: 'الادعاء الزائف بأن الويبينار "مباشر الآن" مع وضع تعليقات روبوتية وهمية؛ الجمهور اليوم يكتشف ذلك سريعاً وتفقد ثقتهم.',
    implementationNote: 'صرح بشفافية أنها "ورشة عمل تدريبية مسجلة ومكثفة" مع إمكانية إرسال الأسئلة لبريدك مباشرة.',
    keyMetric: 'معدل إكمال المشاهدة حتى ظهور العرض (Video Retention to Pitch > 50%)'
  },

  // 9. Sales Page Funnel
  {
    number: 9,
    id: 'sales-page-funnel',
    nameAr: 'Funnel صفحة البيع المباشر',
    nameEn: 'Long-Form Sales Page Funnel',
    tagline: 'صفحة بيع طويلة مقنعة تأخذ العميل في رحلة عاطفية ومنطقية حتى إتمام الشراء',
    category: 'course-digital',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '4 - 6 أيام',
    goal: 'بيع منتج رقمي أو اشتراك مباشرة دون الحاجة لمكالمة أو ويبينار، بقوة الكلمة المكتوبة.',
    bestFor: 'الكتب الرقمية، قوالب العمل، الدورات المسجلة، البرمجيات الخفيفة، والمنتجات من 47$ إلى 497$.',
    trafficSources: ['إعلانات شبكة البحث وإعلانات إعادة الاستهداف', 'رسائل النشرة البريدية', 'روابط السوشيال ميديا'],
    steps: [
      {
        id: 'sp1',
        titleAr: 'ترافيك موجه ذو نية شراء دقيقة',
        titleEn: 'Warm / Targeted Traffic',
        type: 'traffic',
        descriptionAr: 'جمهور يعرف المشكلة ويبحث بنشاط عن حل عملي متكامل.'
      },
      {
        id: 'sp2',
        titleAr: 'صفحة البيع الطويلة (Long-Form Sales Page)',
        titleEn: 'Comprehensive Sales Page',
        type: 'page',
        descriptionAr: 'هيكلية كاملة: العنوان الصادم -> القصة -> الحل -> العرض -> البونصات -> الضمان -> الأسئلة الشائعة.',
        benchmarkRate: '2.5% - 6% شراء مباشر'
      },
      {
        id: 'sp3',
        titleAr: 'صفحة إتمام الدفع المؤمنة (Secure Checkout)',
        titleEn: 'Optimized Checkout Page',
        type: 'checkout',
        descriptionAr: 'نموذج دفع من صفحة واحدة مع شارات الأمان وشهادات عملاء سريعة وOrder Bump.',
        isPrimary: true
      },
      {
        id: 'sp4',
        titleAr: 'صفحة الشكر واستلام الحساب والترحيب',
        titleEn: 'Receipt & Member Area Access',
        type: 'page',
        descriptionAr: 'تأكيد العملية فورياً وتوليد بيانات الدخول لمنصة التعلم مع فيديو توجيهي.'
      }
    ],
    whyItWorks: [
      'تمنح الزائر إجابة وافية عن كل سؤال وتردد في عقله دون أي ضغط مبيعات خارجي.',
      'قابلة للقراءة والتصفح في أي وقت يناسب المشتري دون قيود تقويمية.',
      'تعتمد على علم النفس البيعي المبرهن (Pain, Agitate, Solution, Proof, Offer, Risk Reversal).'
    ],
    whenToUse: 'للمنتجات التعليمية والأدوات التي يسهل على المشتري اتخاذ القرار بشأنها بعد قراءة الشرح الوافي.',
    commonMistake: 'الكتابة عن مزايا المنتج ومواصفاته بدلاً من التركيز على التحول الذي سيحدث في حياة المشتري بعد الشراء.',
    implementationNote: 'وزع أزرار الشراء (CTAs) على مدار الصفحة بعد كل قسم يقدم قيمة أو يزيل اعتراضاً رئيسياً.',
    keyMetric: 'معدل تحويل الزائر إلى مشترٍ (Sales Page Conversion Rate > 3%)'
  },

  // 10. VSL Funnel
  {
    number: 10,
    id: 'vsl-funnel',
    nameAr: 'Funnel صفحة بيع الفيديو (VSL)',
    nameEn: 'Video Sales Letter Funnel',
    tagline: 'قوة السرد القصصي المرئي في فيديو مركز مدته 12-20 دقيقة يحقق مبيعات خيالية',
    category: 'course-digital',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '3 - 5 أيام',
    goal: 'جذب انتباه الزوار المشغولين من خلال فيديو بصري آسر يقود للشراء أو التسجيل.',
    bestFor: 'عروض اللياقة والصحة، الاستثمار، التنمية الذاتية، والكورسات المبتكرة التي تحتاج توضيحاً حياً.',
    trafficSources: ['إعلانات يوتيوب (In-stream)', 'فيديوهات ريلز وتيك توك', 'إعلانات فيسبوك بالفيديو'],
    steps: [
      {
        id: 'vs1',
        titleAr: 'إعلان فيديو مشوق (Hook Ad)',
        titleEn: 'High-Hook Video Ad',
        type: 'traffic',
        descriptionAr: 'إعلان يثير الفضول الشديد حول خطأ يرتكبه الجميع أو اكتشاف مفاجئ.'
      },
      {
        id: 'vs2',
        titleAr: 'صفحة الـ VSL البسيطة الخالية من المشتتات',
        titleEn: 'Distraction-Free VSL Page',
        type: 'page',
        descriptionAr: 'عنوان رئيسي جذاب + مشغل الفيديو في المنتصف + لا روابط أخرى في الصفحة.'
      },
      {
        id: 'vs3',
        titleAr: 'تأخير ظهور زر الشراء (Delayed CTA Button)',
        titleEn: 'Delayed Add-to-Cart Button',
        type: 'conversion',
        descriptionAr: 'الزر يظهر فقط عندما يصل الفيديو للحظة طرح العرض، مما يضمن استماع الزائر للقصة.',
        isPrimary: true
      },
      {
        id: 'vs4',
        titleAr: 'صفحة إتمام الدفع السريع والـ Upsell',
        titleEn: '1-Page Checkout & Confirmation',
        type: 'checkout',
        descriptionAr: 'تسهيل الدفع بأبل باي والبطاقات مع خيار ترقية إضافي لمرة واحدة.'
      }
    ],
    whyItWorks: [
      'الفيديو ينقل نبرة الصوت والمشاعر والشغف أفضل بـ 10 مرات من النصوص الصامتة.',
      'يحافظ على تحكمك في وتيرة تلقي العميل للمعلومة وترتيب إزالة الاعتراضات.',
      'يعمل بشكل استثنائي مع مستخدمي الهواتف الذكية الذين يفضلون المشاهدة على القراءة الطويلة.'
    ],
    whenToUse: 'عندما تمتلك قصة مؤسس قوية، أو منتجاً بصرياً يحتاج برهاناً عملياً مرئياً ليصدقه العميل.',
    commonMistake: 'مقدمة مملة في أول 30 ثانية؛ إذا لم تخطف الزائر في أول 7 ثوانٍ فسيغادر الصفحة فوراً.',
    implementationNote: 'أضف ترجمة نصية واضحة (Subtitles) داخل الفيديو لأن الكثيرين يشاهدون بدون صوت.',
    keyMetric: 'متوسط مدة مشاهدة الفيديو (Average Watch Time > 60%)'
  },

  // 11. Mini Course Funnel
  {
    number: 11,
    id: 'mini-course-funnel',
    nameAr: 'Funnel الكورس المصغر السريع',
    nameEn: 'Mini Course Funnel',
    tagline: 'كورس مركز من 3 إلى 5 فيديوهات قصيرة يبني علاقة ولاء وثيقة تمهد للبرنامج الأكبر',
    category: 'course-digital',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '3 - 4 أيام',
    goal: 'منح الطالب نتيجة ملموسة وسريعة خلال أيام قليلة لدفعه نحو الاستثمار في دورتك الرئيسية الشاملة.',
    bestFor: 'المدربين والمعلمين الذين يملكون برنامجاً كبيراً ويريدون إثبات كفاءة أسلوبهم التعليمي أولاً.',
    trafficSources: ['محتوى تعليمي على يوتيوب وإنستغرام', 'إعلانات استهداف المبتدئين', 'مجتمعات تخصصية'],
    steps: [
      {
        id: 'mc1',
        titleAr: 'صفحة التسجيل في الدورة المصغرة المجانية/الرمزية',
        titleEn: 'Mini Course Registration',
        type: 'page',
        descriptionAr: 'عنوان يحدد إنجاز مهارة محددة خلال 3 أيام (مثل: إطلاق أول حملة إعلانية ناجحة).'
      },
      {
        id: 'mc2',
        titleAr: 'الدرس الأول: الفوز السريع (Quick Win)',
        titleEn: 'Lesson 1: The Fast Breakthrough',
        type: 'page',
        descriptionAr: 'فيديو 8 دقائق يعطي نتيجة فورية للطالب مع ورقة عمل قابلة للتطبيق.'
      },
      {
        id: 'mc3',
        titleAr: 'الدرس الثاني والثالث: كشف الفجوة الحقيقية',
        titleEn: 'Lessons 2 & 3: Strategic Gap',
        type: 'page',
        descriptionAr: 'توسيع مدارك الطالب وتوضيح الحاجة لنظام متكامل ومستدام.'
      },
      {
        id: 'mc4',
        titleAr: 'الدرس الختامي: إعلان الكورس الرئيسي الكامل',
        titleEn: 'Capstone & Flagship Program Pitch',
        type: 'conversion',
        descriptionAr: 'عرض الكورس الرئيسي بخصم مخصص لخريجي الدورة المصغرة مع ضمان ذهبي.',
        isPrimary: true
      }
    ],
    whyItWorks: [
      'يقضي على متلازمة الشك والتردد؛ العميل يرى أسلوبك وشرحك ويتأكد بنفسه من استفادته.',
      'نسبة إكمال الكورسات المصغرة تفوق 70% مقارنة بالكورسات الطويلة التي لا ينهيها أحد.',
      'يخلق التزاماً نفسياً تدريجياً (Micro-commitments) ينتهي بالاستثمار في النسخة الكاملة.'
    ],
    whenToUse: 'لبيع برامج تعليمية تتراوح بين 199$ إلى 997$ مع ضمان ثقة كاملة بينك وبين المتعلم.',
    commonMistake: 'حشو الدورة المصغرة بنظريات معقدة؛ يجب أن تركز فقط على إنجاز خطوة تطبيقية واحدة يفخر بها الطالب.',
    implementationNote: 'افتح الدروس يومياً بالتتابع (Drip Content) لخلق حالة من الترقب والعادة الإيجابية اليومية.',
    keyMetric: 'معدل إكمال جميع دروس الكورس المصغر (Course Completion Rate)'
  },

  // 12. Course Launch Funnel
  {
    number: 12,
    id: 'course-launch-funnel',
    nameAr: 'Funnel إطلاق الدورات والمحتوى التعليمي',
    nameEn: 'Course Launch Funnel (Open/Close Cart)',
    tagline: 'إطلاق سنوي أو فصلي ذو طاقة عالية يستغل الندرة والترقب لتحقيق مبيعات العام في أسبوع',
    category: 'course-digital',
    complexity: 'متقدم',
    estimatedTimeToLaunch: '10 - 14 يوماً',
    goal: 'حشد مئات الطلاب للانضمام في دفعة تعليمية واحدة (Cohort) تغلق أبوابها في موعد حاسم ومحدد.',
    bestFor: 'أصحاب الدورات التفاعلية، برامج الكوتشنج الجماعي، والدفعات السنوية المحدودة المقاعد.',
    trafficSources: ['القائمة البريدية الحالية', 'قائمة الانتظار (VIP Waitlist)', 'إعلانات التسجيل في التدريب التمهيدي'],
    steps: [
      {
        id: 'cl1',
        titleAr: 'مرحلة الإحماء وقائمة الانتظار (Pre-Launch)',
        titleEn: 'Warm-up & Waitlist Phase',
        type: 'page',
        descriptionAr: 'إعلان موعد الإطلاق وتشجيع المهتمين على حجز مقعدهم في قائمة الأوائل للحصول على مزايا حصرية.'
      },
      {
        id: 'cl2',
        titleAr: 'سلسلة المحتوى التمهيدي الحصري (3 أجزاء)',
        titleEn: '3-Part Value Video Masterclass',
        type: 'page',
        descriptionAr: 'ثلاث ورش عمل تفكك المشكلة، تقدم الإطار العملي، وتستعرض دراسات حالة لأشخاص نجحوا.'
      },
      {
        id: 'cl3',
        titleAr: 'فتح باب التسجيل الرسمي (Cart Opens)',
        titleEn: 'Cart Open Announcement',
        type: 'conversion',
        descriptionAr: 'إرسال بريد صباحي بفتح التسجيل لمدة 5 إلى 7 أيام فقط مع هدايا للمسجلين الأوائل.',
        isPrimary: true
      },
      {
        id: 'cl4',
        titleAr: 'إغلاق الأبواب وانتهاء المهلة (Cart Closes)',
        titleEn: 'Final 24-Hour Urgency Blitz',
        type: 'checkout',
        descriptionAr: 'إرسال 3 رسائل تذكيرية في اليوم الأخير قبل إغلاق التسجيل تماماً حتى الدفعة القادمة.'
      }
    ],
    whyItWorks: [
      'الإنسان بطبعه يؤجل القرارات؛ غلق الباب هو أقوى حافز نفسي على وجه الأرض لإنهاء التردد.',
      'تجربة الانضمام مع دفعة من الزملاء في نفس اليوم تخلق روحاً جماعية ومجتمعاً متحمساً.',
      'يحقق سيولة نقدية ضخمة ومكثفة تمنحك استقراراً مالياً لعدة أشهر متتالية.'
    ],
    whenToUse: 'للدورات التدريبية المتقدمة التي تقدم فيها دعماً ومتابعة ولا ترغب في فتح التسجيل الدائم طوال العام.',
    commonMistake: 'فتح الباب دون الالتزام بإغلاقه؛ إذا مددت التسجيل فستفقد مصداقيتك في كل الإطلاقات القادمة.',
    implementationNote: 'توقع أن 50% من مبيعاتك الإجمالية ستتحقق في آخر 24 ساعة قبل إغلاق السلة مباشرة.',
    keyMetric: 'إجمالي المبيعات خلال أسبوع الإطلاق (Total Cart Revenue)'
  },

  // 13. Affiliate Review Funnel
  {
    number: 13,
    id: 'affiliate-review-funnel',
    nameAr: 'Funnel مراجعة منتج الأفلييت',
    nameEn: 'Affiliate Product Review Funnel',
    tagline: 'مراجعة نقدية عميقة وصادقة توجه المشتري الباحث لشراء المنتج عبر رابطك للحصول على بونص إضافي',
    category: 'affiliate-funnels',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '1 - 2 يوم',
    goal: 'اعتراض الزوار الذين يبحثون بنشاط عن تقييم منتج معين وتوجيههم للشراء برابطك.',
    bestFor: 'المسوقين بالعمولة للمنتجات الرقمية، برامج الـ SaaS، والأجهزة التكنولوجية.',
    trafficSources: ['بحث جوجل (SEO على كلمات: Review / مراجعة / هل يستحق؟)', 'فيديوهات يوتيوب غير مدفوعة', 'منشورات مدونة'],
    steps: [
      {
        id: 'ar1',
        titleAr: 'ترافيك باحث عن تقييم المنتج',
        titleEn: 'High Buyer Intent Search',
        type: 'traffic',
        descriptionAr: 'مستخدم جاهز للشراء تقريباً لكنه يريد الاطمئنان لرأي شخص جرب المنتج قبله.'
      },
      {
        id: 'ar2',
        titleAr: 'صفحة المراجعة المفصلة والشفافة',
        titleEn: 'In-Depth Review & Honest Breakdown',
        type: 'page',
        descriptionAr: 'المزايا، العيوب، لمن يصلح ولمن لا يصلح، وتجربة شاشة حية من الداخل.'
      },
      {
        id: 'ar3',
        titleAr: 'عرض البونص الحصري الخاص بك (Custom Bonus)',
        titleEn: 'Irresistible Custom Bonus Pitch',
        type: 'conversion',
        descriptionAr: 'وعد بهدية حصرية (قالب، دورة مصغرة، كول استشاري) لمن يشتري عبر رابطك فقط.',
        isPrimary: true
      },
      {
        id: 'ar4',
        titleAr: 'رابط الإحالة + إرسال إثبات الشراء',
        titleEn: 'Affiliate Redirect & Bonus Claim',
        type: 'checkout',
        descriptionAr: 'توجيه لصفحة الشراء الرسمية مع استمارة سريعة لرفع الفاتورة لاستلام البونص.'
      }
    ],
    whyItWorks: [
      'يستهدف عميلاً في أسفل قمع المبيعات (Bottom of Funnel) جاهزاً لإخراج بطاقته الائتمانية.',
      'البونص الحصري يمنع العميل من البحث في مكان آخر ويجعله يفضل الشراء عبرك أنت بالتحديد.',
      'الصدق في ذكر العيوب يرفع الثقة ويجعل المزايا تبدو حقيقية ومقنعة للغاية.'
    ],
    whenToUse: 'للترويج لأدوات وبرمجيات ذات عمولات مجزية أو اشتراكات شهرية متكررة (Recurring Commissions).',
    commonMistake: 'كتابة مراجعة تمدح المنتج بنسبة 100% دون أي نقد؛ هذا يجعل القارئ يشعر أنها مجرد إعلان رخيص.',
    implementationNote: 'اجعل البونص الذي تقدمه يحل أول عقبة يواجهها المشتري عند استخدام المنتج الذي اشتراه.',
    keyMetric: 'معدل النقر على رابط الأفلييت ثم الشراء (Affiliate EPC - Earnings Per Click)'
  },

  // 14. Affiliate Comparison Funnel
  {
    number: 14,
    id: 'affiliate-comparison-funnel',
    nameAr: 'Funnel مقارنة البدائل للتسويق بالعمولة',
    nameEn: 'Affiliate Comparison Funnel (Vs Page)',
    tagline: 'مقارنة حيادية واضحة بين خيارين أو أكثر تساعد الحائرين على حسم القرار',
    category: 'affiliate-funnels',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '2 - 3 أيام',
    goal: 'كسب عمولات بمساعدة العميل على اختيار الأداة الأنسب لميزانيته واحتياجاته من بين متنافسين مشهورين.',
    bestFor: 'مسوقي أدوات التسويق، منصات الاستضافة، حلول التجارة الإلكترونية، وبرامج الـ CRM.',
    trafficSources: ['كلمات البحث المقارنة (Tool A vs Tool B)', 'مجموعات فيسبوك ولينكد إن', 'توصيات المنتديات المتخصصة'],
    steps: [
      {
        id: 'ac1',
        titleAr: 'زائر في مرحلة الاختيار والمقارنة',
        titleEn: 'Comparison Phase Searcher',
        type: 'traffic',
        descriptionAr: 'يبحث عن الفروق الدقيقة مثل: "أيهما أفضل لمتجري: Shopify أم WooCommerce؟".'
      },
      {
        id: 'ac2',
        titleAr: 'جدول المقارنة التفاعلي والواضح',
        titleEn: 'Comparison Matrix & Verdict',
        type: 'page',
        descriptionAr: 'جدول مقارنة سريع للمزايا والأسعار + خلاصة موجزة توضح الفائز في كل حالة استخدام.'
      },
      {
        id: 'ac3',
        titleAr: 'روابط الأفلييت المزدوجة مع خصومات خاصة',
        titleEn: 'Dual Affiliate Links with Perks',
        type: 'conversion',
        descriptionAr: 'روابط مخصصة لكلا الخيارين لضمان كسب العمولة أياً كان قرار الزائر.',
        isPrimary: true
      },
      {
        id: 'ac4',
        titleAr: 'قالب إعداد سريع كهدية ترحيبية',
        titleEn: 'Setup Template Delivery',
        type: 'followup',
        descriptionAr: 'إرسال دليل تشغيل الأداة الفائزة لمساعدة العميل على البدء فوراً وتفادي الإلغاء.'
      }
    ],
    whyItWorks: [
      'تكسب عمولة في كلتا الحالتين أياً كانت الأداة التي يختارها العميل ما دمت وضعت روابط لكلتيهما.',
      'تظهر بمظهر المستشار المحايد الأمين وليس مندوب مبيعات متحيز لأداة واحدة.',
      'تستغل ترافيك بحث عالي الدقة بدون أي كلفة إعلانية.'
    ],
    whenToUse: 'عندما يوجد برنامجان مشهوران يتنافسان بشدة في سوقك والجمهور يسأل يومياً عن أيهما يختار.',
    commonMistake: 'الانحياز المفضوح لأداة ذات عمولة أعلى رغم أنها أسوأ لغالبية المستخدمين؛ هذا يدمر سمعتك على المدى البعيد.',
    implementationNote: 'لخص المقارنة في بند "الحكم النهائي" (Verdict) في أعلى الصفحة لمن لا يحب قراءة المقال كاملاً.',
    keyMetric: 'معدل النقر على الروابط المقارنة (Comparison CTR)'
  },

  // 15. Bridge Page Funnel
  {
    number: 15,
    id: 'bridge-page-funnel',
    nameAr: 'Funnel صفحة الجسر الانتقالية',
    nameEn: 'Bridge Page Funnel',
    tagline: 'بناء جسر من الثقة والسياق والتهيئة النفسية قبل توجيه العميل لصفحة العرض الخارجية',
    category: 'affiliate-funnels',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '1 - 2 يوم',
    goal: 'حماية حساباتك الإعلانية وجمع إيميل الزائر أولاً قبل توجيهه لصفحة بيع خارجية لمنتج أفلييت.',
    bestFor: 'المسوقين بالعمولة الذين يستخدمون إعلانات فيسبوك وتيك توك وغوغل التي تمنع الروابط المباشرة.',
    trafficSources: ['إعلانات مدفوعة على منصات التواصل', 'منشورات السوشيال ميديا الحيوية', 'إيميلات المتابعة'],
    steps: [
      {
        id: 'bp1',
        titleAr: 'إعلان ممول يجذب الاهتمام',
        titleEn: 'Curiosity / Problem Ad',
        type: 'traffic',
        descriptionAr: 'إعلان يثير الفضول حول حل مبتكر لمشكلة عويصة يعاني منها الجمهور المستهدف.'
      },
      {
        id: 'bp2',
        titleAr: 'صفحة الهبوط لالتقاط البريد (Opt-in Page)',
        titleEn: 'Email Capture Gate',
        type: 'page',
        descriptionAr: 'تسجيل البريد لمعرفة الحل ومشاهدة الشرح التوضيحي.'
      },
      {
        id: 'bp3',
        titleAr: 'صفحة الجسر مع فيديو التوصية الشخصية',
        titleEn: 'Bridge Page with Endorsement',
        type: 'conversion',
        descriptionAr: 'فيديو قصير (2-3 دقائق) تشرح فيه سبب إعجابك بهذا المنتج وكيف أفادك شخصياً.',
        isPrimary: true
      },
      {
        id: 'bp4',
        titleAr: 'التوجيه التلقائي لصفحة البيع الرسمية',
        titleEn: 'Affiliate Offer Redirect',
        type: 'checkout',
        descriptionAr: 'الضغط على الزر ينقل الزائر لصفحة المنتج الخارجي مع تتبع الرابط بسلاسة.'
      }
    ],
    whyItWorks: [
      'يحميك من إغلاق الحسابات الإعلانية الذي يحدث دائماً عند استخدام روابط الأفلييت المباشرة.',
      'يمنحك بريد العميل في قائمتك الخاصة لتتمكن من تسويق منتجات أخرى له مستقبلاً مجاناً.',
      'يهيئ الزائر نفسياً لما سيراه في صفحة البيع الخارجية مما يقلل معدل الارتداد (Bounce Rate).'
    ],
    whenToUse: 'في كل حملة تسويق بالعمولة تعتمد فيها على منصات إعلانية صارمة أو عندما لا تملك منتجاً خاصاً بك بعد.',
    commonMistake: 'تخطي مرحلة جمع البريد وتوجيه الزائر مباشرة من صفحة الجسر؛ إذا لم يشترِ في اللحظة الأولى فقد خسرته للأبد.',
    implementationNote: 'تأكد من أن التصميم والألوان في صفحة الجسر متناسقة بصرياً مع صفحة العرض الرسمية لتفادي الارتباك.',
    keyMetric: 'نسبة الانتقال من صفحة الجسر لصفحة البيع (Bridge Click-Through Rate > 60%)'
  },

  // 16. Quiz Funnel
  {
    number: 16,
    id: 'quiz-funnel',
    nameAr: 'Funnel الاختبار التفاعلي والتقسيم',
    nameEn: 'Quiz & Diagnostic Funnel',
    tagline: 'تجربة تفاعلية ممتعة تشخص مشكلة الزائر وتقسم الجمهور بدقة متناهية لتقديم العرض المثالي',
    category: 'lead-generation',
    complexity: 'متقدم',
    estimatedTimeToLaunch: '5 - 7 أيام',
    goal: 'تحقيق أعلى معدل تفاعل ممكن وجمع بيانات تفصيلية وتوجيه كل عميل لعرض مخصص يتطابق مع إجاباته.',
    bestFor: 'الصحة والجمال، التجارة الإلكترونية، الكوتشز الماليين، ومنصات التعليم المتنوعة.',
    trafficSources: ['إعلانات إنستغرام وتيك توك التفاعلية', 'سؤال استقصائي في السوشيال ميديا', 'المدونات'],
    steps: [
      {
        id: 'qz1',
        titleAr: 'إعلان أو بوست يطرح سؤالاً تشخيصياً',
        titleEn: 'Intriguing Hook & Invitation',
        type: 'traffic',
        descriptionAr: 'مثل: "ما هو نوع الـ Funnel المثالي لعملك في 2026؟ أجب على 5 أسئلة واكتشف نتيجتك".'
      },
      {
        id: 'qz2',
        titleAr: 'صفحة الاختبار والأسئلة التفاعلية (5-7 أسئلة)',
        titleEn: 'Interactive Quiz Micro-Steps',
        type: 'conversion',
        descriptionAr: 'أسئلة سريعة وخفيفة من خيارات متعددة مع شريط تقدم مشجع (Progress Bar).'
      },
      {
        id: 'qz3',
        titleAr: 'بوابة إدخال البريد الإلكتروني لعرض التقرير',
        titleEn: 'Lead Capture Gate for Results',
        type: 'page',
        descriptionAr: 'النتيجة جاهزة! أدخل بريدك الإلكتروني لنرسل لك التقرير التشخيصي التفصيلي فوراً.',
        benchmarkRate: '65% - 85% من مكملي الاختبار',
        isPrimary: true
      },
      {
        id: 'qz4',
        titleAr: 'صفحة النتيجة المخصصة والعرض المقترح',
        titleEn: 'Tailored Outcome & Offer Page',
        type: 'checkout',
        descriptionAr: 'عرض نتيجة مخصصة بناءً على فئته مع تقديم الدورة أو الخدمة المصممة خصيصاً لوضعه الحالي.'
      }
    ],
    whyItWorks: [
      'الفضول البشري حول اكتشاف الذات وتقييم المهارات يرفع معدل البدء بالاختبار بشكل هائل.',
      'الاستثمار التدريجي في الإجابة على الأسئلة يجعل إدخال البريد في النهاية أمراً بديهياً للزائر.',
      'تخصيص العرض لكل فئة يرفع معدل المبيعات بنسبة تصل إلى 300% مقارنة بالعروض العامة الموحدة.'
    ],
    whenToUse: 'عندما يكون لديك جمهور متنوع يحتاج منتجات مختلفة، أو عندما ترتفع كلفة الإعلانات وتريد خفضها.',
    commonMistake: 'وضع أكثر من 10 أسئلة معقدة؛ هذا يصيب المستخدم بالملل ويجعله يغادر قبل الوصول لمرحلة إدخال البريد.',
    implementationNote: 'قسّم المشتركين في برنامج البريد بناءً على نوع النتيجة لإرسال إيميلات متابعة شديدة التخصيص.',
    keyMetric: 'معدل إكمال الكويز والتسجيل (Quiz Completion-to-Lead Rate > 70%)'
  },

  // 17. Challenge Funnel
  {
    number: 17,
    id: 'challenge-funnel',
    nameAr: 'Funnel التحدي المجاني لعدة أيام',
    nameEn: '5-Day Challenge Funnel',
    tagline: 'بناء طاقة مجتمعية جارفة والتزام حقيقي عبر مهام يومية محفزة تنتهي بعرض لا يُقاوم',
    category: 'course-digital',
    complexity: 'متقدم',
    estimatedTimeToLaunch: '7 - 10 أيام',
    goal: 'تحويل المشتركين المترددين إلى معجبين متعصبين يطبقون معك يومياً وينتظرون بفارغ الصبر فتح التسجيل في برنامجك.',
    bestFor: 'مدربي اللياقة، صناع المحتوى، مدربي التسويق والمبيعات، وأصحاب المجتمعات الحصرية.',
    trafficSources: ['إعلانات الأحداث الممولة', 'القوائم البريدية الشريكة', 'النشر العضوي المكثف'],
    steps: [
      {
        id: 'ch1',
        titleAr: 'صفحة التسجيل في التحدي (Challenge Landing)',
        titleEn: 'Challenge VIP Sign-up',
        type: 'page',
        descriptionAr: 'تسجيل في تحدي "5 أيام لإتقان كذا" مع وضوح موعد البداية وجدول المهام اليومية.'
      },
      {
        id: 'ch2',
        titleAr: 'ترقية الـ VIP الاختيارية (VIP Upgrade Bump)',
        titleEn: 'VIP Access Upgrade ($27 - $47)',
        type: 'checkout',
        descriptionAr: 'عرض تذكرة VIP لحضور جلسات Zoom حصرية للإجابة على الأسئلة مع المدرب مباشرة.'
      },
      {
        id: 'ch3',
        titleAr: 'أيام التحدي والمهام اليومية في المجتمع',
        titleEn: 'Daily Execution & Live Sessions',
        type: 'followup',
        descriptionAr: 'بث يومي لمدة 30 دقيقة + مهمة تطبيقية ينشرها المشاركون في مجموعة مجتمعية لتشجيع بعضهم.'
      },
      {
        id: 'ch4',
        titleAr: 'اليوم الخامس: الاحتفال وطرح البرنامج الأكبر',
        titleEn: 'Grand Finale Pitch & Celebration',
        type: 'conversion',
        descriptionAr: 'الاحتفاء بالفائزين وتكريمهم + فتح التسجيل في البرنامج السنوي المتقدم مع بونص حصري.',
        isPrimary: true
      }
    ],
    whyItWorks: [
      'يحول المتلقي السلبي إلى فاعل نشط يختبر إحساس الإنجاز الفعلي تحت إشرافك.',
      'قوة المجتمع والتفاعل الجماعي تزيل الشكوك وتخلق دافعية هائلة للمواصلة.',
      'ترقية الـ VIP تغطي مصاريف الإعلانات قبل أن يبدأ التحدي بيوم واحد.'
    ],
    whenToUse: 'عندما تمتلك كاريزما وحضوراً وتستمتع بالتفاعل المباشر وتريد بيع برامج ذات قيمة عالية بين 500$ إلى 2,500$.',
    commonMistake: 'إرهاق المشاركين بمهام يومية طويلة تستغرق ساعات؛ اجعل كل مهمة يومية قابلة للإنجاز في 15 دقيقة فقط.',
    implementationNote: 'أنشئ جدولاً تحفيزياً وجوائز رمزية يومية لأول من يسلم مهامه لرفع التفاعل لأقصى حد.',
    keyMetric: 'نسبة المشاركين الفاعلين في اليوم الخامس (Day 5 Active Retention)'
  },

  // 18. Consultation Funnel
  {
    number: 18,
    id: 'consultation-funnel',
    nameAr: 'Funnel الاستشارة التشخيصية المدفوعة',
    nameEn: 'Paid Diagnostic Consultation Funnel',
    tagline: 'بيع جلسة تشخيصية مدفوعة بسعر معقول تصفي العملاء وتمهد لعقد خدمات طويل الأجل',
    category: 'service-funnels',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '2 - 3 أيام',
    goal: 'الحصول على أجر مقابل وقتك الاستشاري الأولي وبناء الثقة لبيع مشروع متكامل بالآلاف.',
    bestFor: 'المحامين، المستشارين الماليين، خبراء الضرائب، ومهندسي الأنظمة التقنية.',
    trafficSources: ['شبكة لينكد إن المهنية', 'البحث الموضعي (Google Business)', 'محاضرات المؤتمرات'],
    steps: [
      {
        id: 'cn1',
        titleAr: 'صفحة الجلسة التشخيصية التخصصية',
        titleEn: 'Diagnostic Audit Landing Page',
        type: 'page',
        descriptionAr: 'شرح ما تتضمنه الجلسة (60 دقيقة فحص شامل + خطة عمل مكتوبة لتصحيح المسار).'
      },
      {
        id: 'cn2',
        titleAr: 'الدفع المسبق للجلسة (Pre-paid Booking)',
        titleEn: 'Upfront Payment ($150 - $500)',
        type: 'checkout',
        descriptionAr: 'دفع قيمة الاستشارة مقدماً عبر بطاقة الائتمان قبل فتح التقويم لتفادي الإلغاءات.',
        isPrimary: true
      },
      {
        id: 'cn3',
        titleAr: 'اختيار الموعد وتعبئة ملف القضية/المشروع',
        titleEn: 'Intake Questionnaire & Calendar',
        type: 'conversion',
        descriptionAr: 'اختيار اليوم وتزويدك بالملفات والمستندات اللازمة لدراستها قبل موعد المكالمة.'
      },
      {
        id: 'cn4',
        titleAr: 'إجراء الجلسة وتقديم العرض الشامل',
        titleEn: 'Consultation & Retainer Proposal',
        type: 'outcome',
        descriptionAr: 'تقديم قيمة مذهلة في الجلسة، ثم خصم قيمة الاستشارة من العقد الشامل إذا وافق على التعاقد معك.'
      }
    ],
    whyItWorks: [
      'الدفع المسبق يضمن أن العميل جاد 100% ويحترم وقتك وتوجيهاتك الاستشارية.',
      'عرض خصم قيمة الاستشارة من المشروع الكبير يزيل أي ندم مالي ويسرع توقيع العقد.',
      'يحميك تماماً من ظاهرة "استشارة سريعة مجانية" التي تستنزف طاقة الخبراء.'
    ],
    whenToUse: 'عندما تكون خبيراً مطلوباً ولديك وقت محدود جداً وتريد جذب أكثر العملاء قدرة وجدية.',
    commonMistake: 'الدخول للجلسة دون مراجعة إجابات العميل مسبقاً؛ التحضير هو ما يثبت قيمتك الاستثنائية ويغلق العقد الكبير.',
    implementationNote: 'سجل الجلسة للمستفيد وأرسل له ملخصاً تنفيذياً بنقاط العمل في ملف PDF أنيق خلال 24 ساعة.',
    keyMetric: 'نسبة تحويل مستفيدي الاستشارة لعقود شهرية (Consult-to-Retainer Conversion)'
  },

  // 19. Product Launch Funnel
  {
    number: 19,
    id: 'product-launch-funnel',
    nameAr: 'Funnel إطلاق المنتجات (صيغة Jeff Walker)',
    nameEn: 'Product Launch Formula (PLF) Funnel',
    tagline: 'هندسة الترقب والترقب النفسي عبر 4 محطات محتوى تغير نظرة السوق لمنتجك الجديد',
    category: 'course-digital',
    complexity: 'متقدم',
    estimatedTimeToLaunch: '10 - 15 يوماً',
    goal: 'خلق ضجة واسعة واهتمام هستيري بمنتجك أو كتابك الجديد قبل طرحه للبيع بساعات.',
    bestFor: 'المنتجات الرائدة، الكتب الجديدة، البرمجيات الثورية، والدورات التي يُنتظر طرحها طويلاً.',
    trafficSources: ['القائمة البريدية المشوقة', 'حملات المشاهير والمؤثرين', 'إعلانات التسجيل في سلسلة الإطلاق'],
    steps: [
      {
        id: 'pl1',
        titleAr: 'فيديو الإطلاق الأول: فرصة جديدة (The Opportunity)',
        titleEn: 'PLC 1: The New Paradigm',
        type: 'page',
        descriptionAr: 'إظهار أن القواعد القديمة لم تعد تجدي، وأن هناك مساراً جديداً تماماً يفتح آفاق النجاح.'
      },
      {
        id: 'pl2',
        titleAr: 'فيديو الإطلاق الثاني: التحول (The Transformation)',
        titleEn: 'PLC 2: The Blueprint Walkthrough',
        type: 'page',
        descriptionAr: 'شرح الخطوات العملية للخطة وإثبات أنها قابلة للتكرار مع أي شخص يتبع النظام.'
      },
      {
        id: 'pl3',
        titleAr: 'فيديو الإطلاق الثالث: تجربة الملكية (Ownership Experience)',
        titleEn: 'PLC 3: What It Feels Like',
        type: 'page',
        descriptionAr: 'استعراض قصص نجاح حقيقية، الإجابة عن كل الاعتراضات، وإعلان فتح الباب غداً.'
      },
      {
        id: 'pl4',
        titleAr: 'فيديو العرض وفتح السلة (The Offer & Cart Open)',
        titleEn: 'PLC 4: Grand Opening & Launch',
        type: 'conversion',
        descriptionAr: 'كشف المنتج بكل تفاصيله ومكافآت الإطلاق الخاصة مع عداد تنازلي حقيقي لانتهاء المهلة.',
        isPrimary: true
      }
    ],
    whyItWorks: [
      'يعامل إطلاق المنتج كحدث سينمائي يتابعه الناس بشغف حلقة تلو الأخرى.',
      'يزيل كل الاعتراضات الذهنية بهدوء وتدريج على مدار أسبوع كامل بدلاً من ضغطها في صفحة واحدة.',
      'يحفز قانون التأثير الاجتماعي (Social Proof) عبر التعليقات والمناقشات أسفل الفيديوهات.'
    ],
    whenToUse: 'للمشاريع والمبادرات الكبرى التي تستثمر فيها أشهراً من الإعداد وتريد تحقيق أقصى عائد مالي ممكن في أسبوع.',
    commonMistake: 'محاولة البيع في الفيديوهات الأولى والثانية؛ يجب أن تقتصر على التعليم والإلهام وبناء الرغبة فقط.',
    implementationNote: 'فعل صندوق التعليقات أسفل كل فيديو لحث الزوار على التفاعل ومشاركة آرائهم.',
    keyMetric: 'معدل التفاعل والتعليق على فيديوهات ما قبل الإطلاق (Pre-launch Engagement)'
  },

  // 20. E-commerce Funnel with Upsell
  {
    number: 20,
    id: 'ecommerce-upsell-funnel',
    nameAr: 'Funnel المتاجر الإلكترونية مع One-Click Upsell',
    nameEn: 'E-commerce Funnel with Post-Purchase Upsell',
    tagline: 'تعظيم متوسط قيمة سلة الشراء بنسبة 30% إلى 60% بدون أي كلفة إعلانية إضافية',
    category: 'ecommerce-funnels',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '3 - 5 أيام',
    goal: 'زيادة الربحية الصافية لكل عملية شراء عبر تقديم عروض ترقية فورية بعد إدخال البطاقة مباشرة.',
    bestFor: 'المتاجر الإلكترونية، البراندات الاستهلاكية المباشرة (D2C)، ومنتجات الشحن السريع.',
    trafficSources: ['إعلانات تيك توك وسناب شات', 'إعلانات كتالوج ميتا الديناميكية', 'إعلانات جوجل للتسوق (Shopping)'],
    steps: [
      {
        id: 'ec1',
        titleAr: 'صفحة هبوط المنتج المخصص (Advertorial / Product Page)',
        titleEn: 'Optimized Product Page',
        type: 'page',
        descriptionAr: 'صفحة تركز على منتج بطل واحد مع صور عالية الدقة وشهادات عملاء حية وتقييمات مصورة.'
      },
      {
        id: 'ec2',
        titleAr: 'سلة الشراء السريعة مع Order Bump',
        titleEn: '1-Step Checkout + Order Bump',
        type: 'checkout',
        descriptionAr: 'إدخال بيانات الشحن والدفع مع خيار إضافة منتج مكمل (مثل: حماية إضافية أو ملحق) بضغطة زر.',
        benchmarkRate: '25% - 40% قبول للـ Bump'
      },
      {
        id: 'ec3',
        titleAr: 'عرض الترقية بنقرة واحدة بعد الشراء (One-Click Upsell)',
        titleEn: 'Post-Purchase 1-Click Upsell',
        type: 'upsell',
        descriptionAr: 'صفحة تظهر فوراً قبل صفحة الشكر تعرض شراء حزمة إضافية بخصم 40% بنقرة زر دون إعادة إدخال البطاقة!',
        benchmarkRate: '15% - 25% قبول',
        isPrimary: true
      },
      {
        id: 'ec4',
        titleAr: 'عرض البديل المخفض في حال الرفض (Downsell)',
        titleEn: 'Downsell Offer (If Declined)',
        type: 'upsell',
        descriptionAr: 'إذا رفض الـ Upsell، يظهر عرض بديل أصغر أو نسخة تجريبية برقم أقل لمنع ضياع الفرصة.'
      },
      {
        id: 'ec5',
        titleAr: 'صفحة الشكر وملخص الطلب ومتابعة الشحن',
        titleEn: 'Receipt & Shipment Tracking',
        type: 'page',
        descriptionAr: 'عرض الفاتورة الإجمالية المجمعة مع رقم تتبع الشحنة ورابط لتحميل التطبيق أو كود خصم للطلب القادم.'
      }
    ],
    whyItWorks: [
      'العميل بالفعل في حالة شراء وثقة قصوى وبطاقته الائتمانية مفعلة ومخصومة مسبقاً.',
      'تكلفة الإعلان تم دفعها بالفعل للمنتج الأول، وبالتالي كل دولار يأتي من الـ Upsell هو ربح صافٍ تقريباً.',
      'عدم الحاجة لإعادة كتابة تفاصيل الدفع يقضي على 99% من أسباب التردد في العروض التكميلية.'
    ],
    whenToUse: 'في أي متجر إلكتروني يبيع منتجات مادية ولديه منتجات مكملة أو عروض كميات (اشترِ 2 واحصل على 1 مجاناً).',
    commonMistake: 'عرض منتج عشوائي لا يمت بصلة لما اشتراه العميل للتو؛ الترقية يجب أن تكون "المزيد من نفس المنتج" أو "المكمل الضروري له".',
    implementationNote: 'استخدم تطبيقات متوافقة مع بوابات الدفع تدعم خصم الـ Upsell بنقرة واحدة حقيقية دون تكرار الـ 3D Secure إن أمكن.',
    keyMetric: 'متوسط قيمة الطلب الإجمالية (Average Order Value - AOV)'
  },

  // 21. Free Audit Funnel
  {
    number: 21,
    id: 'free-audit-funnel',
    nameAr: 'Funnel الفحص والتدقيق المجاني',
    nameEn: 'Free Audit / Tear-Down Funnel',
    tagline: 'تقديم تقييم متخصص لنشاط العميل يكشف الثغرات ويضعه أمام حتمية التعاقد معك لمعالجتها',
    category: 'service-funnels',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '2 - 3 أيام',
    goal: 'جذب أصحاب الأعمال عبر فحص حساباتهم الإعلانية أو مواقعهم أو سيو صفحاتهم وإظهار الهدر المالي الذي يعانون منه.',
    bestFor: 'وكالات السيو (SEO)، خبراء تحسين سرعة المواقع، مستشاري السايبر، ووكالات الإعلانات الرقمية.',
    trafficSources: ['رسائل لينكد إن المخصصة', 'منشورات فحص ودراسات سريعة في تويتر/إكس', 'إعلانات الفيديو الاستعراضية'],
    steps: [
      {
        id: 'fa1',
        titleAr: 'صفحة طلب التدقيق المجاني لنشاطك',
        titleEn: 'Free Website / Ad Audit Page',
        type: 'page',
        descriptionAr: 'صفحة تطلب رابط موقع العميل أو حسابه مع وعد بفيديو فحص مدته 5 دقائق يكشف 3 ثغرات خفية.'
      },
      {
        id: 'fa2',
        titleAr: 'استمارة تزويد الروابط ومعلومات النشاط',
        titleEn: 'Audit Intake Form',
        type: 'conversion',
        descriptionAr: 'إدخال الرابط، البريد، ورقم الواتساب مع توضيح الهدف التجاري الأساسي للشركة.',
        isPrimary: true
      },
      {
        id: 'fa3',
        titleAr: 'تسجيل وإرسال فيديو Loom شخصي احترافي',
        titleEn: 'Personalized 5-Min Loom Audit',
        type: 'followup',
        descriptionAr: 'فيديو شاشة سريع يوضح بالدليل العملي أين يخسر العميل أمواله وكيف يمكن مضاعفة نتائجه فورياً.'
      },
      {
        id: 'fa4',
        titleAr: 'الدعوة لحجز مكالمة تطبيق التوصيات',
        titleEn: 'Implementation Pitch Call',
        type: 'outcome',
        descriptionAr: 'رابط أسفل الفيديو: "إذا أردت من فريقي إصلاح هذه الثغرات لك بالكامل، احجز مكالمة عمل سريعة هنا".'
      }
    ],
    whyItWorks: [
      'يقدم إثباتاً لا يرقى إليه الشك لكفاءتك وخبرتك دون ادعاءات نظرية فارغة.',
      'يخلق شعوراً بالامتنان والالتزام الأدبي لدى العميل لأنك خصصت وقتاً حقيقياً لدراسة نشاطه.',
      'يحول البيع من إقناع تجريدي إلى تقديم دواء لمريض يرى جرحه بالعين المجردة.'
    ],
    whenToUse: 'للفوز بعملاء B2B من العيار الثقيل الذين يتجاهلون الرسائل الإعلانية العامة الباردة.',
    commonMistake: 'استخدام برامج تدقيق آلية ترسل ملف PDF عاماً لا يقرأه أحد؛ التخصيص عبر فيديو بشري هو سر النجاح.',
    implementationNote: 'اجعل الفيديو مدته 4 إلى 6 دقائق فقط ولا تعطه كل الحلول؛ وضح المشكلة وأثرها، واجعل الحل ضمن نطاق عملك.',
    keyMetric: 'نسبة تحويل الفيديوهات المرسلة إلى مكالمات عمل محجوزة (Audit-to-Call Rate > 25%)'
  },

  // 22. Case Study Funnel
  {
    number: 22,
    id: 'case-study-funnel',
    nameAr: 'Funnel قصة النجاح ودراسة الحالة',
    nameEn: 'Case Study & Breakthrough Funnel',
    tagline: 'تفكيك قصة نجاح عميل حقيقي بالتفصيل الممل لإثبات أن نظامك يعمل بلا أدنى شك',
    category: 'content-to-offer',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '2 - 3 أيام',
    goal: 'إزالة الشك من عقول العملاء المترددين عبر إظهار المسار الدقيق الذي نقل عميلاً مشابهاً لهم من المشكلة إلى الحل.',
    bestFor: 'الوكالات المتخصصة، الكوتشز المحترفين، شركات البرمجيات، والمستشارين الماليين.',
    trafficSources: ['إعلانات إعادة الاستهداف لزوار الموقع', 'مشاركات لينكد إن الطويلة', 'النشرة البريدية الأسبوعية'],
    steps: [
      {
        id: 'cs1',
        titleAr: 'مقال أو بوست تشويقي لقصة نجاح بالأرقام',
        titleEn: 'Compelling Proof Teaser',
        type: 'traffic',
        descriptionAr: 'مثل: "كيف ساعدنا شركة عقارية على خفض تكلفة العميل بنسبة 64% في 90 يوماً".'
      },
      {
        id: 'cs2',
        titleAr: 'صفحة دراسة الحالة المفصلة (Case Study Breakdown)',
        titleEn: 'Comprehensive Case Study Page',
        type: 'page',
        descriptionAr: 'هيكلية علمية: الوضع قبل التعاقد -> العقبة الكبرى -> النظام الذي طبقناه -> النتائج والرسوم البيانية.'
      },
      {
        id: 'cs3',
        titleAr: 'استمارة التحقق من ملائمة المنهجية لعملك',
        titleEn: 'Fit Assessment Call Form',
        type: 'conversion',
        descriptionAr: 'دعوة مباشرة: "هل تريد معرفة إن كان بإمكاننا تطبيق نفس هذا النظام في شركتك؟ احجز جلسة مراجعة".',
        isPrimary: true
      },
      {
        id: 'cs4',
        titleAr: 'جلسة التقييم والتعاقد التنفيذي',
        titleEn: 'Execution Strategy Call',
        type: 'outcome',
        descriptionAr: 'مكالمة مبنية على أرضية قوية من الثقة تنتهي بعرض أسعار مرحب به ومقبول.'
      }
    ],
    whyItWorks: [
      'الأرقام الموثقة واللقطات الحية من لوحات التحكم تزيل 90% من اعتراضات الشك.',
      'العميل يرى نفسه في بطل القصة ويدرك أن وضعه الحالي ليس ميؤوساً منه.',
      'يبعدك تماماً عن المنافسة السعرية الرخيصة ويضعك في فئة الشريك الاستراتيجي الموثوق.'
    ],
    whenToUse: 'لإعادة إحياء العملاء المتوقفين في مرحلة التردد أو لجذب عملاء كبار يبحثون عن إثباتات ملموسة.',
    commonMistake: 'ذكر النتائج فقط دون شرح الخطوات والتحديات؛ الشفافية في ذكر الصعوبات تجعل القصة أكثر مصداقية.',
    implementationNote: 'احصل دائماً على إذن مكتوب من العميل أو اذكر الحالة دون تسمية الشركة إن كانت هناك سرية بيانات.',
    keyMetric: 'معدل الحجز من قراء دراسة الحالة (Read-to-Book Conversion)'
  },

  // 23. Newsletter Funnel
  {
    number: 23,
    id: 'newsletter-funnel',
    nameAr: 'Funnel النشرة البريدية المتخصصة',
    nameEn: 'Dedicated Newsletter Sponsorship Funnel',
    tagline: 'بناء وسيلة إعلامية مصغرة متخصصة ترسل أسبوعياً وتدر دخلاً عبر الرعايات والعروض الخاصة',
    category: 'nurture-email',
    complexity: 'مبتدئ',
    estimatedTimeToLaunch: '1 - 2 يوم',
    goal: 'جذب آلاف المشتركين لنشرة بريدية متميزة تصبح القناة الرئيسية للتواصل والتسويق دون خوارزميات خارجية.',
    bestFor: 'صناع المحتوى، الصحفيين المستقلين، مديري المجتمعات، والمختصين في مجالات دقيقة (AI، مال، تقنية).',
    trafficSources: ['توصيات النشرات البريدية الأخرى (Newsletter Cross-promo)', 'منشورات منصة X ولينكد إن', 'توصيات المشتركين'],
    steps: [
      {
        id: 'nl1',
        titleAr: 'صفحة اشتراك مينيمال وفائقة الوضوح',
        titleEn: 'Minimalist Newsletter Landing Page',
        type: 'page',
        descriptionAr: 'عنوان يحدد الإيقاع والفائدة الدقيقة (مثل: ينضم 12,000 رائد أعمال كل ثلاثاء لقراءة أحدث استراتيجيات النمو).'
      },
      {
        id: 'nl2',
        titleAr: 'تسجيل البريد بنقرة واحدة (1-Click Subscribe)',
        titleEn: 'Instant Email Opt-in',
        type: 'conversion',
        descriptionAr: 'حقل إدخال بريد فقط مع استعراض عينة سريعة من الأعداد السابقة للقراءة قبل الاشتراك.',
        benchmarkRate: '45% - 60% تحويل',
        isPrimary: true
      },
      {
        id: 'nl3',
        titleAr: 'صفحة التوصية الشبكية بالاشتراك بنشرات أخرى (Recommendation Wall)',
        titleEn: 'Co-Registration Recommendation Wall',
        type: 'upsell',
        descriptionAr: 'عرض اشتراك في نشرات بريدية شريكة لكسب مشتركين متبادلين أو عمولة عن كل اشتراك (SparkLoop / Beehiiv).'
      },
      {
        id: 'nl4',
        titleAr: 'رسالة الترحيب الأولى وطلب الرد التفاعلي',
        titleEn: 'Welcome Email & Deliverability Hack',
        type: 'followup',
        descriptionAr: 'رسالة تطلب من المشترك الرد بكلمة واحدة لضمان عدم ذهاب الرسائل إلى مجلد الترويجات (Promotions).'
      }
    ],
    whyItWorks: [
      'صفحة الهبوط بسيطة للغاية ولا تحتوي على أي مشتتات أو حواجز نفسية.',
      'التوصيات الشبكية تسمح بالنمو المتسارع عبر تبادل المشتركين مع نشرات أخرى في نفس مجالك.',
      'النشرة البريدية أصل تجاري مستقل يرتفع تقييمه المالي بازدياد عدد وحيوية المشتركين.'
    ],
    whenToUse: 'لبناء حضور موثوق طويل الأجل يستمر لسنوات ويوفر لك تدفقات مالية من الرعايات وعروضك الخاصة.',
    commonMistake: 'عدم الالتزام بموعد إرسال ثابت؛ القارئ يجب أن يعتاد على وصول رسالتك في نفس اليوم والتوقيت أسبوعياً.',
    implementationNote: 'اطلب من المشترك نقل بريدك لصندوق الوارد الأساسي في أول رسالة لتضمن وصولاً بريدياً يتجاوز 40%.',
    keyMetric: 'معدل فتح النشرة المستقر عبر الأشهر (Consistent Open Rate > 35%)'
  },

  // 24. Waitlist Funnel
  {
    number: 24,
    id: 'waitlist-funnel',
    nameAr: 'Funnel قائمة الانتظار والترقب الحصري',
    nameEn: 'Viral Waitlist & Early Access Funnel',
    tagline: 'تحويل إطلاق منتجك أو برمجيتك القادمة إلى سباق فيروسي يتسابق فيه الجمهور لدعوة أصدقائهم',
    category: 'course-digital',
    complexity: 'متوسط',
    estimatedTimeToLaunch: '2 - 4 أيام',
    goal: 'جمع آلاف المسجلين المتشوقين قبل إطلاق المنتج أو الخدمة، وخلق انتشار فيروسي عبر نظام الترتيب والإحالة.',
    bestFor: 'تطبيقات الـ SaaS، المنتجات الفيزيائية الجديدة، منصات التداول، وعضويات المجتمعات المغلقة.',
    trafficSources: ['إعلانات التشويق (Teaser Ads)', 'سلاسل منشورات كواليس البناء (Build in Public)', 'منصات Product Hunt وتويتر'],
    steps: [
      {
        id: 'wl1',
        titleAr: 'صفحة تشويق سرية وأنيقة (Coming Soon Teaser)',
        titleEn: 'High-Aesthetic Teaser Landing',
        type: 'page',
        descriptionAr: 'فيديو تشويقي قصير أو رسوم متحركة للمنتج مع عداد ترقب وتلميحات عن المزايا الحصرية للأوائل.'
      },
      {
        id: 'wl2',
        titleAr: 'التسجيل للحصول على وصول مبكر (Early Access Gate)',
        titleEn: 'Early Access Email Submission',
        type: 'conversion',
        descriptionAr: 'إدخال البريد لحجز مكان في طابور الانتظار وتلقي رقم الترتيب الخاص بك فوراً.',
        isPrimary: true
      },
      {
        id: 'wl3',
        titleAr: 'لوحة الصدارة ورابط الدعوة الفيروسي (Viral Referral)',
        titleEn: 'Gamified Referral Dashboard',
        type: 'page',
        descriptionAr: 'أنت في المركز #412! ادعُ 3 من أصدقائك عبر رابطك الفريد لتتقدم 200 مركز وتحصل على اشتراك مجاني.'
      },
      {
        id: 'wl4',
        titleAr: 'رسائل التحديثات الحصرية وكواليس التطوير',
        titleEn: 'Behind-the-Scenes Insider Updates',
        type: 'followup',
        descriptionAr: 'إبقاء الشغف مشتعلاً عبر مشاركة لقطات حية من مراحل التطوير واستفتاءات عن المزايا القادمة.'
      }
    ],
    whyItWorks: [
      'يحول التسجيل من مجرد إدخال بريد إلى لعبة تنافسية اجتماعية ممتعة (Gamification).',
      'كل مشترك جديد يجلب في المتوسط 1.2 إلى 2.5 مشتركين إضافيين عبر رابطه الخاص مجاناً.',
      'يضمن أن يوم الإطلاق الرسمي سيكون مزدحماً بمئات المشترين الجاهزين للدفع فورياً.'
    ],
    whenToUse: 'قبل إطلاق أي برمجية جديدة أو دورة سنوية أو منتج ينتظره السوق بشغف.',
    commonMistake: 'فتح قائمة انتظار لأشهر طويلة دون أي تواصل مع المسجلين؛ يفقد الناس حماسهم وينسون لماذا سجلوا.',
    implementationNote: 'قدم حوافز حقيقية ومغرية لمن يتصدرون قائمة الإحالات مثل وصول مجاني دائم أو جلسة استشارية معك.',
    keyMetric: 'معامل الانتشار الفيروسي (Viral K-Factor > 1.2)'
  }
];

export const SELECTION_MATRIX_DATA: SelectionMatrixItem[] = [
  {
    number: 1,
    nameAr: 'Lead Magnet Funnel',
    nameEn: 'Lead Magnet Funnel',
    goalAr: 'جمع بيانات العملاء المحتملين وتوسيع القائمة',
    complexity: 'سهل',
    speedToLaunch: '1 - 2 يوم',
    bestTraffic: 'إعلانات السوشيال + محتوى عضوي',
    isBeginnerFriendly: true,
    salesDirectness: 'غير مباشر'
  },
  {
    number: 2,
    nameAr: 'Email Capture Funnel',
    nameEn: 'Email Capture Funnel',
    goalAr: 'تحويل زوار الموقع الحاليين إلى مشتركين دائمين',
    complexity: 'سهل',
    speedToLaunch: 'يوم واحد',
    bestTraffic: 'ترافيك الموقع الحالي + SEO',
    isBeginnerFriendly: true,
    salesDirectness: 'غير مباشر'
  },
  {
    number: 3,
    nameAr: 'Tripwire Funnel',
    nameEn: 'Tripwire Funnel',
    goalAr: 'تصفير تكلفة الإعلانات وتحويل المسجل لمشترٍ فوري',
    complexity: 'متوسط',
    speedToLaunch: '3 - 5 أيام',
    bestTraffic: 'إعلانات فيسبوك وتيك توك ممولة',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 4,
    nameAr: 'Service Inquiry Funnel',
    nameEn: 'Service Inquiry Funnel',
    goalAr: 'استقطاب وتأهيل طلبات خدمات الشركات والأفراد',
    complexity: 'سهل',
    speedToLaunch: '2 - 3 أيام',
    bestTraffic: 'لينكد إن + بورتفوليو + إحالات',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 5,
    nameAr: 'Call Booking Funnel',
    nameEn: 'Call Booking Funnel',
    goalAr: 'جدولة مكالمات مبيعات مؤهلة بنسب حضور مرتفعة',
    complexity: 'متوسط',
    speedToLaunch: '2 - 3 أيام',
    bestTraffic: 'إعلانات ممولة + لينكد إن',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 6,
    nameAr: 'High-Ticket Application',
    nameEn: 'High-Ticket App Funnel',
    goalAr: 'بيع برامج واستشارات بقيمة تفوق 3,000$ عبر نماذج قبول',
    complexity: 'متقدم',
    speedToLaunch: '4 - 7 أيام',
    bestTraffic: 'إعلانات مدروسة + بودكاست + شبكات نفوذ',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 7,
    nameAr: 'Live Webinar Funnel',
    nameEn: 'Webinar Registration',
    goalAr: 'بيع عروض متوسطة وعالية لجمهور مباشر في بث حي',
    complexity: 'متوسط',
    speedToLaunch: '3 - 5 أيام',
    bestTraffic: 'إعلانات سريعة + النشرة البريدية',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 8,
    nameAr: 'Evergreen Webinar Funnel',
    nameEn: 'Evergreen Webinar',
    goalAr: 'ماكينة مبيعات مؤتمتة تعمل 24/7 دون حضور حي',
    complexity: 'متقدم',
    speedToLaunch: '5 - 7 أيام',
    bestTraffic: 'إعلانات يوتيوب وبحث جوجل',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 9,
    nameAr: 'Sales Page Funnel',
    nameEn: 'Long-Form Sales Page',
    goalAr: 'بيع دورة أو أداة مكتوبة مباشرة بقوة الإقناع النصي',
    complexity: 'متوسط',
    speedToLaunch: '4 - 6 أيام',
    bestTraffic: 'بحث جوجل + إعادة استهداف',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 10,
    nameAr: 'VSL Funnel',
    nameEn: 'Video Sales Letter',
    goalAr: 'تحويل المشاهدين لمشترين عبر فيديو قصصي مشوق',
    complexity: 'متوسط',
    speedToLaunch: '3 - 5 أيام',
    bestTraffic: 'يوتيوب + تيك توك + ريلز',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 11,
    nameAr: 'Mini Course Funnel',
    nameEn: 'Mini Course Funnel',
    goalAr: 'بناء ولاء سريع عبر 3 دروس يمهد للبرنامج الأكبر',
    complexity: 'متوسط',
    speedToLaunch: '3 - 4 أيام',
    bestTraffic: 'محتوى يوتيوب عضوي + إعلانات',
    isBeginnerFriendly: true,
    salesDirectness: 'هجين'
  },
  {
    number: 12,
    nameAr: 'Course Launch Funnel',
    nameEn: 'Launch / Cart Open',
    goalAr: 'تحقيق مبيعات فصيلة ضخمة في أسبوع عبر غلق السلة',
    complexity: 'متقدم',
    speedToLaunch: '10 - 14 يوماً',
    bestTraffic: 'قائمة بريدية + قائمة انتظار VIP',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 13,
    nameAr: 'Affiliate Review Funnel',
    nameEn: 'Affiliate Review Funnel',
    goalAr: 'كسب عمولات بمراجعة شفافة وعرض بونص مخصص',
    complexity: 'سهل',
    speedToLaunch: '1 - 2 يوم',
    bestTraffic: 'بحث جوجل (SEO) + يوتيوب',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 14,
    nameAr: 'Affiliate Comparison Funnel',
    nameEn: 'Affiliate Vs Funnel',
    goalAr: 'مساعدة الحائرين بين خيارين وكسب عمولة في كلتا الحالتين',
    complexity: 'سهل',
    speedToLaunch: '2 - 3 أيام',
    bestTraffic: 'كلمات بحث المقارنة (Vs)',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 15,
    nameAr: 'Bridge Page Funnel',
    nameEn: 'Bridge Page Funnel',
    goalAr: 'حماية الحسابات الإعلانية وجمع الإيميل قبل رابط الإحالة',
    complexity: 'سهل',
    speedToLaunch: '1 - 2 يوم',
    bestTraffic: 'إعلانات ميتا وتيك توك',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 16,
    nameAr: 'Quiz Funnel',
    nameEn: 'Quiz & Diagnostic Funnel',
    goalAr: 'تفاعل فيروسي فائق وتقسيم الجمهور لعروض دقيقة',
    complexity: 'متقدم',
    speedToLaunch: '5 - 7 أيام',
    bestTraffic: 'إعلانات السوشيال التفاعلية',
    isBeginnerFriendly: false,
    salesDirectness: 'هجين'
  },
  {
    number: 17,
    nameAr: 'Challenge Funnel',
    nameEn: '5-Day Challenge Funnel',
    goalAr: 'تنشيط المجتمع لـ 5 أيام وتتويج ذلك ببيع البرنامج الكامل',
    complexity: 'متقدم',
    speedToLaunch: '7 - 10 أيام',
    bestTraffic: 'إعلانات أحداث + مجتمع متفاعل',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 18,
    nameAr: 'Consultation Funnel',
    nameEn: 'Paid Audit Funnel',
    goalAr: 'تصفية العملاء بجلسة مدفوعة تمهد لتعاقد استشاري شهري',
    complexity: 'متوسط',
    speedToLaunch: '2 - 3 أيام',
    bestTraffic: 'لينكد إن + بحث Google Business',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 19,
    nameAr: 'Product Launch Funnel',
    nameEn: 'Jeff Walker PLF Funnel',
    goalAr: 'هندسة الترقب لمنتج رائد عبر 4 فيديوهات سينمائية',
    complexity: 'متقدم',
    speedToLaunch: '10 - 15 يوماً',
    bestTraffic: 'قائمة مهتمين + مؤثرين وشركاء',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 20,
    nameAr: 'E-commerce Upsell Funnel',
    nameEn: 'E-com 1-Click Upsell',
    goalAr: 'رفع متوسط قيمة السلة بنسبة 40% بنقرة واحدة بعد الشراء',
    complexity: 'متوسط',
    speedToLaunch: '3 - 5 أيام',
    bestTraffic: 'تيك توك + سناب شات + كتالوج ميتا',
    isBeginnerFriendly: false,
    salesDirectness: 'مباشر'
  },
  {
    number: 21,
    nameAr: 'Free Audit Funnel',
    nameEn: 'Free Audit Funnel',
    goalAr: 'فحص نشاط العميل بفيديو Loom وإظهار حاجته لخدماتك',
    complexity: 'سهل',
    speedToLaunch: '2 - 3 أيام',
    bestTraffic: 'رسائل مخصصة + استعراض نتائج',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 22,
    nameAr: 'Case Study Funnel',
    nameEn: 'Case Study Funnel',
    goalAr: 'إقناع كبار العملاء بأرقام ونتائج حقيقية لعميل سابق',
    complexity: 'سهل',
    speedToLaunch: '2 - 3 أيام',
    bestTraffic: 'إعادة استهداف + لينكد إن',
    isBeginnerFriendly: true,
    salesDirectness: 'مباشر'
  },
  {
    number: 23,
    nameAr: 'Newsletter Funnel',
    nameEn: 'Newsletter Funnel',
    goalAr: 'بناء أصل إعلامي مستقل يربح من الرعايات والعروض',
    complexity: 'سهل',
    speedToLaunch: '1 - 2 يوم',
    bestTraffic: 'توصيات متبادلة + تويتر ولينكد إن',
    isBeginnerFriendly: true,
    salesDirectness: 'غير مباشر'
  },
  {
    number: 24,
    nameAr: 'Waitlist Funnel',
    nameEn: 'Viral Waitlist Funnel',
    goalAr: 'خلق سباق فيروسي لجمع آلاف المشتركين قبل يوم الإطلاق',
    complexity: 'متوسط',
    speedToLaunch: '2 - 4 أيام',
    bestTraffic: 'تشويق + Build in Public',
    isBeginnerFriendly: true,
    salesDirectness: 'هجين'
  }
];

export const COMMON_MISTAKES = [
  {
    number: 1,
    titleAr: 'بناء صفحات الـ Funnel قبل تحديد الوجهة والهدف النهائي',
    titleEn: 'Designing Pages Before Mapping Journey',
    consequenceAr: 'ينتج عن ذلك صفحات معزولة، ورسائل متناقضة، ومعدلات ارتداد مرتفعة لعدم وضوح الخطوة التالية.',
    solutionAr: 'ارسم الخريطة البصرية أولاً على الورق: من أين يدخل الزائر؟ ما المشكلة التي يفكر فيها؟ ما الوعد الوحيد؟ وأين يذهب تالياً؟'
  },
  {
    number: 2,
    titleAr: 'غياب نداء العمل الأحادي والواضح (Confusing Multi-CTAs)',
    titleEn: 'Multiple Competing Calls to Action',
    consequenceAr: 'العميل الحائر والمشتت دائماً ما يختار الخيار الأسهل: إغلاق الصفحة والمغادرة دون اتخاذ أي إجراء.',
    solutionAr: 'قاعدة الصفحة الواحدة = إجراء واحد فقط (One Page, One Job). لا تضع روابط لشبكات التواصل أو روابط لمقالات أخرى داخل صفحة تحويل.'
  },
  {
    number: 3,
    titleAr: 'إضافة خطوات وعقبات بلا مبرر استراتيجي حقيقي',
    titleEn: 'Friction & Gratuitous Steps',
    consequenceAr: 'كل خطوة إضافية تطلبها في الفانل تخصم بين 20% إلى 40% من الزوار الذين كانوا مستعدين للتحويل.',
    solutionAr: 'اختصر المسار قدر الإمكان؛ إن لم تكن بحاجة ماسة لمعرفة رقم الهاتف في المرحلة الأولى، فاكتفِ بالاسم والبريد فقط.'
  },
  {
    number: 4,
    titleAr: 'إهمال المتابعة البريدية الآلية بعد التسجيل الأولي',
    titleEn: 'Ignoring Automated Follow-up Sequences',
    consequenceAr: 'أكثر من 70% من المبيعات تحدث بين اليوم الثالث واليوم العاشر من المتابعة؛ إهمالها يعني ترك غالبية الأرباح على الطاولة.',
    solutionAr: 'جهز سلسلة ترحيبية مؤتمتة من 4 إلى 5 رسائل مسبقاً قبل إطلاق أي صفحة هبوط أو إعلان ممول.'
  },
  {
    number: 5,
    titleAr: 'تجاهل التطابق الذهني بين الإعلان وصفحة الهبوط (Message Match)',
    titleEn: 'Severe Message & Aesthetic Disconnect',
    consequenceAr: 'إذا رأى الزائر في الإعلان وعداً بـ "قالب تسعير الخدمات" ودخل الصفحة ليجد عنواناً عن "كيف تصبح مستشاراً ناجحاً"، فسيشعر بالخديعة فوراً.',
    solutionAr: 'تطابق حرفي بنسبة 100% بين الكلمات المفتاحية في الإعلان، والعنوان الرئيسي في صفحة الهبوط، والهوية البصرية.'
  },
  {
    number: 6,
    titleAr: 'تصميم الفانل لسطح المكتب وإهمال تجربة الهاتف الذكي',
    titleEn: 'Overlooking Mobile-First Conversion Experience',
    consequenceAr: 'أكثر من 75% إلى 85% من ترافيك الإعلانات يأتي عبر الهواتف الذكية؛ الصفحات البطيئة أو الخطوط غير المقروءة تدمر العائد.',
    solutionAr: 'ابنِ واختبر صفحاتك على شاشة الهاتف أولاً، وتأكد من سرعة تحميل أقل من ثانيتين وسهولة النقر على الأزرار بالإبهام.'
  }
];

export const DECISION_GUIDE = [
  {
    condition: 'إذا كان هدفك الأساسي جمع Leads وتوسيع قائمتك من الصفر بأقل تكلفة',
    recommended: 'Lead Magnet Funnel (#1) أو Quiz Funnel (#16) أو Newsletter Funnel (#23)',
    reason: 'توفر هذه الفانلز مقاومة دخول شبه معدومة وتمنح الزائر قيمة فورية تجعله يقدم بياناته بثقة.'
  },
  {
    condition: 'إذا كنت تبيع خدمات احترافية، استشارات، أو مشاريع بميزانية تفوق 1,000$',
    recommended: 'Call Booking Funnel (#5) أو High-Ticket Application (#6) أو Service Inquiry (#4)',
    reason: 'العملاء في هذا المستوى يحتاجون إلى تصفية وتأهيل مسبق ومحادثة استكشافية حية قبل التوقيع.'
  },
  {
    condition: 'إذا كنت تبيع دورة مسجلة أو منتجاً رقمياً بسعر بين 47$ إلى 497$',
    recommended: 'VSL Funnel (#10) أو Mini Course Funnel (#11) أو Long-Form Sales Page (#9)',
    reason: 'توفر هذه الفانلز مساحة كافية لسرد القصة وهدم الاعتراضات وإظهار التحول العملي دون الحاجة لمكالمات.'
  },
  {
    condition: 'إذا كنت تبيع عروضاً تدريبية واستشارية متقدمة بين 500$ إلى 2,000$',
    recommended: 'Live Webinar Funnel (#7) أو 5-Day Challenge (#17) أو Evergreen Webinar (#8)',
    reason: 'الويبينار والتحدي يمنحانك 60 إلى 90 دقيقة من الانتباه الكامل لبناء الرغبة وطرح العرض الحصري.'
  },
  {
    condition: 'إذا كان عملك قائماً على التسويق بالعمولة (الأفلييت) لبرمجيات ومنتجات خارجية',
    recommended: 'Affiliate Review Funnel (#13) أو Comparison Funnel (#14) أو Bridge Page (#15)',
    reason: 'تبني جسراً من المصداقية الخاصة بك وتضمن امتلاك بيانات العميل قبل توجيهه لرابط الشراء الخارجي.'
  },
  {
    condition: 'إذا كنت تدير متجراً إلكترونياً لمنتجات مادية وتريد مضاعفة أرباحك الصافية',
    recommended: 'E-commerce Funnel with One-Click Upsell (#20) و Tripwire Funnel (#3)',
    reason: 'تحقيق مبيعات تكميلية فورية بعد إتمام الشراء الأول يرفع متوسط قيمة الطلب (AOV) بنسبة تفوق 40%.'
  }
];
