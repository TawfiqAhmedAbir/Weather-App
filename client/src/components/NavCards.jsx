import { MapPin } from 'lucide-react';
import PressableCard from './PressableCard';

export default function NavCards() {
  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      <PressableCard className="flex min-h-[64px] items-end rounded-2xl bg-primary p-3 shadow-card">
        <p className="text-[11px] font-bold leading-tight text-white">
          Library website
        </p>
      </PressableCard>

      <PressableCard className="flex min-h-[64px] items-end rounded-2xl bg-secondary p-3 shadow-card">
        <p className="text-[11px] font-bold leading-tight text-white">
          In an emergency
        </p>
      </PressableCard>

      <PressableCard className="flex min-h-[64px] flex-col justify-between rounded-2xl bg-primary p-3 shadow-card">
        <MapPin className="h-5 w-5 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">Maps</p>
      </PressableCard>
    </section>
  );
}
