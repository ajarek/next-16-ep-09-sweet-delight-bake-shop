import { Input } from "@/components/ui/input"
import Image from "next/image"
import Logo from "@/components/Logo"

export default function Home() {
  return (
    <main className='min-h-screen w-full max-w-8xl mx-auto   '>
      <section className='grid grid-cols-1 sm:grid-cols-[3fr_1fr]'>
        <div className=' h-screen bg-gray-200'>
          <header className='h-16 flex justify-between items-center bg-gray-100 px-5'>
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
              <span>14 Paź 2025</span>
              <Image
                src='/user.png'
                alt='User'
                width={40}
                height={40}
                className='rounded-full'
              />
            </div>
          </header>
        </div>

        <div className='w-full flex flex-col h-screen justify-start items-center'>
          <header className='w-full h-16 flex justify-center items-center bg-gray-300 '>
            <h2 className="text-xl  font-semibold">Zamówienie</h2>
          </header>
        </div>
      </section>
    </main>
  )
}
