import  {BakedGoods} from "./typeBakedGoods"

export type Transaction = {
    Category: string,
    Payment: string,
    Rabat: number,
    Podatek: number,
    Do_zapłaty: number,
    Items: BakedGoods[],
    date: Date
}