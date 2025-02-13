import { Check, Paintbrush, Download } from "lucide-react"

const steps = [
  {
    title: "Choose a Style",
    description: "Select from our collection of 13 professional signature designs.",
    icon: Paintbrush,
  },
  {
    title: "Customize",
    description: "Add your information, social links, and customize colors.",
    icon: Check,
  },
  {
    title: "Download & Use",
    description: "Download your signature as HTML and add it to your email client.",
    icon: Download,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container space-y-16 py-24 md:py-32">
      <div className="text-center">
        <h2 className="font-bold text-4xl sm:text-5xl bg-gradient-to-r from-violet-400 to-violet-700 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-gray-600">Create your signature in three simple steps.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col items-start space-y-4 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-lg transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <step.icon className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold">
              <span className="text-violet-700 font-bold">{index + 1}. </span>
              {step.title}
            </h3>

            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
