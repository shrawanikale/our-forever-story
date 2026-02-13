import { useState } from "react";
import { Music, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // When you add your audio file, uncomment and connect:
    // const audio = document.getElementById('bg-music') as HTMLAudioElement;
    // if (audio) { isPlaying ? audio.pause() : audio.play(); }
  };

  return (
    <>
      {/* Hidden audio element - replace src with your song */}
      {/* <audio id="bg-music" loop src="/your-song.mp3" /> */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary/90 px-5 py-3 text-primary-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl glow-primary"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Music className="h-4 w-4" />
        )}
        <span className="text-sm font-medium">
          {isPlaying ? "Playing..." : "Play Our Song"}
        </span>
      </button>
    </>
  );
};

export default MusicPlayer;
