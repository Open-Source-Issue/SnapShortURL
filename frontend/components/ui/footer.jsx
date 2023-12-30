export default function Component() {
    return (
        <footer className="bg-[#fff] text-black p-10">
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">xMoney</h2>
                    <p className="mb-4">The world's digital payments network for all things money</p>
                    <img
                        alt="Great Place to Work Certified"
                        className="mb-6 pl-0"
                        height="200"
                        src="/SnapshortURL.svg"
                        style={{
                            aspectRatio: "120/40    ",
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
                        <li className="mb-2">Pay request</li>
                        <li className="mb-2">Crypto Pay</li>
                        <li className="mb-2">Fiat Pay</li>
                        <li className="mb-2">Pay Links</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Solutions</h3>
                    <ul>
                        <li className="mb-2">Shops & Ecommerce</li>
                        <li className="mb-2">Travel</li>
                        <li className="mb-2">Digital Nomad</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Need more information?</h3>
                    <ul>
                        <li className="mb-2">xMoney Announcements</li>
                        <li className="mb-2">MultiversX Announcements</li>
                        <li className="mb-2">Customer Support</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul>
                        <li className="mb-2">Brand Kit</li>
                        <li className="mb-2">Developer Documentation</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">MultiversX Products</h3>
                    <ul>
                        <li className="mb-2">xPortal</li>
                        <li className="mb-2">MultiversX Web Wallet</li>
                        <li className="mb-2">MultiversX DeFi Wallet</li>
                        <li className="mb-2">Bridge</li>
                        <li className="mb-2">xExchange</li>
                        <li className="mb-2">xLaunchpad</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-5">
                <p className="text-center text-sm">© 2023 MultiversX. All rights reserved.</p>
                <div className="flex justify-center lg:space-x-6 md:space-x-4 mt-4 space-x-3">
                    <a className="text-sm" href="#">
                        xMoney Crypto T&C
                    </a>
                    <a className="text-sm" href="#">
                        xMoney Fiat T&C
                    </a>
                    <a className="text-sm" href="#">
                        Privacy Policy
                    </a>
                    <a className="text-sm" href="#">
                        Cookie Policy
                    </a>
                    <a className="text-sm" href="#">
                        Prohibited products and services
                    </a>
                    <a className="text-sm" href="#">
                        Refund Policy
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
