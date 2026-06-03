import { Search } from 'lucide-react';

const TAB_META = {
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
        Search is coming soon. Use the tabs below to open your timetable,
        account, and payments.
      </p>
    </div>
  );
}
