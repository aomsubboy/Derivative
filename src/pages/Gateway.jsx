import { motion } from "framer-motion";
import { Crown, Heart, Home, ShieldCheck, Sparkles } from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import PortalCard from "../components/PortalCard.jsx";
import gatewayImage from "../assets/world-gateway.png";
import { getSession } from "../routes/auth.js";

export default function Gateway() {
  const session = getSession();

  return (
    <PageTransition className="page-shell">
      <div
        className="cinematic-bg"
        style={{ backgroundImage: `url(${gatewayImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />

      <section className="section-pad flex min-h-[100svh] flex-col justify-center gap-10 py-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="eyebrow">
            <ShieldCheck className="h-4 w-4 text-aurora" />
            Admin Gateway
          </div>
          <LogoutButton />
        </nav>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
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
              เลือกประตูที่อยากเปิดจาก command center ของคุณ ทุกพื้นที่ถูกแยกสิทธิ์ไว้แล้ว
              และบัญชีนี้มองเห็นได้ครบทั้งสองโลก
            </p>
          </div>

          <motion.div
            className="glass-panel rounded-3xl p-5 sm:p-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-5">
              <Sparkles className="h-6 w-6 text-aqua" />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  System
                </p>
                <p className="text-xl font-black text-white">
                  All portals online
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Family", "Partner", "Admin"].map((item) => (
                <div className="glass-soft rounded-2xl p-4" key={item}>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Area
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
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
