import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Check, Sparkles, Trophy, ArrowRight, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import confetti from "canvas-confetti";

type Phase = "quiz" | "truth" | "game" | "finished";

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "Who fell in love first?",
        options: ["You", "Me", "At the same time (but I’ll deny it)", "It just happened magically"],
        response: "Correct. It was destiny. 🐰💖"
    },
    {
        id: 2,
        question: "Who is more dramatic during fights?",
        options: ["You", "Me", "Both equally", "Depends on the mood"],
        response: "Let’s not argue about this one 😌"
    },
    {
        id: 3,
        question: "Who says sorry first?",
        options: ["You", "Me", "Silence says sorry", "We forget what we were fighting about"],
        response: "Forgiveness is our superpower. ✨"
    },
    {
        id: 4,
        question: "Who loves more?",
        options: ["You", "Me", "It’s a competition", "Love can’t be measured"],
        response: "Wrong. It’s infinite. 🍑"
    },
    {
        id: 5,
        question: "What are we?",
        options: ["Cute", "Dramatic", "Soulmates", "Forever"],
        response: "Perfectly ours. 💍"
    }
];

const TRUTH_CARDS = [
    "You pretend to be serious… but you’re secretly soft.",
    "I act strong… but I need your hugs.",
    "We fight like enemies… but love like soulmates.",
    "You steal my heart. I steal your food. Fair deal.",
    "We say “I’m not talking to you” and then talk 5 minutes later."
];

