import { getServerSession } from "next-auth"
import Header from "../_components/header"
import { db } from "../_lib/prisma"
import { authOptions } from "../_lib/auth"
import BookingItem from "../_components/booking-item"

const Bookings = async () => {
  const session = await getServerSession(authOptions)

  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })
  const finishedBookings = await db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  return (
    <>
      <Header />
      <div className="space-y-4 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        <h2 className="text-sm font-bold uppercase text-gray-400">
          Confirmados
        </h2>
        {confirmedBookings.map((booking) => (
          <BookingItem booking={booking} key={booking.id} />
        ))}

        <h2 className="text-sm font-bold uppercase text-gray-400">
          Finalizados
        </h2>
        {finishedBookings.map((booking) => (
          <BookingItem booking={booking} key={booking.id} />
        ))}
      </div>
    </>
  )
}

export default Bookings
