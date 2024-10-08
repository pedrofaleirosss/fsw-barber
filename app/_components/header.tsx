import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SidebarContent from "./sidebar-content"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image src="/logo.png" width={120} height={18} alt="FSW Barber" />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarContent />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
