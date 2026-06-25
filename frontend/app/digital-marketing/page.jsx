import Link from "next/link"
import { ArrowRight, BarChart3, Globe, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefitCards = [
  {
    icon: BarChart3,
    title: "Marketing performance, simplified",
    description: "Track campaign clicks, conversion signals, and channel engagement from one dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Branded links with control",
    description: "Create short URLs that match your brand and keep your campaigns consistent across every channel.",
  },
  {
    icon: Globe,
    title: "Share everywhere with confidence",
    description: "Publish links for email, social, ads, and landing pages using a single workflow.",
  },
]

const featureCards = [
  {
    title: "Campaign-ready short links",
    description: "Build links with UTM-ready control so every campaign is measurable and repeatable.",
  },
  {
    title: "Live click analytics",
    description: "See where clicks come from, when they happen, and which channels are driving growth.",
  },
  {
    title: "Team-ready workflows",
    description: "Share link drafts and updates with marketing, growth, and product teams instantly.",
  },
]

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <section className="container mx-auto px-4 py-24 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Digital Marketing
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Power marketing campaigns with smarter short links
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  SnapshortURL helps marketing teams shorten, brand, and analyze every campaign link so your growth work is fast,
                  consistent, and measurable.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="min-w-[200px]">
                  <a href="https://github.com/Open-Source-Issue/SnapShortURL" target="_blank" rel="noreferrer">
                    View GitHub repository
                  </a>
                </Button>
                <Button asChild variant="outline" className="min-w-[200px]">
                  <a href="/contactus">Talk to sales</a>
                </Button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-primary">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  Marketing link hub
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl border border-gray-200 bg-primary/5 p-5">
                    <p className="text-sm uppercase tracking-[0.21em] text-primary">Best for</p>
                    <p className="mt-2 text-base font-semibold text-black">Growth, brand, and performance teams</p>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white p-5">
                    <p className="text-sm uppercase tracking-[0.21em] text-gray-500">Focus</p>
                    <p className="mt-2 text-base font-semibold text-black">Campaign-ready links and analytics</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">Link type</p>
                    <p className="mt-2 text-xl font-semibold">Branded campaign links</p>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">Time to launch</p>
                    <p className="mt-2 text-xl font-semibold">Minutes, not hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-100">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Marketing features</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Turn every campaign link into a measurable marketing asset
              </h2>
              <p className="text-gray-700">
                Use SnapshortURL to keep branded links consistent, monitor performance, and share link updates across
                every channel without extra friction.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {benefitCards.map((card) => {
                const Icon = card.icon
                return (
                  <article key={card.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 leading-7 text-gray-700">{card.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {featureCards.map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Feature</div>
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Marketing support</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Align your campaigns with the right links and visibility
                </h2>
                <p className="max-w-xl text-gray-700 leading-7">
                  Give marketers a simple way to create branded URLs, monitor campaign performance, and stay connected
                  to the team through support and product documentation.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="min-w-[200px]">
                    <a href="https://github.com/Open-Source-Issue/SnapShortURL" target="_blank" rel="noreferrer">
                      View GitHub repository
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="min-w-[200px]">
                    <a href="/support">Contact support</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-primary/5 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Ready to ship</p>
                    <h3 className="mt-3 text-2xl font-bold">Campaign-ready URL workflows</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-gray-500">Branded links</p>
                      <p className="mt-2 text-lg font-semibold text-black">Stand out in feeds</p>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-gray-500">Fast sharing</p>
                      <p className="mt-2 text-lg font-semibold text-black">Cross-channel ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
