import Logo from "./Logo"

import Image from "next/image"
import { Input } from "./ui/input"
import {ModeToggle} from "@/components/ModeToggle"
const Header = () => {
  return (
    <header className='h-16 flex justify-between items-center  px-5 gap-2'>
      <Logo />
      <div className='relative w-full max-w-xl'>
        <Input placeholder='Search' className='w-full max-w-xl px-10' />
        <Image
          src='/icons/search.svg'
          alt='Search'
          width={25}
          height={25}
          className='absolute top-1/2 left-2 -translate-y-1/2'
        />
      </div>
      <div className='flex items-center gap-2'>
        <span className='hidden sm:block'>14 Paź 2025</span>
        <Image
          src='/user.png'
          alt='User'
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
      <ModeToggle/>
    </header>
  )
}

export default Header
