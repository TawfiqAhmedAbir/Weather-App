import PressableCard from './PressableCard';
import { LIBRARY_ACCOUNT } from '../data/library';

export default function LibraryCard({ onOpenLibrary }) {
  const { loanCount, requestCount, fines } = LIBRARY_ACCOUNT;

  return (
    <section className="mx-3 mt-3">
      <PressableCard
        onClick={onOpenLibrary}
        className="block w-full rounded-2xl bg-secondary p-4 text-left shadow-card"
      >
        <h2 className="text-base font-extrabold text-white">My Library account</h2>
        <p className="mt-2 text-sm font-semibold text-white/95">
          Loans [{loanCount}] · Requests [{requestCount}] · Fines [{fines}]
        </p>
      </PressableCard>
    </section>
  );
}
