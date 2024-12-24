import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus, Minus } from "lucide-react";

interface Traveler {
  firstName: string;
  lastName: string;
  birthDate: string;
}

const BookingForm = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([
    { firstName: "", lastName: "", birthDate: "" },
  ]);

  const addTraveler = () => {
    setTravelers([...travelers, { firstName: "", lastName: "", birthDate: "" }]);
  };

  const removeTraveler = (index: number) => {
    if (travelers.length > 1) {
      setTravelers(travelers.filter((_, i) => i !== index));
    }
  };

  const updateTraveler = (index: number, field: keyof Traveler, value: string) => {
    const newTravelers = [...travelers];
    newTravelers[index] = { ...newTravelers[index], [field]: value };
    setTravelers(newTravelers);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-display text-center text-primary mb-12">
        Réserver Votre Voyage
      </h2>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              type="email"
              className="border-2"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <Input
              type="tel"
              className="border-2"
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

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Voyageurs</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addTraveler}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Ajouter un voyageur
              </Button>
            </div>

            {travelers.map((traveler, index) => (
              <div key={index} className="p-4 border-2 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Voyageur {index + 1}</h4>
                  {travelers.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTraveler(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <Input
                      type="text"
                      value={traveler.firstName}
                      onChange={(e) => updateTraveler(index, "firstName", e.target.value)}
                      className="border-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <Input
                      type="text"
                      value={traveler.lastName}
                      onChange={(e) => updateTraveler(index, "lastName", e.target.value)}
                      className="border-2"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de naissance
                    </label>
                    <Input
                      type="date"
                      value={traveler.birthDate}
                      onChange={(e) => updateTraveler(index, "birthDate", e.target.value)}
                      className="border-2"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message / Demandes particulières
            </label>
            <Textarea
              className="border-2"
              rows={4}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full"
          >
            Envoyer la Demande
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;