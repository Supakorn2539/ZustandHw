import React, { useState } from 'react'
import useStore from '../store/benz-store'
import { useShallow } from 'zustand/react/shallow'

function Todolist() {
    const [txt,setTxt] = useState('')
    const {arr,addArr,delArr} = useStore(useShallow((state) => ({
        arr: state.arr,
        addArr : state.addArr,
        delArr : state.delArr
    })))
    const hdlChange =(e) =>{
        setTxt(e.target.value)
    }
    const hdlClickAdd = () => {
        addArr(txt)
    }
    const hdlDel = (id) => {
        delArr(id)

    }
  return (
    <div className='text-center'>
      <h1>Todo List</h1>
      <div className='flex text-center'>
      <input className='bg-slate-400 file-input file-input-bordered w-3/4 text-black 'type="text" onChange={hdlChange}/>
      <button className='btn btn-square bg-white w-1/4' onClick={hdlClickAdd}>Add</button>
        
      </div>
      <div>
        {arr.map((item,index)=> (
            <li className='bg-lime-300 list-none flex justify-between items-center' key={index}>{item.id}. {item.title} <button className='btn btn-ghost bg-white' onClick={()=>hdlDel(item.id)}> &#x1F5D1; </button> </li>
        ))}

        </div>
    </div>
  )
}

export default Todolist
