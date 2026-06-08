import { CalendarDays, Clock, MapPin } from 'lucide-react';
import TopBar from '../components/TopBar';
import TimetableWeek from '../components/TimetableWeek';
import { EXAMS } from '../data/events';

export default function CalendarScreen() {
  return (
    <>
      <TopBar />
      <main className="px-4 pb-4 pt-2">
        <h1 className="mb-4 text-xl font-extrabold text-charcoal">Calendar</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-500">
            Upcoming exams
          </h2>
          <ul className="space-y-3">
            {EXAMS.map((exam) => (
              <li
                key={exam.id}
                className="rounded-2xl bg-primary p-4 text-white shadow-card"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase text-secondary">
                      {exam.type}
                    </p>
                    <h3 className="text-base font-extrabold leading-snug">
                      {exam.title}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-xl bg-white/15 px-3 py-2 text-center">
                    <p className="text-lg font-extrabold leading-none">
                      {exam.dayNum}
                    </p>
                    <p className="text-[10px] font-bold uppercase">
                      {exam.monthShort}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-sm font-semibold text-white/95">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    {exam.displayDate} · {exam.day}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0" />
                    {exam.time}
                    {exam.endTime ? ` – ${exam.endTime}` : ''}
                    {exam.duration ? ` (${exam.duration})` : ''}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {exam.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
            Exam weeks timetable
          </h2>
          <TimetableWeek compact />
        </section>
      </main>
    </>
  );
}
