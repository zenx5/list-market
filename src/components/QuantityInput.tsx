

export default function QuantityInput({ value, onChange }:{ value:number, onChange:(value:number)=>void }) {

    const handlerClick = (step:number) => () => {
        onChange && onChange( value + step )
    }

    return <span className="flex flex-row items-center justify-center gap-3">
        <button onClick={handlerClick(-1)} className="shadow shadow-slate-400 rounded-full p-0 m-0 w-5 h-5 flex items-center justify-center text-slate-400 hover:shadow-slate-600 hover:text-slate-800">-</button>
        <span className="text-md">{ value }</span>
        <button onClick={handlerClick(1)} className="shadow shadow-slate-400 rounded-full p-0 m-0 w-5 h-5 flex items-center justify-center text-slate-400 hover:shadow-slate-600 hover:text-slate-800">+</button>
    </span>
}