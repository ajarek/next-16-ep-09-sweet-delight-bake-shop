"use server"

import type { Transaction } from "@/types/typeTransactions"
import { revalidateTag } from "next/cache"
import prisma from "../db"
import { BakedGoods } from "@/types/typeBakedGoods"

export const addTransaction = async (data: Transaction) => {
  if (
    !data.Category ||
    !data.Payment ||
    !data.Rabat ||
    !data.Podatek ||
    !data.Do_zapłaty ||
    !data.Items ||
    !data.date
  ) {
    throw new Error("All fields are required")
  }
  try {
    const newTransaction = await prisma.transaction.create({
      data: {
        Category: data.Category,
        Payment: data.Payment,
        Rabat: data.Rabat,
        Podatek: data.Podatek,
        Do_zapłaty: data.Do_zapłaty,

        Items: {
          connect: data.Items.map((item: BakedGoods) => ({ id: item.id })),
        },
        date: data.date,
      },
    })
    revalidateTag("dashboard/transactions", { expire: 0 })
    return newTransaction
  } catch (error) {
    console.error("Error adding transaction:", error)
    throw error
  }
}
