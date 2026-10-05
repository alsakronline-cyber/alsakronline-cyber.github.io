import type { L } from '../i18n';

const v = (en: string, ar: string): L => ({ en, ar });

export type Post = {
  slug: string;
  date: string;
  minutes: number;
  video: string;
  title: L;
  excerpt: L;
  /** Paragraphs; a paragraph starting with "## " renders as a heading. */
  body: L[];
};

export const posts: Post[] = [
  {
    slug: 'flexible-chain-vs-belt-conveyors',
    date: '2026-09-14',
    minutes: 5,
    video: 'sus304-flex-chain',
    title: v('Flexible chain vs. belt conveyors: which one fits your line?', 'سيور الجنزير المرنة أم السيور العادية: أيهما يناسب خطك؟'),
    excerpt: v(
      'A practical comparison of footprint, hygiene, maintenance and cost for packaging lines.',
      'مقارنة عملية من حيث المساحة والنظافة والصيانة والتكلفة لخطوط التعبئة.',
    ),
    body: [
      v(
        'Choosing the right conveyor type early in a project saves space, money and maintenance hours for years. The two most common options for packaged products are flexible chain conveyors and flat belt conveyors.',
        'اختيار نوع السير المناسب مبكرًا في المشروع يوفر المساحة والمال وساعات الصيانة لسنوات. وأكثر خيارين شيوعًا للمنتجات المعبأة هما سيور الجنزير المرنة والسيور المسطحة.',
      ),
      v('## Layout freedom', '## حرية التصميم'),
      v(
        'A flexible chain bends horizontally and vertically, so one conveyor with one drive can follow curves, climb over walkways and descend to the next machine. A belt conveyor needs a separate unit and a transfer at every turn.',
        'ينحني الجنزير المرن أفقيًا ورأسيًا، فيمكن لسير واحد بوحدة إدارة واحدة أن يتبع المنحنيات ويصعد فوق الممرات ويهبط إلى الماكينة التالية. أما السير العادي فيحتاج وحدة منفصلة ونقطة تحويل عند كل انعطاف.',
      ),
      v('## Hygiene and maintenance', '## النظافة والصيانة'),
      v(
        'Flexible chains are made of individual links that can be replaced in minutes without tools. Open aluminium or stainless beams are easy to clean. Belts can be cheaper for long straight runs of light products, but tracking and splicing need regular attention.',
        'تتكون الجنازير المرنة من حلقات منفصلة يمكن استبدالها في دقائق دون أدوات، والهياكل المفتوحة من الألومنيوم أو الستانلس سهلة التنظيف. قد تكون السيور العادية أرخص للمسارات المستقيمة الطويلة للمنتجات الخفيفة، لكنها تحتاج متابعة دورية للانحراف واللحامات.',
      ),
      v('## Our recommendation', '## توصيتنا'),
      v(
        'For compact, multi-level packaging lines with many direction changes, flexible chain wins. For long, straight, wide flows, belts or modular belts are often the better value. Send us your layout and we will recommend the most economical combination.',
        'لخطوط التعبئة المدمجة متعددة المستويات وكثيرة الانعطافات، يتفوق الجنزير المرن. وللمسارات الطويلة المستقيمة العريضة، غالبًا ما تكون السيور العادية أو المعيارية أوفر. أرسل لنا مخططك وسنقترح أكثر تركيبة اقتصادية.',
      ),
    ],
  },
  {
    slug: 'when-to-use-a-spiral-conveyor',
    date: '2026-08-20',
    minutes: 4,
    video: 'spiral-2022',
    title: v('When should you use a spiral conveyor?', 'متى تستخدم السير الحلزوني؟'),
    excerpt: v(
      'Spirals move products between levels continuously on a tiny footprint. Here is when they make sense.',
      'تنقل الحلزونيات المنتجات بين المستويات بشكل متواصل على مساحة صغيرة. إليك متى تكون الخيار الأمثل.',
    ),
    body: [
      v(
        'Whenever products need to change level — to a mezzanine, over a walkway or into a cooling zone — you can use an incline, a lift or a spiral. Spirals are usually the most space-efficient option.',
        'عندما تحتاج المنتجات لتغيير المستوى — إلى ميزانين أو فوق ممر أو إلى منطقة تبريد — يمكنك استخدام سير مائل أو مصعد أو حلزوني. وعادةً ما يكون الحلزوني الخيار الأكثر توفيرًا للمساحة.',
      ),
      v('## Continuous flow', '## تدفق متواصل'),
      v(
        'Unlike a vertical lift, a spiral never stops and waits for a cycle. Products enter and leave continuously at line speed, which keeps upstream machines running.',
        'على عكس المصعد الرأسي، لا يتوقف الحلزوني منتظرًا دورة. تدخل المنتجات وتخرج بشكل متواصل بسرعة الخط، مما يُبقي الماكينات السابقة تعمل.',
      ),
      v('## Built-in buffer', '## تخزين مؤقت مدمج'),
      v(
        'The length of track inside a spiral naturally stores products, absorbing short stops downstream. Spirals can also be used purely as cooling or accumulation towers.',
        'يخزّن طول المسار داخل الحلزوني المنتجات بشكل طبيعي، فيمتص التوقفات القصيرة في المراحل التالية. ويمكن استخدام الحلزونيات أيضًا كأبراج تبريد أو تجميع.',
      ),
      v(
        'Tell us your product size, weight, height difference and throughput, and our engineers will size the right spiral for you.',
        'أخبرنا بأبعاد منتجك ووزنه وفرق الارتفاع والإنتاجية، وسيحدد مهندسونا الحلزوني المناسب لك.',
      ),
    ],
  },
  {
    slug: 'hygienic-conveyor-design-food-pharma',
    date: '2026-07-08',
    minutes: 6,
    video: 'flex-chain-pharma',
    title: v('Hygienic conveyor design for food and pharma', 'التصميم الصحي للسيور في الأغذية والأدوية'),
    excerpt: v(
      'Materials, open frames and cleaning access: the details that pass audits.',
      'الخامات والهياكل المفتوحة وسهولة الوصول للتنظيف: التفاصيل التي تجتاز التدقيق.',
    ),
    body: [
      v(
        'In food and pharmaceutical plants, the conveyor is part of the product-contact zone. Its design directly affects cleaning time, contamination risk and audit results.',
        'في مصانع الأغذية والأدوية، يُعد السير جزءًا من منطقة ملامسة المنتج، ويؤثر تصميمه مباشرة على زمن التنظيف وخطر التلوث ونتائج التدقيق.',
      ),
      v('## Choose the right materials', '## اختر الخامات المناسبة'),
      v(
        'Use SUS304 (or SUS316 for aggressive cleaning agents) for frames, and FDA-compliant plastics for chains and wear strips.',
        'استخدم الستانلس SUS304 (أو SUS316 مع مواد التنظيف القوية) للهياكل، وبلاستيك متوافق مع FDA للجنازير وشرائح التآكل.',
      ),
      v('## Keep it open', '## اجعله مفتوحًا'),
      v(
        'Open frames, sloped surfaces and minimal hidden gaps let water drain and make inspection easy. Avoid hollow sections that cannot be sealed.',
        'الهياكل المفتوحة والأسطح المائلة وتقليل الفراغات المخفية تسمح بتصريف المياه وتسهّل الفحص. تجنّب المقاطع المجوفة التي لا يمكن إحكامها.',
      ),
      v('## Design for quick changeover', '## صمّم لتغيير سريع'),
      v(
        'Tool-free guide adjustment and quick-release chains reduce downtime between batches and make line clearance faster.',
        'ضبط قضبان التوجيه دون أدوات والجنازير سريعة الفك يقللان التوقف بين الدفعات ويسرّعان تنظيف الخط.',
      ),
    ],
  },
];

