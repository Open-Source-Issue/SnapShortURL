"use client"

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PressPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:3005/press");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setItems(data || []);
      } catch (err) {
        console.error(err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const featured = items.length ? items[0] : null;
  const rest = items.slice(1);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#A437DB] mb-4">Press & News</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">Latest company announcements, press releases, and media coverage.</p>
      </section>

      <section className="container mx-auto px-4 py-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {featured && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{featured.title}</CardTitle>
                  <CardDescription>{featured.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{new Date(featured.publishedAt).toLocaleDateString()} — {featured.author}</p>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: featured.content || featured.summary }} />
                  {featured.sourceUrl && (
                    <p className="mt-4"><a href={featured.sourceUrl} target="_blank" rel="noreferrer" className="text-[#A437DB]">Read original source</a></p>
                  )}
                </CardContent>
              </Card>
            )}

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <Card key={item._id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{new Date(item.publishedAt).toLocaleDateString()} • {item.author}</p>
                    <div className="mt-4">
                      <Link href={`/press/${item.slug}`} className="text-[#A437DB]">Read more</Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Press Kit</h3>
                <p className="text-sm text-muted-foreground">Download our brand assets and company information for media use.</p>
              </div>
              <div className="flex items-center gap-4">
                <a href="/press-kit.pdf" className="inline-block rounded bg-[#A437DB] text-white px-4 py-2">Download Press Kit</a>
                <a href="mailto:press@snapshorturl.example" className="text-sm text-muted-foreground">Contact: press@snapshorturl.example</a>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
