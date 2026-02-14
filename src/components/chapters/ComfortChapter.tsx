import { motion } from "framer-motion";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const COMFORT_IMAGES = [
  { src: "/IMG-20251116-WA0670.jpg", caption: "You became my safe place." },
  { src: "/IMG-20251116-WA0675.jpg", caption: "With you, even silence feels peaceful." },
  { src: "/IMG-20251116-WA0684.jpg", caption: "Home is wherever you are." },
];

const ComfortChapter = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      id="chapter-5"
      className="relative min-h-screen bg-background py-20 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-handwriting text-lg text-primary">🤍 Chapter Five</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            The Comfort
          </h2>
        </motion.div>

        <div className="space-y-24">
          {COMFORT_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="text-center"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[500px]"
                />
              </div>
              <p className="mt-6 font-serif text-xl italic text-muted-foreground md:text-2xl">
                {image.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComfortChapter;
