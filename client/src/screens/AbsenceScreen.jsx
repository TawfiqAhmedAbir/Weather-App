import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { MODULES } from '../data/student';

const REASONS = ['Illness', 'Medical appointment', 'Family emergency', 'Other'];

export default function AbsenceScreen({ onBack }) {
  const [module, setModule] = useState(MODULES[0].code);
  const [date, setDate] = useState('');
  const [reason, setReason] = useState(REASONS[0]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <ScreenHeader title="Log an absence" onBack={onBack} />
        <main className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 rounded-full bg-green-100 p-4">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-lg font-extrabold text-charcoal">
            Absence logged
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Your absence for {date} has been recorded. You will receive a
            confirmation email shortly.
          </p>
          <button
            type="button"
            onClick={onBack}
            className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white"
          >
            Done
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <ScreenHeader title="Log an absence" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-bold uppercase text-gray-500">
              Module
            </label>
            <select
              value={module}
              onChange={(e) => setModule(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-charcoal"
            >
              {MODULES.map((m) => (
                <option key={m.code} value={m.code}>
                  {m.code} — {m.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold uppercase text-gray-500">
              Date of absence
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-charcoal"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold uppercase text-gray-500">
              Reason
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-charcoal"
            >
              {REASONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold uppercase text-gray-500">
              Additional notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-charcoal"
              placeholder="Any extra details..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 text-sm font-extrabold text-white shadow-card"
          >
            Submit absence
          </button>
        </form>
      </main>
    </>
  );
}
