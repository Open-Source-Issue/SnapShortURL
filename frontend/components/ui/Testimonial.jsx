import React from 'react'

export default function Testimonial() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What SnapshortURL customers are saying</h2>
            <div className="flex justify-center items-center space-x-4 mb-16">
                <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
                <div className="max-w-2xl">
                    <blockquote className="italic text-lg mb-4">
                        Our goal was to implement a system that would not interrupt the gameplay experience when a new update
                        was announced, and we found QR Codes to be the perfect answer.
                    </blockquote>
                    <p className="text-sm">Juan Zacarias – Game Product Manager, Motive Studios EA</p>
                    <div className="flex justify-center mt-4">
                        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                    </div>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-gray-500" />
            </div>
        </section>
    )
}


function ChevronLeftIcon(props) {
    return (
      (<svg
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
      </svg>)
    );
  }

  function ChevronRightIcon(props) {
    return (
      (<svg
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
      </svg>)
    );
  }
  