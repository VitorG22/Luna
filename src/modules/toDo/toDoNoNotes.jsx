import { ArrayIcons } from "../lists/icons"
import { useState } from "react"
import "./toDo.css"

export default function ToDoNoNotes(){{

    var [ramdomnumber, setRamdomnumber] = useState(Math.floor(Math.random() *(10 - 0) ))
    var [imageToRender , setImageToRender ]= useState(ArrayIcons.others.magicIcons[ramdomnumber ]) 

    console.log(imageToRender)
    return(<>
        <div class = "flex flex-col h-[30vh] items-center justify-around">
                <div class ="imgNotNotes h-[90%] aspect-square bg-emerald-600 bg-cover" style={{
                                    WebkitMask:`url(${imageToRender}) center`,
                                    WebkitMaskSize:"100%",
                                    WebkitMaskRepeat:"no-repeat"
                                }}></div>
            <h3 class = "font-bold text-emerald-500 ">Do you want to see a magic trick?</h3>
        </div>
    </>)
}}