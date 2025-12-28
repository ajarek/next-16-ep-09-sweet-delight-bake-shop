"use server"

import { revalidatePath } from "next/cache"
import prisma from "../db"
import type { BakedGoods } from "@/types/typeBakedGoods"
import { redirect } from "next/navigation"
export const updateProduct = async (payload: BakedGoods) => {
  try {
    const product = await prisma.bakedGood.update({
      where: {
        id: payload.id,
      },
      data: payload,
    })
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/dashboard")
  redirect("/dashboard")
  
}
