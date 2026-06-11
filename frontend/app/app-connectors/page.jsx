import Link from 'next/link'
import { ArrowRight, Blocks, CalendarDays, Link2, PlugZap, Shuffle, Workflow } from 'lucide-react'

const connectors = [
  {
    icon: PlugZap,
    title: 'No-code friendly',
    description: 'Connect tools your team already uses without adding extra friction or maintenance overhead.',
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    description: 'Route short-link actions into campaigns, notifications, handoffs, and reporting flows.',
  },
  {
    icon: Blocks,
    title: 'Composable building blocks',
    description: 'Mix and match connectors to fit product, marketing, and support use cases.',
  },
]

const integrations = [
  'CRM sync',
  'Campaign tools',
  'Support systems',
  'Analytics pipelines',
  'Content operations',
  'Internal admin tools',
]

const steps = [
  {
    number: '01',
    title: 'Choose your connector',
    body: 'Start with the systems that matter most to your workflow and product operations.',
  },
  {
    number: '02',
    title: 'Map the data',
    body: 'Decide what should move between SnapshortURL and the rest of your stack.',
  },
  {
    number: '03',
    title: 'Launch the workflow',
    body: 'Ship the connector, monitor usage, and expand as your team finds new opportunities.',
  },
]

export default function AppConnectorsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(164,55,219,0.12),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#faf7ff_100%)] text-black">
      <main className="pt-24">
        <section className="container mx-auto px-4 py-8 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Shuffle className="h-4 w-4" />
                App connectors
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Connect SnapshortURL to the tools your team already loves
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  Build a cleaner workflow around short links, QR codes, tracking, and campaign management with a page
                  that explains how integrations fit into everyday operations.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:translate-y-[-1px]"
                >
                  Request an integration
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/developers"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-primary/30 hover:text-primary"
                >
                  View developers hub
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_rgba(164,55,219,0.12)] backdrop-blur">
              <div className="rounded-2xl bg-[#111827] p-5 text-white">
                <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
                  <Link2 className="h-4 w-4" />
                  Connector overview
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Input</p>
                    <p className="mt-2 text-sm text-white/90">Short URLs, campaign metadata, QR destinations</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Output</p>
                    <p className="mt-2 text-sm text-white/90">CRM updates, notifications, dashboards, reports</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Use case</p>
                  <p className="mt-2 text-lg font-semibold">Team automation</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-500">Coverage</p>
                  <p className="mt-2 text-lg font-semibold">Cross-tool workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white/70">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Why connectors matter</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Standardize the way links move through your stack</h2>
              <p className="text-gray-700">
                A standard connectors page gives teams a predictable place to understand what can be automated and
                where SnapshortURL fits into the bigger workflow.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {connectors.map((connector) => {
                const Icon = connector.icon
                return (
                  <article
                    key={connector.title}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{connector.title}</h3>
                    <p className="mt-3 leading-7 text-gray-700">{connector.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#111827] p-8 text-white shadow-[0_24px_90px_rgba(17,24,39,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Integration surface</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">What connectors can touch</h2>
              <p className="mt-4 leading-7 text-white/75">
                Use this section to communicate the breadth of available integrations and make the feature easy to
                scan from a product or engineering perspective.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {integrations.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {steps.map((step) => (
                <div key={step.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-primary">{step.number}</p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
                </div>
              ))}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:col-span-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <CalendarDays className="h-4 w-4" />
                  Rollout-ready
                </div>
                <h3 className="mt-3 text-xl font-semibold">A page teams can use immediately</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Keep the copy structured, the purpose obvious, and the footer link easy to find so the page works as
                  a standard product destination.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
