import Header from "@/components/Header"

export default function Home() {
  return (
    <main className='min-h-screen w-full max-w-8xl mx-auto   '>
      <section className='grid grid-cols-1 sm:grid-cols-[3fr_1fr]'>
        <div className=' h-screen '>
          <Header />
        </div>

        <div className='w-full flex flex-col h-screen justify-start items-center'>
          <header className='w-full h-16 flex justify-center items-center '>
            <h2 className='text-xl  font-semibold'>Zamówienie</h2>
          </header>
        </div>
      </section>
    </main>
  )
}
