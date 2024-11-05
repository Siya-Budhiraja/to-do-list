import React from 'react'
/*import tick from "../assets/Whatsapp Image 2024-11-05 at 1.50.32 AM.jpeg"
import not_tick from "../assets/Whatsapp Image 2024-11-05 at 1.47.19 AM.jpeg"
import delete_icon from "../assets/Whatsapp Image 2024-11-05 at 1.51.25 AM.jpeg"*/

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-centre my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 items-centre cursor-pointer">
            {/* {<img src={isComplete ? tick : not_tick} alt="" className="w-7" /> */} */}
            <p className="tex-slate-700 ml-4 text-[17px]">{text}</p>
        </div>
        {/* <img onClick={()=>{deleteTodo(id)}}src={delete_icon} alt="" className="w-3.5 cursor-pointer" /> */}
      
    </div>
  )
}

export default TodoItems
