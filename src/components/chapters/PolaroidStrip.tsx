import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const POLAROID_IMAGES = [
  { src: "/IMG-20251116-WA0684.jpg", caption: "The moment that started it all... ✨", rotation: -3 },
  { src: "/IMG-20251116-WA0687.jpg", caption: "That random perfect day.", rotation: 2 },
  { src: "/IMG-20251119-WA0013.jpg", caption: "Us being us.", rotation: -2 },
  { src: "/IMG-20251119-WA0014.jpg", caption: "Laughing at nothing.", rotation: 4 },
];

const PolaroidStrip = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      id="chapter-3"
      className="relative overflow-hidden bg-cream py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-handwriting text-lg text-primary">🖼 Chapter Three</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">
            The Sweet & Silly Us
          </h2>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide md:justify-center">
          {POLAROID_IMAGES.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={isVisible ? { opacity: 1, y: 0, rotate: photo.rotation } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex-shrink-0 rounded-sm bg-background p-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-0"
              style={{ width: 220 }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-64 w-full rounded-sm object-cover"
              />
              <p className="mt-3 text-center font-handwriting text-base text-muted-foreground">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolaroidStrip;
