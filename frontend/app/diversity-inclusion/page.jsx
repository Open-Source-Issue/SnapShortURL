import Link from "next/link"
import { Users, Heart, Globe, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const valueCards = [
  {
    icon: Users,
    title: "Inclusive hiring practices",
    description: "We actively recruit and support diverse talent from underrepresented communities. Our hiring process is designed to be fair, transparent, and accessible to all candidates.",
  },
  {
    icon: Heart,
    title: "Diverse perspectives in product",
    description: "Our team's varied backgrounds, experiences, and viewpoints shape better tools. We believe diverse thinking leads to more innovative and user-centered solutions.",
  },
  {
    icon: Globe,
    title: "Accessible tools for everyone",
    description: "We build short links and link workflows that work across all devices, abilities, and needs. Accessibility is not an afterthought—it's built in from day one.",
  },
]

const commitmentPoints = [
  "Equal opportunity employment regardless of race, gender, age, religion, identity, or experience",
  "Transparent salary ranges and equitable compensation practices",
  "Mentorship and career development programs for underrepresented groups",
  "Regular diversity audits and public accountability",
  "Community partnerships and open-source contributions",
  "Feedback channels where every voice is heard and valued",
]

export default function DiversityInclusionPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <section className="container mx-auto px-4 py-24 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Diversity & Inclusion
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Build teams and products that serve everyone
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-gray-700">
                  SnapshortURL is committed to inclusive hiring, diverse team perspectives, and equitable product design that works for all users.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="min-w-[200px]">
                  <a href="https://github.com/Open-Source-Issue/SnapShortURL" target="_blank" rel="noreferrer">
                    View GitHub repository
                  </a>
                </Button>
                <Button asChild variant="outline" className="min-w-[200px]">
                  <a href="/contactus">Contact us</a>
                </Button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-primary">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  Diversity & Inclusion Hub
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl border border-gray-200 bg-primary/5 p-5">
                    <p className="text-sm uppercase tracking-[0.21em] text-primary">Our commitment</p>
                    <p className="mt-2 text-base font-semibold text-black">Equal opportunity and inclusive culture</p>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white p-5">
                    <p className="text-sm uppercase tracking-[0.21em] text-gray-500">We believe in</p>
                    <p className="mt-2 text-base font-semibold text-black">Belonging for all team members</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-gray-500">Our focus</p>
                    <p className="mt-2 text-lg font-semibold text-black">Transparency</p>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-gray-500">Our practice</p>
                    <p className="mt-2 text-lg font-semibold text-black">Accountability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-100">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Our values</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Diversity makes us stronger
              </h2>
              <p className="text-gray-700">
                We're committed to building an inclusive workplace where every person feels valued, heard, and empowered to contribute their best work.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {valueCards.map((card) => {
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
          <div className="rounded-[2rem] border border-gray-200 bg-primary/5 p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Our commitment</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Building an equitable workplace and product
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-gray-700">
                Diversity and inclusion aren't initiatives—they're core to how we work. We're committed to ongoing listening, learning, and transparency about where we are and where we need to go.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {commitmentPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-16 md:px-6">
            <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Join our journey</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Be part of a team that values you
                </h2>
                <p className="max-w-xl text-gray-700 leading-7">
                  Explore open roles, contribute to our open-source project on GitHub, or share your thoughts on how we can do better.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="min-w-[200px]">
                    <a href="https://github.com/Open-Source-Issue/SnapShortURL" target="_blank" rel="noreferrer">
                      View GitHub repository
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="min-w-[200px]">
                    <a href="/career">Explore careers</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-primary/5 p-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Growth</p>
                    <h3 className="mt-3 text-2xl font-bold">Career opportunities</h3>
                    <p className="mt-2 text-sm text-gray-700">Grow your skills in a supportive, diverse environment</p>
                  </div>
                  <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-gray-500">Open to</p>
                    <p className="mt-2 text-lg font-semibold text-black">All backgrounds and experiences</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-gray-500">Support</p>
                    <p className="mt-2 text-lg font-semibold text-black">Mentorship and development</p>
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
