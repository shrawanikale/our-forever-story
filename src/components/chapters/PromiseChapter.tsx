import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROMISE_IMAGES = [
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&h=400&fit=crop&auto=format&q=80",
];

const PromiseChapter = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      id="chapter-6"
      className="relative min-h-screen bg-lavender/30 py-20 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 font-handwriting text-lg text-primary">🤝 Chapter Six</p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-foreground md:text-5xl">
            The Promise
          </h2>
        </motion.div>

        <div className="relative mb-20">
          {/* Subtle glow behind text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            {["We didn't promise perfection.", "We promised effort.", "And that's stronger."].map(
              (line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.4 }}
                  className="font-serif text-2xl italic text-foreground md:text-4xl"
                >
                  {line}
                </motion.p>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROMISE_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 + i * 0.2 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={src}
                alt="Promise memory"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseChapter;
