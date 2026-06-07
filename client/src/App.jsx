import { useEffect, useRef, useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import TimetableScreen from './screens/TimetableScreen';
import PlaceholderTab from './screens/PlaceholderTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('campus');
  const [showTimetable, setShowTimetable] = useState(false);
  const scrollRef = useRef(null);

  const openTimetable = () => setShowTimetable(true);
  const closeTimetable = () => setShowTimetable(false);

  const handleTabChange = (tab) => {
    setShowTimetable(false);
    setActiveTab(tab);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, showTimetable]);

  return (
    <div className="mx-auto min-h-screen w-full max-w-shell bg-white shadow-xl">
      <div
        ref={scrollRef}
        className="scrollbar-hide max-h-screen overflow-y-auto pb-20"
      >
        {showTimetable ? (
          <TimetableScreen onBack={closeTimetable} />
        ) : (
          <>
            {activeTab === 'campus' && (
              <HomeScreen onOpenTimetable={openTimetable} />
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
