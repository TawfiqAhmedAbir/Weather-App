import { useState } from 'react';
import { Bell, Moon, RefreshCw } from 'lucide-react';
import TopBar from '../components/TopBar';
import { STUDENT } from '../data/student';

function Toggle({ label, icon: Icon, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-card">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <span className="text-sm font-extrabold text-charcoal">{label}</span>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={`relative h-7 w-12 rounded-full transition-colors ${
          enabled ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
            enabled ? 'left-5' : 'left-0.5'
          }`}
        />
      </button>
    </div>
  );
}

export default function SettingsScreen({
  onMenu,
  onRefresh,
  onOpenMyAccount,
}) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <TopBar onMenu={onMenu} onRefresh={onRefresh} />
      <main className="px-4 pb-6 pt-2">
        <h1 className="mb-4 text-xl font-extrabold text-charcoal">Settings</h1>

        <div className="mb-4 rounded-2xl bg-gray-50 p-4">
          <p className="text-sm font-extrabold text-charcoal">{STUDENT.fullName}</p>
          <p className="text-xs font-semibold text-gray-500">{STUDENT.email}</p>
          <button
            type="button"
            onClick={onOpenMyAccount}
            className="mt-2 text-xs font-bold text-primary"
          >
            View account →
          </button>
        </div>

        <div className="space-y-2">
          <Toggle
            label="Push notifications"
            icon={Bell}
            enabled={notifications}
            onChange={setNotifications}
          />
          <Toggle
            label="Dark mode"
            icon={Moon}
            enabled={darkMode}
            onChange={setDarkMode}
          />
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-gray-400">
          <RefreshCw className="h-3 w-3" />
          MyUni v1.0 · {STUDENT.university}
        </p>
      </main>
    </>
  );
}
