import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Lightbox from "@/components/Lightbox";

const MEMORY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&auto=format&q=80", caption: "Where it all started" },
  { src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop&auto=format&q=80", caption: "Golden hour together" },
  { src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop&auto=format&q=80", caption: "Adventures with you" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&auto=format&q=80", caption: "Quiet moments" },
  { src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&h=400&fit=crop&auto=format&q=80", caption: "Our favorite place" },
  { src: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&h=400&fit=crop&auto=format&q=80", caption: "Under the same sky" },
];

const MemoryGrid = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="chapter-2"
      className="relative min-h-screen bg-background py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-handwriting text-lg text-primary">📸 Chapter Two</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">
            The Moments That Built Us
          </h2>
          <p className="font-serif text-lg italic text-muted-foreground">
            Each picture holds a piece of my heart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORY_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-card p-4">
                <p className="font-serif text-sm italic text-muted-foreground">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={MEMORY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((prev) => Math.min((prev ?? 0) + 1, MEMORY_IMAGES.length - 1))}
          onPrev={() => setLightboxIndex((prev) => Math.max((prev ?? 0) - 1, 0))}
        />
      )}
    </section>
  );
};

export default MemoryGrid;
