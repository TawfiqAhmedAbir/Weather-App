import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';

export default function FeedbackScreen({ onBack }) {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <ScreenHeader title="App feedback" onBack={onBack} />
        <main className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <CheckCircle2 className="mb-4 h-12 w-12 text-green-500" />
          <h2 className="text-lg font-extrabold text-charcoal">Thank you!</h2>
          <p className="mt-2 text-sm text-gray-500">
            Your feedback helps us improve MyUni.
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
      <ScreenHeader title="App feedback" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (message.trim()) setSubmitted(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className="mb-2 block text-xs font-bold uppercase text-gray-500">
              How would you rate MyUni?
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  className={`h-10 w-10 rounded-full text-sm font-extrabold ${
                    rating >= n
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold uppercase text-gray-500">
              Your feedback
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Tell us what you think..."
              className="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm text-charcoal"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 text-sm font-extrabold text-white"
          >
            Send feedback
          </button>
        </form>
      </main>
    </>
  );
}
