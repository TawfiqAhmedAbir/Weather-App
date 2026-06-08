import {
  Calendar,
  CalendarCheck,
  CirclePause,
} from 'lucide-react';
import PressableCard from './PressableCard';
import { getTimeGreeting } from '../utils/greeting';
import { STUDENT } from '../data/student';

export default function QuickGrid({
  onOpenTimetable,
  onOpenAttendance,
  onOpenMyAccount,
}) {
  const greeting = getTimeGreeting();

  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      <PressableCard
        onClick={onOpenMyAccount}
        className="col-span-1 flex min-h-[88px] flex-col justify-end rounded-2xl bg-secondary p-3 text-left shadow-card"
      >
        <p className="text-[11px] font-bold leading-tight text-white">
          {greeting},
        </p>
        <p className="text-sm font-extrabold text-white">
          {STUDENT.preferredName}
        </p>
      </PressableCard>

      <PressableCard className="col-span-1 flex min-h-[88px] flex-col items-start justify-between rounded-2xl bg-charcoal p-3 text-left shadow-card">
        <CirclePause className="h-6 w-6 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Log an absence
        </p>
      </PressableCard>

      <PressableCard
        onClick={onOpenAttendance}
        className="col-span-1 flex min-h-[88px] flex-col items-start justify-between rounded-2xl bg-charcoal p-3 text-left shadow-card"
      >
        <CalendarCheck className="h-6 w-6 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Attendance
        </p>
      </PressableCard>

      <PressableCard
        onClick={onOpenTimetable}
        className="col-span-2 flex min-h-[72px] items-end gap-2 rounded-2xl bg-charcoal p-3 shadow-card"
      >
        <Calendar className="h-6 w-6 shrink-0 text-white" strokeWidth={2} />
        <p className="text-sm font-bold text-white">Timetable</p>
      </PressableCard>

      <PressableCard
        className="col-span-1 min-h-[72px] overflow-hidden rounded-2xl shadow-card"
        aria-label="Library"
      >
        <div
          className="h-full w-full bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700"
          role="img"
          aria-label="Library interior placeholder"
        />
      </PressableCard>
    </section>
  );
}
