import { useState } from 'react';

interface FlipCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
}

const FlipCard = ({ title, price, duration, features, image }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full rounded-xl shadow-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-2xl font-display text-white">{title}</h3>
              <p className="text-white/90">{duration}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-display text-primary mb-4">{title}</h3>
            <p className="text-3xl font-bold text-secondary mb-4">{price}</p>
            <ul className="space-y-2 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;