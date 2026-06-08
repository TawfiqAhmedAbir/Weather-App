import { useEffect, useRef, useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import TimetableScreen from './screens/TimetableScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import PlaceholderTab from './screens/PlaceholderTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('campus');
  const [overlay, setOverlay] = useState(null);
  const scrollRef = useRef(null);

  const openOverlay = (screen) => setOverlay(screen);
  const closeOverlay = () => setOverlay(null);

  const handleTabChange = (tab) => {
    setOverlay(null);
    setActiveTab(tab);
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
      default:
        return null;
    }
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
            {activeTab === 'campus' && (
              <HomeScreen
                onOpenTimetable={() => openOverlay('timetable')}
                onOpenMyAccount={() => openOverlay('myAccount')}
                onOpenAttendance={() => openOverlay('attendance')}
              />
            )}
            {activeTab === 'calendar' && <CalendarScreen />}
            {activeTab !== 'campus' && activeTab !== 'calendar' && (
              <PlaceholderTab tabId={activeTab} />
            )}
          </>
        )}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