const PlayfulChapter = () => {
    const [phase, setPhase] = useState<Phase>("quiz");
    const [quizStep, setQuizStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResponse, setShowResponse] = useState(false);
    const [currentTruth, setCurrentTruth] = useState<string | null>(null);
    const [gameScore, setGameScore] = useState(0);
    const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);
    const [gameActive, setGameActive] = useState(false);

    const triggerHug = () => {
        toast("Sending virtual hug 🥺", {
            icon: "🫂",
            duration: 2000,
        });
    };

    const handleQuizSelect = (index: number) => {
        setSelectedOption(index);
        setShowResponse(true);

        // Correct answer bunny popup effect (simulated with toast for now, or we can add a real GIF)
        if (index === 0 || index === 2 || index === 3) { // Arbitrarily marking some as "corret"
            toast.success("Correct!", {
                icon: "🐰",
            });
        }

        setTimeout(() => {
            if (quizStep < QUIZ_QUESTIONS.length - 1) {
                setQuizStep(prev => prev + 1);
                setSelectedOption(null);
                setShowResponse(false);
            } else {
                setPhase("truth");
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#FFB6C1', '#FFD1DC', '#FF69B4']
                });
            }
        }, 2000);
    };

    // Game Logic
    useEffect(() => {
        if (phase === "game" && gameActive) {
            const interval = setInterval(() => {
                if (hearts.length < 10) {
                    setHearts(prev => [
                        ...prev,
                        { id: Date.now(), x: Math.random() * 80 + 10, delay: 0 }
                    ]);
                }
            }, 800);
            return () => clearInterval(interval);
        }
    }, [phase, gameActive, hearts]);

    const collectHeart = (id: number) => {
        setHearts(prev => prev.filter(h => h.id !== id));
        setGameScore(prev => prev + 1);
    };

    useEffect(() => {
        if (gameScore >= 15 && gameActive) {
            setGameActive(false);
            confetti({
                particleCount: 200,
                startVelocity: 30,
                spread: 360,
                origin: { y: 0.5 }
            });
        }
    }, [gameScore, gameActive]);

    return (
        <section id="playful" className="min-h-screen py-20 px-4 relative overflow-hidden bg-kawaii flex items-center justify-center">
            {/* Kawaii Decorative Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-10 text-6xl opacity-20 pointer-events-none"
            >
                🍑
            </motion.div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 right-10 text-6xl opacity-20 pointer-events-none"
            >
                ⭐
            </motion.div>

            <div className="max-w-4xl w-full relative z-10">
                <AnimatePresence mode="wait">
                    {/* PHASE 1: QUIZ */}
                    {phase === "quiz" && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="text-center"
                        >
                            <div className="mb-12">
                                <motion.img
                                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/MDJ9IbxxvDUQM/giphy.gif"
                                    className="w-24 h-24 mx-auto mb-6 cursor-pointer"
                                    onClick={triggerHug}
                                    whileHover={{ scale: 1.2 }}
                                />
                                <h1 className="text-4xl font-serif text-primary mb-4 font-bold">How well do you know us?</h1>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-primary-foreground font-medium px-6 py-2 rounded-full bg-primary italic shadow-kawaii">
                                        Question {quizStep + 1} of 5
                                    </span>
                                </div>
                            </div>

                            <Card className="p-8 md:p-12 shadow-kawaii border-4 border-kawaii-pink-deep bg-white/90 backdrop-blur-sm rounded-[3rem]">
                                <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-12 leading-relaxed italic">
                                    "{QUIZ_QUESTIONS[quizStep].question}"
                                </h2>

                                <div className="grid gap-6 max-w-lg mx-auto">
                                    {QUIZ_QUESTIONS[quizStep].options.map((option, idx) => (
                                        <motion.button
                                            key={idx}
                                            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => !showResponse && handleQuizSelect(idx)}
                                            className={cn(
                                                "p-6 rounded-3xl border-2 transition-all text-left text-lg font-serif shadow-sm",
                                                selectedOption === idx
                                                    ? "bg-primary text-white border-primary animate-wiggle"
                                                    : "bg-kawaii/50 border-kawaii-pink-deep text-primary hover:bg-kawaii"
                                            )}
                                        >
                                            {option}
                                        </motion.button>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {showResponse && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-12 flex flex-col items-center gap-4"
                                        >
                                            <p className="text-xl font-serif italic text-primary">
                                                {QUIZ_QUESTIONS[quizStep].response}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </motion.div>
                    )}

                    {/* PHASE 2: TRUTH */}
                    {phase === "truth" && (
                        <motion.div
                            key="truth"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 font-bold">
                                The Unfiltered Truth
                            </h1>
                            <p className="text-muted-foreground italic mb-12 text-xl font-serif">"We're slightly dramatic... but we're perfect."</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {TRUTH_CARDS.map((truth, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                                    >
                                        <Card className="p-8 h-full flex items-center justify-center bg-white/70 backdrop-blur-sm border-4 border-kawaii-pink shadow-kawaii text-primary font-serif italic text-xl leading-relaxed rounded-[2.5rem]">
                                            {truth}
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setPhase("game")}
                                className="bg-primary text-white rounded-full px-16 py-8 h-auto text-2xl font-serif font-bold shadow-2xl transition-all animate-bounce-soft"
                            >
                                Prove Your Love 🥺💍
                            </motion.button>
                        </motion.div>
                    )}

                    {/* PHASE 3: GAME */}
                    {phase === "game" && (
                        <motion.div
                            key="game"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center w-full"
                        >
                            <div className="mb-8 flex justify-between items-center bg-white/50 backdrop-blur p-6 rounded-[2rem] border-2 border-kawaii-pink shadow-kawaii">
                                <div className="flex items-center gap-3">
                                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/MDJ9IbxxvDUQM/giphy.gif" className="w-12 h-12" />
                                    <span className="text-3xl font-serif font-bold text-primary">{gameScore}/15</span>
                                </div>
                                <Trophy className="text-gold w-10 h-10" />
                            </div>

                            {!gameActive && gameScore === 0 ? (
                                <Card className="p-12 bg-white/80 rounded-[3rem] shadow-kawaii border-4 border-kawaii-pink">
                                    <h2 className="text-3xl font-serif text-primary font-bold mb-6 italic">Catch My Hearts!</h2>
                                    <p className="text-lg text-muted-foreground mb-12 font-serif italic">"They're falling for you... just like I did."</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setGameActive(true)}
                                        className="bg-primary text-white rounded-full px-12 py-6 text-xl font-serif font-bold shadow-lg"
                                    >
                                        Start Catching!
                                    </motion.button>
                                </Card>
                            ) : gameActive ? (
                                <div className="w-full h-[500px] relative overflow-hidden bg-white/30 rounded-[3rem] border-4 border-dashed border-kawaii-pink-deep">
                                    <AnimatePresence>
                                        {hearts.map((heart) => (
                                            <motion.button
                                                key={heart.id}
                                                initial={{ y: -50, x: `${heart.x}%`, opacity: 0 }}
                                                animate={{ y: 550, opacity: 1 }}
                                                exit={{ opacity: 0, scale: 2 }}
                                                className="absolute cursor-pointer p-4 group"
                                                onClick={() => collectHeart(heart.id)}
                                                transition={{ duration: 3, ease: "linear" }}
                                            >
                                                <Heart fill="#FF69B4" className="text-kawaii-pink-deep w-12 h-12 group-hover:scale-150 transition-transform" />
                                            </motion.button>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white/90 backdrop-blur-md p-12 rounded-[4rem] shadow-kawaii border-4 border-kawaii-pink max-w-xl mx-auto"
                                >
                                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/MDJ9IbxxvDUQM/giphy.gif" className="w-32 h-32 mx-auto mb-8" />
                                    <h2 className="text-3xl font-serif text-primary font-bold mb-6 italic">
                                        "You caught them all... just like you caught my heart."
                                    </h2>
                                    <motion.button
                                        onClick={() => setPhase("finished")}
                                        className="w-full bg-primary text-white rounded-full px-8 py-8 h-auto text-2xl font-serif font-bold shadow-xl animate-wiggle"
                                    >
                                        Unlock the Big Surprise? 💍✨
                                    </motion.button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PlayfulChapter;
