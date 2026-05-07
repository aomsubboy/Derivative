import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  KeyRound,
  LockKeyhole,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import Toast from "../components/Toast.jsx";
import gatewayImage from "../assets/world-gateway.png";
import { authenticate, saveSession } from "../routes/auth.js";

const titleWords = "Welcome to my world".split(" ");

const bioHighlights = [
  {
    icon: BookOpen,
    title: "Accounting Student",
    text: "เรียนบัญชี ฝึกคิดเป็นระบบ อ่านตัวเลขให้กลายเป็นเรื่องราว และชอบทำงานที่มีรายละเอียดจริงจัง",
  },
  {
    icon: Code2,
    title: "Web Builder",
    text: "หลงใหลการสร้างเว็บที่ไม่ใช่แค่ดูดี แต่ต้องขยับได้ ลื่นไหล และมีบุคลิกของเจ้าของอยู่ในนั้น",
  },
  {
    icon: BrainCircuit,
    title: "AI Explorer",
    text: "สนใจ AI เพราะมันทำให้ไอเดียเล็ก ๆ กลายเป็นเครื่องมือที่ช่วยคนจริงได้เร็วขึ้น",
  },
];

const floatingStats = [
  ["Mode", "Cinematic"],
  ["Focus", "Family + Love"],
  ["Access", "Private"],
];

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState("");
  const toastTimer = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  function showToast(message) {
    window.clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = window.setTimeout(() => setToast(""), 3400);
  }

  useEffect(() => {
    if (location.state?.notice) {
      showToast(location.state.notice);
      window.history.replaceState({}, document.title);
    }

    return () => window.clearTimeout(toastTimer.current);
  }, [location.state]);

  function handleSubmit(event) {
    event.preventDefault();
    const user = authenticate(username, password);

    if (!user) {
      showToast("Username หรือ Password ไม่ถูกต้อง ลองตรวจตัวพิมพ์ใหญ่อีกครั้ง");
      return;
    }

    saveSession(user);
    navigate(user.landing);
  }

  return (
    <PageTransition className="page-shell">
      <Toast message={toast} />
      <div
        className="cinematic-bg"
        style={{ backgroundImage: `url(${gatewayImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />

      <section className="section-pad flex min-h-[100svh] flex-col justify-center gap-12 pt-24 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-4xl">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <Sparkles className="h-4 w-4 text-ember" />
            Aomsub Private Universe
          </motion.div>

          <h1 className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-5xl font-black leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            {titleWords.map((word, index) => (
              <motion.span
                className="glow-text inline-block"
                key={word}
                initial={{ opacity: 0, y: 64, rotateX: -42 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.28 + index * 0.13,
                  duration: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-9 text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.96 }}
          >
            ยินดีต้อนรับเข้าสู่โลกของฉัน พื้นที่ทดลองที่ผสมความเป็นนักศึกษาบัญชี
            ความชอบในการทำเว็บ และความหลงใหลใน AI ให้กลายเป็นประตูหลายบานที่มีความหมายกับคนสำคัญ
          </motion.p>

          <motion.div
            className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 1.08 } },
            }}
          >
            {floatingStats.map(([label, value]) => (
              <motion.div
                className="glass-soft rounded-2xl px-4 py-4"
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
                <p className="mt-1 text-base font-bold text-white">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.form
          className="glass-panel relative mx-auto w-full max-w-md rounded-3xl p-6 sm:p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.78, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-aqua">
                Gateway
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                Private Access
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-aqua/35 bg-aqua/10 shadow-glow">
              <KeyRound className="h-7 w-7 text-aqua" />
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-200">
            Username
            <span className="mt-2 flex items-center gap-3">
              <UserRound className="h-5 w-5 text-slate-400" />
              <input
                className="field"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Identity"
                autoComplete="username"
              />
            </span>
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-200">
            Password
            <span className="mt-2 flex items-center gap-3">
              <LockKeyhole className="h-5 w-5 text-slate-400" />
              <input
                className="field"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Passphrase"
                autoComplete="current-password"
              />
            </span>
          </label>

          <button className="primary-button mt-7 w-full" type="submit">
            Unlock world
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </section>

      <section className="section-pad grid gap-5 pb-24 lg:grid-cols-3">
        {bioHighlights.map((item, index) => (
          <motion.article
            className="glass-soft rounded-2xl p-6"
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08 }}
          >
            <item.icon className="mb-5 h-8 w-8 text-ember" />
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </motion.article>
        ))}
      </section>
    </PageTransition>
  );
}
