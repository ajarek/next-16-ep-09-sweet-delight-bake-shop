import { unstable_cache } from "next/cache"
import prisma from "../db"

export const getTransactions = unstable_cache(
  async () => {
    return await prisma.transaction.findMany({
      orderBy: {
        date: "desc",
      },
    })
  },
  ["dashboard/transactions"],
  { tags: ["dashboard/transactions"], revalidate: 60 }
)
