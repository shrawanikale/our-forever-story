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
        // High quality "Sending you lots of hugs!" Milk & Mocha hug
        return "https://media.tenor.com/un8p3fHbxRAAAAAj/milk-and-mocha-hug.gif";
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
                            {isProposalPhase ? "So nervous... 🥺" : "Hugging you tightly! 💖"}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CuteMascot;
