'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "../public/Logo.png"
import { Button } from "@/components/ui/button"
import MobileMenu from "./MobileMenu"
import { Bell } from "lucide-react"
import { Input } from "./ui/input"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"


function Header() {
  return (
    <header className="w-full max-w-9/10 mt-2 mx-auto">
        <div className="flex flex-col gap-1 md:flex-row md:items-center justify-between">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
                    <Link href="/">
                        <Image
                        src={logo}
                        width={160}
                        height={35}
                        alt="logo"
                        className="w-28"
                        />
                    </Link>

                    <div className="hidden md:flex items-center justify-around gap-3 self-start">
                        <Link className="inline-block font-medium text-xl text-secondary/50 hover:text-secondary" href="/auction">Auction</Link>
                        <Link className="inline-block font-medium text-xl text-secondary/50 hover:text-secondary" href="/about-us">About Zubid</Link>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 md:hidden">
                    <SignedOut>
                        <Button asChild>
                            <SignInButton>Sign In</SignInButton>
                        </Button>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                  
                  <Bell/>
                  <MobileMenu />
                </div>
            </div>
            <div className="flex items-center gap-2 w-full">
                <Input type="search" placeholder="Search for cars"/>
                <Button className="cuursor-pointer">Sell Cars</Button>
                <div className="hidden md:block">
                    <SignedOut>
                            <Button asChild>
                                <SignInButton>Sign In</SignInButton>
                            </Button>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header