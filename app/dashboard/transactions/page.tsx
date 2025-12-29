import { getTransactions } from "@/lib/actions/getTransactions"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getProducts } from "@/lib/actions/getProducts"
import Image from "next/image"

const TransactionHistory = async () => {
  const transactions = await getTransactions()
  const products = await getProducts()
  return (
    <div className='px-4'>
      <h1 className='text-2xl font-bold'>Historia transakcji</h1>
      <Table>
        <TableCaption className='text-right text-lg font-bold'>
          Razem obrót:{" "}
          {transactions
            .reduce((total, transaction) => total + transaction.Do_zapłaty, 0)
            .toFixed(2)}{" "}
          PLN
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Do zapłaty</TableHead>
            <TableHead>Podatek</TableHead>
            <TableHead>Rabat</TableHead>
            <TableHead>Dostawa</TableHead>
            <TableHead>Sposób zapłaty</TableHead>
            <TableHead>Szczegóły</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date.toString().slice(0, 10)}</TableCell>
              <TableCell>{transaction.Do_zapłaty.toFixed(2)}</TableCell>
              <TableCell>{transaction.Podatek * 100}%</TableCell>
              <TableCell>{transaction.Rabat * 100}%</TableCell>
              <TableCell>{transaction.Category}</TableCell>
              <TableCell>{transaction.Payment}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className='text-blue-500'>Szczegóły</button>
                  </DialogTrigger>
                  <DialogContent className='w-full '>
                    <DialogHeader>
                      <DialogTitle>Szczegóły transakcji</DialogTitle>
                      <div className='flex flex-col gap-2'>
                        {products.map(
                          (product) =>
                            product.transactionId === transaction.id && (
                              <div
                                key={product.id}
                                className='flex items-center gap-2'
                              >
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                />
                                <p>{product.name}</p>
                                <p>{product.price.toFixed(2)} PLN</p>
                                <p>{product.category}</p>
                              </div>
                            )
                        )}
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TransactionHistory
