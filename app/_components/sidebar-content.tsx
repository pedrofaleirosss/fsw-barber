"use client"

import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"

const SidebarContent = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = () => signIn("google")
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <SheetDescription></SheetDescription>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data.user.image!} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-xl">
                <DialogHeader>
                  <DialogTitle>Faça seu login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google
                  </DialogDescription>
                </DialogHeader>
                <Button
                  variant="outline"
                  className="gap-1 font-bold"
                  onClick={handleLoginWithGoogleClick}
                >
                  <Image
                    src="/google.svg"
                    alt="Fazer login com o Google"
                    width={18}
                    height={18}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/">
            <HomeIcon size={18} />
            Início
          </Link>
        </Button>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 py-5">
        {quickSearchOptions.map((option) => (
          <Button
            className="justify-start gap-2"
            variant="ghost"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={18}
              height={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      {data?.user && (
        <div className="flex flex-col gap-2 border-t border-solid py-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="justify-start gap-2" variant="ghost">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%] rounded-xl">
              <DialogHeader>
                <DialogTitle>Sair</DialogTitle>
                <DialogDescription>
                  Deseja mesmo sair da plataforma?
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center gap-2">
                <DialogClose>
                  <Button variant="secondary" className="w-[100px]">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  variant="destructive"
                  onClick={handleLogoutClick}
                  className="w-[100px]"
                >
                  Sair
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </SheetContent>
  )
}

export default SidebarContent
