import ScreenHeader from '../components/ScreenHeader';
import TimetableWeek from '../components/TimetableWeek';
import { getTimetableRangeLabel } from '../utils/timetable';
import { ALL_CALENDAR_EVENTS } from '../data/events';

export default function TimetableScreen({ onBack }) {
  const rangeLabel = getTimetableRangeLabel();
  const eventCount = ALL_CALENDAR_EVENTS.length;

  return (
    <>
      <ScreenHeader title="Timetable" onBack={onBack} />
      <main className="px-4 pb-4 pt-2">
        <p className="mb-1 text-sm font-extrabold text-charcoal">
          {rangeLabel}
        </p>
        <p className="mb-4 text-xs font-semibold text-gray-500">
          {eventCount} events through graduation
        </p>
        <TimetableWeek />
      </main>
    </>
  );
}
