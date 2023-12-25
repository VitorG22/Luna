import { useState } from 'react';
import './popNota.css'
import useChalenderInfoContext from '../../hooks/useChalederInfoContext';
import { estruturaDaNota } from './classEstruturaDaNota';



export function PopNota() {
    var {reloadToDoList , setReloadToDoList , popIsOpen, setPopIsOpen ,dataSelecionadaNoCalendario , setDataSelecionadaNoCalendario , calendarioAnual } = useChalenderInfoContext()
    const [title, setTitle] = useState(null)
    const [description, setSDescription] = useState(null)



    function addNotaAoCalendario() {
        setPopIsOpen(!popIsOpen)

        calendarioAnual[dataSelecionadaNoCalendario.ano].calendario[dataSelecionadaNoCalendario.mes].forEach((element , index) =>{
            if(element.dia == dataSelecionadaNoCalendario.dia ){
                calendarioAnual[dataSelecionadaNoCalendario.ano].calendario[dataSelecionadaNoCalendario.mes][index].notas.push(
                    new estruturaDaNota(dataSelecionadaNoCalendario , title , description)
                )
            }
        })
        setReloadToDoList(!reloadToDoList)

    }


    const atualizaDescrição = event => {
        setSDescription(event.target.value)
    }

    const atualizaTitulo = event => {
        setTitle(event.target.value)
    }

    return (
        <div className='popNotaContainer' style={popIsOpen ? ({ display: "flex" }) : ({ display: "none" })}>
            <section className='popNota'>
                <h4 className='data'>{`${dataSelecionadaNoCalendario.ano + new Date().getFullYear()} ${dataSelecionadaNoCalendario.mes} ${dataSelecionadaNoCalendario.dia}`}</h4>
                <input type="text" id="titleInput" onChangeCapture={atualizaTitulo} />
                <textarea className='textArea' id='descriptionInput' onChangeCapture={atualizaDescrição} onKeyDown={(key) => autoResize("descriptionInput", key.code)} />
                <ul>
                    <li>
                        <button type="button" className='cancelar' onClick={() => funcSetPop("cancel")}>cancelar</button>
                    </li>
                    <li>
                        <button type="button" className='adicionar'
                            onClick={() => addNotaAoCalendario({
                                title: title,
                                description: description,
                                stateComplete: false

                            })}
                        >Adicionar</button>
                    </li>
                </ul>
            </section>
        </div>
    )
}




function autoResize(textAreaid, key) {
    var textArea = document.getElementById(textAreaid)
    while (textArea.scrollHeight > textArea.offsetHeight) {
        console.log("maior")
        textArea.rows += 1;
    }

    if (key == "Backspace") {
        textArea.rows = 1;
        autoResize(textAreaid, key = "any")
    }
}

