import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

const VoiceMessage = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Note: For a real app, this would be a path to an actual audio file provided by the user.
    // We'll use a placeholder or just simulate the UI for now.
    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-8 rounded-3xl bg-cream/10 backdrop-blur-md border border-white/20 max-w-lg mx-auto text-center"
        >
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Volume2 className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-cream font-bold italic">A Message for You</h3>
            </div>

            <p className="text-cream/70 font-serif italic mb-8">
                "Hey… if you're hearing this… it means you reached the end."
            </p>

            <div className="flex flex-col items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all hover:shadow-[0_0_50px_rgba(251,191,36,0.5)]"
                >
                    {isPlaying ? (
                        <Pause className="w-8 h-8 text-gold-foreground fill-current" />
                    ) : (
                        <Play className="w-8 h-8 text-gold-foreground ml-1 fill-current" />
                    )}
                </motion.button>

                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-1 items-center h-4"
                    >
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [4, 16, 4] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                }}
                                className="w-1 bg-gold rounded-full"
                            />
                        ))}
                    </motion.div>
                )}
            </div>

            <p className="mt-6 text-cream/40 text-sm font-serif">
                {isPlaying ? "Playing audio..." : "Tap to listen"}
            </p>
        </motion.div>
    );
};

export default VoiceMessage;
