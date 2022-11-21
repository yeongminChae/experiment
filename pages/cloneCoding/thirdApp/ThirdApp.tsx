import { animate, AnimatePresence, motion } from "framer-motion";

export default function ThirdApp() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        CoinTracker
      </motion.div>
    </AnimatePresence>
  );
}
