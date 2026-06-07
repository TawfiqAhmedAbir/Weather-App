import { EXAMS, EXAM_WEEK_ANCHOR } from '../data/events';

const DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const DAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getExamWeekDays() {
  const anchor = new Date(`${EXAM_WEEK_ANCHOR}T12:00:00`);
  const monday = new Date(anchor);
  monday.setDate(anchor.getDate() - ((anchor.getDay() + 6) % 7));

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const iso = toIsoDate(date);

    return {
      date: iso,
      dayName: DAY_NAMES[i],
      dayShort: DAY_SHORT[i],
      dayNum: date.getDate(),
      month: date.toLocaleString('en-GB', { month: 'short' }),
    };
  });
}

export function getTimetableForWeek() {
  const eventsByDate = EXAMS.reduce((acc, exam) => {
    acc[exam.date] = [...(acc[exam.date] || []), exam];
    return acc;
  }, {});

  return getExamWeekDays().map((day) => ({
    ...day,
    events: eventsByDate[day.date] || [],
  }));
}

export function getWeekLabel() {
  const days = getExamWeekDays();
  const first = days[0];
  const last = days[6];
  return `${first.dayNum} ${first.month} – ${last.dayNum} ${last.month} 2026`;
}
