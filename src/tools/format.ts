export const priceToString = (price:number, symbol:string) => {
    return `${symbol} ${price.toFixed(1)}`
}