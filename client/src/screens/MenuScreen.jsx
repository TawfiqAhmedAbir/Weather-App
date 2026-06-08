import { BookOpen, Calendar, Settings, User } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';

const MENU_ITEMS = [
  { id: 'myAccount', label: 'My Account', icon: User },
  { id: 'myCourse', label: 'My course', icon: BookOpen },
  { id: 'timetable', label: 'Timetable', icon: Calendar },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function MenuScreen({ onBack, onNavigate }) {
  return (
    <>
      <ScreenHeader title="Menu" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <ul className="space-y-2">
          {MENU_ITEMS.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => {
                  onNavigate(id);
                }}
                className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 shadow-card transition-colors hover:bg-gray-50"
              >
                <div className="rounded-lg bg-primary/10 p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-extrabold text-charcoal">
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
