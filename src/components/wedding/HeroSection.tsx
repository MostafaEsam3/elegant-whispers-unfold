import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const HeroSection = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-burgundy-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 16}px`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h1
          className="font-script text-gold text-4xl md:text-6xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Приглашение
        </motion.h1>

        {/* Envelope container */}
        <div className="relative">
          {/* Hands */}
          <motion.div
            className="absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2 text-5xl md:text-7xl"
            initial={{ x: -100, opacity: 0 }}
            animate={isOpened ? { x: -150, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transform: "scaleX(-1) translateY(-50%)" }}
          >
            🤚🏻
          </motion.div>
          <motion.div
            className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 text-5xl md:text-7xl"
            initial={{ x: 100, opacity: 0 }}
            animate={isOpened ? { x: 150, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            🤚🏻
          </motion.div>

          {/* Envelope */}
          <motion.div
            className="relative cursor-pointer"
            onClick={handleOpen}
            whileHover={!isOpened ? { scale: 1.05, y: -5 } : {}}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Envelope body */}
            <div className="w-64 h-44 md:w-80 md:h-56 relative">
              <svg viewBox="0 0 320 220" className="w-full h-full">
                {/* Envelope back */}
                <rect x="10" y="30" width="300" height="180" rx="8" fill="hsl(0, 40%, 22%)" stroke="hsl(40, 60%, 55%)" strokeWidth="1.5" />
                {/* Envelope flap */}
                <motion.path
                  d="M10 30 L160 130 L310 30"
                  fill="hsl(0, 45%, 18%)"
                  stroke="hsl(40, 60%, 55%)"
                  strokeWidth="1.5"
                  animate={isOpened ? { d: "M10 30 L160 -40 L310 30" } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                {/* Wax seal */}
                <motion.circle
                  cx="160"
                  cy="80"
                  r="20"
                  fill="hsl(0, 50%, 30%)"
                  stroke="hsl(40, 60%, 55%)"
                  strokeWidth="1.5"
                  animate={isOpened ? { opacity: 0, scale: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.text
                  x="160"
                  y="86"
                  textAnchor="middle"
                  fill="hsl(40, 60%, 55%)"
                  fontSize="16"
                  fontFamily="Great Vibes"
                  animate={isOpened ? { opacity: 0 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  M&U
                </motion.text>
              </svg>

              {/* Card sliding out */}
              <AnimatePresence>
                {isOpened && (
                  <motion.div
                    className="absolute inset-x-4 top-8 bg-cream rounded-md gold-border p-6 flex flex-col items-center justify-center"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -180, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p className="font-script text-burgundy-deep text-2xl md:text-3xl">Marwa & Usief</p>
                    <div className="separator-ornament w-24 my-2" />
                    <p className="font-body text-burgundy text-sm">06.05.2026</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Click prompt */}
        <AnimatePresence>
          {!isOpened && (
            <motion.p
              className="mt-8 font-body text-gold-light text-lg tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleOpen}
            >
              اضغط لفتح الدعوة
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
