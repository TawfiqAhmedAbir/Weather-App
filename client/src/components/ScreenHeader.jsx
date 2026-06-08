import { ArrowLeft } from 'lucide-react';

export default function ScreenHeader({ title, onBack }) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
      <button
        type="button"
        onClick={onBack}
        aria-label="Back"
        className="rounded-full p-1 text-charcoal transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-5 w-5" strokeWidth={2} />
      </button>
      <h1 className="text-lg font-extrabold text-charcoal">{title}</h1>
    </header>
  );
}
