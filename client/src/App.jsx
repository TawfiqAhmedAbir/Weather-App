import { useState } from 'react';
import BottomNav from './components/BottomNav';
import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import PlaceholderTab from './screens/PlaceholderTab';
import TimetableScreen from './screens/TimetableScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('campus');

  const renderScreen = () => {
    switch (activeTab) {
      case 'campus':
        return <HomeScreen onNavigate={setActiveTab} />;
      case 'timetable':
        return <TimetableScreen />;
      case 'account':
        return <AccountScreen />;
      case 'payments':
        return <PaymentsScreen />;
      default:
        return <PlaceholderTab tabId={activeTab} />;
    }
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-shell bg-white shadow-xl">
      <div className="scrollbar-hide max-h-screen overflow-y-auto pb-20">
        {renderScreen()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
