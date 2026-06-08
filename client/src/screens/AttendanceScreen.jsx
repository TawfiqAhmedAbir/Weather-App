import { CheckCircle2, TrendingUp } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { ATTENDANCE } from '../data/student';

export default function AttendanceScreen({ onBack }) {
  const { overallPercent, status, sessionsAttended, sessionsTotal, modules } =
    ATTENDANCE;

  return (
    <>
      <ScreenHeader title="Attendance" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <div className="mb-5 rounded-2xl bg-charcoal p-5 text-white shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-secondary">
                Overall attendance
              </p>
              <p className="mt-1 text-4xl font-extrabold">{overallPercent}%</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-white/90">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                {status}
              </p>
            </div>
            <div className="rounded-full bg-white/10 p-3">
              <TrendingUp className="h-8 w-8 text-secondary" strokeWidth={2} />
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-secondary transition-all"
              style={{ width: `${overallPercent}%` }}
            />
          </div>

          <p className="mt-3 text-xs font-semibold text-white/80">
            {sessionsAttended} of {sessionsTotal} sessions attended
          </p>
        </div>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
            By module
          </h2>
          {modules.length > 0 ? (
            <ul className="space-y-2">
              {modules.map((mod) => (
                <li
                  key={mod.code}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-primary">{mod.code}</p>
                      <p className="text-sm font-extrabold text-charcoal">
                        {mod.name}
                      </p>
                    </div>
                    <p className="text-lg font-extrabold text-charcoal">
                      {mod.percent}%
                    </p>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${mod.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl bg-gray-50 p-4 text-sm font-medium text-gray-500">
              Module breakdown will appear here once module attendance details are
              added.
            </p>
          )}
        </section>
      </main>
    </>
  );
}
