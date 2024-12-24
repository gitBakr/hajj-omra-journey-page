import Navbar from "@/components/Navbar";
import FlipCard from "@/components/FlipCard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const packages = [
    {
      title: "Omra Essentielle",
      price: "À partir de 1490€",
      duration: "10 jours",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Vol direct",
        "Hôtel 4*",
        "Transferts inclus",
        "Guide francophone",
        "Pension complète",
      ],
    },
    {
      title: "Omra Premium",
      price: "À partir de 2490€",
      duration: "12 jours",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Vol direct",
        "Hôtel 5*",
        "Transferts VIP",
        "Guide expert",
        "Pension complète",
        "Visites historiques",
      ],
    },
    {
      title: "Hajj Confort",
      price: "À partir de 5990€",
      duration: "3 semaines",
      image: "https://images.unsplash.com/photo-1564769625058-5a448f1aa4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Vol direct",
        "Hôtel 4*",
        "Tentes climatisées à Mina",
        "Guide expert",
        "Pension complète",
        "Formation incluse",
      ],
    },
    {
      title: "Hajj Premium",
      price: "À partir de 7990€",
      duration: "3 semaines",
      image: "https://images.unsplash.com/photo-1581012771300-20e80c6c0fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Vol direct",
        "Hôtel 5* vue Haram",
        "Tentes VIP climatisées",
        "Guide expert dédié",
        "Pension complète premium",
        "Formation personnalisée",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Kaaba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-display mb-6">
              Votre Voyage Spirituel Commence Ici
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez nos forfaits Hajj et Omra personnalisés pour une expérience inoubliable
            </p>
            <a
              href="#booking"
              className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors"
            >
              Réserver Maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-center text-primary mb-12">
            Nos Forfaits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <FlipCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Booking Section */}
      <div id="booking" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-center text-primary mb-12">
            Réserver Votre Voyage
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Forfait Souhaité
              </label>
              <select
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                required
              >
                <option value="">Sélectionnez un forfait</option>
                <option value="omra-essentielle">Omra Essentielle</option>
                <option value="omra-premium">Omra Premium</option>
                <option value="hajj-confort">Hajj Confort</option>
                <option value="hajj-premium">Hajj Premium</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                rows={4}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Envoyer la Demande
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;