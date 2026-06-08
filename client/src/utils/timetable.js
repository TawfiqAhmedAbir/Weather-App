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

export function getEventWeekStarts() {
  const weekStarts = [
    ...new Set(ALL_CALENDAR_EVENTS.map((event) => getMondayOfWeek(event.date))),
  ];
  return weekStarts.sort();
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
  return getEventWeekStarts().map((weekStart) => {
    const days = getTimetableForWeekStart(weekStart);
    return {
      weekStart,
      label: getWeekLabelForDays(days),
      days,
    };
  });
}

export function getUpcomingEvents(limit = 5) {
  return [...ALL_CALENDAR_EVENTS].slice(0, limit);
}
