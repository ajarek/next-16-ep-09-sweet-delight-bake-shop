import BakedGoods from "@/components/BakedGoods"
import Header from "@/components/Header"
import Order from "@/components/Order"
import { getProducts } from "@/lib/actions/getProducts"
import { Suspense } from "react"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>
}) {
  const { name } = await searchParams
  const baked_goods = await getProducts()
 
  return (
    <main className='min-h-screen  max-w-8xl mx-auto   '>
      <section className='grid grid-cols-1 xl:grid-cols-[3fr_1fr]'>
        <div className='flex flex-col   '>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
          <BakedGoods name={name || ""} baked_goods={baked_goods} />
          </Suspense>
        </div>

        <div className='w-full flex flex-col h-screen justify-start items-center border-l px-2'>
          <Order />
        </div>
      </section>
    </main>
  )
}
