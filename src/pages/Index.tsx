import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SparkleParticles from "@/components/SparkleParticles";
import MusicPlayer from "@/components/MusicPlayer";
import IntroScreen from "@/components/IntroScreen";
import BranchingMemory from "@/components/BranchingMemory";
import FakeEnding from "@/components/FakeEnding";
import ProposalSuspense from "@/components/ProposalSuspense";
import VoiceMessage from "@/components/VoiceMessage";
import CuteMascot from "@/components/CuteMascot";
import CuteBreakSection from "@/components/CuteBreakSection";

import HeroChapter from "@/components/chapters/HeroChapter";
import MemoryGrid from "@/components/chapters/MemoryGrid";
import PolaroidStrip from "@/components/chapters/PolaroidStrip";
import CinematicSlider from "@/components/chapters/CinematicSlider";
import ComfortChapter from "@/components/chapters/ComfortChapter";
import PromiseChapter from "@/components/chapters/PromiseChapter";
import RealizationChapter from "@/components/chapters/RealizationChapter";
import PlayfulChapter from "@/components/chapters/PlayfulChapter";
import ForeverMoment from "@/components/chapters/ForeverMoment";

const Index = () => {
  const [level, setLevel] = useState(0);
  const [activePath, setActivePath] = useState<'cute' | 'funny' | 'emotional' | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextLevel = () => {
    setLevel(prev => prev + 1);
  };

  useEffect(() => {
    if (level > 0) {
      // Scroll to bottom when new content is unlocked
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [level]);

  const renderUnlockButton = (label: string, isKawaii = false) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20 bg-background overflow-hidden relative"
    >
      {isKawaii && (
        <motion.img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRraXp5bmR6b3B6M3R6b3B6M3R6b3B6M3R6b3B6M3R6b3B6JnBzPTEmcmVfcmFkaXVzPTA/MDJ9IbxxvDUQM/giphy.gif"
          className="w-20 h-20 mb-4 pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      <button
        onClick={nextLevel}
        className={`group relative px-10 py-4 ${isKawaii ? 'bg-kawaii text-primary border-4 border-kawaii-pink-deep shadow-kawaii animate-bounce-soft' : 'bg-primary text-white'} font-serif text-xl font-bold rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-xl`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {label}
        </span>
        <motion.div
          className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        />
      </button>
    </motion.div>
  );

  return (
    <main className="relative bg-background min-h-screen">
      <AnimatePresence>
        {level === 0 && <IntroScreen onEnter={nextLevel} key="intro" />}
      </AnimatePresence>

      {level > 0 && (
        <>
          <SparkleParticles />
          <MusicPlayer />
          <CuteMascot isProposalPhase={level >= 13} />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-6 left-6 z-[60] flex items-center gap-2 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-sm md:top-8 md:left-8"
          >
            <div className="bg-red-500 p-2 rounded-full shadow-lg animate-pulse-glow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="hidden md:block font-serif text-sm font-bold text-primary pr-2">Our Forever Story</span>
          </motion.div>

          <div className="relative">
            {/* Level 1: Intro Story */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <HeroChapter />
            </motion.div>
            {level === 1 && renderUnlockButton("Unlock Chapter 1")}

            {/* Level 2: Memory Grid */}
            {level >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <MemoryGrid />
              </motion.div>
            )}
            {level === 2 && renderUnlockButton("Unlock Next Memory")}

            {/* Level 3: Polaroid Strip */}
            {level >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <PolaroidStrip />
              </motion.div>
            )}
            {level === 3 && renderUnlockButton("Unlock More...")}

            {/* Level 4: Cinematic Slider */}
            {level >= 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <CinematicSlider />
              </motion.div>
            )}
            {level === 4 && renderUnlockButton("See Another Path")}

            {/* Level 5: Branching Path */}
            {level >= 5 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <BranchingMemory
                  onChoice={(choice) => {
                    setActivePath(choice);
                    if (level === 5) nextLevel();
                  }}
                />
              </motion.div>
            )}

            {/* Conditional Content based on path */}
            {level >= 6 && activePath && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={activePath}
                className="py-20 text-center bg-accent/20"
              >
                <p className="font-handwriting text-3xl text-primary px-6">
                  {activePath === 'cute' && "Every little smile of yours is a treasure... ✨"}
                  {activePath === 'funny' && "Life with you is a constant adventure of laughter... 😂"}
                  {activePath === 'emotional' && "You've touched my soul in ways I can't describe... ❤️"}
                </p>
              </motion.div>
            )}

            {/* Level 6: Comfort */}
            {level >= 6 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <ComfortChapter />
              </motion.div>
            )}
            {level === 6 && renderUnlockButton("Unlock Promise")}

            {/* Level 7: Promise */}
            {level >= 7 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <PromiseChapter />
              </motion.div>
            )}
            {level === 7 && renderUnlockButton("Unlock Realization")}

            {/* Level 8: Realization */}
            {level >= 8 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <RealizationChapter />
              </motion.div>
            )}
            {level === 8 && renderUnlockButton("Unlock Playfulness", true)}

            {/* Level 9: Playful */}
            {level >= 9 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <PlayfulChapter />
              </motion.div>
            )}
            {level === 9 && renderUnlockButton("Are you ready for the next level?", true)}

            {/* Level 10: Cute Break Section */}
            {level >= 10 && level < 11 && (
              <CuteBreakSection onComplete={nextLevel} />
            )}

            {/* Level 11: Fake Ending */}
            {level >= 11 && level < 12 && (
              <FakeEnding onComplete={nextLevel} />
            )}

            {/* Level 12: Proposal Suspense */}
            {level === 12 && (
              <ProposalSuspense onComplete={nextLevel} />
            )}

            {/* Level 13: Forever Moment (Real Finale) */}
            {level >= 13 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                <ForeverMoment />
                <VoiceMessage />
              </motion.div>
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default Index;
