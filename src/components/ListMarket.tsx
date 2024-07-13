import { useEffect, useState } from "react"
import ItemMarket from "./ItemMarket"
import { priceToString } from "../tools/format"

export default function ListMarket({ items, symbol }:{ items:Item[], symbol:string }) {
    const [ quantity, setQuantity] = useState<number[]>([])
    useEffect(()=>{
        if( items.length > quantity.length ) setQuantity( Array(items.length).fill(0) )
    },[items.length, quantity.length])

    const handlerChangeQuantity = (index:number) => (value:number) => {
        if( value < 0 ) return;
        setQuantity( prev => prev?.toSpliced(index,1, value) )
    }

    const getTotal = () => {
        return priceToString( items.reduce( (acc, item, index) => acc+item.price*quantity[index], 0), symbol )
    }

    return <table className="w-full">
        <thead>
            <tr className="font-bold border-b border-slate-400">
                <th className="py-3 ">Cant.</th>
                <th className="py-3 ">Nombre</th>
                <th className="py-3 ">Precio</th>
            </tr>
        </thead>
        <tbody className="divide-y">
            { items
                .map( (item, index) =>
                    <ItemMarket
                        key={index}
                        name={item.name}
                        price={item.price}
                        quantity={quantity[index]}
                        symbol={symbol}
                        onChangeQuantity={handlerChangeQuantity(index)}
                    /> ) }
            {items.length>0 && <tr>
                <th className="py-3 text-lg" colSpan={2}>Total</th>
                <td className="py-3 text-lg font-bold">{ getTotal() }</td>
            </tr>}
        </tbody>
    </table>
}