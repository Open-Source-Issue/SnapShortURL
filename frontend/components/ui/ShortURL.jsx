'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ShortURL() {
    const [URL, setURL] = useState('');
    const [result, setResult] = useState();

    async function fetchData(URL) {
        try {
            const response = await fetch('http://localhost:8080/url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "URL": URL
                })
            });

            if (response.ok) {
                const data = await response.json();
                setResult(`localhost:8080/${data.id}`);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }


    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Create a concise link.</h2>
                <div
                    className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-1">
                    <Input placeholder="Example: http://super-long-link.com/shorten-it" onChange={(e) => setURL(e.target.value)} value={URL} />
                    <Button onClick={() => fetchData(URL)}>Sign up and get your link</Button>

                    <div className="flex items-center">
                        <span className="bg-gray-200 px-3 py-2 rounded-l">bit.ly</span>
                        <Input placeholder="example: favorite-link" value={result} />
                    </div>
                    <Button>Sign up and get your link</Button>
                </div>
                <p className="text-center mt-4">Finish your hyperlink with phrasing that adds distinctiveness to it.</p>
                <div className="mt-8 text-center">
                    <p className="font-bold">No need for a credit card. Our complimentary plan offers:</p>
                    <div className="flex justify-center space-x-4 mt-4 text-white">
                        <Badge>Short links</Badge>
                        <Badge>QR Codes</Badge>
                        <Badge>Link-in-bio page</Badge>
                    </div>
                </div>
            </div>
        </section>
    )
}
