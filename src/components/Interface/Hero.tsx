import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Create Professional
          <br />
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text">
            Email Signatures
          </span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Choose from 13 stunning signature styles. Generate, customize, and download your professional email signature
          in minutes. Compatible with all major email clients.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          Create Your Signature
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          View Styles
        </Button>
      </div>
    </section>
  )
}

