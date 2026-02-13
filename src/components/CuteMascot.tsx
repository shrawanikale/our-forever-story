import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface CuteMascotProps {
    variant?: 'wave' | 'blush' | 'hug';
    isProposalPhase?: boolean;
}

const CuteMascot = ({ variant = 'wave', isProposalPhase = false }: CuteMascotProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const getGif = () => {
        if (isProposalPhase) return "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/MDJ9IbxxvDUQM/giphy.gif"; // Kiss/Blush
        return "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/3o7TKVUn7iM8FMEU24/giphy.gif"; // Wave
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x: 50 }}
                    className="fixed bottom-6 right-6 z-[99] pointer-events-none"
                >
                    <div className="relative group pointer-events-auto cursor-pointer" onClick={() => {
                        toast("Sending virtual hug 🥺", {
                            icon: "🫂",
                            duration: 2000,
                        });
                    }}>
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
                        >
                            <img
                                src={getGif()}
                                alt="Cute Bunny Mascot"
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-2xl shadow-kawaii border-2 border-kawaii-pink text-sm font-serif italic text-primary whitespace-nowrap"
                        >
                            {isProposalPhase ? "So nervous... 🥺" : "I'm rooting for you! ✨"}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CuteMascot;
