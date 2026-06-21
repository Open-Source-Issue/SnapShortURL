"use client"

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/router'

export default function PressDetail({ params }) {
  const { slug } = params || {};
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      try {
        const res = await fetch(`http://localhost:3005/press/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) return <p className="container mx-auto px-4 py-10">Loading…</p>;
  if (!item) return <p className="container mx-auto px-4 py-10">Not found</p>;

  return (
    <main className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{new Date(item.publishedAt).toLocaleDateString()} — {item.author}</p>
          <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: item.content || item.summary }} />
          {item.sourceUrl && <p className="mt-4"><a href={item.sourceUrl} target="_blank" rel="noreferrer" className="text-[#A437DB]">Read original source</a></p>}
        </CardContent>
      </Card>
    </main>
  );
}
