import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      <Header />

      <main className="mx-auto w-full max-w-7xl p-5">
        <h2 className="text-xl font-bold md:text-2xl">
          Olá,{" "}
          {session?.user ? session.user.name?.split(" ")[0] : "Faça seu Login"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE", { locale: ptBR })}
          </span>
          {format(new Date(), "',' dd 'de' MMMM", { locale: ptBR })}
        </p>

        <div className="mt-6">
          <Search />
        </div>

        {/* BUSCAS RÁPIDAS */}
        <div className="mt-6 flex gap-3 overflow-x-scroll md:grid md:grid-cols-6 [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full md:h-[220px] lg:h-[280px]">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner.png"
            fill
            className="rounded-xl object-cover"
            sizes="100vw"
          />
        </div>

        {/* AGENDAMENTOS */}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  booking={JSON.parse(JSON.stringify(booking))}
                  key={booking.id}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
