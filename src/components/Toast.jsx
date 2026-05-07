import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Toast({ message }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          role="alert"
          className="fixed right-5 top-5 z-50 flex max-w-sm items-start gap-3 rounded-2xl border border-rosefire/40 bg-black/80 p-4 text-sm text-white shadow-rose backdrop-blur-2xl"
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rosefire" />
          <span>{message}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
