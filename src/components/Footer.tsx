import Link from "next/link";

export default function Footer(){
    return(
        <footer className="border-t-2 border-gray-100 pt-7 flex flex-col items-center gap-2">
             <Link href='/'>
                <h2 className="text-2xl font-bold text-slate-700">EventHub</h2>
            </Link>

            <p> &copy; 2024 EventHub. All Rights reserved.</p>

            <p>Web Application created by Lokesh Bavandla</p>

            <div>
                <Link href='/'>
                    <span className="hover:text-blue-700 hover:font-bold">LinkedIn </span>
                </Link>
                <span>| </span>
                <Link href='/'>
                    <span className="hover:text-blue-700 hover:font-bold">Github</span>
                </Link>
            </div>
            
        </footer>
    )
}