import {
  Calendar,
  CalendarCheck,
  CirclePause,
  CreditCard,
} from 'lucide-react';
import PressableCard from './PressableCard';
import { getTimeGreeting } from '../utils/greeting';

const USER_NAME = 'Tawfiq';

export default function QuickGrid({ onNavigate }) {
  const greeting = getTimeGreeting();

  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      <PressableCard
        className="col-span-1 flex min-h-[88px] flex-col justify-end rounded-2xl bg-secondary p-3 text-left shadow-card"
        onClick={() => onNavigate('account')}
      >
        <p className="text-[11px] font-bold leading-tight text-white">
          {greeting},
        </p>
        <p className="text-sm font-extrabold text-white">{USER_NAME}</p>
      </PressableCard>

      <PressableCard className="col-span-1 flex min-h-[88px] flex-col items-start justify-between rounded-2xl bg-charcoal p-3 text-left shadow-card">
        <CirclePause className="h-6 w-6 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Log an absence
        </p>
      </PressableCard>

      <PressableCard className="col-span-1 flex min-h-[88px] flex-col items-start justify-between rounded-2xl bg-charcoal p-3 text-left shadow-card">
        <CalendarCheck className="h-6 w-6 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Attendance
        </p>
      </PressableCard>

      <PressableCard
        className="col-span-2 flex min-h-[72px] items-end gap-2 rounded-2xl bg-charcoal p-3 shadow-card"
        onClick={() => onNavigate('timetable')}
      >
        <Calendar className="h-6 w-6 shrink-0 text-white" strokeWidth={2} />
        <p className="text-sm font-bold text-white">Timetable</p>
      </PressableCard>

      <PressableCard
        className="col-span-1 flex min-h-[72px] flex-col justify-between rounded-2xl bg-primary p-3 text-left shadow-card"
        aria-label="Payments"
        onClick={() => onNavigate('payments')}
      >
        <CreditCard className="h-5 w-5 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Payments
        </p>
      </PressableCard>
    </section>
  );
}
