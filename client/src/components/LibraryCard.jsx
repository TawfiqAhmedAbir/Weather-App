import PressableCard from './PressableCard';

export default function LibraryCard() {
  return (
    <section className="mx-3 mt-3">
      <PressableCard className="block w-full rounded-2xl bg-secondary p-4 text-left shadow-card">
        <h2 className="text-base font-extrabold text-white">
          My Library account
        </h2>
        <p className="mt-2 text-sm font-semibold text-white/95">
          Loans [0] · Requests [0] · Fines [0]
        </p>
      </PressableCard>
    </section>
  );
}
