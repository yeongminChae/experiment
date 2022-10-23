import { animate, AnimatePresence, motion } from "framer-motion";

export default function Jobs() {
  return (
    <AnimatePresence>
      <motion.div layoutId={""} className="h-full w-full bg-red-200">
        python web scrapper
      </motion.div>
    </AnimatePresence>
  );
}
