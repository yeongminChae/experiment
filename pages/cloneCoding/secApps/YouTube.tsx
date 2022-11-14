import { animate, AnimatePresence, motion } from "framer-motion";

export default function Youtube() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        Youtube
      </motion.div>
    </AnimatePresence>
  );
}
