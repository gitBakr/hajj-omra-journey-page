import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display mb-4">Al-Safar</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour le Hajj et la Omra depuis plus de 15 ans.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-secondary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-secondary" />
                <span>contact@al-safar.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-secondary" />
                <span>123 Rue de la Paix, Paris</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al-Safar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;