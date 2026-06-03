import { MoreVertical, RefreshCw } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-3 shadow-sm">
      <div className="w-16" aria-hidden />
      <div className="flex flex-col items-center leading-none">
        <span className="font-nunito text-[11px] font-semibold tracking-wide text-charcoal/70">
          my
        </span>
        <span className="font-display text-[28px] font-extrabold tracking-tight text-primary">
          Uni
        </span>
      </div>
      <div className="flex w-16 items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Refresh"
          className="rounded-full p-1 text-charcoal transition-colors hover:text-primary"
        >
          <RefreshCw className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Menu"
          className="rounded-full p-1 text-charcoal transition-colors hover:text-primary"
        >
          <MoreVertical className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
