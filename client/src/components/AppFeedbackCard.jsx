import { MessageSquare } from 'lucide-react';
import PressableCard from './PressableCard';

export default function AppFeedbackCard() {
  return (
    <section className="mx-3 mt-3">
      <PressableCard className="flex w-full items-center gap-3 rounded-2xl bg-primary p-4 shadow-card">
        <MessageSquare className="h-6 w-6 text-white" strokeWidth={2} />
        <span className="text-base font-extrabold text-white">App feedback</span>
      </PressableCard>
    </section>
  );
}
