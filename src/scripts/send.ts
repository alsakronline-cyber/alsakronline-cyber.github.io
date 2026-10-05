import { waLink, mailLink } from '../data/site';

/** Compose a message from form fields and hand it to WhatsApp or the mail app. Nothing is stored. */
export function sendMessage(
  via: 'whatsapp' | 'email',
  subject: string,
  fields: [string, FormDataEntryValue | null | undefined][],
  message = '',
) {
  const ar = document.documentElement.lang === 'ar';
  const body = [
    ar ? `طلب من موقع الصقر — ${subject}` : `Website enquiry — ${subject}`,
    '',
    ...fields.filter(([, v]) => v && String(v).trim()).map(([k, v]) => `${k}: ${v}`),
    ...(message.trim() ? ['', message.trim()] : []),
  ].join('\n');

  if (via === 'whatsapp') window.open(waLink(body), '_blank', 'noopener');
  else location.href = mailLink(`${ar ? 'الصقر' : 'Al Sakr'} — ${subject}`, body);
}
