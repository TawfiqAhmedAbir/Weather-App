import { ChevronDown, ClipboardCheck } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import {
  ASSESSMENT_TYPES,
  formatGrade,
  getFirstYearAssessments,
  getModuleAverage,
  getSecondYearAssessments,
  getThirdYearAssessments,
  isPresentationBreakdown,
} from '../data/assessment';

function GradeRow({ label, value, nested = false, showUkGrade = false }) {
  const display = formatGrade(value, { showUkGrade });
  const isPercent =
    typeof value === 'number' ||
    (typeof value === 'object' && value?.overall != null);
  const isPending = display === 'To be graded';

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-xl bg-gray-50 px-3 py-2.5 ${
        nested ? 'ml-3 border-l-2 border-primary/20' : ''
      }`}
    >
      <span
        className={`shrink-0 font-bold text-charcoal ${
          nested ? 'text-[11px]' : 'text-xs'
        }`}
      >
        {label}
      </span>
      <span
        className={`text-right font-extrabold leading-tight ${
          nested ? 'text-[11px]' : 'text-xs'
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

function PresentationGrades({ value, moduleCode, showUkGrade = false }) {
  if (!isPresentationBreakdown(value)) {
    return (
      <GradeRow label="Presentation" value={value} showUkGrade={showUkGrade} />
    );
  }

  const display = formatGrade(value, { showUkGrade });

  return (
    <details className="group overflow-hidden rounded-xl bg-gray-50">
      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="text-xs font-bold text-charcoal">Presentation</span>
        <span className="flex items-center gap-1.5">
          <span className="text-right text-xs font-extrabold text-primary">
            {display}
          </span>
          <ChevronDown
            className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
            strokeWidth={2}
          />
        </span>
      </summary>

      <div className="space-y-1.5 border-t border-gray-200 px-1 pb-2 pt-1">
        {value.breakdown.map((item) => (
          <GradeRow
            key={`${moduleCode}-${item.label}`}
            label={item.label}
            value={item.percent}
            nested
            showUkGrade={showUkGrade}
          />
        ))}
      </div>
    </details>
  );
}

function ModuleAssessmentCard({ mod, showUkGrade = false }) {
  const average = getModuleAverage(mod);
  const averageDisplay =
    average === null
      ? 'To be graded'
      : formatGrade(average, { showUkGrade });

  return (
    <li>
      <details className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card">
        <summary className="flex cursor-pointer list-none items-start gap-3 p-4 marker:content-none [&::-webkit-details-marker]:hidden">
          <div className="rounded-lg bg-primary/10 p-2">
            <ClipboardCheck className="h-5 w-5 text-primary" strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-primary">{mod.code}</p>
            <h3 className="text-sm font-extrabold leading-snug text-charcoal">
              {mod.name}
            </h3>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Module average
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-1">
            <span
              className={`text-right text-sm font-extrabold leading-tight ${
                average === null ? 'text-gray-400' : 'text-primary'
              }`}
            >
              {averageDisplay}
            </span>
            <ChevronDown
              className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180"
              strokeWidth={2}
            />
          </div>
        </summary>

        <div className="space-y-2 border-t border-gray-100 px-4 pb-4 pt-3">
          {ASSESSMENT_TYPES.filter(({ key }) => mod.types.includes(key)).map(
            ({ key, label }) =>
              key === 'presentation' ? (
                <PresentationGrades
                  key={`${mod.code}-presentation`}
                  moduleCode={mod.code}
                  value={mod.grades[key]}
                  showUkGrade={showUkGrade}
                />
              ) : (
                <GradeRow
                  key={key}
                  label={label}
                  value={mod.grades[key]}
                  showUkGrade={showUkGrade}
                />
              )
          )}
        </div>
      </details>
    </li>
  );
}

function YearSection({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function AssessmentScreen({ onBack }) {
  const thirdYearModules = getThirdYearAssessments();
  const secondYearModules = getSecondYearAssessments();
  const firstYearModules = getFirstYearAssessments();

  return (
    <>
      <ScreenHeader title="Assessment" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <p className="mb-4 text-sm text-gray-600">
          Tap a module to view coursework, exam, and presentation breakdown.
        </p>

        <YearSection title="3rd Year">
          <ul className="space-y-3">
            {thirdYearModules.map((mod) => (
              <ModuleAssessmentCard key={mod.code} mod={mod} showUkGrade />
            ))}
          </ul>
        </YearSection>

        <YearSection title="2nd Year">
          <ul className="space-y-3">
            {secondYearModules.map((mod) => (
              <ModuleAssessmentCard key={mod.code} mod={mod} showUkGrade />
            ))}
          </ul>
        </YearSection>

        <YearSection title="1st Year">
          <ul className="space-y-3">
            {firstYearModules.map((mod) => (
              <ModuleAssessmentCard key={mod.code} mod={mod} showUkGrade />
            ))}
          </ul>
        </YearSection>
      </main>
    </>
  );
}
