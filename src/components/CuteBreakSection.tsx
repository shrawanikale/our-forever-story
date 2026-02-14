import { motion } from "framer-motion";

interface CuteBreakSectionProps {
    onComplete: () => void;
}

const CuteBreakSection = ({ onComplete }: CuteBreakSectionProps) => {
    return (
        <div className="min-h-screen bg-kawaii flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-kawaii border-4 border-kawaii-pink-deep relative overflow-hidden"
            >
                {/* Floating Hearts background decoration */}
                <div className="absolute top-4 left-4 text-4xl animate-bounce-soft">❤️</div>
                <div className="absolute bottom-4 right-4 text-4xl animate-bounce-soft delay-500">✨</div>
                <div className="absolute top-20 right-10 text-2xl animate-spin-slow">⭐</div>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6"
                >
                    Warning: Extreme Cuteness Ahead 🐰✨
                </motion.h2>

                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-8 flex justify-center"
                >
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJidHd6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/l41lX6jX0Z6r4U2U/giphy.gif"
                        alt="Bunny with Heart"
                        className="w-48 h-48 object-contain"
                    />
                </motion.div>

                <p className="font-serif italic text-lg text-muted-foreground mb-12">
                    "You’re about to enter the serious love zone.<br />Last chance to run 😌"
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onComplete}
                    className="px-12 py-4 bg-primary text-white font-serif text-xl font-bold rounded-full shadow-lg hover:shadow-kawaii transition-all animate-wiggle"
                >
                    I’m not scared!
                </motion.button>
            </motion.div>

            {/* Bounce Decorative Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-12 text-6xl"
            >
                🍑
            </motion.div>
        </div>
    );
};

export default CuteBreakSection;
