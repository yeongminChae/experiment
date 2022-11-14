import { animate, AnimatePresence, motion } from "framer-motion";

export default function ForthApp() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        koreanQuiz
      </motion.div>
    </AnimatePresence>
  );
}
