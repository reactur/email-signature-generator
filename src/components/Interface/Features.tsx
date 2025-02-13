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
      <div className="text-center">
        <h2 className="font-bold text-4xl sm:text-5xl bg-gradient-to-r from-violet-400 to-violet-700 bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to create the perfect email signature.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative flex flex-col items-start space-y-4 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-lg backdrop-blur-lg transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <feature.icon className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold">{feature.name}</h3>

            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
