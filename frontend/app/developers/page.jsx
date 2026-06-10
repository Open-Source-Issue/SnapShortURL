import Link from 'next/link'
import { ArrowRight, Code2, Cloud, ShieldCheck, Sparkles, TerminalSquare } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Simple integration',
    description: 'Drop SnapshortURL into your stack with clear, predictable building blocks and a small learning curve.',
  },
  {
    icon: Cloud,
    title: 'Automation ready',
    description: 'Design workflows that shorten links, organize campaigns, and keep teams moving without manual copy and paste.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    description: 'Build with trust in mind using a foundation that puts reliability and safe link handling first.',
  },
]

const resources = [
  'Getting started checklist',
  'Brandable link workflows',
  'QR code and social link support',
  'Campaign tracking guidance',
  'Implementation best practices',
  'Support for product and engineering teams',
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(164,55,219,0.12),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#faf7ff_100%)] text-black">
      <main className="pt-24">
        <section className="container mx-auto px-4 py-8 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Developer platform
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Build faster with{' '}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                    SnapshortURL
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  Everything developers need to wire short links into products, automations, and marketing flows.
                  Start with a clear foundation, then scale into campaign operations and branded experiences.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:translate-y-[-1px]"
                >
                  Talk to the team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-primary/30 hover:text-primary"
                >
                  View resources
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_rgba(164,55,219,0.12)] backdrop-blur">
              <div className="rounded-2xl bg-[#111827] p-5 text-white">
                <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
                  <TerminalSquare className="h-4 w-4" />
                  Developer quick start
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-black/40 p-4 text-sm leading-6 text-emerald-300">
{`const link = {
  destination: 'https://example.com/launch',
  slug: 'launch-day',
  campaign: 'product'
}

// Shorten, track, and share`}
                </pre>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Focus</p>
                  <p className="mt-2 text-lg font-semibold">Product teams</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Outcome</p>
                  <p className="mt-2 text-lg font-semibold">Cleaner link workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white/70">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">What you can build</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A developer experience that stays out of the way</h2>
              <p className="text-gray-700">
                The page is designed to help engineering teams understand the platform at a glance and move from idea
                to implementation without friction.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-3 leading-7 text-gray-700">{feature.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#111827] p-8 text-white shadow-[0_24px_90px_rgba(17,24,39,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Developer resources</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Everything in one place</h2>
              <p className="mt-4 leading-7 text-white/75">
                This hub can grow into your internal reference point for integration notes, product updates, and team
                handoff details.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/85">
                {resources.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-primary">01</p>
                <h3 className="mt-3 text-xl font-semibold">Plan the flow</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Map the places where short links, QR codes, and campaign data should live in your product.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-primary">02</p>
                <h3 className="mt-3 text-xl font-semibold">Connect the experience</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Add the touchpoints your team needs, from link creation to analytics and support handoff.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold text-primary">03</p>
                <h3 className="mt-3 text-xl font-semibold">Scale with confidence</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Keep the system maintainable by centralizing documentation, support links, and future integrations
                  in one developer-friendly destination.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
