import { useContext } from "react"
import useChalenderInfoContext from "../../hooks/useChalederInfoContext"
import { ArrayIcons } from "../lists/icons"

export default function ToDoItem({ element }) {
    var { setReloadToDoList , reloadToDoList } = useChalenderInfoContext()
    
    function checkboxClick(){
        element.stateComplete = !element.stateComplete
        setReloadToDoList(!reloadToDoList)
    }

    if (element.stateComplete == false) {
        return (<>
            <li className="  flex font-bold h-[100%] min-h-20 justify-between items-center border-b-2 border-amber-400 rounded-xl overflow-hidden p-2 transition duration-500 ease-in-out ">
                <div class="w-4/5">
                    <h5 class=" text-amber-400 transition duration-500 ease-in-out">{element.title}</h5>
                    <p className=" font-thin  text-xs overflow-scroll max-h-20 scroll-none ">{element.description}</p>
                </div>
                <div class=" flex flex-row items-center gap-4 ">
                    <button className="fill-amber-400  transition duration-500 ease-in-out">{ArrayIcons.others.noteIcons.peen} </button>
                    <button className="fill-amber-400  transition duration-500 ease-in-out">{ArrayIcons.others.noteIcons.delete} </button>
                    <button className="fill-amber-400  transition duration-500 ease-in-out" onClick={() => checkboxClick()}>{ArrayIcons.others.noteIcons.unChecked} </button>
                </div>
            </li >
        </>)
    }else{
        return (<>
            <li className=" flex font-bold h-[100%] min-h-20 justify-between items-center border-b-2 rounded-xl overflow-hidden p-2 border-emerald-500 transition duration-500 ease-in-out ">
                <div class="w-4/5">
                    <h5 class="text-emerald-500 transition duration-500 ease-in-out">{element.title}</h5>
                    <p className=" font-thin  text-xs overflow-scroll max-h-20 scroll-none ">{element.description}</p>
                </div>
                <div class=" flex flex-row items-center gap-4 ">
                    <button className="fill-emerald-900  transition duration-500 ease-in-out">{ArrayIcons.others.noteIcons.peen} </button>
                    <button className="fill-emerald-500  transition duration-500 ease-in-out">{ArrayIcons.others.noteIcons.delete} </button>
                    <button className="fill-emerald-500  transition duration-500 ease-in-out" onClick={() => checkboxClick()}>{ArrayIcons.others.noteIcons.checked} </button>
                </div>
            </li >
        </>)
    }
}