"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "./ui/button"
import { useCartStore } from "@/store/cartStore"
import { CreditCard, Minus, Plus, Trash2 } from "lucide-react"

const Order = () => {
  const [category, setCategory] = useState("Na_Miejscu")
  const { items, increment, decrement, removeAllFromCart } = useCartStore()
  return (
    <section className='w-full h-full flex flex-col gap-4'>
      <header className='w-full h-16 flex justify-between items-center  '>
        <h2 className='text-xl  font-semibold'>Zamówienie #00124</h2>
        <Button size={"icon"} className="mr-2 cursor-pointer" onClick={removeAllFromCart}><Trash2 /></Button>
      </header>
      <div className='flex flex-wrap items-start gap-4'>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary '
          onClick={() => setCategory("Na_Miejscu")}
        >
          Na Miejscu
        </Button>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary '
          onClick={() => setCategory("Na_Wynos")}
        >
          Na Wynos
        </Button>
        <Button
          variant='default'
          className='bg-gray-500 px-4 py-2 cursor-pointer focus:bg-primary '
          onClick={() => setCategory("Dostawa")}
        >
          Dostawa
        </Button>
      </div>
      <div>
        <ul className='flex flex-col gap-2 '>
          {items.map((item) => (
            <li key={item.id} className='flex items-center justify-between gap-3 p-2'>
              <Image src={item.image} alt={item.name} width={50} height={50} className='rounded-lg'/>
              <div>
                <h3 className='font-bold'>{item.name.slice(0, 12)}</h3>
                <p>{item.price.toFixed(2)} PLN</p>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  size={"icon"}
                  className='w-6 h-6 p-1 bg-gray-500 cursor-pointer flex items-center justify-center'
                  onClick={() => increment(item.id)}
                >
                  <Plus />
                </Button>
                <p>{item.quantity}</p>
                <Button
                  size={"icon"}
                  className='w-6 h-6 p-1 bg-gray-500 cursor-pointer flex items-center justify-center'
                  onClick={() => decrement(item.id)}
                >
                  <Minus />
                </Button>
              </div>
              <p className='font-bold'>{(item.price * item.quantity).toFixed(2)} PLN</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className=''>Suma częściowa</p>
        <p className=''>{items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} PLN</p>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className=''>Podatek (8%)</p>
        <p className=''>{items.reduce((total, item) => total + item.price * item.quantity*0.08, 0).toFixed(2)} PLN</p>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className=''>Rabat (10%)</p>
        <p className=''>-{items.reduce((total, item) => total + item.price * item.quantity*0.1, 0).toFixed(2)} PLN</p>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className='font-bold'>Do zapłaty</p>
        <p className='font-bold text-2xl text-primary'>{items.reduce((total, item) => total + item.price * item.quantity*(1.08-0.1), 0).toFixed(2)} PLN</p>
      </div>
      <div className='flex items-center justify-end'>
        <Button className={`text-lg w-full mr-2 cursor-pointer `} disabled={items.length === 0}>Zapłać <CreditCard /></Button>
      </div>
    </section>
  )
}

export default Order
