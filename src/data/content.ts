import type { L } from '../i18n';

const v = (en: string, ar: string): L => ({ en, ar });

export type Industry = { slug: string; name: L; text: L; video: string; needs: L[] };

export const industries: Industry[] = [
  {
    slug: 'food',
    name: v('Food & Bakery', 'الأغذية والمخابز'),
    text: v(
      'Hygienic, wash-down conveyors for raw, packed and frozen food — from dough pieces to finished cartons.',
      'سيور صحية قابلة للغسيل للأغذية الخام والمعبأة والمجمدة — من قطع العجين حتى الكراتين النهائية.',
    ),
    video: 'flex-chain-food',
    needs: [v('FDA food-contact materials', 'خامات ملامسة للغذاء FDA'), v('Open, cleanable frames', 'هياكل مفتوحة سهلة التنظيف'), v('Cooling & proofing spirals', 'حلزونيات تبريد وتخمير')],
  },
  {
    slug: 'pharma',
    name: v('Pharmaceutical & Cosmetics', 'الأدوية ومستحضرات التجميل'),
    text: v(
      'Precise, low-particle conveying for vials, blisters, tubes and cartons in GMP environments.',
      'نقل دقيق ونظيف للفيالات والشرائط والأنابيب والكراتين في بيئات GMP.',
    ),
    video: 'flex-chain-pharma-vertical',
    needs: [v('Stainless SUS304 frames', 'هياكل ستانلس SUS304'), v('Gentle no-gap transfer', 'تحويل لطيف بدون فراغات'), v('Line clearance friendly', 'سهولة تنظيف الخط')],
  },
  {
    slug: 'beverage',
    name: v('Beverage & Dairy', 'المشروبات والألبان'),
    text: v(
      'Bottle, can and pack conveyors with accumulation that keep fillers running at full speed.',
      'سيور للزجاجات والعلب والعبوات مع تجميع يُبقي ماكينات التعبئة تعمل بأقصى سرعة.',
    ),
    video: 'no-gap-chain',
    needs: [v('High-speed single-filers', 'توجيه سريع في صف واحد'), v('Buffer tables', 'طاولات تجميع'), v('Wet-area construction', 'هياكل للمناطق الرطبة')],
  },
  {
    slug: 'fmcg',
    name: v('FMCG & Detergents', 'السلع الاستهلاكية والمنظفات'),
    text: v(
      'Spirals and flexible conveyors that link packing, wrapping and palletising across levels.',
      'حلزونيات وسيور مرنة تربط التعبئة والتغليف والتحميل على الباليتات عبر المستويات.',
    ),
    video: 'detergent-spiral',
    needs: [v('Multi-level transport', 'نقل متعدد المستويات'), v('Carton & bag handling', 'نقل الكراتين والأكياس'), v('High uptime', 'أعلى وقت تشغيل')],
  },
  {
    slug: 'assembly',
    name: v('Assembly & Electronics', 'التجميع والإلكترونيات'),
    text: v(
      'Pallet systems and precision conveyors for assembly, testing and inspection cells.',
      'أنظمة باليتات وسيور دقيقة لخلايا التجميع والاختبار والفحص.',
    ),
    video: 'pallet-chain',
    needs: [v('Accurate positioning', 'تمركز دقيق'), v('ESD-safe options', 'خيارات مضادة للكهرباء الساكنة'), v('Robot integration', 'تكامل مع الروبوتات')],
  },
  {
    slug: 'logistics',
    name: v('Logistics & Warehousing', 'اللوجستيات والمستودعات'),
    text: v(
      'Spirals, belts and sortation that move cases and totes between floors and dispatch.',
      'حلزونيات وسيور وأنظمة فرز تنقل الكراتين والصناديق بين الطوابق ومنطقة الشحن.',
    ),
    video: 'spiral-2022',
    needs: [v('Mezzanine spirals', 'حلزونيات الميزانين'), v('Merge & divert', 'دمج وتحويل'), v('Scalable layouts', 'تصميمات قابلة للتوسع')],
  },
];

export type Project = {
  slug: string;
  title: L;
  summary: L;
  industry: string;
  product: string;
  video: string;
  challenge: L;
  solution: L;
  result: L;
  facts: { label: L; value: L }[];
};

