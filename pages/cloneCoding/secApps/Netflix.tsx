import { animate, AnimatePresence, motion } from "framer-motion";

export default function Netflix() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        Netflix
      </motion.div>
    </AnimatePresence>
  );
}
