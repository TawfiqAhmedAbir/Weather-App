import PressableCard from './PressableCard';

function EmailIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0078D4]">
      <span className="text-lg font-bold text-white">O</span>
    </div>
  );
}

function MoodleIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
      <span className="text-xl font-extrabold text-white">M</span>
    </div>
  );
}

function MyAccountIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black">
      <span className="text-lg font-bold text-white">T</span>
    </div>
  );
}

function TeamsIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#6264A7]">
      <span className="text-xs font-bold text-white">T</span>
    </div>
  );
}

const ITEMS = [
  { id: 'email', label: 'Email', icon: EmailIcon },
  { id: 'moodle', label: 'Moodle', icon: MoodleIcon },
  { id: 'myAccount', label: 'MyAccount', icon: MyAccountIcon },
  { id: 'teams', label: 'Teams', icon: TeamsIcon },
];

export default function DailyEssentials({ onOpenMyAccount }) {
  const handleClick = (id) => {
    if (id === 'myAccount') onOpenMyAccount?.();
  };

  return (
    <section className="mx-3 mt-4 rounded-2xl bg-white p-4 shadow-card">
      <h2 className="mb-4 text-base font-extrabold text-black">
        Daily essentials
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {ITEMS.map(({ id, label, icon: Icon }) => (
          <PressableCard
            key={id}
            onClick={() => handleClick(id)}
            className="flex flex-col items-center gap-2"
          >
            <Icon />
            <span className="text-center text-[10px] font-bold text-charcoal">
              {label}
            </span>
          </PressableCard>
        ))}
      </div>
    </section>
  );
}
