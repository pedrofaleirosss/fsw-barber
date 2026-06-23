import { getServerSession } from "next-auth"
import Header from "../_components/header"
import { authOptions } from "../_lib/auth"
import BookingItem from "../_components/booking-item"
import { getConfirmedBookings } from "../_data/get-confirmed-bookings"
import { getFinishedBookings } from "../_data/get-finished-bookings"
import { redirect } from "next/navigation"

const Bookings = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/")
  }

  const confirmedBookings = await getConfirmedBookings()
  const finishedBookings = await getFinishedBookings()

  return (
    <>
      <Header />
      <div className="space-y-4 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        {confirmedBookings.length === 0 && finishedBookings.length === 0 && (
          <p className="text-gray-400">Você não tem agendamentos.</p>
        )}

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="text-sm font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                booking={JSON.parse(JSON.stringify(booking))}
                key={booking.id}
              />
            ))}
          </>
        )}

        {finishedBookings.length > 0 && (
          <>
            <h2 className="text-sm font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            {finishedBookings.map((booking) => (
              <BookingItem
                booking={JSON.parse(JSON.stringify(booking))}
                key={booking.id}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Bookings
