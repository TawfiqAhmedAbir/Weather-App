import { Clock, MapPin } from 'lucide-react';
import { getAllTimetableWeeks } from '../utils/timetable';

function WeekDays({ days }) {
  return (
    <ul className="space-y-2">
      {days.map((day) => {
        const hasEvents = day.events.length > 0;

        return (
          <li
            key={day.date}
            className={`rounded-2xl border p-3 ${
              hasEvents
                ? 'border-primary/20 bg-primary/5 shadow-card'
                : 'border-gray-100 bg-gray-50'
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-extrabold ${
                    hasEvents ? 'text-primary' : 'text-charcoal'
                  }`}
                >
                  {day.dayName}
                </p>
                <p className="text-xs font-semibold text-gray-500">
                  {day.dayNum} {day.month}
                </p>
              </div>
              {!hasEvents && (
                <span className="text-xs font-semibold text-gray-400">
                  No classes
                </span>
              )}
            </div>

            {hasEvents ? (
              <ul className="space-y-2">
                {day.events.map((event) => (
                  <li
                    key={event.id}
                    className="rounded-xl bg-primary p-3 text-white"
                  >
                    <p className="text-[10px] font-bold uppercase text-secondary">
                      {event.type}
                    </p>
                    <p className="text-sm font-extrabold leading-snug">
                      {event.title}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-white/95">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {event.time}
                      {event.endTime ? ` – ${event.endTime}` : ''}
                      {event.duration ? ` (${event.duration})` : ''}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-white/95">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {event.location}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs font-medium text-gray-400">
                Nothing scheduled
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function TimetableWeek({ compact = false }) {
  const weeks = getAllTimetableWeeks();

  return (
    <section className={compact ? '' : 'space-y-6'}>
      {weeks.map((week) => (
        <div key={week.weekStart}>
          <p
            className={`font-semibold text-gray-500 ${
              compact ? 'mb-2 text-xs uppercase tracking-wide' : 'mb-3 text-sm'
            }`}
          >
            Week of {week.label}
          </p>
          <WeekDays days={week.days} />
        </div>
      ))}
    </section>
  );
}
