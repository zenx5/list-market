import QuantityInput from "./QuantityInput";
import { priceToString } from "../tools/format";

export default function ItemMarket({name, price, quantity, symbol, onChangeQuantity}:ItemMarketProp) {

    const handlerChange = (value:number) => {
        onChangeQuantity && onChangeQuantity(value)
    }

    return <tr>
        <td className="py-3">
            <QuantityInput value={quantity} onChange={handlerChange}/>
        </td>
        <td className="py-3">{ name }</td>
        <td className="py-3">{ priceToString(price, symbol) }</td>
    </tr>
}