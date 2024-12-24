import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mohammed Ahmed",
    text: "Une expérience inoubliable. L'organisation était parfaite du début à la fin.",
    location: "Paris",
  },
  {
    name: "Fatima Benali",
    text: "Je recommande vivement cette agence. Leur professionnalisme et leur attention aux détails sont remarquables.",
    location: "Lyon",
  },
  {
    name: "Karim Haddad",
    text: "Un accompagnement spirituel de qualité tout au long du voyage.",
    location: "Marseille",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-primary mb-12">
          Ce que disent nos pèlerins
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 p-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-center px-12">
              <Quote className="w-12 h-12 mx-auto mb-6 text-secondary opacity-50" />
              <p className="text-lg text-gray-700 mb-6">
                {testimonials[currentIndex].text}
              </p>
              <div className="font-semibold text-primary">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-500">
                {testimonials[currentIndex].location}
              </div>
            </div>

            <button
              onClick={next}
              className="absolute right-0 p-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;