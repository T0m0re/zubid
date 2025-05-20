import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// import { Menu } from "lucide-react"


const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                stroke="#4ECDC4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h10M4 18h5"
                ></path>
            </svg>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>

  )
}
export default MobileMenu