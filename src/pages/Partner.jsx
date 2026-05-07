import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Bed,
  Bell,
  Briefcase,
  CalendarHeart,
  Camera,
  Clock3,
  Coffee,
  Heart,
  HeartHandshake,
  Globe2,
  Home,
  Images,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Route,
  Send,
  Shuffle,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import partnerImage from "../assets/partner-garden.png";
import heroPhoto from "../assets/Pink/1768814216955.jpg";
import lakePhoto from "../assets/Pink/20251022_175256.jpg";
import trainPhoto from "../assets/Pink/dji_mimo_14830114_080624_20260114080625_1769013599926_photo.jpg";
import roadTripPhoto from "../assets/Pink/dji_mimo_14830115_140404_20260115140404_1769013588910_photo.jpg";
import blueSkyPhoto from "../assets/Pink/dji_mimo_14830115_141326_20260115141327_1769013586894_photo.jpg";
import sillyPhoto from "../assets/Pink/dji_mimo_14830121_151008_20260121151009_1768997096138_photo.jpg";
import couchPhoto from "../assets/Pink/IMG_7229.JPG";
import forestPhoto from "../assets/Pink/Screenshot_20260102_221200_Photos.jpg";
import { getSession } from "../routes/auth.js";

const MISS_KEY = "partner_miss_count";
const STATUS_KEY = "partner_status";
const LETTERS_KEY = "partner_postbox_letters";
const REUNION_DATE = new Date("2026-09-07T00:00:00+07:00");
const yellowstonePoint = {
  label: "Yellowstone National Park",
  shortLabel: "Yellowstone",
  lat: 44.428,
  lng: -110.5885,
  mapX: 193,
  mapY: 109,
};
const bkkPoint = {
  label: "Bangkok, Thailand",
  shortLabel: "BKK",
  lat: 13.69,
  lng: 100.7501,
  mapX: 780,
  mapY: 182,
};

const loveLetter = [
  "สุขสันต์วันครบรอบล่วงหน้าน้าปิ๊ง 💖",
  "ปีนี้เราอาจจะต้องฉลองกันเร็วนิดนึง เพราะอีกไม่กี่วันเค้าก็ต้องบินไปทำงานที่อเมริกาแล้ว แค่คิดว่าจะไม่ได้เจอหน้า ไม่ได้ไปไหนมาไหนด้วยกัน ไปตั้ง 4 เดือน ก็เริ่มคิดถึงตั้งแต่ตอนนี้เลย",
  'ระยะทางไปมอนแทนามันไกลกันคนละซีกโลก เวลาของเราก็คงไม่ตรงกัน แต่ขอให้รู้ไว้นะว่าระยะทางทำอะไรความรู้สึกเค้าไม่ได้เลย อิอิ เค้าจะตั้งใจทำงาน จะคอยอัปเดตชีวิตให้ฟังตลอด จะทำให้เหมือนเราไม่ได้ห่างกันไปไหนเลย ขอบคุณที่เป็นความสบายใจ เป็นกำลังใจ และเป็นคนที่ "Narak Tee Sud Nairok" สำหรับเค้าเสมอมานะ',
  "ช่วงที่เค้าไม่อยู่ ดูแลตัวเองดีๆ กินข้าวให้ตรงเวลา อย่าเจ็บอย่าป่วยนะ รอกอดเค้าแน่นๆ ในวันที่เค้ากลับมานะ รักปิ๊งมากๆงับ",
];

const defaultLetters = [
  {
    id: "first-letter",
    text: "เปิดมาเมื่อไหร่ก็ให้รู้ไว้ว่ายังมีคนคิดถึงอยู่ตรงนี้เสมอนะ",
    createdAt: "Pinned",
  },
];

const statusOptions = [
  { label: "คิดถึงอยู่", icon: Heart, detail: "ส่งใจข้ามทวีปอยู่" },
  { label: "กำลังทำงาน", icon: Briefcase, detail: "ตั้งใจหาเงินมาให้งับ" },
  { label: "กินข้าวแล้ว", icon: Utensils, detail: "ไม่ปล่อยให้ปิ๊งบ่นแน่นอน" },
  { label: "พักกาแฟ", icon: Coffee, detail: "แวะคิดถึงนิดนึง" },
  { label: "นอนแล้ว", icon: Bed, detail: "ฝันดีนะคนเก่ง" },
  { label: "อยู่บ้าน", icon: Home, detail: "โหมดสบายใจ" },
];

