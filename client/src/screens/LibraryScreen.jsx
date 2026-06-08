import { BookMarked, ExternalLink } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { LIBRARY_ACCOUNT } from '../data/library';
import { openExternal, EXTERNAL_LINKS } from '../data/links';

export default function LibraryScreen({ onBack }) {
  const { loanCount, requestCount, fines, items, requestItems } =
    LIBRARY_ACCOUNT;

  return (
    <>
      <ScreenHeader title="My Library account" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <div className="mb-4 grid grid-cols-3 gap-2">
          {[
            { label: 'Loans', value: loanCount },
            { label: 'Requests', value: requestCount },
            { label: 'Fines', value: fines },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-secondary p-3 text-center text-white shadow-card"
            >
              <p className="text-2xl font-extrabold">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="mb-5">
          <h2 className="mb-2 text-sm font-bold uppercase text-gray-500">
            Current loans
          </h2>
          <ul className="space-y-2">
            {items.map((book) => (
              <li
                key={book.id}
                className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-card"
              >
                <BookMarked className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-extrabold text-charcoal">
                    {book.title}
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    Due: {book.dueDate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="mb-2 text-sm font-bold uppercase text-gray-500">
            Requests
          </h2>
          <ul className="space-y-2">
            {requestItems.map((req) => (
              <li
                key={req.id}
                className="rounded-2xl border border-green-200 bg-green-50 p-3"
              >
                <p className="text-sm font-extrabold text-charcoal">
                  {req.title}
                </p>
                <p className="text-xs font-bold text-green-700">{req.status}</p>
              </li>
            ))}
          </ul>
        </section>

        <button
          type="button"
          onClick={() => openExternal(EXTERNAL_LINKS.library)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-extrabold text-white"
        >
          Visit library website
          <ExternalLink className="h-4 w-4" />
        </button>
      </main>
    </>
  );
}
