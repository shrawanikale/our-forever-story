import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Lightbox from "@/components/Lightbox";
import { toast } from "sonner";

const MEMORY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&auto=format&q=80", caption: "Where it all started" },
  { src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop&auto=format&q=80", caption: "Golden hour together" },
  { src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop&auto=format&q=80", caption: "Adventures with you" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&auto=format&q=80", caption: "Quiet moments" },
  { src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&h=400&fit=crop&auto=format&q=80", caption: "Our favorite place" },
  { src: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&h=400&fit=crop&auto=format&q=80", caption: "Under the same sky" },
];

const HeartParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="absolute left-1/2 top-1/2 text-primary text-xl"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

const MemoryGrid = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="chapter-2"
      className="relative min-h-screen bg-background py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative Bunny floating at bottom */}
      <motion.img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/3o7TKVUn7iM8FMEU24/giphy.gif"
        className="absolute bottom-4 right-4 w-24 h-24 opacity-30 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORY_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer overflow-hidden rounded-3xl shadow-md transition-all duration-500 hover:shadow-kawaii border-2 border-transparent hover:border-kawaii-pink relative bg-white pb-3"
              onClick={(e) => {
                if (e.detail === 1) {
                  // Single click
                  const messages = ["A beautiful day...", "I remember this clearly.", "One of my favorites.", "You looked so happy here.", "Best day ever! 🐰", "Miss this moment... ✨"];
                  toast(messages[i % messages.length]);
                  setLightboxIndex(i);
                }
              }}
              onDoubleClick={() => {
                toast.success("I love you more than words can say! ❤️", {
                  icon: "💖",
                  duration: 3000,
                });
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                toast("Secret Note: I'm so glad I found you. 😉", {
                  description: "You're my favorite person to explore the world with.",
                });
              }}
            >
              <div className="overflow-hidden rounded-t-3xl relative">
                <AnimatePresence>
                  {hoveredIndex === i && <HeartParticles />}
                </AnimatePresence>
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="bg-white p-6">
                <p className="font-serif text-lg italic text-primary leading-relaxed">{image.caption}</p>
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
