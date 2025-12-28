"use server"

import prisma from "../db"

export const getProductById = async (id: number) => {
  if (!id || isNaN(id)) return null
  return await prisma.bakedGood.findUnique({
    where: {
      id,
    },
  })
}