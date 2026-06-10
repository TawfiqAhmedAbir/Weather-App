import { ALL_CALENDAR_EVENTS } from '../data/events';
import { STUDENT, MODULES, FEES } from '../data/student';
import {
  ALERTS,
  NEWS,
  CAMPUS_FACILITIES,
  SUPPORT_SERVICES,
  SKILLS_RESOURCES,
  WHATS_ON,
} from '../data/content';
import { LIBRARY_ACCOUNT } from '../data/library';

export function buildSearchIndex() {
  const items = [];

  items.push({
    id: 'profile',
    title: 'My Account',
    subtitle: STUDENT.fullName,
    category: 'Account',
    screen: 'myAccount',
  });

  items.push({
    id: 'attendance',
    title: 'Attendance',
    subtitle: `${STUDENT.fullName} — ${96}%`,
    category: 'Academic',
    screen: 'attendance',
  });

  items.push({
    id: 'assessment',
    title: 'Assessment',
    subtitle: 'Module grades and judgements',
    category: 'Academic',
    screen: 'assessment',
  });

  MODULES.forEach((mod) => {
    items.push({
      id: `mod-${mod.code}`,
      title: mod.name,
      subtitle: mod.code,
      category: 'Module',
      screen: 'myCourse',
    });
  });

  ALL_CALENDAR_EVENTS.forEach((event) => {
    items.push({
      id: event.id,
      title: event.title,
      subtitle: `${event.displayDate} · ${event.type}`,
      category: event.type,
      screen: 'timetable',
    });
  });

  items.push({
    id: 'fees',
    title: 'Fees and funding',
    subtitle: `£${FEES.totalPounds.toLocaleString()} total`,
    category: 'Finance',
    screen: 'myCourse',
  });

  LIBRARY_ACCOUNT.items.forEach((book) => {
    items.push({
      id: book.id,
      title: book.title,
      subtitle: 'Library loan',
      category: 'Library',
      screen: 'library',
    });
  });

  NEWS.forEach((n) => {
    items.push({
      id: n.id,
      title: n.title,
      subtitle: n.date,
      category: 'News',
      screen: 'news',
    });
  });

  SUPPORT_SERVICES.forEach((s, i) => {
    items.push({
      id: `support-${i}`,
      title: s.name,
      subtitle: s.description,
      category: 'Support',
      screen: 'studentSupport',
    });
  });

  CAMPUS_FACILITIES.forEach((f, i) => {
    items.push({
      id: `facility-${i}`,
      title: f.name,
      subtitle: f.hours,
      category: 'Campus',
      screen: 'aroundCampus',
    });
  });

  WHATS_ON.forEach((e) => {
    items.push({
      id: e.id,
      title: e.title,
      subtitle: e.date,
      category: 'Events',
      screen: 'whatsOn',
    });
  });

  SKILLS_RESOURCES.forEach((s, i) => {
    items.push({
      id: `skill-${i}`,
      title: s.title,
      subtitle: s.type,
      category: 'Skills',
      screen: 'skills',
    });
  });

  ALERTS.forEach((a) => {
    items.push({
      id: a.id,
      title: a.title,
      subtitle: a.body,
      category: 'Alert',
      screen: 'alerts',
    });
  });

  return items;
}

export function searchContent(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return buildSearchIndex().filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );
}
