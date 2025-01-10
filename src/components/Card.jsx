import { useRef, useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../App";
import ListOfWorks from "./ListOfWorks";
import { useDrop } from "react-dnd";

const Card = ({titleList , title})=>{
    const [addBtn, setAddbtn] = useState(false);
    const textVal  = useRef(null)
    const ctx = useContext(TaskContext)
    // console.log(ctx.state);

    const [properties , ref] = useDrop(()=> ({
        accept : "CARD",
        drop : (item)=>{
            if(item.titleList === titleList) return;
            ctx.dispatch({
                type : "move_item",
                payload : {
                    fromList : item.titleList,
                    toList : titleList,
                    idx : item.idx
                }
            })
        }
    }))
    

    const addListItem = ()=>{
        const text = textVal.current.value;
        ctx.dispatch({
            type:"Add_item",
            payload:{
                titleList,
                text,
            }
        })
        setAddbtn(!addBtn)
    }
    
    const addToogleBtnFn = ()=>{
        if(addBtn){
            return(
                <div className="">
                    <textarea ref={textVal} className=" px-4  outline-none w-[100%]" />
                    <div className="flex gap-8">
                    <button onClick={addListItem} className="bg-green-600 cursor-pointer text-white py-2 px-4  rounded-lg border-none">Add</button>
                    <button onClick={()=> setAddbtn(!addBtn)} className="bg-red-600 cursor-pointer text-white py-2 px-4 border-none rounded-lg">Cancel</button>
                    </div>
                </div>
            )
        }
        else{
            return <button onClick={()=> setAddbtn(!addBtn)} className="border w-fit m-auto px-12 py-2 text-xl font-bold border-none hover:bg-blue-400 cursor-pointer bg-blue-600 text-white rounded-md ">Add List</button>
        }
    }
    return(
        <div ref={ref} className="border w-[350px] border-black h-[100%] px-8 py-4 flex flex-col gap-4">
           <h1 className="text-3xl font-bold text-center text-white">{title}</h1>
           <div className="flex flex-col gap-2">
                {ctx.state[titleList] .map((ele , idx) => <ListOfWorks key={idx} titleList={titleList} idx = {idx} task={ele} />)}
           </div>
           {addToogleBtnFn()}
        </div>
    )
}
export default Card;