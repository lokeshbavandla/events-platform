'use client'

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NavMenu from "./NavMenu";
import NavItems from "./NavItems";

export default function Header(){
    return(
        <header className="py-7 px-7 md:px-[50px] flex items-center justify-between border-b-2 border-gray-100">
            <Link href='/'>
                <h2 className="text-2xl font-bold text-slate-700">EventHub</h2>
            </Link>
            <div className="md:block hidden">
                <NavItems />
            </div>
            
            <div className="flex gap-4">

                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                    <div className="md:hidden">
                        <NavMenu />
                    </div>
                </SignedIn>

                <SignedOut>
                    <Link href='/sign-in'>
                        <button className="bg-blue-700 px-7 py-2 rounded-full text-white">
                            Sign In
                        </button>
                    </Link>
                </SignedOut>
            </div>
            
            
        </header>
    )
}