import { MODULES } from './student';

export const ASSESSMENT_TYPES = [
  { key: 'coursework', label: 'Coursework' },
  { key: 'presentation', label: 'Presentation' },
  { key: 'examAndAssessment', label: 'Exam and assessment' },
];

export const EMPTY_YEAR_MESSAGE =
  'Full report will be published after graduation';

const COURSEWORK_EXAM = ['coursework', 'examAndAssessment'];

export const MODULE_ASSESSMENTS = {
  COMP501: {
    types: ['coursework'],
    grades: { coursework: 'To be graded' },
  },
  COMP502: {
    types: ['coursework'],
    grades: { coursework: 'To be graded' },
  },
  COMP503: {
    types: COURSEWORK_EXAM,
    grades: {
      coursework: 'To be graded',
      examAndAssessment: 'To be graded',
    },
  },
  COMP504: {
    types: ['coursework', 'presentation', 'examAndAssessment'],
    grades: {
      coursework: 'To be graded',
      presentation: {
        overall: 83,
        breakdown: [
          { label: 'Content & Research', percent: 85 },
          { label: 'Delivery & Communication', percent: 83 },
          { label: 'Visual Materials & Structure', percent: 81 },
        ],
      },
      examAndAssessment: 74,
    },
  },
};

export const YEAR_2_MODULES = [
  {
    code: 'COMP201',
    name: 'Operating Systems',
    types: COURSEWORK_EXAM,
    grades: { coursework: 84, examAndAssessment: 76 },
  },
  {
    code: 'COMP202',
    name: 'Principles of Data Networks',
    types: COURSEWORK_EXAM,
    grades: { coursework: 74, examAndAssessment: 72 },
  },
  {
    code: 'COMP203',
    name: 'Advanced Programming',
    types: COURSEWORK_EXAM,
    grades: { coursework: 78, examAndAssessment: 75 },
  },
  {
    code: 'COMP204',
    name: 'Software Engineering',
    types: COURSEWORK_EXAM,
    grades: { coursework: 71, examAndAssessment: 73 },
  },
  {
    code: 'COMP205',
    name: 'Object Oriented Programming',
    types: COURSEWORK_EXAM,
    grades: { coursework: 86, examAndAssessment: 86 },
  },
  {
    code: 'COMP206',
    name: 'Data Structures and Algorithms',
    types: COURSEWORK_EXAM,
    grades: { coursework: 81, examAndAssessment: 81 },
  },
];

export const YEAR_1_MODULES = [
  {
    code: 'COMP101',
    name: 'Fundamentals of Computer Science',
    types: COURSEWORK_EXAM,
    grades: { coursework: 84, examAndAssessment: 82 },
  },
  {
    code: 'COMP102',
    name: 'Fundamentals of Software Development',
    types: COURSEWORK_EXAM,
    grades: { coursework: 83, examAndAssessment: 80 },
  },
  {
    code: 'COMP103',
    name: 'Discrete Mathematics',
    types: COURSEWORK_EXAM,
    grades: { coursework: 82, examAndAssessment: 81 },
  },
  {
    code: 'COMP104',
    name: 'Requirements Analysis and UCD',
    types: COURSEWORK_EXAM,
    grades: { coursework: 76, examAndAssessment: 76 },
  },
];

const DEFAULT_TYPES = ['coursework', 'presentation', 'examAndAssessment'];

function buildModuleRecord(mod, config) {
  const types = config?.types ?? mod.types ?? DEFAULT_TYPES;
  const grades = config?.grades ??
    mod.grades ?? {
      coursework: 'To be graded',
      presentation: 'To be graded',
      examAndAssessment: 'To be graded',
    };

  return {
    code: mod.code,
    name: mod.name,
    types,
    grades,
  };
}

export function getThirdYearAssessments() {
  return MODULES.map((mod) =>
    buildModuleRecord(mod, MODULE_ASSESSMENTS[mod.code])
  );
}

export function getSecondYearAssessments() {
  return YEAR_2_MODULES.map((mod) => buildModuleRecord(mod));
}

export function getFirstYearAssessments() {
  return YEAR_1_MODULES.map((mod) => buildModuleRecord(mod));
}

export function getUkLetterGrade(percent) {
  if (percent >= 80) return 'A';
  if (percent >= 70) return 'B';
  if (percent >= 60) return 'C';
  if (percent >= 50) return 'D';
  if (percent >= 40) return 'E';
  return 'F';
}

export function formatGrade(value, { showUkGrade = false } = {}) {
  if (value === null || value === undefined) return 'To be graded';
  if (typeof value === 'object' && value.overall != null) {
    const base = `${value.overall}%`;
    if (!showUkGrade) return base;
    return `${base} · ${getUkLetterGrade(value.overall)}`;
  }
  if (typeof value === 'number') {
    const base = `${value}%`;
    if (!showUkGrade) return base;
    return `${base} · ${getUkLetterGrade(value)}`;
  }
  return value;
}

export function isPresentationBreakdown(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    Array.isArray(value.breakdown)
  );
}

export function getGradeNumeric(value) {
  if (typeof value === 'number') return value;
  if (isPresentationBreakdown(value)) return value.overall;
  return null;
}

export function isGradePending(value) {
  return getGradeNumeric(value) === null;
}

/** Average only when every component for this module has been graded. */
export function getModuleAverage(mod) {
  const components = mod.types.map((type) => mod.grades[type]);

  if (components.length === 0 || components.some(isGradePending)) {
    return null;
  }

  const values = components.map(getGradeNumeric);
  const sum = values.reduce((total, value) => total + value, 0);
  return Math.round(sum / values.length);
}
