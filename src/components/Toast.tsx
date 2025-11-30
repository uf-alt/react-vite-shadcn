import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2",
        "px-8 py-4 rounded-full",
        "bg-primary text-primary-foreground",
        "font-semibold text-sm",
        "shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
        "z-[1000] pointer-events-none"
      )}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 0 }}
      animate={
        shouldReduceMotion
          ? { opacity: isVisible ? 1 : 0 }
          : {
              opacity: isVisible ? 1 : 0,
              y: isVisible ? -10 : 0,
            }
      }
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {message}
    </motion.div>
  );
}
