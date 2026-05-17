import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Globe2,
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

const titleWords = "Aomsub Gateway".split(" ");
const portfolioUrl = "https://aomsubboy.github.io/PortAomsub/";
const profileImageUrl =
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B8%9E%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97/profile%20.jpg";

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
    <PageTransition className="page-shell gateway-page">
      <Toast message={toast} />
      <div
        className="cinematic-bg gateway-cinematic-bg"
        style={{ backgroundImage: `url(${gatewayImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />
      <div className="gateway-motion-lines" aria-hidden="true" />

      <section className="gateway-home-section section-pad flex min-h-[100svh] flex-col justify-center gap-8 py-10 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
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

          <h1 className="gateway-hero-title mt-7 flex flex-wrap gap-x-4 gap-y-2 text-5xl font-black leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            {titleWords.map((word, index) => (
              <motion.span
                className="glow-text inline-block"
                key={word}
                initial={{ opacity: 0, y: 64, rotateX: -42 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.16 + index * 0.07,
                  duration: 0.58,
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
            transition={{ delay: 0.34 }}
          >
            ยินดีต้อนรับเข้าสู่พื้นที่ส่วนตัวของออมทรัพย์ กดเข้าด้วยบัญชีของคุณ
            หรือเปิด Portfolio เพื่อดูโปรไฟล์และผลงานทั้งหมดได้ทันที
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            <a
              className="portfolio-chip"
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src={profileImageUrl} alt="รูปโปรไฟล์ Aomsub" />
              <span>
                <strong>Aomsub Portfolio</strong>
                <small>Phubase Phungphugdee</small>
              </span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="gateway-login-stack">
          <motion.a
            className="gateway-profile-card"
            href={portfolioUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 28, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.28, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gateway-profile-ring ring-one" />
            <span className="gateway-profile-ring ring-two" />
            <img src={profileImageUrl} alt="รูปโปรไฟล์ Aomsub" />
            <div>
              <p>Portfolio Profile</p>
              <h2>Aomsub</h2>
              <span>
                <Globe2 className="h-4 w-4" />
                เปิดหน้า Port
              </span>
            </div>
          </motion.a>

          <motion.form
            className="glass-panel gateway-login-card relative w-full rounded-3xl p-6 sm:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.34, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-aqua">
                  Gateway
                </p>
                <h2 className="mt-2 text-3xl font-black text-white">
                  Private Gateway
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
        </div>
      </section>
    </PageTransition>
  );
}
