import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortalCard({
  to,
  icon: Icon,
  title,
  subtitle,
  accent = "aqua",
}) {
  const accentClass =
    accent === "rose"
      ? "from-rosefire/30 via-transparent to-ember/20"
      : "from-aqua/30 via-transparent to-aurora/20";

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="portal-card group min-h-[270px]"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentClass} opacity-60 transition duration-500 group-hover:opacity-100`}
      />
      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div>
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] shadow-glow">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            {subtitle}
          </p>
        </div>
        <Link className="primary-button w-fit" to={to}>
          Open portal
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
