"use client"
import { Button } from "./ui/button"
import { deleteProduct } from "@/lib/actions/deleteProduct"

const ButtonDeleteProduct = ({ id }: { id: number }) => {
  return (
    <form action={async () => await deleteProduct(id)}>
      <input type='hidden' name='id' value={id} />
      <Button
        variant='outline'
        type='submit'
        className='text-xl bg-transparent border-0 cursor-pointer'
      >
        ❌
      </Button>
    </form>
  )
}

export default ButtonDeleteProduct
