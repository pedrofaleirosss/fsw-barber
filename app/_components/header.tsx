import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" width={120} height={18} alt="FSW Barber" />
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
