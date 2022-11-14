import { animate, AnimatePresence, motion } from "framer-motion";

export default function Twitter() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        Twitter
      </motion.div>
    </AnimatePresence>
  );
}