// Example case studies built around the factory footage — replace with real client details when available.
export const projects: Project[] = [
  {
    slug: 'food-processing-line',
    title: v('Food processing conveyor line', 'خط نقل لمصنع أغذية'),
    summary: v('Complete multi-level conveying for a food packing hall.', 'نظام نقل متكامل متعدد المستويات لصالة تعبئة أغذية.'),
    industry: 'food',
    product: 'turnkey-conveying-systems',
    video: 'food-line',
    challenge: v(
      'Connect several packing machines across two levels in a crowded hall while meeting strict hygiene rules.',
      'ربط عدة ماكينات تعبئة عبر مستويين في صالة مزدحمة مع الالتزام بمعايير نظافة صارمة.',
    ),
    solution: v(
      'A stainless steel flexible chain network with integrated curves, inclines and a buffer zone, controlled from one PLC panel.',
      'شبكة سيور جنزير مرنة من الستانلس ستيل بمنحنيات وصعود ومنطقة تجميع مدمجة، يتحكم بها لوح PLC واحد.',
    ),
    result: v('Fewer transfer points, cleaner floor and a smoother product flow.', 'نقاط تحويل أقل وأرضية أنظف وتدفق أكثر سلاسة للمنتج.'),
    facts: [
      { label: v('Levels', 'المستويات'), value: v('2', '2') },
      { label: v('Material', 'الخامة'), value: v('SUS304', 'SUS304') },
    ],
  },
  {
    slug: 'flex-system-mini-spiral',
    title: v('Flex conveyor system with mini spiral', 'نظام سيور مرنة مع حلزوني صغير'),
    summary: v('Flexible chain network and compact spiral, built with YA-VA components.', 'شبكة جنزير مرنة وحلزوني مدمج بمكوّنات YA-VA.'),
    industry: 'fmcg',
    product: 'flexible-chain-conveyors',
    video: 'yava-factory-system',
    challenge: v('Elevate products to an overhead route without losing floor space.', 'رفع المنتجات إلى مسار علوي دون فقدان مساحة الأرضية.'),
    solution: v(
      'A mini spiral feeding an overhead flexible chain conveyor that crosses walkways and returns to packing.',
      'حلزوني صغير يغذي سير جنزير مرن علوي يعبر الممرات ويعود إلى التعبئة.',
    ),
    result: v('Open walkways and a continuous, quiet flow.', 'ممرات مفتوحة وتدفق هادئ ومتواصل.'),
    facts: [
      { label: v('Partner', 'الشريك'), value: v('YA-VA', 'YA-VA') },
      { label: v('Footprint', 'المساحة'), value: v('Compact', 'مدمجة') },
    ],
  },
  {
    slug: 'detergent-spiral-elevator',
    title: v('Spiral elevator for detergent packs', 'حلزوني رفع لعبوات المنظفات'),
    summary: v('Continuous vertical transport for a household detergent packing line.', 'نقل رأسي متواصل لخط تعبئة منظفات منزلية.'),
    industry: 'fmcg',
    product: 'spiral-conveyors',
    video: 'detergent-spiral',
    challenge: v('Move packs from filling to an upper packing floor at line speed.', 'نقل العبوات من التعبئة إلى طابق التغليف العلوي بسرعة الخط.'),
    solution: v('A spiral conveyor with infeed and outfeed sections matched to the filler.', 'سير حلزوني بمقاطع دخول وخروج متوافقة مع ماكينة التعبئة.'),
    result: v('No lift cycles and built-in buffer between levels.', 'بدون دورات مصعد مع تخزين مؤقت مدمج بين المستويات.'),
    facts: [
      { label: v('Type', 'النوع'), value: v('Up-spiral', 'حلزوني صاعد') },
      { label: v('Flow', 'التدفق'), value: v('Continuous', 'متواصل') },
    ],
  },
  {
    slug: 'pharmaceutical-flex-line',
    title: v('Pharmaceutical flexible chain line', 'خط جنزير مرن للأدوية'),
    summary: v('Clean, precise transport of cartons between packaging machines.', 'نقل نظيف ودقيق للكراتين بين ماكينات التغليف.'),
    industry: 'pharma',
    product: 'flexible-chain-conveyors',
    video: 'flex-chain-pharma',
    challenge: v('Link blister, cartoner and checkweigher in a GMP room.', 'ربط ماكينة الشرائط والتكرتن والوزن في غرفة GMP.'),
    solution: v('Low-particle flexible chain conveyors with smooth transfers and guide rails.', 'سيور جنزير مرنة منخفضة الجزيئات بتحويلات سلسة وقضبان توجيه.'),
    result: v('Stable cartons, fewer rejects and easy line clearance.', 'كراتين مستقرة ومرفوضات أقل وتنظيف أسهل للخط.'),
    facts: [
      { label: v('Environment', 'البيئة'), value: v('GMP', 'GMP') },
      { label: v('Chain', 'الجنزير'), value: v('Flat-top', 'مسطح') },
    ],
  },
  {
    slug: 'multi-level-flex-network',
    title: v('Multi-level flex conveyor network', 'شبكة سيور مرنة متعددة المستويات'),
    summary: v('Factory-wide flexible chain routing over machines and aisles.', 'مسارات جنزير مرنة على مستوى المصنع فوق الماكينات والممرات.'),
    industry: 'assembly',
    product: 'turnkey-conveying-systems',
    video: 'factory-system',
    challenge: v('Route products around existing equipment without a new building layout.', 'توجيه المنتجات حول المعدات القائمة دون تغيير مخطط المبنى.'),
    solution: v('Overhead flexible chain runs with vertical bends and support structures.', 'مسارات جنزير مرنة علوية بمنحنيات رأسية وهياكل دعم.'),
    result: v('Free floor space and a flexible layout for future changes.', 'أرضية حرة ومخطط مرن للتعديلات المستقبلية.'),
    facts: [
      { label: v('Routing', 'المسار'), value: v('Overhead', 'علوي') },
      { label: v('Scope', 'النطاق'), value: v('Turnkey', 'متكامل') },
    ],
  },
  {
    slug: 'packaging-buffer',
    title: v('Accumulation buffer for a packaging line', 'منطقة تجميع لخط تغليف'),
    summary: v('Flexible buffer conveyor that protects line output.', 'سير تجميع مرن يحمي إنتاجية الخط.'),
    industry: 'beverage',
    product: 'buffer-accumulation-conveyors',
    video: 'buffer-chain',
    challenge: v('Short stops at the case packer were stopping the filler.', 'التوقفات القصيرة عند ماكينة التكرتن كانت توقف ماكينة التعبئة.'),
    solution: v('A serpentine flexible buffer conveyor between filler and packer.', 'سير تجميع مرن متعرج بين ماكينة التعبئة والتكرتن.'),
    result: v('The filler keeps running through short downstream stops.', 'تستمر ماكينة التعبئة في العمل خلال التوقفات القصيرة.'),
    facts: [
      { label: v('Layout', 'التصميم'), value: v('Serpentine', 'متعرج') },
      { label: v('Gain', 'المكسب'), value: v('Higher OEE', 'كفاءة أعلى') },
    ],
  },
];

