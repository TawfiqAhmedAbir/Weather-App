const GRADIENTS = [
  'from-sky-300 via-blue-400 to-slate-600',
  'from-slate-300 via-slate-400 to-slate-600',
  'from-indigo-300 via-blue-400 to-slate-500',
];

export default function CampusPhotoStrip() {
  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      {GRADIENTS.map((gradient, i) => (
        <div
          key={i}
          className={`aspect-square rounded-xl bg-gradient-to-br ${gradient} shadow-card`}
          role="img"
          aria-label={`Campus photo ${i + 1}`}
        />
      ))}
    </section>
  );
}
