import { MODULES } from './student';

/** Each module: coursework, presentation, exam and assessment */
export const ASSESSMENT_TYPES = [
  { key: 'coursework', label: 'Coursework' },
  { key: 'presentation', label: 'Presentation' },
  { key: 'examAndAssessment', label: 'Exam and assessment' },
];

export const MODULE_ASSESSMENTS = {
  COMP504: {
    coursework: 'To be graded',
    presentation: 80,
    examAndAssessment: 74,
  },
};

export function getModuleAssessments() {
  return MODULES.map((mod) => ({
    code: mod.code,
    name: mod.name,
    grades: MODULE_ASSESSMENTS[mod.code] ?? {
      coursework: 'To be graded',
      presentation: 'To be graded',
      examAndAssessment: 'To be graded',
    },
  }));
}

export function formatGrade(value) {
  if (value === null || value === undefined) return 'To be graded';
  if (typeof value === 'number') return `${value}%`;
  return value;
}
