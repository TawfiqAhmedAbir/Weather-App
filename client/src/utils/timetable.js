import { EXAMS } from '../data/events';

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

export function getExamWeekStarts() {
  const weekStarts = [...new Set(EXAMS.map((exam) => getMondayOfWeek(exam.date)))];
  return weekStarts.sort();
}

export function getTimetableForWeekStart(weekStartIso) {
  const eventsByDate = EXAMS.reduce((acc, exam) => {
    acc[exam.date] = [...(acc[exam.date] || []), exam];
    return acc;
  }, {});

  return getWeekDays(weekStartIso).map((day) => ({
    ...day,
    events: eventsByDate[day.date] || [],
  }));
}

export function getAllTimetableWeeks() {
  return getExamWeekStarts().map((weekStart) => {
    const days = getTimetableForWeekStart(weekStart);
    return {
      weekStart,
      label: getWeekLabelForDays(days),
      days,
    };
  });
}

// Backwards-compatible helpers for single-week callers
export function getExamWeekDays() {
  return getWeekDays(getMondayOfWeek(EXAMS[0].date));
}

export function getTimetableForWeek() {
  return getTimetableForWeekStart(getMondayOfWeek(EXAMS[0].date));
}

export function getWeekLabel() {
  return getWeekLabelForDays(getExamWeekDays());
}
