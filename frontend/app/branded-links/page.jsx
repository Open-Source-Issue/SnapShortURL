import Link from "next/link"

const domainSuggestions = [
    {
        title: "Find the right custom domain",
        description:
            "Discover branded domain ideas that fit your business and help you launch shorter links faster.",
    },
    {
        title: "Select from trusted options",
        description:
            "Pick from a wide range of domain extensions and build a branded link setup that feels intentional.",
    },
    {
        title: "Create links in minutes",
        description:
            "Turn your chosen domain into branded short links without leaving the SnapshortURL experience.",
    },
]

const brandValue = [
    {
        title: "More familiar",
        description:
            "Branded links are easier for people to recognize, which helps them feel comfortable clicking.",
    },
    {
        title: "More memorable",
        description:
            "A custom domain makes it easier for audiences to remember where the link came from.",
    },
    {
        title: "More visible",
        description:
            "Use branded links across social, SMS, and print so your brand stays visible everywhere you share.",
    },
]

const platformCards = [
    {
        title: "URL Shortener",
        description:
            "Shorten, share, and track every branded link from one central place.",
        points: ["Short links at scale", "Redirect control", "Analytics and tracking"],
    },
    {
        title: "QR Codes",
        description:
            "Use branded destinations with QR Codes that match campaigns, packaging, and events.",
        points: ["Custom QR designs", "Dynamic destinations", "Scan analytics"],
    },
    {
        title: "Landing Pages",
        description:
            "Create mobile-friendly pages that keep the journey aligned with your branded links.",
        points: ["Custom URLs", "Editable pages", "Track clicks and scans"],
    },
]

export default function Page() {
    return (
        <main className="bg-white text-black">
            <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
                <div className="max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        Features
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Branded links built around your custom domain
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Use branded links to make every point of connection feel more familiar,
                        recognizable, and aligned with your business.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contactus"
                            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                            Get a quote
                        </Link>
                        <Link
                            href="/developers"
                            className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                        >
                            View documentation
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-y border-border bg-muted/30">
                <div className="container mx-auto px-4 py-14 sm:py-16">
                    <div className="grid gap-4 md:grid-cols-3">
                        {domainSuggestions.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-3xl border border-border bg-white p-6 shadow-sm"
                            >
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 sm:py-20">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            Brand trust
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Turn your domain into a stronger extension of your brand
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                            Bitly’s branded-links page focuses on custom domains, link familiarity,
                            and better recognition across channels. This version keeps that same
                            idea while using SnapshortURL’s own layout and visual language.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Why teams use branded links</h3>
                        <div className="mt-5 space-y-4">
                            {brandValue.map((item) => (
                                <div key={item.title} className="rounded-2xl bg-background p-4">
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary/5">
                <div className="container mx-auto px-4 py-16 sm:py-20">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            The platform
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Build, manage, and track branded connections in one place
                        </h2>
                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                            Use branded links alongside URL shortening, QR Codes, and landing pages
                            to keep your audience moving through a consistent experience.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 lg:grid-cols-3">
                        {platformCards.map((card) => (
                            <article
                                key={card.title}
                                className="rounded-3xl border border-border bg-white p-6 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {card.description}
                                </p>
                                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                                    {card.points.map((point) => (
                                        <li key={point} className="rounded-2xl bg-muted/40 px-3 py-2">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 sm:py-20">
                <div className="rounded-3xl border border-border bg-background p-8 shadow-sm sm:p-10">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            Keep it simple
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Branded links that feel natural across every channel
                        </h2>
                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                            Use this page as the SnapshortURL version of Bitly’s branded-links
                            message: clearer links, stronger recognition, and a better path from
                            content to action.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/support"
                                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                            >
                                Contact support
                            </Link>
                            <Link
                                href="/trustcenter"
                                className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                            >
                                Review trust center
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
