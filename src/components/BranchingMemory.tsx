import { motion } from "framer-motion";
import { Sparkles, Heart, Laugh } from "lucide-react";

interface BranchingMemoryProps {
    onChoice: (choice: 'cute' | 'funny' | 'emotional') => void;
}

const BranchingMemory = ({ onChoice }: BranchingMemoryProps) => {
    const choices = [
        { id: 'cute', label: 'Cute', icon: Sparkles, color: 'bg-blush' },
        { id: 'funny', label: 'Funny', icon: Laugh, color: 'bg-secondary' },
        { id: 'emotional', label: 'Emotional', icon: Heart, color: 'bg-primary' },
    ] as const;

    return (
        <div className="py-20 bg-cream/50 min-h-[60vh] flex flex-col items-center justify-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-serif text-3xl md:text-5xl text-foreground mb-4 text-center"
            >
                Choose Your Path
            </motion.h2>
            <p className="font-serif italic text-muted-foreground mb-12 text-center text-lg">
                What kind of memory do you want to see?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl px-6">
                {choices.map((choice, index) => (
                    <motion.button
                        key={choice.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onChoice(choice.id)}
                        className={`${choice.color} p-8 rounded-3xl flex flex-col items-center gap-4 shadow-lg text-white group`}
                    >
                        <choice.icon className="w-10 h-10 group-hover:animate-bounce" />
                        <span className="font-serif text-2xl font-bold">{choice.label}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default BranchingMemory;
