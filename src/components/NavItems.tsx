'use client'

import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function NavItems(){

    const pathname = usePathname();

    return(
        <ul className="md:flex-between flex w-full flex-col items-start gap-2 md:gap-7 lg:gap-10 md:flex-row">
            {
                navLinks.map((link)=>{
                    const isActive = pathname === link.route;
                    return(
                    <li key={link.label} className={`flex-center cursor-pointer whitespace-nowrap hover:text-blue-700 hover:font-bold ${isActive ? 'text-blue-700 font-bold' : ''}`}>
                        {link.label}
                    </li>
                )})
            }
        </ul>
    )
}