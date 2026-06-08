import { BookOpen, HeartHandshake, Library } from 'lucide-react';
import PressableCard from './PressableCard';
import { openExternal, EXTERNAL_LINKS } from '../data/links';

export default function NavCards({ onOpenLibrary, onOpenSupport, onOpenMyCourse }) {
  return (
    <section className="mx-3 mt-3 grid grid-cols-3 gap-2">
      <PressableCard
        onClick={() => openExternal(EXTERNAL_LINKS.library)}
        className="flex min-h-[64px] flex-col justify-between rounded-2xl bg-primary p-3 shadow-card"
      >
        <Library className="h-5 w-5 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Library website
        </p>
      </PressableCard>

      <PressableCard
        onClick={onOpenSupport}
        className="flex min-h-[64px] flex-col justify-between rounded-2xl bg-secondary p-3 shadow-card"
      >
        <HeartHandshake className="h-5 w-5 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">
          Student support
        </p>
      </PressableCard>

      <PressableCard
        onClick={onOpenMyCourse}
        className="flex min-h-[64px] flex-col justify-between rounded-2xl bg-primary p-3 shadow-card"
      >
        <BookOpen className="h-5 w-5 text-white" strokeWidth={2} />
        <p className="text-[11px] font-bold leading-tight text-white">My course</p>
      </PressableCard>
    </section>
  );
}
