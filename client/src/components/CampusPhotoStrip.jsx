import PressableCard from './PressableCard';

const GRADIENTS = [
  'from-sky-300 via-blue-400 to-slate-600',
  'from-slate-300 via-slate-400 to-slate-600',
  'from-indigo-300 via-blue-400 to-slate-500',
];

export default function CampusPhotoStrip({ onOpenAroundCampus }) {
  return (
    <section className="mx-3 mt-3">
      <button
        type="button"
        onClick={onOpenAroundCampus}
        className="mb-2 text-xs font-bold text-primary"
      >
        Around campus →
      </button>
      <div className="grid grid-cols-3 gap-2">
        {GRADIENTS.map((gradient, i) => (
          <PressableCard
            key={i}
            onClick={onOpenAroundCampus}
            className={`aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${gradient} shadow-card`}
            aria-label={`Campus photo ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
