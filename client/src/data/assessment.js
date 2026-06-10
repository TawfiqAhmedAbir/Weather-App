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

export function getUkGradeLabel(percent) {
  if (percent >= 80) return { letter: 'A', classification: 'First' };
  if (percent >= 70) return { letter: 'B', classification: 'First' };
  if (percent >= 60) return { letter: 'C', classification: 'Upper Second (2:1)' };
  if (percent >= 50) return { letter: 'D', classification: 'Lower Second (2:2)' };
  if (percent >= 40) return { letter: 'E', classification: 'Third' };
  return { letter: 'F', classification: 'Fail' };
}

export function formatGrade(value, { showUkGrade = false } = {}) {
  if (value === null || value === undefined) return 'To be graded';
  if (typeof value === 'object' && value.overall != null) {
    const base = `${value.overall}%`;
    if (!showUkGrade) return base;
    const uk = getUkGradeLabel(value.overall);
    return `${base} · ${uk.letter} (${uk.classification})`;
  }
  if (typeof value === 'number') {
    const base = `${value}%`;
    if (!showUkGrade) return base;
    const uk = getUkGradeLabel(value);
    return `${base} · ${uk.letter} (${uk.classification})`;
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
