"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "./ui/button"
import { useCartStore } from "@/store/cartStore"
import {
  Banknote,
  CreditCard,
  Minus,
  Plus,
  Smartphone,
  SquareCheckBig,
  Trash2,
} from "lucide-react"
import { toast } from "sonner"

const Order = () => {
  const [category, setCategory] = useState("Na_Miejscu")
  const [payment, setPayment] = useState("Gotówka")
  const { items, increment, decrement, removeAllFromCart } = useCartStore()

  const handlePayment = () => {
    toast(`Płatność zrealizowana na kwotę ${items
            .reduce(
              (total, item) =>
                total + item.price * item.quantity * (1.08 - 0.1),
              0
            )
            .toFixed(2)} PLN`)
    removeAllFromCart()
  }
  return (
    <section className='w-full h-full flex flex-col gap-8'>
      <header className='w-full h-16 flex justify-between items-center  '>
        <h2 className='text-xl  font-semibold'>Zamówienie #00124</h2>
        <Button
          size={"icon"}
          className='mr-2 cursor-pointer'
          onClick={removeAllFromCart}
        >
          <Trash2 />
        </Button>
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
            <li
              key={item.id}
              className='w-full grid grid-cols-4 gap-3 place-items-center'
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className='rounded-lg'
              />
              <div className='w-full max-w-[120px] text-left'>
                <p className='truncate font-bold'>{item.name.slice(0,12)}</p>
                <p>{item.price.toFixed(2)} PLN</p>
              </div>
              <div className='w-full max-w-[60px] grid grid-cols-3 gap-2 '>
                <Button
                  size={"icon"}
                  className='w-6 h-6  bg-gray-500 cursor-pointer flex items-center justify-center'
                  onClick={() => decrement(item.id)}
                >
                  <Minus />
                </Button>
                <div className='w-6 h-6 flex items-center justify-center'>
                  <p>{item.quantity}</p>
                </div>

                <Button
                  size={"icon"}
                  className='w-6 h-6 bg-gray-500 cursor-pointer flex items-center justify-center'
                  onClick={() => increment(item.id)}
                >
                  <Plus />
                </Button>
              </div>
              <p className='font-bold'>
                {(item.price * item.quantity).toFixed(2)} PLN
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className=''>Suma częściowa</p>
        <p className=''>
          {items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}{" "}
          PLN
        </p>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className=''>Podatek (8%)</p>
        <p className=''>
          {items
            .reduce(
              (total, item) => total + item.price * item.quantity * 0.08,
              0
            )
            .toFixed(2)}{" "}
          PLN
        </p>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className=''>Rabat (10%)</p>
        <p className=''>
          -
          {items
            .reduce(
              (total, item) => total + item.price * item.quantity * 0.1,
              0
            )
            .toFixed(2)}{" "}
          PLN
        </p>
      </div>
      <div className='flex justify-between items-center pr-2'>
        <p className='font-bold'>Do zapłaty</p>
        <p className='font-bold text-2xl text-primary'>
          {items
            .reduce(
              (total, item) =>
                total + item.price * item.quantity * (1.08 - 0.1),
              0
            )
            .toFixed(2)}{" "}
          PLN
        </p>
      </div>
      <div className='w-full flex items-center justify-end'>
        <div className='w-full grid grid-cols-3 gap-4'>
          <button
            className={`group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2     shadow-sm hover:shadow-md transition-all cursor-pointer ${payment === "Gotówka" ? "border-primary bg-primary/5 text-primary" : "border-transparent"}`}
            onClick={() => setPayment("Gotówka")}
          >
            {payment === "Gotówka" && (
              <div className='absolute top-3 right-3 text-primary'>
                <SquareCheckBig />
              </div>
            )}
            <Banknote />
            <span className='text-lg font-bold'>Gotówka</span>
          </button>

          <button
           className={`group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2     shadow-sm hover:shadow-md transition-all cursor-pointer ${payment === "Karta" ? "border-primary bg-primary/5 text-primary" : "border-transparent"}`}
            onClick={() => setPayment("Karta")}
          >
            {payment === "Karta" && (
              <div className='absolute top-3 right-3 text-primary'>
                <SquareCheckBig />
              </div>
            )}
            <CreditCard />
            <span className='text-lg font-bold'>Karta</span>
          </button>

          <button
            className={`group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2     shadow-sm hover:shadow-md transition-all cursor-pointer ${payment === "BLIK / Tel" ? "border-primary bg-primary/5 text-primary" : "border-transparent"}`}
            onClick={() => setPayment("BLIK / Tel")}
          >
            {payment === "BLIK / Tel" && (
              <div className='absolute top-3 right-3 text-primary'>
                <SquareCheckBig />
              </div>
            )}
            <Smartphone />
            <span className='text-lg font-bold'>BLIK / Tel</span>
          </button>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <Button
          className={`text-lg w-full mr-2 cursor-pointer `}
          disabled={items.length === 0}
          onClick={handlePayment}
        >
          Zatwierdź Płatność
        </Button>
      </div>
    </section>
  )
}

export default Order
