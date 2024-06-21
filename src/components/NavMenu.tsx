'use Client'

import { useState } from "react";
import NavItems from "./NavItems";

export default function NavMenu(){

    const [open,setOpen] = useState(false);
    return(
        <nav className="relative">
            <div
                onClick={()=> setOpen((prev)=>!prev)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className={`absolute top-10 right-0 transition-all ${open ? 'block' : 'hidden'}`}>
                    <div className="bg-white w-[200px] px-7 py-4 border-slate-100 shadow-lg border-2 rounded-xl">
                        <NavItems />
                    </div>
            </div>
        </nav>
    )
}