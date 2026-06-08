import { ChevronRight, Clock } from 'lucide-react';
import PressableCard from './PressableCard';
import { EXAMS } from '../data/events';

export default function UpcomingWeekPreview({ onOpenTimetable }) {
  const upcomingExams = [...EXAMS].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <section className="mx-3 mt-3">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-extrabold text-charcoal">Upcoming exams</h2>
      </div>

      <ul className="space-y-2">
        {upcomingExams.map((exam) => (
          <li key={exam.id}>
            <PressableCard
              onClick={onOpenTimetable}
              className="block w-full rounded-2xl bg-primary p-4 text-left shadow-card"
            >
              <p className="text-[10px] font-bold uppercase text-secondary">
                {exam.type}
              </p>
              <p className="mt-1 text-sm font-extrabold leading-snug text-white">
                {exam.title}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-white/95">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                {exam.day}, {exam.displayDate} · {exam.time}
                {exam.endTime ? ` – ${exam.endTime}` : ''}
              </p>
            </PressableCard>
          </li>
        ))}
      </ul>

      <PressableCard
        onClick={onOpenTimetable}
        className="mt-2 flex w-full items-center justify-center gap-1 rounded-xl py-2 text-xs font-bold text-primary"
      >
        View full timetable
        <ChevronRight className="h-4 w-4" />
      </PressableCard>
    </section>
  );
}
