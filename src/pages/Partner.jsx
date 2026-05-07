import { motion } from "framer-motion";
import { Heart, Infinity, MessageCircle, Moon, Sparkles, Star } from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import partnerImage from "../assets/partner-garden.png";
import { getSession } from "../routes/auth.js";

const loveNotes = [
  {
    icon: Star,
    title: "Narak Tee Sud Nairok",
    text: "ประโยคที่กลายเป็นกุญแจของโลกนี้ เพราะบางคนก็น่ารักจนต้องมี portal ของตัวเอง",
  },
  {
    icon: MessageCircle,
    title: "Everyday Signal",
    text: "รายละเอียดเล็ก ๆ ในแต่ละวัน บทสนทนา รอยยิ้ม และความคิดถึง ถูกเก็บไว้เป็นแสงในหน้านี้",
  },
  {
    icon: Infinity,
    title: "Always Pink",
    text: "พื้นที่นี้เป็นเหมือนสวนกลางคืนที่เปิดไว้ให้ความรู้สึกดี ๆ เดินทางกลับมาได้เสมอ",
  },
];

export default function Partner() {
  const session = getSession();

  return (
    <PageTransition className="page-shell">
      <div
        className="cinematic-bg"
        style={{ backgroundImage: `url(${partnerImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />

      <section className="section-pad flex min-h-[100svh] flex-col justify-center gap-10 py-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="eyebrow">
            <Heart className="h-4 w-4 text-rosefire" />
            Partner Memory
          </div>
          <LogoutButton />
        </nav>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            className="glass-panel order-2 rounded-3xl p-6 sm:p-8 lg:order-1"
            initial={{ opacity: 0, x: -34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.68 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rosefire/35 bg-rosefire/10 shadow-rose">
                <Moon className="h-7 w-7 text-rosefire" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Pink's Portal
                </p>
                <h2 className="text-2xl font-black text-white">
                  Soft launch of a heart
                </h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {loveNotes.map((note, index) => (
                <motion.article
                  className="glass-soft rounded-2xl p-5"
                  key={note.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + index * 0.1 }}
                >
                  <note.icon className="mb-4 h-6 w-6 text-rosefire" />
                  <h3 className="text-lg font-black text-white">{note.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {note.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.28em] text-rosefire"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
            >
              For Pink
            </motion.p>
            <motion.h1
              className="glow-text mt-5 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              โลกเล็ก ๆ ที่ทำไว้ให้คนที่น่ารักที่สุด
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-9 text-slate-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              ยินดีต้อนรับ {session?.displayName || "Pink"} หน้านี้ถูกออกแบบให้เหมือนสวนกลางคืนที่มีแสงนุ่ม ๆ
              เก็บความรู้สึกดี ความคิดถึง และประโยคพิเศษที่เปิดประตูนี้ได้เท่านั้น
            </motion.p>
            <motion.div
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-rosefire/35 bg-rosefire/10 px-5 py-3 text-sm font-bold text-white shadow-rose"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
            >
              <Sparkles className="h-5 w-5 text-ember" />
              Narak Tee Sud Nairok
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
