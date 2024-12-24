import { useState } from 'react';
import { Menu, X, BookmarkIcon, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary/95 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-display text-white">Al-Safar</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors" onClick={handleLinkClick}>Accueil</a>
            <a href="#packages" className="text-white/90 hover:text-white transition-colors" onClick={handleLinkClick}>Nos Forfaits</a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors" onClick={handleLinkClick}>Témoignages</a>
            <a href="#faq" className="text-white/90 hover:text-white transition-colors" onClick={handleLinkClick}>FAQ</a>
            <a href="#bookings" className="text-white/90 hover:text-white flex items-center gap-2 transition-colors" onClick={handleLinkClick}>
              <BookmarkIcon size={18} />
              Mes Réservations
            </a>
            <a href="#login" className="text-white/90 hover:text-white flex items-center gap-2 transition-colors" onClick={handleLinkClick}>
              <LogIn size={18} />
              Login
            </a>
            <a href="#booking" className="bg-white text-primary px-4 py-2 rounded-md hover:bg-white/90 transition-colors" onClick={handleLinkClick}>
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-white/90 hover:text-white" onClick={handleLinkClick}>Accueil</a>
              <a href="#packages" className="block px-3 py-2 text-white/90 hover:text-white" onClick={handleLinkClick}>Nos Forfaits</a>
              <a href="#testimonials" className="block px-3 py-2 text-white/90 hover:text-white" onClick={handleLinkClick}>Témoignages</a>
              <a href="#faq" className="block px-3 py-2 text-white/90 hover:text-white" onClick={handleLinkClick}>FAQ</a>
              <a href="#bookings" className="block px-3 py-2 text-white/90 hover:text-white flex items-center gap-2" onClick={handleLinkClick}>
                <BookmarkIcon size={18} />
                Mes Réservations
              </a>
              <a href="#login" className="block px-3 py-2 text-white/90 hover:text-white flex items-center gap-2" onClick={handleLinkClick}>
                <LogIn size={18} />
                Login
              </a>
              <a href="#booking" className="block px-3 py-2 bg-white text-primary rounded-md" onClick={handleLinkClick}>Réserver</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;