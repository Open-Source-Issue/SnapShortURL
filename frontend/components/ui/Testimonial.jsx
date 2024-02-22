'use client'
import React, { useState, useEffect } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
        quote: "Our goal was to implement a system that would not interrupt the gameplay experience when a new update was announced, and we found QR Codes to be the perfect answer.",
        author: "Juan Zacarias – Game Product Manager, Motive Studios EA"
    },
    {
        quote: "Another testimonial quote",
        author: "Another author"
    },
    {
        quote: "Yet another testimonial quote",
        author: "Yet Another Author"
    },
];


    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
        
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What SnapshortURL customers are saying</h2>
            <div className="flex justify-center items-center space-x-4 mb-16">
                <ChevronLeftIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={() => setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)} />
                <div className="max-w-2xl relative overflow-hidden testimonial-container text-center">
                    <div className="testimonial-inner" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-slide">
                                <blockquote className="italic text-lg mb-4">
                                    {testimonial.quote}
                                </blockquote>
                                <p className="text-sm">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={nextTestimonial} />
            </div>
        </section>
    );
}

function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
