import { CalendarDays, Clock, MapPin, Plus } from 'lucide-react';
import TopBar from '../components/TopBar';

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function TimetableScreen() {
  return (
    <>
      <TopBar />
      <main className="space-y-4 px-3 pb-4 pt-3">
        <section className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-5 text-white shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                Timetable
              </p>
              <h1 className="mt-2 text-2xl font-extrabold leading-tight">
                Your week at a glance
              </h1>
              <p className="mt-2 text-sm font-bold text-white/85">
                No classes have been added yet.
              </p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <CalendarDays className="h-8 w-8" strokeWidth={2} />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-4 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-charcoal">
              This week
            </h2>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-extrabold text-gray-500">
              Blank
            </span>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {WEEK_DAYS.map((day) => (
              <div
                key={day}
                className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-2 py-3 text-center"
              >
                <p className="text-xs font-extrabold text-charcoal">{day}</p>
                <div className="mx-auto mt-3 h-1.5 w-1.5 rounded-full bg-gray-300" />
              </div>
            ))}
          </div>

          <div className="mt-5 flex min-h-[180px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-5 text-center">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <Plus className="h-8 w-8" strokeWidth={2} />
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-charcoal">
              Timetable is ready
            </h3>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-500">
              Your classes, rooms, and study sessions will appear here once
              they are added.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white p-4 shadow-card">
            <Clock className="h-6 w-6 text-secondary" strokeWidth={2.25} />
            <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-gray-400">
              Next class
            </p>
            <p className="mt-1 text-sm font-extrabold text-charcoal">
              Nothing scheduled
            </p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-card">
            <MapPin className="h-6 w-6 text-secondary" strokeWidth={2.25} />
            <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-gray-400">
              Room
            </p>
            <p className="mt-1 text-sm font-extrabold text-charcoal">
              Not assigned
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
