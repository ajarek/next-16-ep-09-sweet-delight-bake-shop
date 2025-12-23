import baked_goods from "@/data/baked-goods.json"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const BakedGoods = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 p-4'>
      {baked_goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item) => (
        <Card key={item.id} className='relative' >
          <CardHeader >
            <Image
              src={item.image}
              alt='image'
              width={512}
              height={512}
              className='rounded-lg'
              priority
            />
            <CardTitle >{item.name}</CardTitle>

          </CardHeader>
            <CardAction className='absolute top-8 right-8 z-10'>{item.quantity} szt.</CardAction>
          <CardContent>
            <CardDescription>{item.description.slice(0, 10)}</CardDescription>
          </CardContent>
          <CardFooter>
            <span className='font-bold'>{item.price.toFixed(2)} PLN</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default BakedGoods