export const services = [
  {
    icon: 'compass',
    title: v('Consultation & layout design', 'الاستشارات وتصميم المخطط'),
    text: v('Site survey, product study and line layout with throughput calculations.', 'معاينة الموقع ودراسة المنتج وتصميم مخطط الخط مع حسابات الإنتاجية.'),
  },
  {
    icon: 'cube',
    title: v('Mechanical & 3D engineering', 'التصميم الميكانيكي ثلاثي الأبعاد'),
    text: v('Detailed 3D models, simulation and manufacturing drawings before a single part is cut.', 'نماذج ثلاثية الأبعاد ومحاكاة ورسومات تصنيع قبل قطع أي جزء.'),
  },
  {
    icon: 'factory',
    title: v('Manufacturing & fabrication', 'التصنيع والتشكيل'),
    text: v('In-house fabrication in 10th of Ramadan City with quality-checked components.', 'تصنيع داخلي في مدينة العاشر من رمضان بمكوّنات خاضعة لفحص الجودة.'),
  },
  {
    icon: 'bolt',
    title: v('Electrical & controls', 'الكهرباء والتحكم'),
    text: v('Control panels, PLC/HMI programming, sensors and machine integration.', 'لوحات التحكم وبرمجة PLC/HMI والحساسات والتكامل مع الماكينات.'),
  },
  {
    icon: 'wrench',
    title: v('Installation & commissioning', 'التركيب والتشغيل'),
    text: v('On-site installation, testing at production speed and operator training.', 'التركيب في الموقع والاختبار بسرعة الإنتاج وتدريب المشغلين.'),
  },
  {
    icon: 'shield',
    title: v('Maintenance & support', 'الصيانة والدعم'),
    text: v('Preventive maintenance contracts, fast breakdown response and line audits.', 'عقود صيانة وقائية واستجابة سريعة للأعطال وتدقيق الخطوط.'),
  },
  {
    icon: 'gear',
    title: v('Spare parts', 'قطع الغيار'),
    text: v('Chains, wear strips, bends, drives and bearings available from stock.', 'جنازير وشرائح تآكل ومنحنيات ووحدات إدارة ورولمان بلي من المخزون.'),
  },
  {
    icon: 'refresh',
    title: v('Upgrades & retrofits', 'التطوير والتحديث'),
    text: v('Extend, speed up or re-route existing conveyors — any brand.', 'إطالة أو تسريع أو إعادة توجيه السيور القائمة — لأي علامة تجارية.'),
  },
];

