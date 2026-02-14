import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart } from "lucide-react";

const FINAL_IMAGE = "/IMG-20260213-WA0033.jpg";

const ForeverMoment = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const dodgeNo = useCallback(() => {
    setNoPosition({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 100,
    });
  }, []);

  return (
    <section
      ref={ref}
      id="finale"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-starry"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cream/60"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="proposal"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            className="relative z-10 mx-auto max-w-3xl px-6 text-center"
          >
            {/* Ring emoji */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-10 text-6xl animate-ring-reveal md:text-8xl"
            >
              💍
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="mb-4 font-serif text-xl italic text-cream/80 md:text-2xl"
            >
              This was never just about moments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
              className="mb-12 font-serif text-xl italic text-cream/80 md:text-2xl"
            >
              It was about building something that lasts.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 3 }}
              className="mb-4 font-serif text-lg text-cream/70 md:text-xl"
            >
              I don't just want these memories.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 3.8 }}
              className="mb-16 font-serif text-lg text-cream/70 md:text-xl"
            >
              I want the future ones too.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 5 }}
              className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            >
              <button
                onClick={() => setAnswered(true)}
                className="animate-pulse-glow rounded-full bg-gold px-12 py-4 font-serif text-xl font-bold text-gold-foreground shadow-2xl transition-all hover:scale-110"
              >
                <Heart className="mr-2 inline h-5 w-5 fill-red-600 text-red-600" />
                Will you build forever with me?
              </button>
              <button
                onClick={dodgeNo}
                className="rounded-full border border-cream/20 px-8 py-3 font-serif text-sm text-cream/50 transition-all hover:border-cream/40"
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                Not yet...
              </button>
            </motion.div>

            {noPosition.x !== 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 font-handwriting text-lg text-cream/60"
              >
                I'll keep choosing you… until you choose forever too. ❤️
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="yes-response"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 mx-auto max-w-4xl px-6 text-center"
          >
            {/* Golden glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-96 w-96 rounded-full bg-gold/20 blur-[100px]" />
            </div>

            {/* Confetti-like particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -(Math.random() * 200 + 100)],
                  x: [(Math.random() - 0.5) * 300],
                }}
                transition={{ duration: 2, delay: Math.random() * 0.5 }}
                className="absolute left-1/2 top-1/2 text-lg"
              >
                {["✨", "❤️", "🌟", "💍", "❤️", "🌸", "🐰"][i % 7]}
              </motion.div>
            ))}

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative mb-8 font-serif text-4xl font-bold italic text-cream md:text-6xl"
            >
              Then let's begin the rest of our story.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={FINAL_IMAGE}
                alt="Our forever"
                className="h-80 w-full object-cover md:h-[500px]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="relative mt-8 font-handwriting text-xl text-cream/60"
            >
              February was only the beginning. 💍
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ForeverMoment;
