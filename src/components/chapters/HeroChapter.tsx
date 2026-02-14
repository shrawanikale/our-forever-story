import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "/IMG-20260213-WA0033.jpg";

const HeroChapter = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const scrollToNext = () => {
    document.getElementById("chapter-2")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="chapter-1"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with zoom animation */}
      <div className="absolute inset-0 animate-zoom-in-slow">
        <img
          src={HERO_IMAGE}
          alt="Our beginning"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />

      {/* Kawaii Decorative Elements */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-10 z-30 pointer-events-none hidden md:block"
      >
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/MDJ9IbxxvDUQM/giphy.gif"
          className="w-32 h-32"
          alt="Cute Bunny Kiss"
        />
        <p className="text-cream/60 font-serif italic text-sm mt-2">Mwah! ✨</p>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute top-20 right-10 z-30 pointer-events-none opacity-50"
      >
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/3o7TKVUn7iM8FMEU24/giphy.gif"
          className="w-32 h-32"
          alt="Cute Bunny Wave"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 font-handwriting text-lg text-cream/80 md:text-xl"
        >
          🌸 Chapter One
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6 font-serif text-4xl font-bold italic leading-tight text-cream md:text-6xl lg:text-7xl"
        >
          Some beginnings are quiet…
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mb-4 font-serif text-xl italic text-cream/90 md:text-2xl"
        >
          Like something beautiful blooming without making a sound.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-12 text-base text-cream/70 md:text-lg"
        >
          I didn't know it then… But everything was about to change,{" "}
          <span className="relative group cursor-help text-cream font-bold">
            Sarah
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-serif">
              Future Mrs? 💍
            </span>
          </span>
          .
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          onClick={scrollToNext}
          className="group relative inline-flex flex-col items-center gap-2 rounded-3xl border-2 border-cream/30 bg-cream/5 px-10 py-6 text-cream backdrop-blur-md transition-all hover:bg-cream/10 hover:border-cream/50 shadow-xl"
        >
          <span className="font-serif text-xl font-bold tracking-wide">Begin Our Story ✨</span>
          <ChevronDown className="h-6 w-6 animate-bounce-soft" />

          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 pointer-events-none"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroChapter;
