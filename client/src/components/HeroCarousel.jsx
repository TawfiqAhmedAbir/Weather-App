import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    title: 'Honors Information and Communication exam — 10th June',
    subtitle: 'Check your timetable and arrive 15 minutes early.',
  },
  {
    title:
      'When you leave MyUni — Find out when you lose access to your IT accounts',
    subtitle: 'Remember to return any books you have borrowed!',
  },
  {
    title: 'Welcome to MyUni — Your campus companion',
    subtitle: 'Check your timetable and attendance anytime.',
  },
  {
    title: 'Student support is here for you',
    subtitle: 'Visit Student Services for wellbeing and advice.',
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[index];

  return (
    <section className="relative mx-3 mt-3 overflow-hidden rounded-2xl bg-primary shadow-card">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous announcement"
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-white/90 transition-colors hover:bg-white/10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="px-10 py-5 text-center">
        <p className="text-sm font-bold leading-snug text-white">
          {slide.title}
        </p>
        <p className="mt-2 text-xs font-semibold text-secondary">
          {slide.subtitle}
        </p>
      </div>

      <button
        type="button"
        onClick={next}
        aria-label="Next announcement"
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-white/90 transition-colors hover:bg-white/10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center gap-1.5 pb-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
