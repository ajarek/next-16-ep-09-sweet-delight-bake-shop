"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import prisma from "../db"
import { redirect } from "next/navigation"

export const deleteProduct = async (id: number) => {
  await prisma.bakedGood.delete({
    where: {
      id,
    },
  })
  revalidateTag("dashboard", { expire: 0 })
  revalidatePath("/dashboard")
  redirect("/dashboard")
}
