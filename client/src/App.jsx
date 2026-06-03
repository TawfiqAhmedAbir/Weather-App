import { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import PlaceholderTab from './screens/PlaceholderTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('campus');

  return (
    <div className="mx-auto min-h-screen w-full max-w-shell bg-white shadow-xl">
      <div className="scrollbar-hide max-h-screen overflow-y-auto pb-20">
        {activeTab === 'campus' ? (
          <HomeScreen />
        ) : (
          <PlaceholderTab tabId={activeTab} />
        )}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
