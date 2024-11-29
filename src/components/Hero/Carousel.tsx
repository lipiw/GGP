import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  slides: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  children: (slide: {
    image: string;
    title: string;
    description: string;
  }) => React.ReactNode;
}

export function Carousel({ slides, children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const next = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const prev = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="transition-transform duration-500 ease-out flex"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {children(slide)}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-purple-500' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}