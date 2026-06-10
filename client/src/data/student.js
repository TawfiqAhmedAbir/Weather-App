export const STUDENT = {
  firstName: 'Tawfiq',
  fullName: 'Tawfiq Ahmed Abir',
  preferredName: 'Tawfiq',
  studentId: '4230337',
  email: 's4230337@lsbu.ac.uk',
  programme: 'BSc Hons Computer Science',
  year: '3rd year',
  programmeLabel: '3rd year BSc Hons in Comp Sci',
  faculty: 'School of Engineering',
  campus: 'Southwark',
  university: 'London South Bank University',
  universityUrl: 'https://www.lsbu.ac.uk',
};

export const MODULES = [
  {
    code: 'COMP501',
    name: 'Big Data and Database Systems',
    attendancePercent: 94,
  },
  {
    code: 'COMP502',
    name: 'AI Systems and Architecture',
    attendancePercent: 96,
  },
  {
    code: 'COMP503',
    name: 'ICT Project Management in Practice',
    attendancePercent: 98,
  },
  {
    code: 'COMP504',
    name: 'Honors Information and Communication',
    attendancePercent: 95,
  },
];

export const ATTENDANCE = {
  overallPercent: 96,
  status: 'Good standing',
  sessionsAttended: 48,
  sessionsTotal: 50,
  modules: MODULES.map((m) => ({
    code: m.code,
    name: m.name,
    percent: m.attendancePercent,
  })),
};

export const FEES = {
  totalPounds: 12900,
  paidPounds: 5000,
  remainingPounds: 7900,
  nextPayment: {
    amountPounds: 3900,
    date: '2026-08-22',
    displayDate: '22nd August 2026',
  },
  history: [
    {
      id: 'pay-1',
      amountPounds: 4100,
      date: '2026-06-01',
      displayDate: '1st June 2026',
      label: 'Tuition instalment',
    },
    {
      id: 'pay-2',
      amountPounds: 900,
      date: '2026-01-26',
      displayDate: '26th January 2026',
      label: 'Tuition instalment',
    },
  ],
};
