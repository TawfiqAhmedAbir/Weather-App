import { ALL_CALENDAR_EVENTS } from '../data/events';

const DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getMondayOfWeek(isoDate) {
  const anchor = new Date(`${isoDate}T12:00:00`);
  const monday = new Date(anchor);
  monday.setDate(anchor.getDate() - ((anchor.getDay() + 6) % 7));
  return toIsoDate(monday);
}

function getWeekDays(weekStartIso) {
  const monday = new Date(`${weekStartIso}T12:00:00`);

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const iso = toIsoDate(date);

    return {
      date: iso,
      dayName: DAY_NAMES[i],
      dayNum: date.getDate(),
      month: date.toLocaleString('en-GB', { month: 'short' }),
    };
  });
}

function getWeekLabelForDays(days) {
  const first = days[0];
  const last = days[6];
  return `${first.dayNum} ${first.month} – ${last.dayNum} ${last.month} 2026`;
}

/** Every Monday from the first event week through graduation week (inclusive). */
export function getTimetableWeekStarts() {
  if (ALL_CALENDAR_EVENTS.length === 0) return [];

  const sorted = [...ALL_CALENDAR_EVENTS].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
  const firstWeek = getMondayOfWeek(sorted[0].date);
  const lastWeek = getMondayOfWeek(sorted[sorted.length - 1].date);

  const weeks = [];
  const cursor = new Date(`${firstWeek}T12:00:00`);
  const end = new Date(`${lastWeek}T12:00:00`);

  while (cursor <= end) {
    weeks.push(toIsoDate(cursor));
    cursor.setDate(cursor.getDate() + 7);
  }

  return weeks;
}

export function getTimetableForWeekStart(weekStartIso) {
  const eventsByDate = ALL_CALENDAR_EVENTS.reduce((acc, event) => {
    acc[event.date] = [...(acc[event.date] || []), event];
    return acc;
  }, {});

  return getWeekDays(weekStartIso).map((day) => ({
    ...day,
    events: eventsByDate[day.date] || [],
  }));
}

export function getAllTimetableWeeks() {
  return getTimetableWeekStarts().map((weekStart) => {
    const days = getTimetableForWeekStart(weekStart);
    return {
      weekStart,
      label: getWeekLabelForDays(days),
      days,
    };
  });
}

export function getTimetableRangeLabel() {
  const weeks = getAllTimetableWeeks();
  if (weeks.length === 0) return '';
  const first = weeks[0].days[0];
  const last = weeks[weeks.length - 1].days[6];
  return `${first.dayNum} ${first.month} – ${last.dayNum} ${last.month} 2026`;
}

export function getUpcomingEvents() {
  return [...ALL_CALENDAR_EVENTS];
}
