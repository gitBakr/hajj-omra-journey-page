import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Simulation de données de réservation
const mockBookings = [
  {
    id: 1,
    package: "Omra Premium",
    date: "2024-05-15",
    status: "Confirmé",
    travelers: [
      { firstName: "Mohammed", lastName: "Ali" },
      { firstName: "Fatima", lastName: "Ali" },
    ],
  },
];

const MyBookings = () => {
  // Dans un cas réel, nous vérifierions si l'utilisateur a des réservations
  const hasBookings = mockBookings.length > 0;

  if (!hasBookings) return null;

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-primary mb-12">
          Mes Réservations
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockBookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-xl text-primary">{booking.package}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date</p>
                    <p className="mt-1">{new Date(booking.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Voyageurs</p>
                    <div className="mt-1 space-y-1">
                      {booking.travelers.map((traveler, index) => (
                        <p key={index}>
                          {traveler.firstName} {traveler.lastName}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Statut</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                      {booking.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;