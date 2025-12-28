"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"
import ButtonAddCart from "./ButtonAddCart"

interface BakedGood {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
  quantity: number
}

const BakedGoods = ({
  name = "",
  baked_goods,
}: {
  name?: string
  baked_goods: BakedGood[]
}) => {
  const [category, setCategory] = useState("all")

  const filteredBakedGoods = baked_goods.filter((item) => {
    const matchesCategory = category === "all" || item.category === category
    const matchesName =
      name === "" || item.name.toLowerCase().includes(name.toLowerCase())
    return matchesCategory && matchesName
  })

  return (
    <div className='p-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary rounded-2xl'
          onClick={() => setCategory("all")}
        >
          <Image src='/icons/grid.svg' alt='all' width={24} height={24} />
          Wszystko
        </Button>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary rounded-2xl'
          onClick={() => setCategory("Ciasto")}
        >
          <Image src='/icons/cookie.svg' alt='all' width={24} height={24} />
          Ciasto
        </Button>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary rounded-2xl'
          onClick={() => setCategory("Desery")}
        >
          <Image src='/icons/icecream.svg' alt='all' width={24} height={24} />
          Desery
        </Button>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary rounded-2xl'
          onClick={() => setCategory("Chleb")}
        >
          <Image src='/icons/bread.svg' alt='all' width={24} height={24} />
          Chleb
        </Button>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary rounded-2xl'
          onClick={() => setCategory("Napoje")}
        >
          <Image src='/icons/coffee.svg' alt='all' width={24} height={24} />
          Napoje
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 '>
        {filteredBakedGoods
          .sort((a: BakedGood, b: BakedGood) => a.name.localeCompare(b.name))
          .map((item: BakedGood) => (
            <Card key={item.id} className='relative'>
              <CardHeader>
                <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                  <Image
                    src={item.image.trimEnd()}
                    alt='image'
                    width={512}
                    height={512}
                    className='rounded-lg hover:scale-110 transition-all duration-500 ease-in-out object-cover'
                    priority
                  />
                </div>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardAction className='absolute top-8 right-8 z-10'>
                {item.quantity} szt.
              </CardAction>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className='flex items-center justify-between'>
                <span className='font-bold'>{item.price.toFixed(2)} PLN</span>
                <ButtonAddCart {...item} />
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default BakedGoods
