import { BookOpen, Calendar, CreditCard } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { FEES, MODULES, STUDENT } from '../data/student';

function formatPounds(amount) {
  return `£${amount.toLocaleString('en-GB')}`;
}

export default function MyCourseScreen({ onBack }) {
  const paidPercent = Math.round((FEES.paidPounds / FEES.totalPounds) * 100);

  return (
    <>
      <ScreenHeader title="My course" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <div className="mb-5 rounded-2xl bg-primary p-4 text-white shadow-card">
          <p className="text-xs font-bold uppercase text-secondary">Programme</p>
          <h2 className="mt-1 text-lg font-extrabold">{STUDENT.programme}</h2>
          <p className="mt-1 text-sm font-semibold text-white/90">
            {STUDENT.year} · {STUDENT.faculty}
          </p>
        </div>

        <section className="mb-6">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-500">
            <BookOpen className="h-4 w-4" />
            Your modules
          </h2>
          <ul className="space-y-2">
            {MODULES.map((mod) => (
              <li
                key={mod.code}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card"
              >
                <p className="text-xs font-bold text-primary">{mod.code}</p>
                <p className="text-sm font-extrabold text-charcoal">{mod.name}</p>
                <p className="mt-1 text-xs font-semibold text-gray-500">
                  Attendance: {mod.attendancePercent}%
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-500">
            <CreditCard className="h-4 w-4" />
            Fees and funding
          </h2>

          <div className="rounded-2xl bg-charcoal p-4 text-white shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-secondary">
                  Total tuition
                </p>
                <p className="text-2xl font-extrabold">
                  {formatPounds(FEES.totalPounds)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold uppercase text-secondary">Paid</p>
                <p className="text-xl font-extrabold text-green-400">
                  {formatPounds(FEES.paidPounds)}
                </p>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-secondary"
                style={{ width: `${paidPercent}%` }}
              />
            </div>
            <p className="mt-2 text-xs font-semibold text-white/80">
              {paidPercent}% of fees paid · {formatPounds(FEES.remainingPounds)}{' '}
              remaining
            </p>

            <div className="mt-4 rounded-xl bg-white/10 p-3">
              <p className="flex items-center gap-2 text-xs font-bold uppercase text-secondary">
                <Calendar className="h-3.5 w-3.5" />
                Next payment
              </p>
              <p className="mt-1 text-sm font-extrabold">
                {formatPounds(FEES.nextPayment.amountPounds)} on{' '}
                {FEES.nextPayment.displayDate}
              </p>
            </div>
          </div>

          <h3 className="mb-2 mt-4 text-xs font-bold uppercase text-gray-500">
            Payment history
          </h3>
          <ul className="space-y-2">
            {FEES.history.map((payment) => (
              <li
                key={payment.id}
                className="flex items-center justify-between rounded-xl bg-gray-50 p-3"
              >
                <div>
                  <p className="text-sm font-extrabold text-charcoal">
                    {payment.label}
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    {payment.displayDate}
                  </p>
                </div>
                <p className="text-sm font-extrabold text-primary">
                  {formatPounds(payment.amountPounds)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
