import Link from 'next/link'
import { ArrowRight, BadgeCheck, FileText, LifeBuoy, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react'

const resources = [
  {
    title: 'Privacy Policy',
    description: 'Understand how account, usage, and technical data is collected and protected.',
    href: '/privacypolicy',
  },
  {
    title: 'Terms of Service',
    description: 'Review the rules and responsibilities that apply to the platform.',
    href: '#',
  },
  {
    title: 'Acceptable Use Policy',
    description: 'See the behavior and content standards that help keep the platform safe.',
    href: '#',
  },
  {
    title: 'Report Abuse',
    description: 'Flag suspicious or harmful links so the team can review them quickly.',
    href: '/support',
  },
  {
    title: 'Appeal a Decision',
    description: 'If a link was flagged in error, send the details for a second review.',
    href: '/support',
  },
  {
    title: 'Preview Links',
    description: 'Check a shortened link destination before sharing or opening it.',
    href: '/support',
  },
]

const assurances = [
  {
    icon: LockKeyhole,
    title: 'Privacy focused',
    description: 'Sensitive information is handled carefully and only used when needed.',
  },
  {
    icon: ShieldCheck,
    title: 'Security minded',
    description: 'We build with dependable operations and safer link handling in mind.',
  },
  {
    icon: BadgeCheck,
    title: 'Clear guidance',
    description: 'Trust documentation is kept visible so teams can review it quickly.',
  },
]

const faqs = [
  {
    question: 'What does SnapshortURL do to keep users safe and secure?',
    answer:
      'We combine platform safeguards, policy review, and support workflows to reduce misuse and keep links safer.',
  },
  {
    question: 'What can I do about an unsafe SnapshortURL link?',
    answer:
      'Use the report or support options on this page to share the destination and any useful context for review.',
  },
  {
    question: 'Why am I seeing a warning page when clicking a SnapshortURL link?',
    answer:
      'Warnings can appear when a link looks suspicious, has been reported, or needs a closer review before opening.',
  },
  {
    question: 'How do I verify a SnapshortURL link destination?',
    answer:
      'Use the preview and support paths here to inspect a destination before you open or share a shortened link.',
  },
]

export default function TrustCenterPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white text-black">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <LifeBuoy className="h-4 w-4" />
                Trust and safety
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Our commitment to your safety
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  This Trust Center brings together the policies, help paths, and platform guidance that support a
                  safer SnapshortURL experience for users, partners, and teams.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:translate-y-[-1px]"
                >
                  Explore resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-primary/30 hover:text-primary"
                >
                  Contact support
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_rgba(164,55,219,0.12)] backdrop-blur">
              <div className="rounded-2xl bg-[#111827] p-5 text-white">
                <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4" />
                  Trust overview
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Best for</p>
                    <p className="mt-2 text-sm text-white/90">Privacy, security, and policy questions</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Response flow</p>
                    <p className="mt-2 text-sm text-white/90">Route requests to the right channel and answer faster</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Audience</p>
                  <p className="mt-2 text-lg font-semibold">Customers and teams</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Goal</p>
                  <p className="mt-2 text-lg font-semibold">Quick resolution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-100">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Resources</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trust & Safety Resources</h2>
              <p className="text-gray-700">
                A simple, scannable collection of the policies and flows people look for when they want to understand
                how SnapshortURL keeps links and data protected.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-700">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl bg-primary/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Safeguards</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Security and trust, verified.</h2>
              <p className="mt-4 text-gray-700">
                We are committed to protecting your data and earning your trust with clear policies and dependable
                platform practices.
              </p>
              <div className="mt-8 space-y-4">
                {assurances.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-black">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-700">{faq.answer}</p>
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
                <h2 className="text-3xl font-bold tracking-tight">More than a link shortener</h2>
                <p className="max-w-xl text-sm leading-7 text-gray-700">
                  Knowing how your links behave should be easy. Track, analyze, and optimize your connections in one
                  place while keeping trust front and center.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"
                >
                  Get started for free
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
                        <p className="text-xs text-gray-500">Trust</p>
                        <p className="mt-2 text-2xl font-black">High</p>
                      </div>
                      <div className="rounded-2xl bg-gray-100 p-4">
                        <p className="text-xs text-gray-500">Review</p>
                        <p className="mt-2 text-2xl font-black">Active</p>
                      </div>
                      <div className="rounded-2xl bg-gray-100 p-4">
                        <p className="text-xs text-gray-500">Support</p>
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
