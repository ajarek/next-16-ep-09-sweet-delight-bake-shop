import BakedGoods from "@/components/BakedGoods"
import Header from "@/components/Header"
import Order from "@/components/Order"

export default function Home() {
  return (
    <main className='min-h-screen  max-w-8xl mx-auto   '>
      <section className='grid grid-cols-1 xl:grid-cols-[3fr_1fr]'>
        <div className='flex flex-col   '>
          <Header />
          <BakedGoods />
        </div>

        <div className='w-full flex flex-col h-screen justify-start items-center border-l '>
          
          <Order />
        </div>
      </section>
    </main>
  )
}
