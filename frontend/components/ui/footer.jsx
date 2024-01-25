import Image from "next/image"

export default function Component() {
    return (
        <footer className="bg-[#fff] text-black p-10">
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 gap-8">
                <div>
                    <h2 className="lg:text-2xl md:text-2xl font-bold mb-2 sm:text-xl">SnapshortURL</h2>
                    <p className="mb-4">Streamlined URL Shortening for the Modern Web</p>
                    <Image
                        alt="Great Place to Work Certified"
                        className="mb-6 pl-0"
                        height="200"
                        src="/SnapshortURL.svg"
                        style={{
                            aspectRatio: "120/40",
                            objectFit: "cover",
                        }}
                        width="200"
                    />
                    <p className="text-sm">Follow us:</p>
                    <div className="flex space-x-4 mt-2">
                        <XIcon className="h-6 w-6" />
                        <FacebookIcon className="h-6 w-6" />
                        <YoutubeIcon className="h-6 w-6" />
                        <InstagramIcon className="h-6 w-6" />
                        <LinkedinIcon className="h-6 w-6" />
                        <SignalIcon className="h-6 w-6" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Products</h3>
                    <ul>
                        <li className="mb-2">URL Shortener</li>
                        <li className="mb-2"><a href="/qucode">QR Codes</a></li>
                        <li className="mb-2">Link-in-bio</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Solutions</h3>

                    <ul>
                        <li className="mb-2"> Social Media</li>
                        <li className="mb-2">Digital Marketing</li>
                        <li className="mb-2">Customer Service For Developers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Features</h3>
                    <ul>

                        <li className="mb-2">Branded Links</li>
                        <li className="mb-2">Mobile Links</li>
                        <li className="mb-2">Campaign Management & Analytics</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>

                    <ul>
                        <li className="mb-2">Blog</li>
                        <li className="mb-2">Resource Library</li>
                        <li className="mb-2">Developers</li>
                        <li className="mb-2">App Connectors</li>
                        <li className="mb-2">Support</li>
                        <li className="mb-2">Trust Center</li>
                        <li className="mb-2">Browser Extension</li>
                        <li className="mb-2">Mobile App</li>
                    </ul>

                </div>
                <div>
                    <h3 className="font-semibold mb-3">Legal</h3>
                    <ul>
                        <li className="mb-2">About</li>
                        <li className="mb-2">Careers</li>
                        <li className="mb-2">Diversity & Inclusion</li>
                        <li className="mb-2">Partners</li>
                        <li className="mb-2">Press</li>
                        <li className="mb-2"><a href="/contactus">Contact</a></li>
                        <li className="mb-2">Reviews</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-5">
                <p className="text-center text-sm">© 2024 SnapshortURL. All rights reserved.</p>
                <div className="flex justify-center lg:space-x-6 md:space-x-4 mt-4 space-x-2">
                    <a className="text-sm" href="#">
                        Code of Conduct
                    </a>
                    <a className="text-sm" href="/privacypolicy">
                        Privacy Policy
                    </a>
                    <a className="text-sm" href="#">
                        Cookie Policy
                    </a>
                    <a className="text-sm" href="#">
                        Terms of Service
                    </a>
                    <a className="text-sm" href="#">
                        Acceptable Use Policy
                    </a>
                </div>
            </div>
        </footer>
    )
}

function FacebookIcon(props) {
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
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props) {
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
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function LinkedinIcon(props) {
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
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function SignalIcon(props) {
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
            strokeLinejoin="round"
        >
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
        </svg>
    )
}


function XIcon(props) {
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
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}


function YoutubeIcon(props) {
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
            strokeLinejoin="round"
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}
