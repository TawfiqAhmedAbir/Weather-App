import { useEffect, useRef, useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import TimetableScreen from './screens/TimetableScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import AbsenceScreen from './screens/AbsenceScreen';
import MyCourseScreen from './screens/MyCourseScreen';
import LibraryScreen from './screens/LibraryScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import AlertsScreen from './screens/AlertsScreen';
import SearchScreen from './screens/SearchScreen';
import MenuScreen from './screens/MenuScreen';
import GenericListScreen from './screens/GenericListScreen';
import {
  CAMPUS_FACILITIES,
  NEWS,
  SKILLS_RESOURCES,
  WHATS_ON,
  ALERTS,
} from './data/content';

const TAB_SCREENS = new Set(['settings', 'alerts', 'search']);

export default function App() {
  const [activeTab, setActiveTab] = useState('campus');
  const [overlay, setOverlay] = useState(null);
  const scrollRef = useRef(null);

  const unreadAlerts = ALERTS.filter((a) => !a.read).length;

  const navigate = (screen) => {
    if (TAB_SCREENS.has(screen)) {
      setOverlay(null);
      setActiveTab(screen);
      return;
    }
    setOverlay(screen);
  };

  const closeOverlay = () => setOverlay(null);

  const handleTabChange = (tab) => {
    setOverlay(null);
    setActiveTab(tab);
  };

  const handleRefresh = () => window.location.reload();
  const handleMenu = () => navigate('menu');

  const topBarProps = {
    onMenu: handleMenu,
    onRefresh: handleRefresh,
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, overlay]);

  const renderOverlay = () => {
    switch (overlay) {
      case 'timetable':
        return <TimetableScreen onBack={closeOverlay} />;
      case 'myAccount':
        return <MyAccountScreen onBack={closeOverlay} />;
      case 'attendance':
        return <AttendanceScreen onBack={closeOverlay} />;
      case 'absence':
        return <AbsenceScreen onBack={closeOverlay} />;
      case 'myCourse':
        return <MyCourseScreen onBack={closeOverlay} />;
      case 'library':
        return <LibraryScreen onBack={closeOverlay} />;
      case 'feedback':
        return <FeedbackScreen onBack={closeOverlay} />;
      case 'getStarted':
        return <GetStartedScreen onBack={closeOverlay} />;
      case 'aroundCampus':
        return (
          <GenericListScreen
            title="Around campus"
            onBack={closeOverlay}
            items={CAMPUS_FACILITIES.map((f) => ({
              id: f.name,
              title: f.name,
              hours: f.hours,
            }))}
          />
        );
      case 'whatsOn':
        return (
          <GenericListScreen
            title="What's on"
            onBack={closeOverlay}
            items={WHATS_ON}
          />
        );
      case 'news':
        return (
          <GenericListScreen
            title="News and notices"
            onBack={closeOverlay}
            items={NEWS}
          />
        );
      case 'skills':
        return (
          <GenericListScreen
            title="Skills for success"
            onBack={closeOverlay}
            items={SKILLS_RESOURCES.map((s, i) => ({
              id: `skill-${i}`,
              title: s.title,
              type: s.type,
            }))}
          />
        );
      case 'studentSupport':
        return <SupportScreen onBack={closeOverlay} />;
      case 'menu':
        return <MenuScreen onBack={closeOverlay} onNavigate={navigate} />;
      default:
        return null;
    }
  };

  const homeNav = {
    onOpenTimetable: () => navigate('timetable'),
    onOpenMyAccount: () => navigate('myAccount'),
    onOpenAttendance: () => navigate('attendance'),
    onOpenAbsence: () => navigate('absence'),
    onOpenLibrary: () => navigate('library'),
    onOpenMyCourse: () => navigate('myCourse'),
    onOpenFeedback: () => navigate('feedback'),
    onOpenGetStarted: () => navigate('getStarted'),
    onOpenAroundCampus: () => navigate('aroundCampus'),
    onOpenWhatsOn: () => navigate('whatsOn'),
    onOpenSupport: () => navigate('studentSupport'),
    onOpenNews: () => navigate('news'),
    onOpenSkills: () => navigate('skills'),
    onNavigate: navigate,
    ...topBarProps,
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-shell bg-white shadow-xl">
      <div
        ref={scrollRef}
        className="scrollbar-hide max-h-screen overflow-y-auto pb-20"
      >
        {overlay ? (
          renderOverlay()
        ) : (
          <>
            {activeTab === 'campus' && <HomeScreen {...homeNav} />}
            {activeTab === 'calendar' && (
              <CalendarScreen {...topBarProps} />
            )}
            {activeTab === 'settings' && (
              <SettingsScreen
                {...topBarProps}
                onOpenMyAccount={() => navigate('myAccount')}
              />
            )}
            {activeTab === 'alerts' && <AlertsScreen {...topBarProps} />}
            {activeTab === 'search' && (
              <SearchScreen {...topBarProps} onNavigate={navigate} />
            )}
          </>
        )}
      </div>
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        alertCount={unreadAlerts}
      />
    </div>
  );
}
