import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import { GithubIcon, LinkedinIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center md:flex-row md:px-8 md:text-left lg:px-10">
          <div>
            <p className="text-sm font-semibold">FSW Barber</p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">FSW Barber.</span> Desenvolvido por
              Pedro Faleiros.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/pedrofaleirosss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon size={22} />
            </Link>

            <Link
              href="https://linkedin.com/in/pedro-faleiros123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <LinkedinIcon size={22} />
            </Link>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
