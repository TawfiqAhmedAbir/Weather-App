import { Check } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { GET_STARTED_CHECKLIST } from '../data/content';

export default function GetStartedScreen({ onBack }) {
  return (
    <>
      <ScreenHeader title="Get started" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <p className="mb-4 text-sm text-gray-600">
          Your checklist for a smooth start to the term at LSBU Southwark.
        </p>
        <ul className="space-y-2">
          {GET_STARTED_CHECKLIST.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 rounded-2xl p-4 shadow-card ${
                item.done ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  item.done ? 'bg-green-500 text-white' : 'border-2 border-gray-300'
                }`}
              >
                {item.done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </div>
              <span
                className={`text-sm font-extrabold ${
                  item.done ? 'text-gray-500 line-through' : 'text-charcoal'
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
