import TopBar from '../components/TopBar';
import HeroCarousel from '../components/HeroCarousel';
import QuickGrid from '../components/QuickGrid';
import NavCards from '../components/NavCards';
import CampusPhotoStrip from '../components/CampusPhotoStrip';
import DailyEssentials from '../components/DailyEssentials';
import FeatureCards from '../components/FeatureCards';
import LibraryCard from '../components/LibraryCard';
import AppFeedbackCard from '../components/AppFeedbackCard';
import FullWidthCards from '../components/FullWidthCards';

export default function HomeScreen({ onOpenTimetable }) {
  return (
    <>
      <TopBar />
      <main className="pb-4">
        <HeroCarousel />
        <QuickGrid onOpenTimetable={onOpenTimetable} />
        <NavCards />
        <CampusPhotoStrip />
        <DailyEssentials />
        <FeatureCards />
        <LibraryCard />
        <AppFeedbackCard />
        <FullWidthCards onOpenTimetable={onOpenTimetable} />
      </main>
    </>
  );
}
