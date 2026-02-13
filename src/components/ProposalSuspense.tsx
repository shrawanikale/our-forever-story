import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProposalSuspenseProps {
    onComplete: () => void;
}

const ProposalSuspense = ({ onComplete }: ProposalSuspenseProps) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const sequence = [
            { delay: 2000, next: 1 }, // Fade to black
            { delay: 3000, next: 2 }, // There's one more thing
            { delay: 3000, next: 3 }, // I've been thinking...
            { delay: 2000, next: 4 }, // Countdown 3
            { delay: 1000, next: 5 }, // Countdown 2
            { delay: 1000, next: 6 }, // Countdown 1
        ];

        let currentTimeout: NodeJS.Timeout;

        const runSequence = (index: number) => {
            if (index >= sequence.length) {
                onComplete();
                return;
            }

            currentTimeout = setTimeout(() => {
                setPhase(sequence[index].next);
                runSequence(index + 1);
            }, sequence[index].delay);
        };

        runSequence(0);

        return () => clearTimeout(currentTimeout);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* Heartbeat pulse background */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[100px]"
            />

            <motion.div key={phase} className="relative z-10 w-full max-w-2xl h-40 flex items-center justify-center">
                {phase === 1 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-white font-serif text-3xl italic"
                    >
                        There’s one more thing…
                    </motion.p>
                )}
                {phase === 2 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-white font-serif text-3xl italic"
                    >
                        "I’ve been thinking about this for a long time."
                    </motion.p>
                )}
                {phase === 3 && (
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-gold font-serif text-6xl font-bold"
                    >
                        Loading something important…
                    </motion.p>
                )}
                {phase === 4 && (
                    <motion.p
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-white font-serif text-9xl font-bold"
                    >
                        3
                    </motion.p>
                )}
                {phase === 5 && (
                    <motion.p
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-white font-serif text-9xl font-bold"
                    >
                        2
                    </motion.p>
                )}
                {phase === 6 && (
                    <motion.p
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-white font-serif text-9xl font-bold"
                    >
                        1
                    </motion.p>
                )}
            </motion.div>

            {/* Subtle floating gold particles during countdown */}
            {phase >= 4 && (
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: [0, 0.5, 0], y: "-10%" }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.2 }}
                            className="absolute w-1 h-1 bg-gold rounded-full"
                            style={{ left: `${Math.random() * 100}%` }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProposalSuspense;
