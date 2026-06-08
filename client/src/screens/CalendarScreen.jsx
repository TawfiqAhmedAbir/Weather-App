import { CalendarDays, Clock, MapPin } from 'lucide-react';
import TopBar from '../components/TopBar';
import TimetableWeek from '../components/TimetableWeek';
import { ALL_CALENDAR_EVENTS } from '../data/events';

function eventColor(type) {
  if (type === 'Exam') return 'bg-primary';
  if (type === 'Deadline') return 'bg-secondary';
  return 'bg-charcoal';
}

export default function CalendarScreen({ onMenu, onRefresh }) {
  return (
    <>
      <TopBar onMenu={onMenu} onRefresh={onRefresh} />
      <main className="px-4 pb-4 pt-2">
        <h1 className="mb-4 text-xl font-extrabold text-charcoal">Calendar</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-500">
            Upcoming dates
          </h2>
          <ul className="space-y-3">
            {ALL_CALENDAR_EVENTS.map((event) => (
              <li
                key={event.id}
                className={`rounded-2xl p-4 text-white shadow-card ${eventColor(event.type)}`}
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase text-white/80">
                      {event.type}
                    </p>
                    <h3 className="text-base font-extrabold leading-snug">
                      {event.title}
                      {event.module ? ` — ${event.module}` : ''}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-xl bg-white/15 px-3 py-2 text-center">
                    <p className="text-lg font-extrabold leading-none">
                      {event.dayNum}
                    </p>
                    <p className="text-[10px] font-bold uppercase">
                      {event.monthShort}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-sm font-semibold text-white/95">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    {event.displayDate} · {event.day}
                  </p>
                  {event.time && (
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0" />
                      {event.time}
                      {event.endTime ? ` – ${event.endTime}` : ''}
                      {event.duration ? ` (${event.duration})` : ''}
                    </p>
                  )}
                  {event.location && (
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" />
                      {event.location}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
            Timetable by week
          </h2>
          <TimetableWeek compact />
        </section>
      </main>
    </>
  );
}
