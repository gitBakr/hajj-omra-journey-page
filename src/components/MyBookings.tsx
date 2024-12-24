import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

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
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Forfait</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Voyageurs</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.package}</TableCell>
                  <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    {booking.travelers.map((t, i) => (
                      <div key={i}>
                        {t.firstName} {t.lastName}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {booking.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;