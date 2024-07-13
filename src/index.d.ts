interface ItemMarketProp {
    name: string
    price: number
    quantity: number
    symbol: string
    onChangeQuantity: (value:number) => void
}

interface Item {
    name: string
    price: number
}

interface Array<T> {
    toSpliced:(start: number, deleteCount?: number, replace?:number) => Array<T>
}