import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import explosionGif from "@/assets/explosion.gif";

export default function SecretButton() {
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showFire, setShowFire] = useState(false);

  const handleDestroy = () => {
    // Start fiery effect
    setShowFire(true);

    // After fire builds up, show explosions
    setTimeout(() => {
      setShowExplosion(true);
    }, 2000);

    // After explosions finish, trigger destruction (800ms fire + 1700ms explosions)
    setTimeout(() => {
      setIsDestroyed(true);
    }, 3700);
  };

  return (
    <>
      {/* Secret Button */}
      {!isDestroyed && (
        <button
          onClick={handleDestroy}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-transparent border-none cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-500 z-[9999]"
          aria-label="Secret button"
          title="Don't click me..."
        />
      )}

      {/* Fiery Screen Effect */}
      <AnimatePresence>
        {showFire && !isDestroyed && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%,
                rgba(255, 100, 0, 0.8) 0%,
                rgba(255, 50, 0, 0.6) 25%,
                rgba(200, 0, 0, 0.4) 50%,
                rgba(100, 0, 0, 0.2) 75%,
                transparent 100%)`,
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 3 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Multiple Explosion Animations */}
      <AnimatePresence>
        {showExplosion && !isDestroyed && (
          <>
            {/* Generate 8 explosions at random positions with staggered timing */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="fixed z-[10000] pointer-events-none"
                style={{
                  top: `${10 + Math.random() * 80}%`,
                  left: `${10 + Math.random() * 80}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 1, scale: 2 }}
                animate={{ opacity: 1, scale: 10 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.4,
                }}
              >
                <img
                  src={explosionGif}
                  alt="Explosion"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Destruction Sequence */}
      <AnimatePresence>
        {isDestroyed && (
          <>
            {/* Fade to Black */}
            <motion.div
              className="fixed inset-0 z-[10002] bg-black flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Final Message */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  why did you do it
                </motion.h1>
                {/* <motion.button
                  className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 0.5 }}
                  onClick={() => window.location.reload()}
                >
                  Undo
                </motion.button> */}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
