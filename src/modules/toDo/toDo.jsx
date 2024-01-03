import "./toDo.css"
import { ArrayIcons } from "../lists/icons"
import { useState, useEffect } from "react"
import useChalenderInfoContext from "../../hooks/useChalederInfoContext"
import ToDoCheckBox from "./toDoItem"
import ToDoItem from "./toDoItem"
import ToDoNoNotes from "./toDoNoNotes"

var tema = "light"

const nomeDosMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]



export function ToDo() {
    var { reloadToDoList, setReloadToDoList, isLoaded, dataSelecionadaNoCalendario, calendarioAnual, setPopIsOpen, popIsOpen } = useChalenderInfoContext()
    var [notasParaSeremRenderizadas, setNotas] = useState([])





    useEffect(() => {
        if (isLoaded) {

            var novaNota = []
            calendarioAnual[dataSelecionadaNoCalendario.ano].calendario[dataSelecionadaNoCalendario.mes].forEach(element => {
                if (element.dia == dataSelecionadaNoCalendario.dia) {
                    element.notas.forEach((notasDoDia) => {
                        novaNota.push(notasDoDia)

                    })

                }
            });
            setNotas(novaNota)
            console.log(notasParaSeremRenderizadas) 
        }
    }, [dataSelecionadaNoCalendario, reloadToDoList])







    return (
        <>
            {isLoaded ?
                <section className="toDoContainer  overflow-hidden relative shadow-lg shadow-neutral-950/50  rounded-lg  bg-white/[0.002] border border-stone-200/[0.05] p-2 ">


                    <article className="toDoHeader">
                        <h1>{`${dataSelecionadaNoCalendario.dia} ${nomeDosMeses[dataSelecionadaNoCalendario.mes]} ${dataSelecionadaNoCalendario.ano + new Date().getFullYear()}`}</h1>
                        <button onClick={() => setPopIsOpen(!popIsOpen)} class="buttonAdd text-emerald-500 border border-emerald-500 rounded-3xl hover:border-emerald-700/0 hover:bg-emerald-500 hover:text-neutral-900 active:bg-neutral-200 active:border-neutral-200 transition duration-500 ease-in-out">+ Nova Nota </button>
                    </article>
                    {notasParaSeremRenderizadas.length == 0 ? (
                        <ToDoNoNotes />)
                        : (
                            <ul className="toDoList">
                                {notasParaSeremRenderizadas.map((element, index) => {
                                    return (
                                        <ToDoItem element={element} index={index} />
                                    )
                                })}
                            </ul>)
                    }

                </section>
                : <div>loading</div>}
        </>
    )
}