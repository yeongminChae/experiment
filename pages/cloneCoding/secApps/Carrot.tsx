import { animate, AnimatePresence, motion } from "framer-motion";

export default function Carrot() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        당근마켓
      </motion.div>
    </AnimatePresence>
  );
}
