const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = matchMedia('(hover: hover)').matches;

/* ---------- Header: solid on scroll ---------- */
const header = document.getElementById('site-header');
const onScroll = () => header?.setAttribute('data-scrolled', String(scrollY > 40));
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Theme toggle ---------- */
document.querySelectorAll('[data-theme-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  }),
);

/* ---------- Remember language choice ---------- */
document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((a) =>
  a.addEventListener('click', () => { try { localStorage.setItem('lang', a.dataset.langSwitch!); } catch {} }),
);

/* ---------- Mobile menu ---------- */
const menu = document.getElementById('mobile-menu');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const setMenu = (open: boolean) => {
  menu?.classList.toggle('hidden', !open);
  openBtn?.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
};
openBtn?.addEventListener('click', () => setMenu(true));
menu?.querySelectorAll('[data-menu-close]').forEach((el) => el.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

/* ---------- Scroll reveal ---------- */
const revealer = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); revealer.unobserve(e.target); } }),
  { rootMargin: '0px 0px -8% 0px' },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealer.observe(el));

/* ---------- Videos ----------
 * <video data-src="…" data-autoplay>  — loads + plays while visible (hero, backgrounds)
 * <video data-src="…" data-hover>     — plays on card hover; autoplays in view on touch devices
 */
const load = (v: HTMLVideoElement) => {
  if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); }
};
const play = (v: HTMLVideoElement) => { load(v); v.play().catch(() => {}); };

const videoObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    const v = e.target as HTMLVideoElement;
    if (e.isIntersecting) play(v); else v.pause();
  }),
  { threshold: 0.25 },
);

document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((v) => {
  if (reduceMotion) return;
  videoObserver.observe(v);
});

document.querySelectorAll<HTMLVideoElement>('video[data-hover]').forEach((v) => {
  if (reduceMotion) return;
  const host = v.closest<HTMLElement>('[data-hover-host]') ?? v;
  v.addEventListener('playing', () => v.classList.add('playing'));
  v.addEventListener('pause', () => v.classList.remove('playing'));
  if (canHover) {
    host.addEventListener('mouseenter', () => play(v));
    host.addEventListener('mouseleave', () => v.pause());
    host.addEventListener('focusin', () => play(v));
    host.addEventListener('focusout', () => v.pause());
  } else {
    videoObserver.observe(v);
  }
});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById('lightbox') as HTMLDialogElement | null;
const lbVideo = lightbox?.querySelector('video');
const lbTitle = lightbox?.querySelector('[data-lightbox-title]');
document.addEventListener('click', (e) => {
  const trigger = (e.target as HTMLElement).closest<HTMLElement>('[data-lightbox]');
  if (!trigger || !lightbox || !lbVideo) return;
  e.preventDefault();
  lbVideo.src = trigger.dataset.lightbox!;
  lbVideo.poster = trigger.dataset.poster ?? '';
  if (lbTitle) lbTitle.textContent = trigger.dataset.title ?? '';
  lightbox.showModal();
  lbVideo.play().catch(() => {});
});
const closeLightbox = () => { lbVideo?.pause(); lbVideo?.removeAttribute('src'); lbVideo?.load(); lightbox?.close(); };
lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
lightbox?.addEventListener('close', () => lbVideo?.pause());

/* ---------- Animated counters ---------- */
const counter = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target as HTMLElement;
  counter.unobserve(el);
  const end = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = String(end); return; }
  const start = performance.now();
  const dur = 1600;
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}), { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));

/* ---------- Filter chips (catalogue, projects) ---------- */
document.querySelectorAll<HTMLElement>('[data-filter-group]').forEach((group) => {
  const target = document.querySelector(group.dataset.filterGroup!);
  group.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((chip) =>
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter!;
      group.querySelectorAll('[data-filter]').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      target?.querySelectorAll<HTMLElement>('[data-tags]').forEach((item) => {
        const show = f === 'all' || item.dataset.tags!.split(' ').includes(f);
        item.hidden = !show;
      });
    }),
  );
});

/* ---------- Pointer spotlight on cards ---------- */
if (canHover) {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((el) =>
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    }),
  );
}
