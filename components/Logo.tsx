import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image src="/icons/bakery_dining.svg" alt="Logo" width={40} height={40} />
        <h1 className='sm:text-2xl text-lg font-semibold'>Sweet Delight</h1>
    </div>
  )
}

export default Logo