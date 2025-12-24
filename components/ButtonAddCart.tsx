"use client"

import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import type { BakedGoods } from "@/types/typeBakedGoods"
import { toast } from "sonner"
import { ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"

const ButtonAddCart = ({
   id,
    name,
    price,
    category,
    image,
    description,
    
}: BakedGoods) => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  return (
    <Button
      onClick={() => {
        if (items.some((i) => i.id === id)) {
          toast("Produkt jest już zamówiony")
          router.push("/")
          return
        }
        addItemToCart({
         id,
         name,
         price,
         category,
         image,
         description,
         quantity: 1
        })

        toast.success("Produkt został zamówiony")
        router.push("/")
      }}
      aria-label='Dodaj do zamówienia'
      className='bg-gray-500 px-4 py-2 cursor-pointer hover:bg-primary rounded-sm '
    >
      <ShoppingBag className='w-4 h-4' />
      <span className='ml-2'>Dodaj do zamówienia</span>
    </Button>
  )
}

export default ButtonAddCart
