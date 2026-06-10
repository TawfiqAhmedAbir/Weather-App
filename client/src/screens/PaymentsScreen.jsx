import { CheckCircle2, CreditCard, Download, ReceiptText } from 'lucide-react';
import TopBar from '../components/TopBar';

const PAYMENTS = [
  {
    id: 'PAY-2026-0610',
    date: '10 June 2026',
    description: 'Corner shop purchase',
    method: 'Contactless card payment',
    amount: '£4',
  },
  {
    id: 'PAY-2026-0603',
    date: '3 June 2026',
    description: 'Tuition fee payment',
    method: 'Online card payment',
    amount: '£4,100',
  },
  {
    id: 'PAY-2026-0116',
    date: '16 January 2026',
    description: 'Tuition deposit payment',
    method: 'Online bank transfer',
    amount: '£900',
  },
];

export default function PaymentsScreen() {
  const totalPaid = '£5,004';

  return (
    <>
      <TopBar />
      <main className="space-y-4 px-3 pb-4 pt-3">
        <section className="rounded-3xl bg-charcoal p-5 text-white shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/60">
                Payment history
              </p>
              <h1 className="mt-2 text-3xl font-extrabold">{totalPaid}</h1>
              <p className="mt-1 text-sm font-bold text-white/75">
                Total paid across 3 completed payments
              </p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <CreditCard className="h-8 w-8" strokeWidth={2} />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white p-4 shadow-card">
            <ReceiptText className="h-6 w-6 text-primary" strokeWidth={2.25} />
            <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-gray-400">
              Latest
            </p>
            <p className="mt-1 text-sm font-extrabold text-charcoal">
              10 June 2026
            </p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-card">
            <CheckCircle2 className="h-6 w-6 text-green-600" strokeWidth={2.25} />
            <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-gray-400">
              Status
            </p>
            <p className="mt-1 text-sm font-extrabold text-charcoal">
              Up to date
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-4 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-charcoal">
              Transactions
            </h2>
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-extrabold text-green-700">
              Paid
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {PAYMENTS.map((payment) => (
              <article
                key={payment.id}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-gray-400">
                      {payment.date}
                    </p>
                    <h3 className="mt-1 text-base font-extrabold text-charcoal">
                      {payment.description}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-gray-500">
                      {payment.method}
                    </p>
                  </div>
                  <p className="text-lg font-extrabold text-primary">
                    {payment.amount}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
                  <span className="text-xs font-extrabold text-gray-400">
                    Receipt {payment.id}
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-primary shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" strokeWidth={2.25} />
                    Receipt
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
