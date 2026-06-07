import { ArrowLeft } from 'lucide-react';
import TimetableWeek from '../components/TimetableWeek';

export default function TimetableScreen({ onBack }) {
  return (
    <>
      <header className="sticky top-0 z-20 flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="rounded-full p-1 text-charcoal transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <h1 className="text-lg font-extrabold text-charcoal">Timetable</h1>
      </header>

      <main className="px-4 pb-4 pt-2">
        <TimetableWeek />
      </main>
    </>
  );
}
