import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-display text-primary">Al-Safar</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors" onClick={handleLinkClick}>Accueil</a>
            <a href="#packages" className="text-gray-700 hover:text-primary transition-colors" onClick={handleLinkClick}>Nos Forfaits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors" onClick={handleLinkClick}>Témoignages</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors" onClick={handleLinkClick}>FAQ</a>
            <a href="#booking" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" onClick={handleLinkClick}>
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={handleLinkClick}>Accueil</a>
              <a href="#packages" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={handleLinkClick}>Nos Forfaits</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={handleLinkClick}>Témoignages</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={handleLinkClick}>FAQ</a>
              <a href="#booking" className="block px-3 py-2 bg-primary text-white rounded-md" onClick={handleLinkClick}>Réserver</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;