import { ClipboardCheck } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import {
  ASSESSMENT_TYPES,
  formatGrade,
  getModuleAssessments,
} from '../data/assessment';

function GradeRow({ label, value }) {
  const display = formatGrade(value);
  const isPercent = typeof value === 'number';
  const isPending = display === 'To be graded';

  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5">
      <span className="text-xs font-bold text-charcoal">{label}</span>
      <span
        className={`text-sm font-extrabold ${
          isPending
            ? 'text-gray-400'
            : isPercent
              ? 'text-primary'
              : 'text-charcoal'
        }`}
      >
        {display}
      </span>
    </div>
  );
}

export default function AssessmentScreen({ onBack }) {
  const modules = getModuleAssessments();

  return (
    <>
      <ScreenHeader title="Assessment" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <p className="mb-4 text-sm text-gray-600">
          Module grades across coursework, presentation, and exam and assessment.
        </p>

        <ul className="space-y-4">
          {modules.map((mod) => (
            <li
              key={mod.code}
              className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card"
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">{mod.code}</p>
                  <h2 className="text-sm font-extrabold leading-snug text-charcoal">
                    {mod.name}
                  </h2>
                </div>
              </div>

              <div className="space-y-2">
                {ASSESSMENT_TYPES.map(({ key, label }) => (
                  <GradeRow
                    key={key}
                    label={label}
                    value={mod.grades[key]}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
