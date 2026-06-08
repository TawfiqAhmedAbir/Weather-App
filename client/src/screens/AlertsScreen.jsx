import { Bell } from 'lucide-react';
import TopBar from '../components/TopBar';
import { ALERTS } from '../data/content';

export default function AlertsScreen({ onMenu, onRefresh }) {
  return (
    <>
      <TopBar onMenu={onMenu} onRefresh={onRefresh} />
      <main className="px-4 pb-6 pt-2">
        <h1 className="mb-4 text-xl font-extrabold text-charcoal">Alerts</h1>
        <ul className="space-y-2">
          {ALERTS.map((alert) => (
            <li
              key={alert.id}
              className={`rounded-2xl p-4 shadow-card ${
                alert.read ? 'bg-gray-50' : 'border border-primary/20 bg-primary/5'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-full p-2 ${
                    alert.read ? 'bg-gray-200' : 'bg-primary/10'
                  }`}
                >
                  <Bell
                    className={`h-4 w-4 ${
                      alert.read ? 'text-gray-500' : 'text-primary'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-extrabold text-charcoal">
                      {alert.title}
                    </p>
                    {!alert.read && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    )}
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {alert.body}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold text-gray-400">
                    {alert.date}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
