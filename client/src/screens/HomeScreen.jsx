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

export default function HomeScreen({ onNavigate }) {
  return (
    <>
      <TopBar />
      <main className="pb-4">
        <HeroCarousel />
        <QuickGrid onNavigate={onNavigate} />
        <NavCards />
        <CampusPhotoStrip />
        <DailyEssentials onNavigate={onNavigate} />
        <FeatureCards />
        <LibraryCard />
        <AppFeedbackCard />
        <FullWidthCards />
      </main>
    </>
  );
}
