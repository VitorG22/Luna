import { useState } from 'react';
import './popNota.css'
import useChalenderInfoContext from '../../hooks/useChalederInfoContext';
import { estruturaDaNota } from './classEstruturaDaNota';
import { ArrayIcons } from '../lists/icons';


export function PopNota() {
    let nomeDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
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
        <div class=' flex items-center justify-center fixed top-0 left-0 h-full w-full bg-black/[0.4] backdrop-blur-[1px] z-10' style={popIsOpen ? ({ display: "flex" }) : ({ display: "none" })}>
            <section class=' absolute px-3 py-5 rounded flex flex-col gap-3 items-center justify-center shadow-lg shadow-neutral-950/50  rounded-lg  bg-neutral-900 border border-stone-200/[0.05]' >
                <button type='button' class ="absolute p-2 top-1 right-2 font-bold  fill-neutral-700 hover:fill-neutral-200/50" onClick={() => setPopIsOpen(!popIsOpen)} >{ArrayIcons.others.noteIcons.xIcon}</button>
                <h4 class='text-xl font-bold text-neutral-200'>{` ${dataSelecionadaNoCalendario.dia}  ${nomeDosMeses[dataSelecionadaNoCalendario.mes]} ${dataSelecionadaNoCalendario.ano + new Date().getFullYear()}`}</h4>
                <input type="text" id="titleInput" placeholder='Titulo' onChangeCapture={atualizaTitulo}  class ="bg-inherit border-b-2 border-emerald-500 rounded px-2 pt-2 pb-1 text-neutral-200 placeholder:text-neutral-500  focus:bg-neutral-800 outline-none w-full"/>
                <textarea placeholder='Descrição' class ="resize-none bg-inherit border-b-2 border-emerald-500 rounded px-2 pt-2 pb-1 text-neutral-200 placeholder:text-neutral-500  focus:bg-neutral-800 outline-none w-full " rows={1} id='descriptionInput' onChangeCapture={atualizaDescrição} onKeyDown={(key) => autoResize("descriptionInput", key.code)} />
                <ul class= "flex list-none gap-2 ">
                    <li>
                        <button type="button" className=' adicionar py-1.5 px-5 text-neutral-700 border border-transparent rounded-3xl hover:border-red-500  hover:text-red-500 active:bg-red-500 active:border-transparent active:text-neutral-900 transition duration-500 ease-in-out' onClick={() => setPopIsOpen(!popIsOpen)}>Cancelar</button>
                    </li>
                    <li>
                        <button type="button" className=' py-1.5 px-5 text-emerald-500 border border-transparent rounded-3xl hover:border-emerald-700  hover:text-emerald-500 active:bg-neutral-200 active:border-neutral-200 transition duration-500 ease-in-out'
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

