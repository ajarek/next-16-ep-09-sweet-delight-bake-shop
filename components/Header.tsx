import Logo from "./Logo"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "./ui/button"
import { LogIn, UserRoundPen } from "lucide-react"
import Link from "next/link"
import SelectName from "./SelectName"
import { auth } from '@clerk/nextjs/server'


const Header = async () => {

 const { isAuthenticated } = await auth()

  return (
    <header className='h-16 flex justify-between items-center  px-5 gap-2'>
      <Logo />
      <SelectName query='name' />
      <div className='flex items-center gap-4'>
        {isAuthenticated &&
        <Button asChild className='px-5 py-1 hidden sm:inline-flex'>
          <Link href='/dashboard' className='font-medium'>
            Panel
          </Link>
        </Button>
        }
        <span className='hidden sm:block'>
          {new Date().toLocaleDateString("pl-PL", {
            weekday: "short",
            year: "2-digit",
            month: "numeric",
            day: "numeric",
          })}
        </span>
        <SignedOut>
          <SignInButton>
            <Button size='icon' className='cursor-pointer'>
              <LogIn className='w-5 h-5 ' />
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size='icon' className='cursor-pointer'>
              <UserRoundPen className='w-5 h-5 ' />
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
