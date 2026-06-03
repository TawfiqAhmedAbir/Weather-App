import {
  CreditCard,
  CalendarDays,
  Home,
  Search,
  UserRound,
} from 'lucide-react';

const TABS = [
  { id: 'campus', label: 'My Campus', icon: Home },
  { id: 'timetable', label: 'Timetable', icon: CalendarDays },
  { id: 'account', label: 'My Account', icon: UserRound },
  { id: 'payments', label: 'Payments', icon: CreditCard, badge: true },
  { id: 'search', label: 'Search', icon: Search },
];

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-30 w-full max-w-shell -translate-x-1/2 border-t border-gray-200 bg-white px-1 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <ul className="flex items-stretch justify-around">
        {TABS.map(({ id, label, icon: Icon, badge }) => {
          const isActive = activeTab === id;
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => onTabChange(id)}
                className={`relative flex w-full flex-col items-center gap-0.5 px-1 py-2 text-[10px] font-bold transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`}
              >
                <span className="relative">
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {badge && (
                    <span className="absolute -right-1 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                  )}
                </span>
                <span className="leading-tight">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
