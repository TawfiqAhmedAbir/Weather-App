import PressableCard from './PressableCard';

const FEATURES = [
  { id: 'getStarted', title: 'Get started' },
  { id: 'myCourse', title: 'My course' },
  { id: 'aroundCampus', title: 'Around campus' },
];

export default function FeatureCards({ onNavigate }) {
  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      {FEATURES.map(({ id, title }) => (
        <PressableCard
          key={id}
          onClick={() => onNavigate(id)}
          className="flex min-h-[120px] items-end rounded-2xl bg-primary p-3 shadow-card"
        >
          <p className="text-[11px] font-bold leading-tight text-white">{title}</p>
        </PressableCard>
      ))}
    </section>
  );
}
