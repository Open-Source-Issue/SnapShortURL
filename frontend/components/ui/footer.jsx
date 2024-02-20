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
                        <Github className="h-6 w-6" />
                        <FacebookIcon className="h-6 w-6" />
                        <YoutubeIcon className="h-6 w-6" />
                        <InstagramIcon className="h-6 w-6" />
                        <LinkedinIcon className="h-6 w-6" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Products</h3>
                    <ul>
                        <li className="mb-2">URL Shortener</li>
                        <li className="mb-2"><a href="/qrcode">QR Codes</a></li>
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
                        <li className="mb-2"><a href="/support">Support</a></li>
                        <li className="mb-2">Trust Center</li>
                        <li className="mb-2">Browser Extension</li>
                        <li className="mb-2">Mobile App</li>
                    </ul>

                </div>
                <div>
                    <h3 className="font-semibold mb-3">Legal</h3>
                    <ul>
                        <li className="mb-2"><a href="/about">About</a></li>
                        <li className="mb-2">Careers</li>
                        <li className="mb-2">Diversity & Inclusion</li>
                        <li className="mb-2">Partners</li>
                        <li className="mb-2">Press</li>
                        <li className="mb-2"><a href="/contactus">Contact</a></li>
                        <li className="mb-2"><a href="/review">Reviews</a></li>
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

function Github(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
    )
}