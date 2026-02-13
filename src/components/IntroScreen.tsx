import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface IntroScreenProps {
    onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight overflow-hidden">
            {/* Background Particles */}
            <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 bg-cream/20 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 2, 1],
                            y: [0, -100],
                            x: (Math.random() - 0.5) * 100
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-6"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="p-4 rounded-full bg-cream/5 border border-cream/10 backdrop-blur-sm">
                        <Lock className="w-8 h-8 text-cream/40" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="font-serif text-3xl md:text-5xl text-cream mb-6 tracking-tight italic"
                >
                    This website is not for everyone.
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-cream/60 font-serif text-lg md:text-xl mb-12 max-w-md mx-auto"
                >
                    It contains a world built only for two. Are you ready to see it?
                </motion.p>

                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onEnter}
                    className="group relative px-12 py-4 bg-cream text-midnight font-serif text-lg font-bold rounded-full overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                    <span className="relative z-10">Enter if you dare</span>
                    <motion.div
                        className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default IntroScreen;
