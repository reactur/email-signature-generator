import { Paintbrush, Download, Mail, Palette, Share2, Settings } from "lucide-react"

const features = [
  {
    name: "13 Professional Styles",
    description: "Choose from a variety of carefully crafted signature designs for any industry.",
    icon: Paintbrush,
  },
  {
    name: "HTML Download",
    description: "Download your signature as an HTML file, ready to use in any email client.",
    icon: Download,
  },
  {
    name: "Email Client Compatible",
    description: "Works seamlessly with Gmail, Outlook, Apple Mail, and other email clients.",
    icon: Mail,
  },
  {
    name: "Custom Signatures",
    description: "Personalize your signature with your brand colors and styling preferences.",
    icon: Palette,
  },
  {
    name: "Social Media Links",
    description: "Add links to your social media profiles with professional icons.",
    icon: Share2,
  },
  {
    name: "Easy Customization",
    description: "Simple interface to customize every aspect of your signature.",
    icon: Settings,
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Powerful Features</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Everything you need to create the perfect email signature.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative bg-white overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

