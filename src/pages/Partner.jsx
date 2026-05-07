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
  Home,
  Images,
  Mail,
  MessageCircle,
  Moon,
  Plane,
  Send,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import partnerImage from "../assets/partner-garden.png";
import heroPhoto from "../assets/Pink/1768814216955.jpg";
import roadPhoto from "../assets/Pink/1768984644774.jpg";
import lakePhoto from "../assets/Pink/20251022_175256.jpg";
import cafePhoto from "../assets/Pink/20251023_135348.jpg";
import templePhoto from "../assets/Pink/20260111_142624.jpg";
import trainPhoto from "../assets/Pink/dji_mimo_14830114_080624_20260114080625_1769013599926_photo.jpg";
import sillyPhoto from "../assets/Pink/IMG_7833.PNG";
import forestPhoto from "../assets/Pink/Screenshot_20260102_221200_Photos.jpg";
import { getSession } from "../routes/auth.js";

const MISS_KEY = "partner_miss_count";
const STATUS_KEY = "partner_status";
const LETTERS_KEY = "partner_postbox_letters";
const REUNION_DATE = new Date("2026-09-07T00:00:00+07:00");

const loveLetter = [
  "สุขสันต์วันครบรอบล่วงหน้าน้าปิ๊งง 💖",
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
    title: "วัดสีสดใส",
    text: "รูปคู่ที่ยิ้มใกล้กันจนพื้นที่ทั้งรูปดูอบอุ่นขึ้นมาเลย",
  },
  {
    image: roadPhoto,
    title: "บนถนนยาว",
    text: "ถนนไกลแค่ไหนก็ยังมีรูปที่ทำให้นึกถึงกันได้",
  },
  {
    image: lakePhoto,
    title: "แสงเย็นริมทะเลสาบ",
    text: "ช่วงเวลาธรรมดาที่กลายเป็นความทรงจำดี ๆ",
  },
  {
    image: cafePhoto,
    title: "มุมโต๊ะน่ารัก",
    text: "เก็บโมเมนต์เล็ก ๆ ไว้เปิดดูตอนคิดถึง",
  },
  {
    image: templePhoto,
    title: "นั่งข้างกัน",
    text: "แค่ได้นั่งข้างกันก็เป็นวันที่ดีแล้ว",
  },
  {
    image: trainPhoto,
    title: "ระหว่างทาง",
    text: "ทุกทริปมีเรื่องให้จำ และมีคนที่อยากกลับไปเล่าให้ฟัง",
  },
  {
    image: sillyPhoto,
    title: "หน้าเล่น ๆ",
    text: "ความน่ารักที่ไม่ต้องตั้งใจ แต่ชนะทุกอย่าง",
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

export default function Partner() {
  const session = getSession();
  const displayName = session?.displayName || "Pink";
  const [now, setNow] = useState(() => new Date());
  const [missCount, setMissCount] = useState(() => readNumber(MISS_KEY));
  const [burstKey, setBurstKey] = useState(0);
  const [status, setStatus] = useState(() => readText(STATUS_KEY, statusOptions[0].label));
  const [draft, setDraft] = useState("");
  const [letters, setLetters] = useState(() => readJson(LETTERS_KEY, defaultLetters));

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(() => getCountdown(now), [now]);
  const activeStatus = statusOptions.find((item) => item.label === status) || statusOptions[0];

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
            <h1 className="glow-text partner-title mt-5 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              สุขสันต์วันครบรอบล่วงหน้าน้าปิ๊งง
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
              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
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
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              รูปดิบในกรอบความทรงจำ
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-3 text-sm font-bold text-white backdrop-blur-xl">
            <Images className="h-5 w-5 text-rosefire" />
            {timeline.length} memories
          </div>
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
