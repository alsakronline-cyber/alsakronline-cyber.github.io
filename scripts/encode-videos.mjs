// Teaser starts skip the YA-VA intro/logo cards at the start of most clips.
// Transcode raw footage in /raw-videos into web-ready assets in /public/media.
// Usage: node scripts/encode-videos.mjs [--force]
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const RAW = 'raw-videos';
const OUT = 'public/media';
const force = process.argv.includes('--force');

// slug -> [source file, teaser start second, optional kept height fraction (crops the bottom)]
export const VIDEOS = {
  'sus304-flex-chain': ['SUS304 flex chain conveyor.mp4', 4, 0.8], // crop burned-in Chinese subtitles
  'yava-spiral': ['Spiral conveyor YA-VA made recently (1).mp4', 5],
  'detergent-spiral': ['Spiral conveyor for blue moon laundry detergent.mp4', 1],
  'flex-chain-food': ['flex chain conveyor for food.mp4', 4],
  'flex-chain-pharma': ['flex chain conveyor video for Pharmaceutical.mp4', 5],
  'yava-factory-system': ['flex conveyor system and mini spiral covneyor in YA-VA factory.mp4', 6],
  'factory-system': ['flex conveyor system video from factory.mp4', 6],
  'flex-spiral': ['flex spiral conveyor 2.mp4', 5],
  'buffer-chain': ['flexible buffer chain onveyor.mp4', 5],
  'flex-chain-pharma-vertical': ['flexible chain conveyor for pharmceutical.mp4', 4],
  'pallet-chain': ['flexible chain conveyor with pallet.mp4', 7],
  'food-line': ['food industry conveyor system.mp4', 5],
  'modular-belt': ['modular belt assembly.mp4', 5],
  'narrow-spiral': ['narrow spiral conveyor.mp4', 4],
  'no-gap-chain': ['no-gap flex chain conveyor.mp4', 6],
  'spiral-2022': ['spiral conveyor 2022.mp4', 7],
  'spiral-classic': ['spiralconveyor.mp4', 6],
  'gripper-conveyor': ['stainless steel gripper conveyor.mp4', 6],
};

// Clips stitched into the home-page hero showreel: [slug, start, seconds]
const SHOWREEL = [
  ['yava-factory-system', 8, 3.5], ['flex-spiral', 8, 3.5], ['food-line', 8, 3.5], ['spiral-classic', 12, 3.5],
  ['yava-factory-system', 25, 3.5], ['flex-chain-pharma', 12, 3.5], ['yava-spiral', 10, 3.5],
];

const ff = (args) => execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const probe = (file) => {
  const out = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries',
    'stream=width,height:format=duration', '-of', 'json', file]).toString();
  const j = JSON.parse(out);
  return { w: j.streams[0].width, h: j.streams[0].height, duration: +j.format.duration };
};
const fit = (max) => `scale='if(gt(iw,ih),min(${max},iw),-2)':'if(gt(iw,ih),-2,min(${max},ih))',fps=30,format=yuv420p`;
const x264 = (crf) => ['-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf), '-movflags', '+faststart'];

mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const [slug, [file, start, keep]] of Object.entries(VIDEOS)) {
  const crop = keep ? `crop=iw:trunc(ih*${keep}/2)*2:0:0,` : '';
  const src = join(RAW, file);
  const { w, h, duration } = probe(src);
  manifest[slug] = { orientation: w >= h ? 'landscape' : 'portrait', duration: Math.round(duration) };
  const full = join(OUT, `${slug}.mp4`);
  const loop = join(OUT, `${slug}-loop.mp4`);
  const poster = join(OUT, `${slug}.webp`);
  console.log(`→ ${slug}`);
  if (force || !existsSync(poster))
    ff(['-ss', String(start + 1), '-i', src, '-frames:v', '1', '-vf', crop + fit(1280).replace(',fps=30,format=yuv420p', ''), '-c:v', 'libwebp', '-quality', '78', poster]);
  if (force || !existsSync(loop))
    ff(['-ss', String(start), '-t', '7', '-i', src, '-an', '-vf', crop + fit(854), ...x264(30), loop]);
  if (force || !existsSync(full))
    ff(['-i', src, '-vf', crop + fit(1280), ...x264(27), '-c:a', 'aac', '-b:a', '96k', full]);
}

// Hero showreel (landscape, silent)
const reel = join(OUT, 'showreel.mp4');
if (force || !existsSync(reel)) {
  const inputs = SHOWREEL.flatMap(([slug, s, t]) => ['-ss', String(s), '-t', String(t), '-i', join(RAW, VIDEOS[slug][0])]);
  const chains = SHOWREEL.map((_, i) =>
    `[${i}:v]scale=1600:900:force_original_aspect_ratio=increase,crop=1600:900,fps=30,setsar=1,format=yuv420p[v${i}]`).join(';');
  const concat = SHOWREEL.map((_, i) => `[v${i}]`).join('') + `concat=n=${SHOWREEL.length}:v=1:a=0[out]`;
  ff([...inputs, '-filter_complex', `${chains};${concat}`, '-map', '[out]', '-an', ...x264(28), reel]);
  ff(['-ss', '1', '-i', reel, '-frames:v', '1', '-c:v', 'libwebp', '-quality', '75', join(OUT, 'showreel.webp')]);
}

writeFileSync('src/data/media-manifest.json', JSON.stringify(manifest, null, 2));
console.log('done');
