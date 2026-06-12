import Link from 'next/link'
import { ArrowRight, Clock3, LifeBuoy, Mail, MessageSquareText, ShieldCheck, Sparkles, Users } from 'lucide-react'

const supportCards = [
  {
    icon: MessageSquareText,
    title: 'Help center guidance',
    description: 'Find clear answers for everyday product questions, setup steps, and common workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted support',
    description: 'Keep customers and internal teams moving with a support experience that feels structured and reliable.',
  },
  {
    icon: Clock3,
    title: 'Fast response paths',
    description: 'Route requests to the right place so urgent issues get attention without unnecessary back and forth.',
  },
]

const supportChannels = [
  {
    title: 'Email support',
    value: 'support@snapshorturl.com',
    note: 'Best for account questions, technical help, and detailed follow-up.',
  },
  {
    title: 'Product help',
    value: 'Knowledge base and guides',
    note: 'Good for self-serve troubleshooting and getting unstuck quickly.',
  },
  {
    title: 'Partner support',
    value: 'Integration and rollout help',
    note: 'Use this for connector questions and implementation planning.',
  },
]

const faqs = [
  {
    question: 'How do I get help with my account?',
    answer: 'Use the support form or email support and include your account details, so the team can respond faster.',
  },
  {
    question: 'Where can I find answers to common questions?',
    answer: 'The support page is designed to point users to common troubleshooting paths and to the right contact method.',
  },
  {
    question: 'Can I get help with integrations?',
    answer: 'Yes. Integration and connector questions can be routed through the support team for a more focused response.',
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(164,55,219,0.12),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#faf7ff_100%)] text-black">
      <main className="pt-24">
        <section className="container mx-auto px-4 py-8 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <LifeBuoy className="h-4 w-4" />
                Support center
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Support that feels organized, responsive, and easy to use
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  Give customers and internal teams a clear place to find answers, contact the right team, and keep
                  moving when they need help.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact-support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:translate-y-[-1px]"
                >
                  Contact support
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-primary/30 hover:text-primary"
                >
                  Browse resources
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_rgba(164,55,219,0.12)] backdrop-blur">
              <div className="rounded-2xl bg-[#111827] p-5 text-white">
                <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4" />
                  Support overview
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Best for</p>
                    <p className="mt-2 text-sm text-white/90">Account help, product questions, and escalation paths</p>
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

        <section className="border-y border-gray-200 bg-white/70">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">What support covers</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A standard support page that is easy to scan</h2>
              <p className="text-gray-700">
                This layout keeps the page focused on what users need most: where to get help, what kinds of issues are
                handled, and how to start the conversation.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {supportCards.map((card) => {
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
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#111827] p-8 text-white shadow-[0_24px_90px_rgba(17,24,39,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Support channels</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Pick the right path</h2>
              <p className="mt-4 leading-7 text-white/75">
                Keep support structured with a few clear channels so users know exactly where to go.
              </p>
              <ul className="mt-8 space-y-4">
                {supportChannels.map((channel) => (
                  <li key={channel.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{channel.title}</p>
                    <p className="mt-1 text-sm text-white/85">{channel.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">{channel.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-primary" />
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

        <section id="contact-support" className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Need help now?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Contact support</h2>
              <p className="mt-4 text-gray-700">
                Use the form below to send a structured request with the details the team needs to help quickly.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4 text-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  support@snapshorturl.com
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                  <Clock3 className="h-5 w-5 text-primary" />
                  Include screenshots, links, or error details for a faster reply
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    id="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    id="subject"
                    placeholder="What can we help with?"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="min-h-[160px] rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    id="message"
                    placeholder="Add any details that will help the team respond"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:translate-y-[-1px]"
                >
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