export const process = [
  { title: v('Consult', 'استشارة'), text: v('We study your product, speed and space.', 'ندرس منتجك وسرعتك ومساحتك.') },
  { title: v('Design', 'تصميم'), text: v('3D layout and engineering you approve.', 'مخطط وتصميم ثلاثي الأبعاد تعتمده.') },
  { title: v('Build', 'تصنيع'), text: v('Fabrication and factory acceptance test.', 'التصنيع واختبار القبول في المصنع.') },
  { title: v('Install', 'تركيب'), text: v('Installation, commissioning and training.', 'التركيب والتشغيل والتدريب.') },
  { title: v('Support', 'دعم'), text: v('Maintenance, spare parts and upgrades.', 'الصيانة وقطع الغيار والتطوير.') },
];

export const spareParts = [
  { name: v('Flexible plastic chains', 'جنازير بلاستيكية مرنة'), text: v('Flat-top, friction-top, cleated and no-gap chains, 44–295 mm.', 'جنازير مسطحة وعالية الاحتكاك وبحواجز وبدون فراغات، 44–295 مم.') },
  { name: v('Wear strips & slide rails', 'شرائح التآكل وقضبان الانزلاق'), text: v('UHMW-PE and PA wear strips in standard lengths.', 'شرائح تآكل UHMW-PE و PA بأطوال قياسية.') },
  { name: v('Bends & curves', 'المنحنيات'), text: v('Horizontal wheel bends, plain bends and vertical bends.', 'منحنيات أفقية بعجلات ومنحنيات عادية ومنحنيات رأسية.') },
  { name: v('Drive & idler units', 'وحدات الإدارة والإرجاع'), text: v('End, centre and catenary drives with matching idlers.', 'وحدات إدارة طرفية ووسطية مع وحدات إرجاع مطابقة.') },
  { name: v('Guide rails & brackets', 'قضبان التوجيه والحوامل'), text: v('Adjustable guides, clamps and fixing brackets.', 'قضبان توجيه قابلة للضبط ومشابك وحوامل تثبيت.') },
  { name: v('Support stands & feet', 'القوائم والأرجل'), text: v('Aluminium and stainless stands, levelling feet and connectors.', 'قوائم ألومنيوم وستانلس وأرجل ضبط ووصلات.') },
  { name: v('Modular belts & sprockets', 'السيور المعيارية والتروس'), text: v('Plastic modular belts, sprockets and shafts.', 'سيور بلاستيكية معيارية وتروس وأعمدة.') },
  { name: v('Motors & gearboxes', 'المواتير وصناديق التروس'), text: v('Gear motors, inverters and couplings.', 'مواتير بتروس وانفرترات ووصلات.') },
  { name: v('Bearings & shafts', 'الرولمان بلي والأعمدة'), text: v('Stainless and polymer bearings and shafts.', 'رولمان بلي وأعمدة من الستانلس والبوليمر.') },
];

