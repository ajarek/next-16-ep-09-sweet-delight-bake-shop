import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className='max-w-5xl mx-auto px-5 py-20 min-h-screen flex items-center justify-center'>
      <div className='w-full flex flex-col items-center text-center gap-6'>
        <div className='relative w-full h-40 rounded-lg bg-muted flex items-center justify-center shadow-md'>
          <Image
            src='/images/no_cookie.jpg'
            alt='Nie ma ciasteczek - obrazek humorystyczny'
            width={285}
            height={160}
            className='object-cover rounded-md'
          />
        </div>

        <h1 className='text-4xl font-serif text-primary'>
          Strona nie znaleziona!
        </h1>

        <p className='max-w-xl text-muted-foreground'>
         Wygląda na to, że ta strona jest niedostępna lub adres jest niepoprawny. Spróbuj wrócić na stronę główną lub zweryfikować adres URL.
        </p>

        <div className='flex gap-3'>
          <Link href='/'>
            <Button>Wróć do sklepu</Button>
          </Link>
          
        </div>

        <p className='text-xl text-muted-foreground'>
          Kod błędu: 404
        </p>
      </div>
    </main>
  )
}
