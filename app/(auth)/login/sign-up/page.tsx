import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import GoogleIcon from '../../../../public/icons8-google.svg'
import Image from "next/image";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";

export default function SignUp() {
    return (
        <div className="mt-24 mx-auto round bg-black/80 py-10 px-6
        md:mt-0 md:max-w-sm md:px-14 flex flex-col justify-center items-center">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold text-white">SignUp</h1>
                <div className="space-y-4 mt-5">
                    <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='bg-[#333] placeholder:text-gray-400 w-full inline-block'
                    />
                    <Button
                    type="submit"
                    variant="destructive"
                    className="w-full bg-[#e50914]"
                    >
                        Sign Up
                    </Button>
                </div>
            </form>
            
            <div className="text-gray-500 text-sm mt-2">
                 Already a account ?{" "}
                <Link className="text-white hover:underline" href="/login">
                    Log in Now
                </Link>
            </div>

        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
            <GithubSignInButton/>
            <GoogleSignInButton/>
            </div>    
        </div>

    )
}