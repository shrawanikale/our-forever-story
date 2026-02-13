import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1920&h=1080&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1920&h=1080&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=1080&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=1080&fit=crop&auto=format&q=80",
];

const CinematicSlider = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="chapter-4"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={SLIDER_IMAGES[current]}
          alt="Our memories"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="mb-4 font-handwriting text-lg text-cream/80">🎞 Chapter Four</p>
        <h2 className="mb-8 font-serif text-3xl font-bold italic text-cream md:text-5xl lg:text-6xl">
          Falling Again & Again
        </h2>
        <p className="font-serif text-xl italic leading-relaxed text-cream/90 md:text-2xl">
          "I didn't just fall in love once.<br />
          I fall in love with you in every memory."
        </p>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDER_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-cream" : "w-2 bg-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CinematicSlider;
