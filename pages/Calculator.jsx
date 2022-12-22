import { evaluate, number } from 'mathjs';
import { useState } from 'react';

export default function Calculator() {
    const [value, setValue] = useState('')

    return (
        <>
            <div className="bg-black h-screen w-full mx-auto">
                <div className='border-2 border-indigo-200 text-white h-20 mt-1 text-4xl text-right select-none overflow-auto scroll-smooth will-change-scroll'>{value}|</div>
                <div className="fixed bottom-0  w-full">
                    <div className="bg-black p-2 flex space-x-2 ">
                        <div className="flex-1 text-orange-300 text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 mb-1 select-none"
                        onClick={()=>{setValue('')}}
                        >AC</div>
                        <div className="flex-1 text-orange-300 text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 mb-1 select-none"
                        onClick={()=>{setValue(value.slice(0,value.length -1))}}
                        >&larr;</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 mb-1 select-none"
                        onClick={()=>{setValue(`${evaluate(value)?-evaluate(value):""}`)}}>+/-</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 mb-1 select-none"
                        onClick={()=>{setValue(`${value}/`)}}
                        >/</div>
                    </div>
                    <div className="bg-black p-2 flex space-x-2">
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}7`)}}
                        >7</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}8`)}}>8</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}9`)}}>9</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 select-none"
                        onClick={()=>{setValue(`${value}*`)}}>*</div>
                    </div>
                    <div className="bg-black p-2 flex space-x-2">
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}4`)}}
                        >4</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}5`)}}
                        >5</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}6`)}}
                        >6</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 select-none"
                        onClick={()=>{setValue(`${value}-`)}}
                        >-</div>
                    </div>
                    <div className="bg-black p-2 flex space-x-2">
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}1`)}}
                        >1</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}2`)}}
                        >2</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}3`)}}
                        >3</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-500 p-2 text-center rounded-lg active:bg-slate-600 select-none"
                        onClick={()=>{setValue(`${value}+`)}}
                        >+</div>
                    </div>
                    <div className="bg-black p-2 flex space-x-2">
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}%`)}}
                        >%</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}0`)}}
                        >0</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-slate-600 p-2 text-center rounded-lg active:bg-slate-700 select-none"
                        onClick={()=>{setValue(`${value}.`)}}
                        >.</div>
                        <div className="flex-1 text-white text-2xl font-bold bg-orange-300 p-2 text-center rounded-lg active:bg-orange-500 select-none"
                        onClick={()=>{setValue(`${evaluate(value)}`)}}
                        >=</div>
                    </div>
                </div>
            </div>
        </>
    )
}