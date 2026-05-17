import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  ExternalLink,
  Heart,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import PortalCard from "../components/PortalCard.jsx";
import gatewayImage from "../assets/world-gateway.png";
import { getSession } from "../routes/auth.js";

const portfolioUrl = "https://aomsubboy.github.io/PortAomsub/";
const profileImageUrl =
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B8%9E%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97/profile%20.jpg";

export default function Gateway() {
  const session = getSession();

  return (
    <PageTransition className="page-shell gateway-page">
      <div
        className="cinematic-bg gateway-cinematic-bg"
        style={{ backgroundImage: `url(${gatewayImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />
      <div className="gateway-motion-lines" aria-hidden="true" />

      <section className="section-pad flex min-h-[100svh] flex-col justify-center gap-10 py-10">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div className="eyebrow">
            <ShieldCheck className="h-4 w-4 text-aurora" />
            Admin Gateway
          </div>
          <div className="flex items-center gap-3">
            <a
              className="ghost-button"
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Port
            </a>
            <LogoutButton />
          </div>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <motion.div
              className="inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-ember/35 bg-ember/10 shadow-gold"
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ delay: 0.18, type: "spring", stiffness: 180 }}
            >
              <Crown className="h-8 w-8 text-ember" />
            </motion.div>
            <h1 className="glow-text mt-7 max-w-3xl text-5xl font-black leading-tight text-white sm:text-7xl">
              Welcome back, {session?.displayName || "Aomsub"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-200">
              เลือกพื้นที่ที่อยากเปิดต่อจากหน้านี้ได้เลย ผมปรับให้ทางเข้าอ่านง่ายขึ้น
              ภาพชัดขึ้น และกดใช้งานบนมือถือได้ลื่นกว่าเดิม
            </p>
            <motion.a
              className="portfolio-link-card mt-7"
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <img src={profileImageUrl} alt="รูปโปรไฟล์ Aomsub" />
              <span>
                <strong>ดู Portfolio ของฉัน</strong>
                <small>aomsubboy.github.io/PortAomsub</small>
              </span>
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>

          <motion.div
            className="gateway-command-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <div className="gateway-command-visual">
              <span className="gateway-profile-ring ring-one" />
              <span className="gateway-profile-ring ring-two" />
              <img src={profileImageUrl} alt="รูปโปรไฟล์ Aomsub" />
            </div>
            <div className="flex items-center gap-4 border-b border-white/10 pb-5">
              <Sparkles className="h-6 w-6 text-aqua" />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Gateway Ready
                </p>
                <p className="text-xl font-black text-white">
                  Friendly mobile portal
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="gateway-mini-panel">
                <p>Profile</p>
                <strong>Aomsub</strong>
              </div>
              <div className="gateway-mini-panel">
                <p>Portal</p>
                <strong>Family + Partner</strong>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="gateway-portal-grid grid gap-5 lg:grid-cols-2">
          <PortalCard
            to="/family"
            icon={Home}
            title="Family Universe"
            subtitle="พื้นที่อบอุ่นสำหรับความทรงจำ กำลังใจ และเรื่องราวของครอบครัวที่เป็นแรงผลักดันในชีวิต"
          />
          <PortalCard
            to="/partner"
            icon={Heart}
            title="Partner Universe"
            subtitle="พื้นที่โรแมนติกสำหรับ Pink โลกเล็ก ๆ ที่เก็บความน่ารัก ความคิดถึง และความหมายพิเศษไว้ด้วยกัน"
            accent="rose"
          />
        </div>
      </section>
    </PageTransition>
  );
}
