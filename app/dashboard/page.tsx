import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getProducts } from "@/lib/actions/getProducts"
import Image from "next/image"
import ButtonDeleteProduct from "@/components/ButtonDeleteProduct"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Dashboard = async () => {
  const baked_goods = await getProducts()
  return (
    <div className='min-h-screen max-w-8xl mx-auto px-4'>
      <h1 className='text-2xl font-bold'>Wyroby</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='max-sm:hidden'>Image</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Nazwa</TableHead>
            <TableHead>Cena PLN</TableHead>
            <TableHead>Kategoria</TableHead>
            <TableHead>Operacje</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {baked_goods.map((baked_good) => (
            <TableRow key={baked_good.id}>
              <TableCell className='max-sm:hidden'>
                <Image
                  src={baked_good.image.trimEnd() || ""}
                  alt={baked_good.name}
                  width={60}
                  height={60}
                  className='rounded-sm'
                />
              </TableCell>
              <TableCell>{baked_good.id}</TableCell>
              <TableCell>{baked_good.name}</TableCell>
              <TableCell>{baked_good.price.toFixed(2)}</TableCell>
              <TableCell>{baked_good.category}</TableCell>
              <TableCell className=' flex items-center gap-2 mt-3'>
                <ButtonDeleteProduct id={baked_good.id} />
                <Button asChild variant="outline" className='text-xl bg-transparent border-0 cursor-pointer'>
                  <Link href={`/dashboard/edit-product/${baked_good.id}`}>
                    🖊️
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
