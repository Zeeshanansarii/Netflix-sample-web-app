import {  ReactNode } from "react";
import Image from "next/image";
import BackgroundUImage from '../../public/netflixteaser.png'
import Logo from '../../public/Netflix-logo-red-black-png.png'

export default function AuthLayout ({ children }: {children: ReactNode }) {
    return (
        <div className="relative flex h-screen w-screen
        flex-col bg-black md:item-center md:justify-center
        md:bg-transparent">
           
           <Image 
           src={BackgroundUImage} 
           alt = "background image"
           className="hidden sm:flex sm:object-cover -z-10 brightness-50"
           priority
           fill
           />

           <Image
           src={Logo}
           alt='logo'
           width={120}
           height={120}
           className="absolute left-4 top-4 object-contain
           md:left-10 md:top-6"
           priority
           />
            {children}
        </div>
    )
}