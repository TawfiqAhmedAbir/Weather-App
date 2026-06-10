import { MODULES } from './student';

export const ASSESSMENT_TYPES = [
  { key: 'coursework', label: 'Coursework' },
  { key: 'presentation', label: 'Presentation' },
  { key: 'examAndAssessment', label: 'Exam and assessment' },
];

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
    types: ['coursework', 'examAndAssessment'],
    grades: {
      coursework: 'To be graded',
      examAndAssessment: 'To be graded',
    },
  },
  COMP504: {
    types: ['coursework', 'presentation', 'examAndAssessment'],
    grades: {
      coursework: 'To be graded',
      presentation: 80,
      examAndAssessment: 74,
    },
  },
};

const DEFAULT_TYPES = ['coursework', 'presentation', 'examAndAssessment'];

export function getModuleAssessments() {
  return MODULES.map((mod) => {
    const config = MODULE_ASSESSMENTS[mod.code];
    const types = config?.types ?? DEFAULT_TYPES;
    const grades = config?.grades ?? {
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
  });
}

export function formatGrade(value) {
  if (value === null || value === undefined) return 'To be graded';
  if (typeof value === 'number') return `${value}%`;
  return value;
}
