import {
  BarChart3,
  Calendar,
  Laptop,
  Megaphone,
  NotebookPen,
  Search,
} from 'lucide-react';
import PressableCard from './PressableCard';

export default function FullWidthCards() {
  return (
    <section className="mx-3 mt-3 space-y-2 pb-2">
      <PressableCard className="flex w-full items-center gap-3 rounded-2xl bg-secondary p-4 shadow-card">
        <div className="flex gap-2">
          <Calendar className="h-6 w-6 text-white" strokeWidth={2} />
          <Megaphone className="h-6 w-6 text-white" strokeWidth={2} />
        </div>
        <span className="text-base font-extrabold text-white">
          What&apos;s on
        </span>
      </PressableCard>

      <PressableCard className="block w-full rounded-2xl bg-primary p-4 shadow-card">
        <span className="text-base font-extrabold text-white">
          Student support
        </span>
      </PressableCard>

      <PressableCard className="block w-full rounded-2xl bg-secondary p-4 shadow-card">
        <span className="text-base font-extrabold text-white">
          News and notices
        </span>
      </PressableCard>

      <PressableCard className="block w-full rounded-2xl bg-secondary p-4 shadow-card">
        <div className="flex items-center justify-between">
          <span className="text-base font-extrabold text-white">
            Skills for success
          </span>
          <div className="flex gap-2 text-white/90">
            <Search className="h-4 w-4" strokeWidth={2} />
            <Laptop className="h-4 w-4" strokeWidth={2} />
            <NotebookPen className="h-4 w-4" strokeWidth={2} />
            <BarChart3 className="h-4 w-4" strokeWidth={2} />
          </div>
        </div>
      </PressableCard>
    </section>
  );
}