const timeline = [
  {
    image: heroPhoto,
    title: "ยิ้มใกล้กัน",
    text: "รูปคู่ที่ยิ้มใกล้กันจนพื้นที่ทั้งรูปดูอบอุ่นขึ้นมาเลย",
  },
  {
    image: lakePhoto,
    title: "แสงเย็นริมทะเลสาบ",
    text: "ช่วงเวลาธรรมดาที่กลายเป็นความทรงจำดี ๆ",
  },
  {
    image: trainPhoto,
    title: "ระหว่างทาง",
    text: "ทุกทริปมีเรื่องให้จำ และมีคนที่อยากกลับไปเล่าให้ฟัง",
  },
  {
    image: roadTripPhoto,
    title: "วันฟ้าใส",
    text: "รูปที่มองแล้วรู้สึกเหมือนได้กลับไปเดินข้างกันอีกครั้ง",
  },
  {
    image: blueSkyPhoto,
    title: "วิวกว้าง ๆ",
    text: "มีวิว มีแสง และมีเราสองคนอยู่ในความทรงจำเดียวกัน",
  },
  {
    image: sillyPhoto,
    title: "หน้าเล่น ๆ",
    text: "ความน่ารักที่ไม่ต้องตั้งใจ แต่ชนะทุกอย่าง",
  },
  {
    image: couchPhoto,
    title: "มุมสบายใจ",
    text: "วันธรรมดาที่ดีขึ้นเพราะมีคนเดิมอยู่ใกล้ ๆ",
  },
  {
    image: forestPhoto,
    title: "คิดถึงกลางทาง",
    text: "รูปหนึ่งรูปก็ช่วยให้ระยะทางสั้นลงได้",
  },
];

const floatingHearts = [
  { left: "5%", top: "16%", delay: "0s", duration: "7.2s", scale: 1.1 },
  { left: "14%", top: "74%", delay: "1.1s", duration: "8.4s", scale: 0.82 },
  { left: "48%", top: "12%", delay: "0.8s", duration: "9s", scale: 0.92 },
  { left: "82%", top: "24%", delay: "0.4s", duration: "7.5s", scale: 1.05 },
  { left: "92%", top: "62%", delay: "2.8s", duration: "9.4s", scale: 0.68 },
];

const burstHearts = [
  { x: -86, y: -82, rotate: -18 },
  { x: -42, y: -118, rotate: 8 },
  { x: 8, y: -96, rotate: -4 },
  { x: 56, y: -120, rotate: 18 },
  { x: 92, y: -72, rotate: 10 },
  { x: -4, y: -144, rotate: -12 },
];

function readNumber(key, fallback = 0) {
  if (typeof window === "undefined") return fallback;
  const value = Number(window.localStorage.getItem(key));
  return Number.isFinite(value) ? value : fallback;
}

function readText(key, fallback) {
  if (typeof window === "undefined") return fallback;
  return window.localStorage.getItem(key) || fallback;
}

