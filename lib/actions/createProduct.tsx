"use server"
import { revalidateTag } from "next/cache"
import prisma from "../db"

export const createProduct = async ({
  name,
  price,
  description,
  category,
  image,
  quantity,
}: {
  name: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
}) => {
  if (!name || !price || !description || !category || !image || !quantity) {
    throw new Error("All fields are required")
  }
  try {
    const newProduct = await prisma.bakedGood.create({
      data: {
        name,
        price,
        description,
        category,
        image,
        quantity,
      },
    })

    revalidateTag("bakedGoods", { expire: 0 })
    return newProduct
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}
