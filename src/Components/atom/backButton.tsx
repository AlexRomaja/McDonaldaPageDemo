'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackButton(){
    const pathname = usePathname();

    if(pathname === '/') return null;

    const segmentos = pathname.split('/').filter(Boolean);
    segmentos.pop();

    let parentPath = segmentos.length > 0 ? `/${segmentos.join('/')}` : '/';
    if(parentPath === '/menu'){
        parentPath = '/';
    }

    return(
        <div className="bg-white px-4 py-4 flex flex-row ">
            <Link href={parentPath}
            className="inline-flex items-center text-black hover:text-red-500 transition-colors
            transition-transform duration-200 hover:scale-110">
                <svg className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                    <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"/>
                </svg>
                <span>regresar</span>
            </Link>
        </div>
    )

}