function readJson(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function formatClock(date, timeZone) {
  return new Intl.DateTimeFormat("th-TH", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function formatDateLine(date, timeZone) {
  return new Intl.DateTimeFormat("th-TH", {
    timeZone,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

function getCountdown(now) {
  const diff = Math.max(REUNION_DATE.getTime() - now.getTime(), 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);

  return { days, hours, minutes };
}

function getDistanceKm(from, to) {
  const earthRadiusKm = 6371;
  const toRadians = (degree) => (degree * Math.PI) / 180;
  const deltaLat = toRadians(to.lat - from.lat);
  const deltaLng = toRadians(to.lng - from.lng);
  const startLat = toRadians(from.lat);
  const endLat = toRadians(to.lat);
  const haversine =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(startLat) * Math.cos(endLat) * Math.sin(deltaLng / 2) ** 2;

  return Math.round(
    2 * earthRadiusKm * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine)),
  );
}

export default function Partner() {
  const session = getSession();
  const displayName = session?.displayName || "Pink";
  const [now, setNow] = useState(() => new Date());
  const [missCount, setMissCount] = useState(() => readNumber(MISS_KEY));
  const [burstKey, setBurstKey] = useState(0);
  const [status, setStatus] = useState(() => readText(STATUS_KEY, statusOptions[0].label));
  const [draft, setDraft] = useState("");
  const [letters, setLetters] = useState(() => readJson(LETTERS_KEY, defaultLetters));
  const [randomMemory, setRandomMemory] = useState(() => timeline[0]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(() => getCountdown(now), [now]);
  const activeStatus = statusOptions.find((item) => item.label === status) || statusOptions[0];
  const routeDistanceKm = useMemo(
    () => getDistanceKm(yellowstonePoint, bkkPoint).toLocaleString("th-TH"),
    [],
  );

  function handleMissClick() {
    setMissCount((current) => {
      const next = current + 1;
      window.localStorage.setItem(MISS_KEY, String(next));
      return next;
    });
    setBurstKey((current) => current + 1);
  }

  function handleStatusChange(nextStatus) {
    setStatus(nextStatus);
    window.localStorage.setItem(STATUS_KEY, nextStatus);
  }

  function handleLetterSubmit(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const nextLetter = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Intl.DateTimeFormat("th-TH", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date()),
    };
    const nextLetters = [nextLetter, ...letters].slice(0, 5);
    setLetters(nextLetters);
    window.localStorage.setItem(LETTERS_KEY, JSON.stringify(nextLetters));
    setDraft("");
  }

  function handleRandomMemory() {
    setRandomMemory((current) => {
      if (timeline.length <= 1) return current;

      let next = current;
      while (next.title === current.title) {
        next = timeline[Math.floor(Math.random() * timeline.length)];
      }
      return next;
    });
  }

  return (
    <PageTransition className="partner-page page-shell">
      <div
        className="cinematic-bg partner-cinematic-bg"
        style={{ backgroundImage: `url(${partnerImage})` }}
      />
      <div className="signal-grid partner-grid" />
      <div className="noise-layer" />
      <div className="heart-field" aria-hidden="true">
        {floatingHearts.map((heart, index) => (
          <span
            key={index}
            style={{
              "--left": heart.left,
              "--top": heart.top,
              "--delay": heart.delay,
              "--duration": heart.duration,
              "--scale": heart.scale,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <section className="section-pad flex min-h-[100svh] flex-col justify-center gap-8 py-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="eyebrow border-rosefire/35 bg-rosefire/10 text-rose-50 shadow-rose">
            <Heart className="h-4 w-4 text-rosefire" />
            Partner Memory
          </div>
          <LogoutButton />
        </nav>

        <div className="partner-hero-row flex flex-col items-center justify-between gap-8 lg:flex-row">
          <motion.div
            className="w-full flex-1"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.68 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-200">
              For {displayName}
            </p>
            <h1 className="glow-text partner-title mt-5 max-w-3xl whitespace-nowrap text-[clamp(2.2rem,7vw,4.8rem)] font-black leading-[1.12] text-white">
              รักปิ๊งน้า
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-rose-50/90">
              พื้นที่สีชมพูเล็ก ๆ สำหรับเก็บรูป ความคิดถึง เวลาอีกซีกโลก
              และจดหมายที่เปิดเมื่อไหร่ก็เหมือนได้กลับมาอยู่ใกล้กันอีกครั้ง
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="miss-button" type="button" onClick={handleMissClick}>
                <Heart className="h-5 w-5" />
                ส่งความคิดถึง
                <span>{missCount}</span>
              </button>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-4 py-3 text-sm font-bold text-white backdrop-blur-xl">
                <CalendarHeart className="h-5 w-5 text-ember" />
                อีก {countdown.days} วัน {countdown.hours} ชม.
              </div>
            </div>
          </motion.div>

          <motion.figure
            className="raw-photo-frame w-full max-w-xl shrink-0"
            initial={{ opacity: 0, scale: 0.94, rotate: 1.2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.24, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              className="raw-memory-photo"
              src={heroPhoto}
              alt="รูปความทรงจำคู่รักของ Pink"
            />
            <figcaption className="photo-caption">
              <Camera className="h-4 w-4 text-white" />
              Raw memory frame
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="section-pad grid gap-5 pb-8 lg:grid-cols-3">
        <motion.article
          className="partner-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="panel-heading">
            <Clock3 className="h-6 w-6 text-rosefire" />
            <div>
              <p>Dual Time</p>
              <h2>สองเวลาเดียวกัน</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="time-card">
              <Sun className="h-5 w-5 text-ember" />
              <span>ไทย</span>
              <strong>{formatClock(now, "Asia/Bangkok")}</strong>
              <small>{formatDateLine(now, "Asia/Bangkok")}</small>
            </div>
            <div className="time-card">
              <Moon className="h-5 w-5 text-aqua" />
              <span>Montana</span>
              <strong>{formatClock(now, "America/Denver")}</strong>
              <small>{formatDateLine(now, "America/Denver")}</small>
            </div>
          </div>
        </motion.article>

        <motion.article
          className="partner-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.08 }}
        >
          <div className="panel-heading">
            <Plane className="h-6 w-6 text-rosefire" />
            <div>
              <p>Countdown</p>
              <h2>รอวันกลับมาเจอ</h2>
            </div>
          </div>
          <div className="countdown-row mt-6">
            <span>
              <strong>{countdown.days}</strong>
              วัน
            </span>
            <span>
              <strong>{countdown.hours}</strong>
              ชม.
            </span>
            <span>
              <strong>{countdown.minutes}</strong>
              นาที
            </span>
          </div>
        </motion.article>

        <motion.article
          className="partner-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.16 }}
        >
          <div className="panel-heading">
            <Bell className="h-6 w-6 text-rosefire" />
            <div>
              <p>Status</p>
              <h2>{activeStatus.label}</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-rose-50/75">{activeStatus.detail}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {statusOptions.map((item) => (
              <button
                className={`status-pill ${item.label === status ? "is-active" : ""}`}
                key={item.label}
                type="button"
                onClick={() => handleStatusChange(item.label)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </motion.article>
      </section>

      <section className="section-pad py-8">
        <motion.article
          className="distance-map-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
        >
          <div className="map-copy">
            <div className="panel-heading">
              <Globe2 className="h-6 w-6 text-rosefire" />
              <div>
                <p>Distance Map</p>
                <h2>Yellowstone National Park → BKK</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-rose-50/75">
              เส้นทางความคิดถึงจากมอนแทนาฝั่ง Yellowstone ข้ามมหาสมุทรแปซิฟิก
              กลับมาหาปิ๊งที่กรุงเทพฯ
            </p>

            <div className="route-stat-grid mt-6">
              <div>
                <Route className="h-5 w-5 text-rosefire" />
                <span>ระยะทางตรง</span>
                <strong>{routeDistanceKm} km</strong>
              </div>
              <div>
                <PlaneTakeoff className="h-5 w-5 text-ember" />
                <span>จาก</span>
                <strong>Yellowstone</strong>
              </div>
              <div>
                <PlaneLanding className="h-5 w-5 text-aqua" />
                <span>ถึง</span>
                <strong>BKK</strong>
              </div>
            </div>
          </div>

          <div className="route-map-stage" aria-label="แผนที่จาก Yellowstone National Park ไป BKK">
            <svg className="route-map-svg" viewBox="0 0 1000 430" role="img">
              <defs>
                <linearGradient id="routeGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#ff5d8f" />
                  <stop offset="52%" stopColor="#ffb86b" />
                  <stop offset="100%" stopColor="#49d8ff" />
                </linearGradient>
                <filter id="routeGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect className="ocean-base" width="1000" height="430" rx="34" />
              <g className="map-grid-lines">
                <line x1="100" x2="100" y1="34" y2="396" />
                <line x1="220" x2="220" y1="34" y2="396" />
                <line x1="340" x2="340" y1="34" y2="396" />
                <line x1="460" x2="460" y1="34" y2="396" />
                <line x1="580" x2="580" y1="34" y2="396" />
                <line x1="700" x2="700" y1="34" y2="396" />
                <line x1="820" x2="820" y1="34" y2="396" />
                <line x1="940" x2="940" y1="34" y2="396" />
                <line x1="42" x2="958" y1="95" y2="95" />
                <line x1="42" x2="958" y1="155" y2="155" />
                <line x1="42" x2="958" y1="215" y2="215" />
                <line x1="42" x2="958" y1="275" y2="275" />
                <line x1="42" x2="958" y1="335" y2="335" />
              </g>
              <g className="world-land">
                <path
                  className="continent north-america"
                  d="M79 105 C106 67 164 49 225 60 C285 70 326 104 349 145 C374 189 344 232 286 241 C240 248 218 228 176 232 C130 236 91 210 69 169 C57 144 60 123 79 105Z"
                />
                <path
                  className="continent central-america"
                  d="M268 234 C306 232 348 244 376 267 C363 287 318 287 282 270 C258 259 250 244 268 234Z"
                />
                <path
                  className="continent south-america"
                  d="M356 276 C394 288 423 326 412 370 C402 409 368 420 340 390 C314 362 300 305 320 281 C329 270 342 270 356 276Z"
                />
                <path
                  className="continent greenland"
                  d="M315 38 C357 24 409 34 421 62 C399 92 333 98 298 75 C279 61 286 47 315 38Z"
                />
                <path
                  className="continent europe"
                  d="M492 106 C533 80 591 85 618 119 C610 149 553 160 509 145 C478 134 468 120 492 106Z"
                />
                <path
                  className="continent africa"
                  d="M548 166 C592 162 631 198 636 252 C642 314 601 368 553 349 C515 334 499 276 512 219 C520 185 530 170 548 166Z"
                />
                <path
                  className="continent asia"
                  d="M611 100 C673 56 780 59 860 95 C930 127 946 181 896 218 C847 256 757 236 706 213 C666 195 619 201 593 166 C574 140 582 119 611 100Z"
                />
                <path
                  className="continent middle-east"
                  d="M616 169 C655 163 695 184 702 217 C673 231 629 219 602 192 C596 181 603 173 616 169Z"
                />
                <path
                  className="continent south-east-asia"
                  d="M758 228 C800 214 841 229 859 263 C836 290 780 290 748 263 C734 249 739 236 758 228Z"
                />
                <path
                  className="continent australia"
                  d="M785 323 C840 294 921 309 946 351 C905 387 815 389 760 357 C744 346 753 334 785 323Z"
                />
              </g>
              <text className="map-region-label" x="175" y="154">North America</text>
              <text className="map-region-label" x="345" y="343">South America</text>
              <text className="map-region-label" x="525" y="134">Europe</text>
              <text className="map-region-label" x="550" y="266">Africa</text>
              <text className="map-region-label" x="742" y="155">Asia</text>
              <text className="map-region-label ocean" x="444" y="214">Pacific Ocean</text>
              <line className="map-date-line" x1="28" x2="28" y1="48" y2="382" />
              <line className="map-date-line" x1="972" x2="972" y1="48" y2="382" />
              <text className="map-date-label" x="42" y="70">Date line</text>

              <path
                className="route-arc"
                d={`M ${yellowstonePoint.mapX} ${yellowstonePoint.mapY} C 132 54 66 68 28 127`}
                filter="url(#routeGlow)"
              />
              <path
                className="route-arc"
                d={`M 972 127 C 920 74 834 105 ${bkkPoint.mapX} ${bkkPoint.mapY}`}
                filter="url(#routeGlow)"
              />
              <circle className="map-pin-ring" cx={yellowstonePoint.mapX} cy={yellowstonePoint.mapY} r="20" />
              <circle className="map-pin-dot start" cx={yellowstonePoint.mapX} cy={yellowstonePoint.mapY} r="8" />
              <circle className="map-pin-ring" cx={bkkPoint.mapX} cy={bkkPoint.mapY} r="20" />
              <circle className="map-pin-dot end" cx={bkkPoint.mapX} cy={bkkPoint.mapY} r="8" />

              <text className="map-label" x={yellowstonePoint.mapX + 28} y={yellowstonePoint.mapY - 14}>
                Yellowstone
              </text>
              <text className="map-label sub" x={yellowstonePoint.mapX + 28} y={yellowstonePoint.mapY + 12}>
                Montana, USA
              </text>
              <text className="map-label" x={bkkPoint.mapX + 28} y={bkkPoint.mapY - 14}>
                BKK
              </text>
              <text className="map-label sub" x={bkkPoint.mapX + 28} y={bkkPoint.mapY + 12}>
                Bangkok, Thailand
              </text>
            </svg>

            <div className="map-endpoints">
              <span>
                <MapPin className="h-4 w-4 text-rosefire" />
                {yellowstonePoint.shortLabel}
              </span>
              <span>
                <Plane className="h-4 w-4 text-ember" />
                Pacific route
              </span>
              <span>
                <MapPin className="h-4 w-4 text-aqua" />
                {bkkPoint.shortLabel}
              </span>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="section-pad grid gap-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.article
          className="love-letter-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
                Pink Letter
              </p>
              <h2 className="mt-2 text-[clamp(1.6rem,4vw,2.4rem)] font-black leading-tight text-white">
                ถึงคนที่น่ารักที่สุดในโลก
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-200/40 bg-white/15 shadow-rose">
              <HeartHandshake className="h-7 w-7 text-rose-100" />
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {loveLetter.map((paragraph, index) => (
              <motion.p
                className="text-base leading-8 text-rose-50 sm:text-lg sm:leading-9"
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/20 bg-white/15 px-5 py-3 text-sm font-bold text-white shadow-rose">
            <Sparkles className="h-5 w-5 text-ember" />
            เลิฟๆงับเดี๋ยวหาตังมาให้งับ งิงิ
          </div>
        </motion.article>

        <motion.article
          className="partner-panel postbox-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ delay: 0.08 }}
        >
          <div className="panel-heading">
            <Mail className="h-6 w-6 text-rosefire" />
            <div>
              <p>Digital Postbox</p>
              <h2>จดหมายจากอีกซีกโลก</h2>
            </div>
          </div>
          <form className="mt-6" onSubmit={handleLetterSubmit}>
            <textarea
              className="postbox-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="ฝากข้อความสั้น ๆ ไว้ให้ปิ๊ง..."
              rows={4}
            />
            <button className="postbox-button mt-3" type="submit">
              <Send className="h-4 w-4" />
              ฝากจดหมาย
            </button>
          </form>
          <div className="mt-6 grid gap-3">
            {letters.map((letter) => (
              <article className="letter-note" key={letter.id}>
                <MessageCircle className="h-5 w-5 text-rosefire" />
                <div>
                  <p>{letter.text}</p>
                  <small>{letter.createdAt}</small>
                </div>
              </article>
            ))}
          </div>
        </motion.article>
      </section>

      <section className="section-pad pb-24 pt-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              Memory Timeline
            </p>
            <h2 className="mt-2 text-[clamp(1.7rem,4vw,2.5rem)] font-black leading-tight text-white">
              รูปของเราสอง
            </h2>
          </div>
          <button className="random-memory-button" type="button" onClick={handleRandomMemory}>
            <Shuffle className="h-5 w-5" />
            สุ่มรูป
          </button>
        </div>

        <motion.article
          className="random-memory-panel mt-8"
          key={randomMemory.title}
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.38 }}
        >
          <img src={randomMemory.image} alt={`รูปสุ่ม: ${randomMemory.title}`} />
          <div>
            <span>
              <Images className="h-5 w-5 text-rosefire" />
              Random Memory
            </span>
            <h3>{randomMemory.title}</h3>
            <p>{randomMemory.text}</p>
            <button type="button" onClick={handleRandomMemory}>
              <Shuffle className="h-4 w-4" />
              สุ่มอีกรูป
            </button>
          </div>
        </motion.article>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-3 text-sm font-bold text-white backdrop-blur-xl">
          <Images className="h-5 w-5 text-rosefire" />
          {timeline.length} memories
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((memory, index) => (
            <motion.article
              className="timeline-card"
              key={memory.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.04 }}
            >
              <img src={memory.image} alt={memory.title} />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{memory.title}</h3>
                <p>{memory.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="miss-burst" aria-hidden="true">
        {burstKey > 0 &&
          burstHearts.map((heart, index) => (
            <motion.span
              key={`${burstKey}-${index}`}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.4, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: heart.x,
                y: heart.y,
                scale: [0.4, 1.1, 0.7],
                rotate: heart.rotate,
              }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              ♥
            </motion.span>
          ))}
      </div>
    </PageTransition>
  );
}
