import { ClipboardCheck } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import {
  ASSESSMENT_TYPES,
  formatGrade,
  getModuleAssessments,
  isPresentationBreakdown,
} from '../data/assessment';

function GradeRow({ label, value, nested = false }) {
  const display = formatGrade(value);
  const isPercent =
    typeof value === 'number' ||
    (typeof value === 'object' && value?.overall != null);
  const isPending = display === 'To be graded';

  return (
    <div
      className={`flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5 ${
        nested ? 'ml-3 border-l-2 border-primary/20' : ''
      }`}
    >
      <span
        className={`font-bold text-charcoal ${
          nested ? 'text-[11px]' : 'text-xs'
        }`}
      >
        {label}
      </span>
      <span
        className={`font-extrabold ${
          nested ? 'text-xs' : 'text-sm'
        } ${
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

function PresentationGrades({ value }) {
  if (!isPresentationBreakdown(value)) {
    return <GradeRow label="Presentation" value={value} />;
  }

  return (
    <div className="space-y-1.5">
      <GradeRow label="Presentation" value={value} />
      {value.breakdown.map((item) => (
        <GradeRow
          key={item.label}
          label={item.label}
          value={item.percent}
          nested
        />
      ))}
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
                {ASSESSMENT_TYPES.filter(({ key }) => mod.types.includes(key)).map(
                  ({ key, label }) =>
                    key === 'presentation' ? (
                      <PresentationGrades key={key} value={mod.grades[key]} />
                    ) : (
                      <GradeRow
                        key={key}
                        label={label}
                        value={mod.grades[key]}
                      />
                    )
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
