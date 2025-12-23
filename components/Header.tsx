import Logo from "./Logo"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import { Input } from "./ui/input"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "./ui/button"
import { LogIn, UserRoundPen } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <header className='h-16 flex justify-between items-center  px-5 gap-2'>
      <Logo />
      <div className='relative w-lg flex-1 '>
        <Input placeholder='Szukaj produktu' className='w-full  px-10 dark: bg-white' />
        <Image
          src='/icons/search.svg'
          alt='Search'
          width={25}
          height={25}
          className='absolute top-1/2 left-2 -translate-y-1/2'
        />
      </div>
      <div className='flex items-center gap-4'>
        <Button asChild  className='px-3 py-1 hidden sm:inline-flex'>
        <Link href='/dashboard' className='font-medium'>Panel</Link>
        </Button>
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
