import { ChevronRight, Clock } from 'lucide-react';
import PressableCard from './PressableCard';
import { EXAMS } from '../data/events';
import { getWeekLabel } from '../utils/timetable';

export default function UpcomingWeekPreview({ onOpenTimetable }) {
  const nextExam = EXAMS[0];

  return (
    <section className="mx-3 mt-3">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-extrabold text-charcoal">
          Upcoming this week
        </h2>
        <span className="text-[10px] font-semibold text-gray-500">
          {getWeekLabel()}
        </span>
      </div>

      <PressableCard
        onClick={onOpenTimetable}
        className="block w-full rounded-2xl bg-primary p-4 text-left shadow-card"
      >
        <p className="text-[10px] font-bold uppercase text-secondary">Exam</p>
        <p className="mt-1 text-sm font-extrabold leading-snug text-white">
          {nextExam.title}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-white/95">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          {nextExam.day}, {nextExam.displayDate} · {nextExam.time}
        </p>
        <p className="mt-3 flex items-center gap-1 text-xs font-bold text-secondary">
          View full timetable
          <ChevronRight className="h-4 w-4" />
        </p>
      </PressableCard>
    </section>
  );
}
