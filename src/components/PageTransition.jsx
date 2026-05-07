import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 22, filter: "blur(14px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, filter: "blur(10px)" },
};

export default function PageTransition({ children, className = "" }) {
  return (
    <motion.main
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
