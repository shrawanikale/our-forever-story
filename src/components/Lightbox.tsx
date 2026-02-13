import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; caption?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
        >
          <X className="h-6 w-6" />
        </button>

        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-h-[85vh] max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.caption || "Photo"}
            className="max-h-[80vh] rounded-lg object-contain shadow-2xl"
          />
          {image.caption && (
            <p className="mt-3 text-center font-serif-display text-lg italic text-background/80">
              {image.caption}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
