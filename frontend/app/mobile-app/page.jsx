import Link from 'next/link'
import { ArrowRight, BadgeCheck, Globe, LockKeyhole, Phone, ShieldCheck, Smartphone, Sparkles } from 'lucide-react'

const appCards = [
  {
    icon: Smartphone,
    title: 'Create links from anywhere',
    description: 'Create short links quickly from your own mobile device when you are away from your desk.',
  },
  {
    icon: ShieldCheck,
    title: 'Monitor metrics',
    description: 'Keep an eye on link performance so you can understand what is working.',
  },
  {
    icon: LockKeyhole,
    title: 'Copy and connect',
    description: 'Tap, copy, and share a link with fewer steps and less friction.',
  },
]

const appSections = [
  {
    title: 'Google Play | Android',
    body: 'Create your links from anywhere with the SnapshortURL Android app.',
  },
  {
    title: 'App Store | iOS',
    body: 'Create your links from anywhere with the SnapshortURL iOS app.',
  },
]

const resources = [
  'Install guide',
  'Mobile setup checklist',
  'Sharing best practices',
  'Preview and safety notes',
  'Notifications and sync help',
  'Troubleshooting and support',
]

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <section className="container mx-auto px-4 py-24 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Globe className="h-4 w-4" />
                Mobile app
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Get SnapshortURL on your phone
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  Create and share short links faster from anywhere with a mobile experience that feels native to the
                  rest of the site.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:translate-y-[-1px]"
                >
                  Ask for help
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/developers"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-primary/30 hover:text-primary"
                >
                  Visit developers
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_rgba(164,55,219,0.12)] backdrop-blur">
              <div className="rounded-2xl bg-[#111827] p-5 text-white">
                <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4" />
                  App overview
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Best for</p>
                    <p className="mt-2 text-sm text-white/90">Creating and sharing links from your mobile device</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Experience</p>
                    <p className="mt-2 text-sm text-white/90">Fast, focused, and easy to use on the go</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Audience</p>
                  <p className="mt-2 text-lg font-semibold">Mobile users</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Goal</p>
                  <p className="mt-2 text-lg font-semibold">Faster sharing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-100">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Mobile features</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Create and share powerful links</h2>
              <p className="text-gray-700">
                Keep the page focused on the mobile app basics: shorten links, monitor metrics, and copy and connect
                from the palm of your hand.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {appCards.map((card) => {
                const Icon = card.icon
                return (
                  <article
                    key={card.title}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
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
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl bg-primary/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Mobile apps</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Create and share your links from your own mobile device</h2>
              <p className="mt-4 leading-7 text-gray-700">
                A mobile app page should explain the value quickly and help users find the right app for their device.
              </p>
              <ul className="mt-8 space-y-4">
                {appSections.map((item) => (
                  <li key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-black">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6">
              {resources.map((item) => (
                <div key={item} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{item}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-700">
                        Helpful guidance for people who want to use the mobile app with less friction.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-100">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-6 md:grid-cols-[1fr_1fr] md:p-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Need help now?</p>
                <h2 className="text-3xl font-bold tracking-tight">Keep the app easy to use</h2>
                <p className="max-w-xl text-sm leading-7 text-gray-700">
                  The mobile app should feel like a natural extension of the product, with clear support paths and
                  simple instructions.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"
                >
                  Contact support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="w-full max-w-xl rounded-[2rem] bg-gray-50 p-4 shadow-sm ring-1 ring-gray-200">
                  <div className="rounded-[1.5rem] bg-white p-6 text-black">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-gray-200" />
                      <div className="h-3 w-12 rounded-full bg-gray-200" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-gray-100 p-4">
                        <p className="text-xs text-gray-500">Create</p>
                        <p className="mt-2 text-2xl font-black">Fast</p>
                      </div>
                      <div className="rounded-2xl bg-gray-100 p-4">
                        <p className="text-xs text-gray-500">Preview</p>
                        <p className="mt-2 text-2xl font-black">On</p>
                      </div>
                      <div className="rounded-2xl bg-gray-100 p-4">
                        <p className="text-xs text-gray-500">Share</p>
                        <p className="mt-2 text-2xl font-black">Ready</p>
                      </div>
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
