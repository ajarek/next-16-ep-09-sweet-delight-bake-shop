import { unstable_cache } from "next/cache"
import prisma from "../db"


export const getProducts = unstable_cache(
  
  async () => {
    return await prisma.bakedGood.findMany({
      orderBy: {
        name: "asc",
      },
    })
  },
  ["dashboard"],
  { tags: ["dashboard"],
    revalidate: 60,
  }
)