import PressableCard from './PressableCard';

const FEATURES = [
  { title: 'Get started' },
  { title: 'My course' },
  { title: 'Around campus' },
];

export default function FeatureCards() {
  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      {FEATURES.map(({ title }) => (
        <PressableCard
          key={title}
          className="flex min-h-[120px] items-end rounded-2xl bg-primary p-3 shadow-card"
        >
          <p className="text-[11px] font-bold leading-tight text-white">
            {title}
          </p>
        </PressableCard>
      ))}
    </section>
  );
}