export const faqs = [
  {
    q: v('Do you design custom conveyor systems?', 'هل تصممون أنظمة سيور حسب الطلب؟'),
    a: v(
      'Yes. Every system is engineered around your product, speed, layout and hygiene requirements. We start with a free consultation and a 3D layout.',
      'نعم. يُصمَّم كل نظام وفق منتجك وسرعتك ومخططك ومتطلبات النظافة. نبدأ باستشارة مجانية ومخطط ثلاثي الأبعاد.',
    ),
  },
  {
    q: v('How long does a typical project take?', 'كم يستغرق المشروع عادة؟'),
    a: v(
      'A single conveyor is typically delivered in 3–6 weeks. Complete multi-conveyor systems usually take 8–14 weeks from approved design to commissioning.',
      'يُسلَّم السير الواحد عادة خلال 3–6 أسابيع. أما الأنظمة المتكاملة فتستغرق عادة 8–14 أسبوعًا من اعتماد التصميم حتى التشغيل.',
    ),
  },
  {
    q: v('Can you integrate with my existing machines?', 'هل يمكن الربط مع ماكيناتي الحالية؟'),
    a: v(
      'Yes. We connect conveyors to fillers, cartoners, labellers, checkweighers and robots from any manufacturer, mechanically and electrically.',
      'نعم. نربط السيور ميكانيكيًا وكهربائيًا مع ماكينات التعبئة والتكرتن واللصق والوزن والروبوتات من أي مُصنّع.',
    ),
  },
  {
    q: v('Are your conveyors suitable for food and pharma?', 'هل سيوركم مناسبة للأغذية والأدوية؟'),
    a: v(
      'Yes. We offer SUS304 stainless steel frames, FDA-compliant chains and open, cleanable designs for food and GMP environments.',
      'نعم. نوفر هياكل ستانلس ستيل SUS304 وجنازير متوافقة مع FDA وتصميمات مفتوحة سهلة التنظيف لبيئات الأغذية وGMP.',
    ),
  },
  {
    q: v('Do you provide maintenance and spare parts?', 'هل توفرون الصيانة وقطع الغيار؟'),
    a: v(
      'We offer preventive maintenance contracts, emergency support and a stock of chains, wear strips, bends and drive components.',
      'نقدم عقود صيانة وقائية ودعمًا طارئًا ومخزونًا من الجنازير وشرائح التآكل والمنحنيات ومكوّنات الإدارة.',
    ),
  },
  {
    q: v('Which areas do you cover?', 'ما المناطق التي تغطونها؟'),
    a: v(
      'We are based in 10th of Ramadan City and serve all of Egypt, with projects across the Middle East and Africa.',
      'مقرنا في مدينة العاشر من رمضان ونخدم جميع أنحاء مصر، مع مشروعات في الشرق الأوسط وأفريقيا.',
    ),
  },
  {
    q: v('What information do you need for a quotation?', 'ما المعلومات المطلوبة لعرض السعر؟'),
    a: v(
      'Product type, size and weight, required throughput, the route (length and height change) and a simple layout or photo of the area. Our quote form walks you through it.',
      'نوع المنتج وأبعاده ووزنه، والإنتاجية المطلوبة، والمسار (الطول وفرق الارتفاع)، ومخطط بسيط أو صورة للمكان. نموذج طلب عرض السعر يرشدك خطوة بخطوة.',
    ),
  },
  {
    q: v('Are you partners with YA-VA?', 'هل أنتم شركاء مع YA-VA؟'),
    a: v(
      'Yes. We work in partnership with YA-VA, combining their flexible chain conveyor components with our local engineering, fabrication and support.',
      'نعم. نعمل بالشراكة مع YA-VA، فنجمع بين مكوّنات سيور الجنزير المرنة لديهم وبين هندستنا وتصنيعنا ودعمنا المحلي.',
    ),
  },
];
