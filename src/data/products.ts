import type { L } from '../i18n';

export type Product = {
  slug: string;
  name: L;
  short: L;
  description: L;
  /** Media slugs from scripts/encode-videos.mjs — the first is the cover. */
  videos: string[];
  industries: string[];
  features: L[];
  specs: { label: L; value: L }[];
  applications: L[];
  icon: string;
};

const v = (en: string, ar: string): L => ({ en, ar });

export const products: Product[] = [
  {
    slug: 'flexible-chain-conveyors',
    icon: 'chain',
    name: v('Flexible Chain Conveyors', 'سيور الجنزير المرنة'),
    short: v(
      'Plastic-chain conveyors that turn, climb and descend in one continuous run — ideal for compact, multi-level packaging lines.',
      'سيور بجنزير بلاستيكي تنعطف وتصعد وتهبط في مسار واحد متصل — مثالية لخطوط التعبئة المدمجة متعددة المستويات.',
    ),
    description: v(
      'Our flexible chain conveyors combine an anodised aluminium or SUS304 stainless steel beam with a low-friction plastic chain that bends both horizontally and vertically. One drive can carry products through tight curves, inclines and declines, so you save floor space and transfer points. Available with flat-top, friction-top, no-gap, cleat and wedge chains for everything from cosmetic bottles to tablets blisters and bakery products.',
      'تجمع سيور الجنزير المرنة لدينا بين هيكل من الألومنيوم المؤكسد أو الستانلس ستيل SUS304 وجنزير بلاستيكي منخفض الاحتكاك ينحني أفقيًا ورأسيًا. يمكن لوحدة إدارة واحدة نقل المنتجات عبر منحنيات ضيقة وصعود وهبوط، فتوفّر المساحة ونقاط التحويل. متاحة بجنزير مسطح أو عالي الاحتكاك أو بدون فراغات أو بحواجز أو بنظام القبض لتناسب كل شيء من عبوات مستحضرات التجميل إلى شرائط الأقراص ومنتجات المخابز.',
    ),
    videos: ['flex-chain-food', 'flex-chain-pharma', 'sus304-flex-chain', 'no-gap-chain', 'flex-chain-pharma-vertical'],
    industries: ['food', 'pharma', 'fmcg', 'beverage'],
    features: [
      v('Horizontal and vertical bends in a single conveyor', 'منحنيات أفقية ورأسية في سير واحد'),
      v('Aluminium or SUS304 stainless steel frames', 'هياكل ألومنيوم أو ستانلس ستيل SUS304'),
      v('No-gap chain for small and unstable products', 'جنزير بدون فراغات للمنتجات الصغيرة وغير المستقرة'),
      v('Tool-free chain and wear-strip replacement', 'استبدال الجنزير وشرائح التآكل دون أدوات'),
      v('Quiet, low-friction operation', 'تشغيل هادئ ومنخفض الاحتكاك'),
      v('Food-grade (FDA) materials available', 'خامات صالحة للأغذية (FDA) متاحة'),
    ],
    specs: [
      { label: v('Chain widths', 'عرض الجنزير'), value: v('44 – 295 mm', '44 – 295 مم') },
      { label: v('Conveyor speed', 'سرعة السير'), value: v('Up to 60 m/min', 'حتى 60 م/دقيقة') },
      { label: v('Max. length per drive', 'أقصى طول لكل وحدة إدارة'), value: v('Up to 30 m', 'حتى 30 م') },
      { label: v('Incline angle', 'زاوية الميل'), value: v('Up to 30° (90° with wedge)', 'حتى 30° (90° مع القبض)') },
      { label: v('Frame material', 'خامة الهيكل'), value: v('Anodised Al / SUS304', 'ألومنيوم مؤكسد / SUS304') },
      { label: v('Chain material', 'خامة الجنزير'), value: v('POM / PA, FDA options', 'POM / PA بخيارات FDA') },
    ],
    applications: [
      v('Bottle and jar handling', 'نقل الزجاجات والبرطمانات'),
      v('Pharmaceutical blister and carton lines', 'خطوط الشرائط والكراتين الدوائية'),
      v('Bakery and confectionery', 'المخابز والحلويات'),
      v('Cosmetics and personal care', 'مستحضرات التجميل والعناية الشخصية'),
    ],
  },
  {
    slug: 'spiral-conveyors',
    icon: 'spiral',
    name: v('Spiral Conveyors', 'السيور الحلزونية'),
    short: v(
      'Continuous vertical transport on the smallest possible footprint — elevate or lower products between floors and mezzanines.',
      'نقل رأسي متواصل على أصغر مساحة ممكنة — لرفع المنتجات أو خفضها بين الطوابق والميزانين.',
    ),
    description: v(
      'Spiral conveyors move products up or down in a continuous helix, replacing lifts and long inclines. They create natural buffer capacity, keep product orientation and need only a few square metres of floor. We build standard, narrow and heavy-duty spirals with flexible chain or slat tracks, in painted steel, aluminium or full stainless steel for wash-down areas.',
      'تنقل السيور الحلزونية المنتجات صعودًا أو هبوطًا في مسار لولبي متواصل بدلًا من المصاعد والمنحدرات الطويلة. توفّر سعة تخزين مؤقت طبيعية وتحافظ على اتجاه المنتج ولا تحتاج إلا لأمتار مربعة قليلة. نصنّع حلزونيات قياسية وضيقة وللأحمال الثقيلة بجنزير مرن أو شرائح، من الصلب المدهون أو الألومنيوم أو الستانلس ستيل بالكامل لمناطق الغسيل.',
    ),
    videos: ['flex-spiral', 'spiral-2022', 'yava-spiral', 'narrow-spiral', 'spiral-classic', 'detergent-spiral'],
    industries: ['food', 'beverage', 'fmcg', 'logistics'],
    features: [
      v('Footprint from under 1.5 m diameter', 'مساحة تبدأ من قطر أقل من 1.5 م'),
      v('Up or down, single or multiple inlets', 'صعود أو هبوط بمدخل واحد أو عدة مداخل'),
      v('Built-in accumulation capacity', 'سعة تجميع مدمجة'),
      v('Low noise, continuous flow — no lift cycles', 'تدفق متواصل وهادئ — دون دورات مصعد'),
      v('Narrow versions for tight plants', 'نسخ ضيقة للمصانع محدودة المساحة'),
      v('Stainless steel wash-down option', 'خيار ستانلس ستيل قابل للغسيل'),
    ],
    specs: [
      { label: v('Height', 'الارتفاع'), value: v('1 – 12 m', '1 – 12 م') },
      { label: v('Speed', 'السرعة'), value: v('Up to 50 m/min', 'حتى 50 م/دقيقة') },
      { label: v('Product weight', 'وزن المنتج'), value: v('Up to 25 kg / item', 'حتى 25 كجم / قطعة') },
      { label: v('Outer diameter', 'القطر الخارجي'), value: v('From 1.2 m', 'من 1.2 م') },
      { label: v('Track', 'المسار'), value: v('Flex chain / slat', 'جنزير مرن / شرائح') },
      { label: v('Construction', 'الهيكل'), value: v('Painted steel / Al / SUS304', 'صلب مدهون / ألومنيوم / SUS304') },
    ],
    applications: [
      v('Cartons and cases between floors', 'نقل الكراتين بين الطوابق'),
      v('Detergent and FMCG packs', 'عبوات المنظفات والسلع الاستهلاكية'),
      v('Cooling and buffer towers', 'أبراج التبريد والتخزين المؤقت'),
      v('Warehouse and e-commerce mezzanines', 'ميزانين المستودعات والتجارة الإلكترونية'),
    ],
  },
  {
    slug: 'buffer-accumulation-conveyors',
    icon: 'buffer',
    name: v('Buffer & Accumulation Conveyors', 'سيور التجميع والتخزين المؤقت'),
    short: v(
      'Absorb stoppages between machines so one short stop never halts the whole line.',
      'تمتص توقفات الماكينات بحيث لا يوقف توقف قصير الخط بالكامل.',
    ),
    description: v(
      'Accumulation tables and multi-lane buffer conveyors decouple your machines. When a filler, labeller or case packer stops for a moment, products are collected gently and released again in sequence — lifting overall line efficiency (OEE) without extra operators. First-in-first-out and dynamic buffer designs are available.',
      'تفصل طاولات التجميع وسيور التخزين المؤقت متعددة الحارات بين الماكينات. عند توقف ماكينة التعبئة أو اللصق أو التكرتن للحظات، تُجمَّع المنتجات بلطف ثم تُطلق بالترتيب — فترتفع الكفاءة الكلية للخط (OEE) دون عمالة إضافية. تتوفر تصميمات الداخل أولًا يخرج أولًا والتخزين الديناميكي.',
    ),
    videos: ['buffer-chain', 'no-gap-chain'],
    industries: ['beverage', 'pharma', 'fmcg'],
    features: [
      v('FIFO and dynamic buffer layouts', 'تصميمات FIFO وتخزين ديناميكي'),
      v('Low back-pressure product handling', 'نقل المنتج بأقل ضغط خلفي'),
      v('Sensor-controlled zones', 'مناطق تحكم بالحساسات'),
      v('Raises line OEE', 'رفع الكفاءة الكلية للخط'),
    ],
    specs: [
      { label: v('Buffer time', 'زمن التخزين'), value: v('1 – 15 min', '1 – 15 دقيقة') },
      { label: v('Lanes', 'عدد الحارات'), value: v('1 – 12', '1 – 12') },
      { label: v('Speed', 'السرعة'), value: v('Up to 60 m/min', 'حتى 60 م/دقيقة') },
      { label: v('Controls', 'التحكم'), value: v('PLC with HMI', 'PLC مع شاشة HMI') },
    ],
    applications: [
      v('Between filler and labeller', 'بين ماكينة التعبئة واللصق'),
      v('Before case packers', 'قبل ماكينات التكرتن'),
      v('Vial and bottle lines', 'خطوط الفيالات والزجاجات'),
    ],
  },
  {
    slug: 'pallet-conveyors',
    icon: 'pallet',
    name: v('Pallet & Fixture Conveyors', 'سيور الباليتات وحوامل القطع'),
    short: v(
      'Carry product carriers precisely through assembly, testing and inspection stations.',
      'نقل حوامل المنتجات بدقة عبر محطات التجميع والاختبار والفحص.',
    ),
    description: v(
      'Pallet-handling systems move work-piece carriers around a closed loop with stops, positioning units and diverters at every station. They are the backbone of semi-automated assembly for electronics, automotive parts and medical devices, and integrate easily with robots and vision systems.',
      'تنقل أنظمة الباليتات حوامل القطع في مسار مغلق مع وحدات إيقاف وتمركز وتحويل عند كل محطة. وهي العمود الفقري للتجميع شبه الآلي للإلكترونيات وقطع السيارات والأجهزة الطبية، وتتكامل بسهولة مع الروبوتات وأنظمة الرؤية.',
    ),
    videos: ['pallet-chain'],
    industries: ['assembly'],
    features: [
      v('Stops, lifters and positioning units', 'وحدات إيقاف ورفع وتمركز'),
      v('Closed-loop or linear layouts', 'تصميمات مسار مغلق أو خطي'),
      v('Robot and vision-ready', 'جاهزة للروبوتات وأنظمة الرؤية'),
      v('RFID product tracking option', 'خيار تتبع المنتج بتقنية RFID'),
    ],
    specs: [
      { label: v('Pallet size', 'مقاس الباليت'), value: v('160 – 640 mm', '160 – 640 مم') },
      { label: v('Load per pallet', 'الحمل لكل باليت'), value: v('Up to 50 kg', 'حتى 50 كجم') },
      { label: v('Positioning accuracy', 'دقة التمركز'), value: v('±0.05 mm', '±0.05 مم') },
    ],
    applications: [
      v('Electronics assembly', 'تجميع الإلكترونيات'),
      v('Automotive components', 'مكوّنات السيارات'),
      v('Medical device assembly', 'تجميع الأجهزة الطبية'),
    ],
  },
  {
    slug: 'gripper-conveyors',
    icon: 'gripper',
    name: v('Gripper & Elevating Conveyors', 'السيور القابضة وسيور الرفع'),
    short: v(
      'Two facing chains grip products from the sides to lift them vertically — fast, gentle and space-saving.',
      'جنزيران متقابلان يقبضان على المنتج من الجانبين لرفعه رأسيًا — بسرعة ولطف وتوفير للمساحة.',
    ),
    description: v(
      'Gripper (wedge) conveyors use two synchronised chains with soft grip elements to hold products between them, allowing truly vertical elevation or lowering without tipping. Perfect for bottles, cans and boxes when floor space is minimal, and fully available in stainless steel.',
      'تستخدم السيور القابضة جنزيرين متزامنين بعناصر قبض ناعمة لتثبيت المنتج بينهما، مما يتيح رفعًا أو خفضًا رأسيًا حقيقيًا دون انقلاب. مثالية للزجاجات والعلب والكراتين عندما تكون المساحة محدودة، ومتاحة بالكامل من الستانلس ستيل.',
    ),
    videos: ['gripper-conveyor'],
    industries: ['beverage', 'fmcg', 'pharma'],
    features: [
      v('Vertical transport up to 90°', 'نقل رأسي حتى 90°'),
      v('Adjustable gap for product changeover', 'فتحة قابلة للضبط لتغيير المنتج'),
      v('Gentle soft-grip elements', 'عناصر قبض ناعمة'),
      v('Full stainless steel construction', 'هيكل ستانلس ستيل بالكامل'),
    ],
    specs: [
      { label: v('Product width', 'عرض المنتج'), value: v('20 – 300 mm', '20 – 300 مم') },
      { label: v('Speed', 'السرعة'), value: v('Up to 40 m/min', 'حتى 40 م/دقيقة') },
      { label: v('Lift height', 'ارتفاع الرفع'), value: v('Up to 6 m', 'حتى 6 م') },
    ],
    applications: [
      v('Bottles and cans', 'الزجاجات والعلب'),
      v('Small cartons', 'الكراتين الصغيرة'),
      v('Over-passing walkways', 'العبور فوق الممرات'),
    ],
  },
  {
    slug: 'modular-belt-conveyors',
    icon: 'belt',
    name: v('Modular Belt Conveyors', 'السيور البلاستيكية المعيارية'),
    short: v(
      'Robust, hygienic plastic modular belts for wide, heavy or wet products.',
      'سيور بلاستيكية معيارية متينة وصحية للمنتجات العريضة أو الثقيلة أو الرطبة.',
    ),
    description: v(
      'Modular plastic belts are made of interlocking modules that run on sprockets, so they never slip or track off. They are easy to clean, easy to repair module-by-module and handle wide product flows, crates and wet food. Straight, curved and incline versions with flights and side-guards are available.',
      'تتكون السيور البلاستيكية المعيارية من وحدات متشابكة تدور على تروس، فلا تنزلق ولا تنحرف. سهلة التنظيف والإصلاح وحدة بوحدة، وتتعامل مع تدفقات المنتجات العريضة والصناديق والأغذية الرطبة. متاحة بنسخ مستقيمة ومنحنية ومائلة مع حواجز وجوانب.',
    ),
    videos: ['modular-belt', 'food-line'],
    industries: ['food', 'beverage', 'logistics'],
    features: [
      v('Positive sprocket drive — no slipping', 'إدارة بالتروس — بدون انزلاق'),
      v('Open-hinge designs for easy cleaning', 'تصميم مفصلي مفتوح لسهولة التنظيف'),
      v('Repair module by module', 'إصلاح وحدة بوحدة'),
      v('Flights and side-guards for inclines', 'حواجز وجوانب للمسارات المائلة'),
    ],
    specs: [
      { label: v('Belt width', 'عرض السير'), value: v('150 – 2000 mm', '150 – 2000 مم') },
      { label: v('Load', 'الحمل'), value: v('Up to 150 kg/m', 'حتى 150 كجم/م') },
      { label: v('Temperature', 'درجة الحرارة'), value: v('-40 °C to +100 °C', 'من -40° حتى +100° م') },
    ],
    applications: [
      v('Meat, poultry and seafood', 'اللحوم والدواجن والمأكولات البحرية'),
      v('Crates and trays', 'الصناديق والصواني'),
      v('Pasteurisers and coolers', 'أجهزة البسترة والتبريد'),
    ],
  },
  {
    slug: 'turnkey-conveying-systems',
    icon: 'system',
    name: v('Turnkey Conveying Systems', 'أنظمة النقل المتكاملة'),
    short: v(
      'Complete, controlled conveyor networks linking every machine in your plant.',
      'شبكات سيور متكاملة ومُتحكَّم بها تربط كل ماكينات مصنعك.',
    ),
    description: v(
      'When you need more than a single conveyor, we engineer the full material flow: layout, mechanical design, electrical panels, PLC controls, safety guarding, installation and commissioning. One responsible partner from the concept drawing to a running, documented line — with training and spare parts included.',
      'عندما تحتاج أكثر من سير واحد، نصمّم مسار المواد بالكامل: المخطط والتصميم الميكانيكي ولوحات الكهرباء والتحكم PLC وحواجز الأمان والتركيب والتشغيل. شريك واحد مسؤول من الرسم المبدئي حتى خط يعمل وموثَّق — مع التدريب وقطع الغيار.',
    ),
    videos: ['food-line', 'yava-factory-system', 'factory-system'],
    industries: ['food', 'pharma', 'fmcg', 'beverage', 'assembly', 'logistics'],
    features: [
      v('Layout & 3D simulation', 'تصميم المخطط ومحاكاة ثلاثية الأبعاد'),
      v('PLC / HMI controls and integration', 'تحكم PLC / HMI وتكامل الماكينات'),
      v('Safety guarding to CE practice', 'حواجز أمان وفق ممارسات CE'),
      v('Single point of responsibility', 'جهة مسؤولة واحدة'),
    ],
    specs: [
      { label: v('Scope', 'النطاق'), value: v('Design → commissioning', 'من التصميم حتى التشغيل') },
      { label: v('Controls', 'التحكم'), value: v('Siemens / Omron / Delta PLC', 'Siemens / Omron / Delta PLC') },
      { label: v('Documentation', 'التوثيق'), value: v('Drawings, manuals, training', 'رسومات وكتيبات وتدريب') },
    ],
    applications: [
      v('New production lines', 'خطوط إنتاج جديدة'),
      v('Plant expansions', 'توسعات المصانع'),
      v('Line re-layout and automation', 'إعادة تخطيط وأتمتة الخطوط'),
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

/** Product finder: need -> product slug. Keys match dict.finder. */
export const finderMap: Record<string, string> = {
  elevate: 'spiral-conveyors',
  curves: 'flexible-chain-conveyors',
  accumulate: 'buffer-accumulation-conveyors',
  heavy: 'pallet-conveyors',
  grip: 'gripper-conveyors',
  wide: 'modular-belt-conveyors',
  line: 'turnkey-conveying-systems',
};
