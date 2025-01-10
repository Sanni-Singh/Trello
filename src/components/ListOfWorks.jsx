import { useContext, useEffect, useRef, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { TaskContext } from "../App";
import { useDrag } from "react-dnd";
const ListOfWorks = ({titleList ,  idx , task})=>{
    const ctx = useContext(TaskContext);
    const textVal = useRef();
    const [edit, setEdit] = useState(false)

    const [properties , ref] = useDrag(()=> ({
        type : "CARD",
        item : {taskList : task , idx : idx  , titleList : titleList},
        collect: (monitor) =>({
            opacity : 1
        })
        
    }))
    
    useEffect(()=>{
        if(edit)textVal.current.value = task;
    },[edit])
    const editOpenFn = ()=>{
        setEdit(!edit);
    }

    const deleteItem =()=>{
        ctx.dispatch({
            type : "delete_item",
            payload :{
                titleList,
                idx
            }
        })
    }
    
    const submitEditfn = ()=>{
        
        ctx.dispatch ({
            type: "edit_item",
            payload: {
                titleList,
                idx,
                updatedVal : textVal.current.value
            },
        })
        setEdit(!edit)
    }
    const editFn = ()=>{
        if(edit){
           return ( <div className="flex flex-col gap-4 w-[100%]">
                <textarea ref={textVal} className=" outline-none px-4"></textarea>
                <div className="flex justify-around">
                    <RxCross2 onClick={()=> setEdit(!edit)} style={{color:"red", fontSize:"20px" , cursor:"pointer"}}/>
                    <FaCheck onClick={submitEditfn} style={{color:"green" ,  fontSize:"20px",cursor:"pointer"}}/>
                </div>
            </div>)
        }
        else {
            return (<div ref={ref} className="bg-gray-700 h-[100%] w-[100%] px-2 py-1 text-white flex justify-between items-center">
            <p className=" text-xl">{task}</p>
            <div className="flex gap-2">
                <FaPencilAlt onClick={editOpenFn} style={{color:"green", fontSize:"15px",cursor:"pointer"}}/>
                <MdDeleteForever onClick={deleteItem} style={{color:"red", fontSize:"20px",cursor:"pointer"}}/>
            </div>
        </div>)
        }
    }
    return(
        editFn()
    )
}
export default ListOfWorks;