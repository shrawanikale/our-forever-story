import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FakeEndingProps {
    onComplete: () => void;
}

const FakeEnding = ({ onComplete }: FakeEndingProps) => {
    const [phase, setPhase] = useState<'initial' | 'blackout' | 'reveal'>('initial');

    useEffect(() => {
        if (phase === 'blackout') {
            const timer = setTimeout(() => {
                setPhase('reveal');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background">
            <AnimatePresence mode="wait">
                {phase === 'initial' && (
                    <motion.div
                        key="initial"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center justify-center min-h-screen text-center px-6"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-serif text-2xl md:text-3xl italic text-muted-foreground mb-12"
                        >
                            "I think… this is where our story ends."
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setPhase('blackout')}
                            className="font-serif text-lg text-primary underline underline-offset-8"
                        >
                            Goodbye...
                        </motion.button>
                    </motion.div>
                )}

                {phase === 'blackout' && (
                    <motion.div
                        key="blackout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
                    >
                        {/* Dark screen - wait 3 seconds */}
                    </motion.div>
                )}

                {phase === 'reveal' && (
                    <motion.div
                        key="reveal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-center px-6"
                    >
                        <motion.p
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-white font-serif text-3xl md:text-5xl mb-12"
                        >
                            Just kidding.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="text-gold font-serif text-2xl md:text-3xl italic mb-12"
                        >
                            This is where it truly begins.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={onComplete}
                            className="px-12 py-4 bg-white text-black font-serif text-xl font-bold rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            The Real Chapter
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FakeEnding;
