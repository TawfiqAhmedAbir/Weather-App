import { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import TimetableScreen from './screens/TimetableScreen';
import PlaceholderTab from './screens/PlaceholderTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('campus');
  const [showTimetable, setShowTimetable] = useState(false);

  const openTimetable = () => setShowTimetable(true);
  const closeTimetable = () => setShowTimetable(false);

  const handleTabChange = (tab) => {
    setShowTimetable(false);
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-shell bg-white shadow-xl">
      <div className="scrollbar-hide max-h-screen overflow-y-auto pb-20">
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
