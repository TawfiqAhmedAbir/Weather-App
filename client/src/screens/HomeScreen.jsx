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
import UpcomingWeekPreview from '../components/UpcomingWeekPreview';

export default function HomeScreen({
  onOpenTimetable,
  onOpenMyAccount,
  onOpenAttendance,
}) {
  return (
    <>
      <TopBar />
      <main className="pb-4">
        <HeroCarousel />
        <QuickGrid
          onOpenTimetable={onOpenTimetable}
          onOpenMyAccount={onOpenMyAccount}
          onOpenAttendance={onOpenAttendance}
        />
        <UpcomingWeekPreview onOpenTimetable={onOpenTimetable} />
        <NavCards />
        <CampusPhotoStrip />
        <DailyEssentials onOpenMyAccount={onOpenMyAccount} />
        <FeatureCards />
        <LibraryCard />
        <AppFeedbackCard />
        <FullWidthCards onOpenTimetable={onOpenTimetable} />
      </main>
    </>
  );
}
