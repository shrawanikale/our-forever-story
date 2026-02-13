import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LINES = [
  "All these pictures…",
  "They are not just memories.",
  "They are proof…",
  "That I found my person.",
];

const RealizationChapter = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      id="chapter-7"
      className="relative flex min-h-screen items-center justify-center bg-midnight-gradient"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-10 font-handwriting text-lg text-cream/60"
        >
          🌙 Chapter Seven
        </motion.p>

        <div className="space-y-8">
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 + i * 1.2 }}
              className="font-serif text-2xl italic leading-relaxed text-cream/90 md:text-4xl lg:text-5xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealizationChapter;