export const legal = {
  updated: '2026-10-05',
  privacy: [
    v('## Who we are', '## من نحن'),
    v(
      'This website is operated by Alsakr For Conveying & Handling Systems, 10th of Ramadan City, Egypt. Contact: hagar@topgroupco.com.',
      'يُدار هذا الموقع بواسطة الصقر لأنظمة النقل والسيور ونظم المناولة، مدينة العاشر من رمضان، مصر. للتواصل: hagar@topgroupco.com.',
    ),
    v('## What we collect', '## ما البيانات التي نجمعها'),
    v(
      'This site does not use analytics or advertising cookies and has no user accounts. Our contact and quotation forms do not store your data on our servers — they open WhatsApp or your email app with a pre-filled message that you choose to send.',
      'لا يستخدم هذا الموقع ملفات تعريف ارتباط للتحليلات أو الإعلانات ولا يحتوي على حسابات مستخدمين. نماذج التواصل وطلب عرض السعر لا تخزن بياناتك على خوادمنا — بل تفتح واتساب أو تطبيق البريد برسالة جاهزة تختار أنت إرسالها.',
    ),
    v(
      'We store only your language and light/dark preference in your browser’s local storage.',
      'نحفظ فقط تفضيل اللغة والوضع الفاتح/الداكن في التخزين المحلي لمتصفحك.',
    ),
    v('## How we use your messages', '## كيف نستخدم رسائلك'),
    v(
      'Messages you send us are used only to answer your enquiry, prepare quotations and provide support. We do not sell or share your data with third parties.',
      'نستخدم الرسائل التي ترسلها فقط للرد على استفسارك وإعداد عروض الأسعار وتقديم الدعم. لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة.',
    ),
    v('## Third-party services', '## خدمات الطرف الثالث'),
    v(
      'The contact page embeds Google Maps, and fonts are loaded from Google Fonts. These services may process your IP address under their own privacy policies.',
      'تتضمن صفحة التواصل خريطة جوجل، ويتم تحميل الخطوط من Google Fonts. قد تعالج هذه الخدمات عنوان IP الخاص بك وفق سياسات الخصوصية الخاصة بها.',
    ),
    v('## Your rights', '## حقوقك'),
    v(
      'You can ask us at any time to access or delete messages you have sent us by emailing hagar@topgroupco.com.',
      'يمكنك أن تطلب منا في أي وقت الاطلاع على الرسائل التي أرسلتها أو حذفها عبر البريد hagar@topgroupco.com.',
    ),
  ],
  terms: [
    v('## Use of this website', '## استخدام الموقع'),
    v(
      'The content of this website is provided for general information about our products and services. By using it you agree to these terms.',
      'يُقدَّم محتوى هذا الموقع كمعلومات عامة عن منتجاتنا وخدماتنا. باستخدامك له فإنك توافق على هذه الشروط.',
    ),
    v('## Product information', '## معلومات المنتجات'),
    v(
      'Specifications shown are typical values. Final specifications, prices and delivery times are confirmed only in a written quotation.',
      'المواصفات المعروضة قيم نموذجية. تُعتمد المواصفات والأسعار ومواعيد التسليم النهائية فقط في عرض سعر مكتوب.',
    ),
    v('## Intellectual property', '## الملكية الفكرية'),
    v(
      'Texts, videos, images and logos on this site belong to Alsakr or its partners, including YA-VA, and may not be reused without permission.',
      'النصوص والفيديوهات والصور والشعارات في هذا الموقع مملوكة للصقر أو شركائها، ومنهم YA-VA، ولا يجوز إعادة استخدامها دون إذن.',
    ),
    v('## Liability', '## المسؤولية'),
    v(
      'We take care to keep information accurate but are not liable for decisions made solely on the basis of website content.',
      'نحرص على دقة المعلومات لكننا لا نتحمل المسؤولية عن قرارات تُتخذ بناءً على محتوى الموقع وحده.',
    ),
    v('## Governing law', '## القانون الحاكم'),
    v('These terms are governed by the laws of the Arab Republic of Egypt.', 'تخضع هذه الشروط لقوانين جمهورية مصر العربية.'),
  ],
};
