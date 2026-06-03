import Link from "next/link"
import { ArrowRight, BookOpen, Clock3, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const featuredPost = {
  category: "Product Strategy",
  title: "How short links can turn every campaign into a measurable growth loop",
  description:
    "A practical guide to building better distribution, tracking what matters, and designing link experiences people actually want to click.",
  author: "Ava Sharma",
  date: "June 3, 2026",
  readTime: "8 min read",
}

const posts = [
  {
    category: "Analytics",
    title: "What metrics to track before your next campaign launch",
    description:
      "Focus on the handful of link metrics that reveal audience intent, not just vanity clicks.",
    author: "Mason Lee",
    date: "June 1, 2026",
    readTime: "5 min read",
  },
  {
    category: "Social",
    title: "Writing link copy that earns more taps on mobile",
    description:
      "Microcopy, preview text, and placement all influence whether people pause or keep scrolling.",
    author: "Riya Patel",
    date: "May 29, 2026",
    readTime: "4 min read",
  },
  {
    category: "Branding",
    title: "Why branded links feel safer and perform better",
    description:
      "Trust signals are tiny, but they shape whether a shortened URL looks worth opening.",
    author: "Noah Kim",
    date: "May 27, 2026",
    readTime: "6 min read",
  },
  {
    category: "QR Codes",
    title: "Bridging offline and online with one scan",
    description:
      "Use QR codes to move attention from physical spaces into a seamless digital journey.",
    author: "Sophia Brown",
    date: "May 25, 2026",
    readTime: "5 min read",
  },
  {
    category: "Launches",
    title: "A simple content calendar for teams that move fast",
    description:
      "Structure your blog output around product launches, tutorials, and proof points.",
    author: "Ethan Clark",
    date: "May 22, 2026",
    readTime: "7 min read",
  },
  {
    category: "Growth",
    title: "How to use blog posts to support your link strategy",
    description:
      "Blog content and link management work best when they are designed as one system.",
    author: "Lina Gomez",
    date: "May 20, 2026",
    readTime: "6 min read",
  },
]

const topics = [
  "Link analytics",
  "Campaign ideas",
  "Social media",
  "Branded links",
  "QR codes",
  "Customer stories",
]

export default function BlogPage() {
  return (
    <main className="pt-24 bg-white text-black">
      <section className="container mx-auto px-4 pb-10 pt-6 md:px-6">
        <div className="rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.35fr_0.85fr] lg:px-10 lg:py-14">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <BookOpen className="h-4 w-4" />
                SnapshortURL Blog
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                Ideas, tactics, and stories for better links.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
                Learn how teams use short links, QR codes, and branded destinations to
                create more trustworthy, measurable, and memorable digital experiences.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link href="#latest-posts">
                    Browse articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link href="/contactus">Talk to us</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["52", "Articles published"],
                  ["14k", "Monthly readers"],
                  ["4.9/5", "Average usefulness"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4"
                  >
                    <p className="text-2xl font-bold text-black">{value}</p>
                    <p className="mt-1 text-sm text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-gray-200 bg-gray-50 shadow-none">
              <div className="relative min-h-[420px] p-6 text-black">
                <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(164,55,219,0.14)_0,transparent_28%),radial-gradient(circle_at_80%_15%,rgba(164,55,219,0.1)_0,transparent_18%),radial-gradient(circle_at_70%_70%,rgba(164,55,219,0.08)_0,transparent_18%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Featured story
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-primary">
                      {featuredPost.category}
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-black">
                      {featuredPost.description}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-black">
                      <span className="font-semibold">{featuredPost.author}</span>
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span>{featuredPost.date}</span>
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button asChild className="mt-4 rounded-full">
                      <Link href="#latest-posts">Read the feature</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-6 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-gray-200 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-black">Search topics</CardTitle>
              <CardDescription className="text-black">
                Find guides, product updates, and strategy posts by theme.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-4 py-3">
                  <Search className="h-4 w-4 text-gray-700" />
                  <input
                    aria-label="Search blog articles"
                    className="w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
                    placeholder="Search for blog posts, tips, or topics"
                    type="text"
                  />
                </div>
                <Button className="rounded-full px-6">Search</Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
                  >
                    <Tag className="h-3.5 w-3.5 text-primary" />
                    {topic}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-gray-50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-black">This week’s picks</CardTitle>
              <CardDescription className="text-black">
                A quick list of posts readers are opening most.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {posts.slice(0, 3).map((post) => (
                <div
                  key={post.title}
                  className="rounded-2xl border border-gray-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {post.category}
                  </p>
                  <p className="mt-2 font-medium text-black">{post.title}</p>
                  <p className="mt-2 text-sm leading-6 text-black">{post.readTime}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="latest-posts" className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Latest posts
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-black">
              Fresh ideas from the SnapshortURL team
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/resources">
              View resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.title}
              className="group overflow-hidden border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-2 bg-primary" />
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                    <Clock3 className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl leading-tight text-black">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base leading-7 text-black">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-4 text-sm text-black">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </CardContent>
              <CardFooter className="justify-between">
                <Button asChild variant="ghost" className="px-0 text-primary hover:bg-transparent">
                  <Link href="#">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 px-6 py-10 text-black shadow-lg md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Newsletter
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Get the next post in your inbox
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black sm:text-base">
                We send practical notes on link strategy, product marketing, and growth
                experiments. No spam, no fluff, just useful ideas you can try quickly.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  aria-label="Email address"
                  className="h-12 flex-1 rounded-full border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none placeholder:text-gray-500"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="h-12 rounded-full px-6">Subscribe</Button>
              </div>
              <p className="mt-3 text-xs text-black">
                By subscribing, you agree to receive product and editorial updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
