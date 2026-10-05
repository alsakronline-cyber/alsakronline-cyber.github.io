import type { L } from '../i18n';

/** Company facts. Stats are placeholders — edit them here. */
export const site = {
  phoneDisplay: '+20 10 20588660',
  phone: '+201020588660',
  whatsapp: '201020588660',
  email: 'hagar@topgroupco.com',
  address: {
    en: 'Plot VH, Industrial Area C3, 10th of Ramadan City, Egypt',
    ar: 'قطعة VH، المنطقة الصناعية C3، مدينة العاشر من رمضان، مصر',
  } as L,
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Industrial+Area+C3+10th+of+Ramadan+City+Egypt',
  mapEmbed: 'https://www.google.com/maps?q=10th+of+Ramadan+City+Industrial+Area+C3&output=embed',
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61591571368549', icon: 'facebook' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/143707116', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com/@AlsakrForConveyingHandlingSyst', icon: 'youtube' },
  ],
  stats: [
    { value: 10, suffix: '+', label: { en: 'Years of experience', ar: 'سنوات من الخبرة' } },
    { value: 200, suffix: '+', label: { en: 'Conveyors installed', ar: 'سير تم تركيبه' } },
    { value: 24, suffix: '/7', label: { en: 'Technical support', ar: 'دعم فني' } },
    { value: 12, suffix: '+', label: { en: 'Countries served', ar: 'دولة نخدمها' } },
  ] as { value: number; suffix: string; label: L }[],
};

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const mailLink = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const media = (slug: string) => ({
  full: `/media/${slug}.mp4`,
  loop: `/media/${slug}-loop.mp4`,
  poster: `/media/${slug}.webp`,
});
