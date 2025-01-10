import { createContext, useReducer } from 'react'
import './App.css'
import Cardlists from './components/CardLists'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
 export const TaskContext = createContext();

function App() {
  const iniData = {
    kamBakiHai:[],
    kamChlRaha:[],
    kamKhtm:[],
  }
  const reducerFn = (state , {type , payload})=>{
    switch (type){
      case "Add_item":
         { const { titleList } = payload;
        const typeofList = state[titleList];
        const oldList = [...typeofList];
        oldList.push(payload.text)
        return{
          // [state.titleList] : [...[payload.text] , ]
          ...state,
          [payload.titleList] : oldList
          // [payload.titleList] : [...[state.titleList] , payload.text]
        }; } 
      case "edit_item" :
           { const typeOfListss = state[payload.titleList];
            typeOfListss.splice(payload.idx , 1 , payload.updatedVal)
            console.log(typeOfListss);
        return{
          ...state,
          [payload.titleList] : typeOfListss
        }; } 
      case "delete_item":
        const deleteItem = state[payload.titleList];
        const nayaItem = deleteItem.filter((ele , index) => index != payload.idx)
        return{
          ...state,
          [payload.titleList] : nayaItem
        };
      case "move_item":
        { const {fromList ,toList  , idx} = payload;
        const copyOfFromList = [...state[fromList]]
        const copyOftoList = [...state[toList]]
        copyOftoList.push(copyOfFromList[idx]);
        copyOfFromList.splice(idx , 1)

        return{
          ...state,
          [payload.fromList] : copyOfFromList,
          [payload.toList] : copyOftoList
        }; }
      default :
        return state;
    }
  }

  const [state , dispatch] = useReducer(reducerFn , iniData)

  return (
    <>
     <TaskContext.Provider value={{state , dispatch}} >
        <DndProvider backend={HTML5Backend}>
          <Cardlists/>
        </DndProvider>
     </TaskContext.Provider>
    </>
  )
}

export default App
