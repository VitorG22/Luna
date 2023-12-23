import { useState } from 'react';
import './popNota.css'



export function PopNota({dataSelecionada, isOpen , funcSetPop}) {
    
    const [title , setTitle ] = useState(null)
    const [description , setSDescription ] = useState(null)

    const atualizaDescrição = event => {
        setSDescription(event.target.value)
        console.log(description)
    }
    
    const atualizaTitulo = event => {
        setTitle(event.target.value)
        console.log(title)
    }

    console.log(dataSelecionada)
    return (
        <div className='popNotaContainer'  style={isOpen? ({display: "flex"}):({display: "none"})}>
            <section className='popNota'>
                <h4 className='data'>{`${dataSelecionada.ano + new Date().getFullYear()} ${dataSelecionada.mes} ${dataSelecionada.dia}`}</h4>
                <input type="text" id = "titleInput" onChangeCapture={ atualizaTitulo}/>
                <textarea  className='textArea'id='descriptionInput' onChangeCapture = {atualizaDescrição} onKeyDown = {(key) => autoResize("descriptionInput", key.code)} />
        <ul>
            <li>
                <button type="button" className='cancelar' onClick={() => funcSetPop("cancel")}>cancelar</button>
            </li>
            <li>
                <button type="button" className='adicionar' 
                    onClick={() => funcSetPop({
                        action : "add", 
                        title : title ,
                        date : {"dia" : dataSelecionada.dia , "mes" : dataSelecionada.mes , "ano" : dataSelecionada.ano} , 
                        description : description ,
                        stateComplete : false
                        
                    })}
                    >Adicionar</button>
            </li>
        </ul>
            </section>
        </div>
    )
}




function autoResize(textAreaid , key){
    var textArea = document.getElementById(textAreaid)
    while(textArea.scrollHeight > textArea.offsetHeight){
        console.log("maior")
        textArea.rows += 1 ; 
    }

    if(key == "Backspace"){
        textArea.rows = 1;
        autoResize(textAreaid , key = "any")
    }
}

