import { Bell, Calendar, Search, Settings } from 'lucide-react';

const TAB_META = {
  settings: { title: 'Settings', icon: Settings },
  calendar: { title: 'Calendar', icon: Calendar },
  alerts: { title: 'Alerts', icon: Bell },
  search: { title: 'Search', icon: Search },
};

export default function PlaceholderTab({ tabId }) {
  const meta = TAB_META[tabId];
  if (!meta) return null;

  const Icon = meta.icon;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-5">
        <Icon className="h-10 w-10 text-primary" strokeWidth={1.75} />
      </div>
      <h1 className="text-xl font-extrabold text-charcoal">{meta.title}</h1>
      <p className="mt-2 text-sm text-gray-500">
        This section is coming soon. Use My Campus for your home feed.
      </p>
    </div>
  );
}
