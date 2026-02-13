import SparkleParticles from "@/components/SparkleParticles";
import MusicPlayer from "@/components/MusicPlayer";
import HeroChapter from "@/components/chapters/HeroChapter";
import MemoryGrid from "@/components/chapters/MemoryGrid";
import PolaroidStrip from "@/components/chapters/PolaroidStrip";
import CinematicSlider from "@/components/chapters/CinematicSlider";
import ComfortChapter from "@/components/chapters/ComfortChapter";
import PromiseChapter from "@/components/chapters/PromiseChapter";
import RealizationChapter from "@/components/chapters/RealizationChapter";
import ForeverMoment from "@/components/chapters/ForeverMoment";

const Index = () => {
  return (
    <main className="relative">
      <SparkleParticles />
      <MusicPlayer />
      <HeroChapter />
      <MemoryGrid />
      <PolaroidStrip />
      <CinematicSlider />
      <ComfortChapter />
      <PromiseChapter />
      <RealizationChapter />
      <ForeverMoment />
    </main>
  );
};

export default Index;
