import { motion } from "framer-motion";
import { Camera, Gift, Heart, Home, ShieldCheck, Sparkles } from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import familyImage from "../assets/family-memory.png";
import { getSession } from "../routes/auth.js";

const memories = [
  {
    icon: Home,
    title: "บ้าน",
    text: "จุดเริ่มต้นที่ทำให้ทุกการทดลองมีความหมาย และเป็นที่ที่กลับมาเติมพลังได้เสมอ",
  },
  {
    icon: ShieldCheck,
    title: "พลังใจ",
    text: "คำพูดเล็ก ๆ จากครอบครัวกลายเป็นแรงผลักดันให้กล้าทำเว็บนี้ให้ดีที่สุด",
  },
  {
    icon: Gift,
    title: "สิ่งที่ได้รับ",
    text: "ความรัก ความอดทน และความเชื่อใจที่ค่อย ๆ สร้างตัวตนของฉันขึ้นมา",
  },
];

const familyNames = ["Chaiwat Saetang", "Napawan Phungphugdee", "Aomsub"];

export default function Family() {
  const session = getSession();

  return (
    <PageTransition className="page-shell">
      <div
        className="cinematic-bg"
        style={{ backgroundImage: `url(${familyImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />

      <section className="section-pad flex min-h-[100svh] flex-col justify-center gap-10 py-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="eyebrow">
            <Heart className="h-4 w-4 text-ember" />
            Family Memory
          </div>
          <LogoutButton />
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.28em] text-ember"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
            >
              For the people who made me brave
            </motion.p>
            <motion.h1
              className="glow-text mt-5 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              โลกของครอบครัวที่อยู่ข้างฉันเสมอ
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-9 text-slate-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              ยินดีต้อนรับ {session?.displayName || "คนสำคัญ"} หน้านี้ถูกสร้างให้เป็นพื้นที่อบอุ่น
              สำหรับเก็บความทรงจำและคำขอบคุณถึงครอบครัวที่เป็นเหมือนรากฐานของทุกความฝัน
            </motion.p>
          </div>

          <motion.div
            className="glass-panel rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 38 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.68 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ember/35 bg-ember/10 shadow-gold">
                <Camera className="h-7 w-7 text-ember" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Memory Wall
                </p>
                <h2 className="text-2xl font-black text-white">
                  Hearts connected
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {familyNames.map((name, index) => (
                <motion.div
                  className="glass-soft flex items-center justify-between rounded-2xl p-4"
                  key={name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.48 + index * 0.1 }}
                >
                  <span className="font-semibold text-white">{name}</span>
                  <Sparkles className="h-5 w-5 text-aurora" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {memories.map((item, index) => (
            <motion.article
              className="glass-soft rounded-2xl p-6"
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="mb-5 h-8 w-8 text-ember" />
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
