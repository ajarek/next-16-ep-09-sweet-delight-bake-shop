"use client"

import Image from "next/image"
import { Input } from "./ui/input"
import { useRouter, useSearchParams } from "next/navigation"

interface SearchProps {
  query: string
}

const SelectName = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/?${params.toString()}`)
    } catch (error) {
      console.error("Failed to replace URL parameters:", error)
    }
  }

  return (
    <div className='relative w-lg flex-1'>
      <Image
        src='/icons/search.svg'
        alt='search'
        width={25}
        height={25}
        className='absolute top-1/2 left-2 -translate-y-1/2'
      />
      <Input
        placeholder='Szukaj produktu'
        className='w-full  px-10 dark: bg-white'
        type='search'
        name='name'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
      />
    </div>
  )
}

export default SelectName
