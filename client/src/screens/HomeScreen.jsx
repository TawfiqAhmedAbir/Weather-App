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
  onMenu,
  onRefresh,
  onOpenTimetable,
  onOpenMyAccount,
  onOpenAttendance,
  onOpenAbsence,
  onOpenLibrary,
  onOpenMyCourse,
  onOpenAssessment,
  onOpenFeedback,
  onNavigate,
  onOpenWhatsOn,
  onOpenSupport,
  onOpenNews,
  onOpenSkills,
}) {
  return (
    <>
      <TopBar onMenu={onMenu} onRefresh={onRefresh} />
      <main className="pb-4">
        <HeroCarousel />
        <QuickGrid
          onOpenTimetable={onOpenTimetable}
          onOpenMyAccount={onOpenMyAccount}
          onOpenAttendance={onOpenAttendance}
          onOpenAbsence={onOpenAbsence}
          onOpenLibrary={onOpenLibrary}
        />
        <UpcomingWeekPreview onOpenTimetable={onOpenTimetable} />
        <NavCards
          onOpenAssessment={onOpenAssessment}
          onOpenSupport={onOpenSupport}
          onOpenMyCourse={onOpenMyCourse}
        />
        <CampusPhotoStrip onOpenAroundCampus={() => onNavigate('aroundCampus')} />
        <DailyEssentials onOpenMyAccount={onOpenMyAccount} />
        <FeatureCards onNavigate={onNavigate} />
        <LibraryCard onOpenLibrary={onOpenLibrary} />
        <AppFeedbackCard onOpenFeedback={onOpenFeedback} />
        <FullWidthCards
          onOpenWhatsOn={onOpenWhatsOn}
          onOpenSupport={onOpenSupport}
          onOpenNews={onOpenNews}
          onOpenSkills={onOpenSkills}
        />
      </main>
    </>
  );
}
