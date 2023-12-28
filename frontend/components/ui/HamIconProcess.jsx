'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HamIconProcess({ MenuList }) {
    const [open, setopen] = useState(false);
    return (
        <div className="flex w-full flex-col h-full bg-red-200">
            <button className="lg:hidden block" onClick={() => setopen(!open)}>
                {open ? <Hamburgericon />
                    : <CloseIcon />}
            </button>

            {
                MenuList.map((menu, index) => {
                    return (
                        <div className="h-full text-center bg-white">
                            <a key={index} className=" hover:text-primary flex flex-col transition-all duration-700 ease-in-out" href={menu.url}>
                                {menu.name}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

