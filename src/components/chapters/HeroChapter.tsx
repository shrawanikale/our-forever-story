import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1920&h=1080&fit=crop&auto=format&q=80";

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
          I didn't know it then… But everything was about to change.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          onClick={scrollToNext}
          className="group inline-flex flex-col items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-8 py-4 text-cream backdrop-blur-sm transition-all hover:bg-cream/20"
        >
          <span className="font-serif text-lg">Begin Our Story</span>
          <ChevronDown className="h-5 w-5 animate-float" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroChapter;
