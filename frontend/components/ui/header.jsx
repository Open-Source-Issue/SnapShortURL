'use client'
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                            {/* LOGO */}
                            <Link href="/">
                                <h2 className="text-2xl text-primary font-bold ">SnapshortURL</h2>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="lg:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <CloseIcon/>
                                        ) : (
                                        <Hamburgericon />
                                        
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 lg:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
                                <li className="pb-6 text-xl text-black py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:bg-purple-900  border-purple-900  lg:hover:text-primary lg:hover:bg-transparent">
                                    <Link href="/product" onClick={() => setNavbar(!navbar)}>
                                        Product
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-purple-600  border-purple-900  lg:hover:text-primary lg:hover:bg-transparent">
                                    <Link href="/pricing" onClick={() => setNavbar(!navbar)}>
                                        Pricing
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-purple-600  border-purple-900  lg:hover:text-primary lg:hover:bg-transparent">
                                    <Link href="/resources" onClick={() => setNavbar(!navbar)}>
                                        Resources
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-purple-600  border-purple-900  lg:hover:text-primary lg:hover:bg-transparent">
                                    <Link href="/products" onClick={() => setNavbar(!navbar)}>
                                        Products
                                    </Link>
                                </li>
                                <Button className="ml-4">Sign Up Free</Button>
                                <Button className="ml-4" >
                                    Get a Quote
                                </Button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;



function Hamburgericon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50" width="50px"
            height="50px">
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 
            50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </svg>
    )
}

function CloseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50" width="50px"
            height="50px">
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 
            L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 
            27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
    )
}