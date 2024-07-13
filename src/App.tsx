import { useState } from "react";
import ListMarket from "./components/ListMarket";
import SearchInput from "./components/SearchInput";


export default function App() {
  const [search, setSearch] = useState("")

  const mockupData = {
    symbol: '$',
    list:[
      { name: 'Item 1', price: 7.2 },
      { name: 'Item 2', price: 10 },
      { name: 'Item 3', price: 2.5 }
    ]
  }

  const handlerChange = (value:string) => {
    setSearch( value )
  }

  const handlerFilter = (item:Item) => {
    return item.name?.includes( search )
  }

  return <main className="w-screen h-screen flex items-center justify-center">
    <div className="shadow-slate-400 shadow-lg py-5 px-6 rounded-lg border border-slate-200">
      <h1 className="text-2xl font-bold mb-4">Lista de Viveres</h1>
      <SearchInput value={search} onChange={handlerChange} />
      <ListMarket
        symbol={mockupData.symbol}
        items={mockupData.list.filter(handlerFilter)}
      />
    </div>
  </main>
}


