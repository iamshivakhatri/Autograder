"use client";

import { NODE_BASE_RESOLVE_OPTIONS } from "next/dist/build/webpack-config";
import { cn } from "@/lib/utils";
import { usePathname, useParams } from "next/navigation";

import Link from "next/link";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>){
    const pathname = usePathname();
    const params = useParams();


    const routes = [ 
        {
            href: '/',
            label: 'Home',
            active: pathname === '/'
        },
        {
            href: '/about',
            label: 'About',
            active: pathname === '/about'
        },
    
       
    ]
    console.log("This is the pathname", pathname);
    console.log("This is the params", params);
    return(
        <nav
        className={cn("flex itemss-center space-x-4 lg:space-x-4", className)}
        >

        {routes.map((route)=>(
            <Link
            key = {route.href}
            href={route.href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active? "text-black": "text-gray-500" 


            )}
            >
                    {route.label}
            </Link>
            

            
            ))}
        
            
        </nav>
    )

}