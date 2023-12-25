import "./toDo.css"
import { ArrayIcons } from "../lists/icons"
import { useState, useEffect } from "react"
import useChalenderInfoContext from "../../hooks/useChalederInfoContext"

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
        }
    }, [dataSelecionadaNoCalendario, reloadToDoList])







    return (
        <>
            {isLoaded ?
                <section className="toDoContainer">
                    <article className="toDoHeader">
                        <h1>{`${dataSelecionadaNoCalendario.dia} ${nomeDosMeses[dataSelecionadaNoCalendario.mes]} ${dataSelecionadaNoCalendario.ano + new Date().getFullYear()}`}</h1>
                        <button className="buttonAdd" onClick={() => setPopIsOpen(!popIsOpen)}>+ New Note </button>
                    </article>
                    <ul className="toDoList">
                        {notasParaSeremRenderizadas.map(element => {
                            return (
                                <li className="listItem">
                                    <div>
                                        <h5>{element.title}</h5>
                                        <p className="itemDescription">{element.description}</p>
                                    </div>
                                    <div className="itemButtons">
                                        <button className="button"><img className="buttonIcon" src={ArrayIcons.others.symbol[tema].unchecked} /></button>
                                        <button className="button"><img className="buttonIcon" src={ArrayIcons.others.symbol[tema].checked} /></button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                : <div>loading</div>}
        </>
    )
}