import "./toDo.css"
import { ArrayIcons } from "../lists/icons"
import { anos } from "../chalendar/renderChalendar"
import { useState, useEffect } from "react"

var tema = "light"

const nomeDosMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]



export function ToDo({ func, dataSelecionada }) {
    console.log(anos)

    var [notas, setNotas] = useState(["teste1", "teste2"])


    useEffect(() => {
        var novaNota = []
            anos[dataSelecionada.ano].calendario[dataSelecionada.mes].forEach(element => {
                if(element.dia == dataSelecionada.dia){
                    element.notas.forEach((notasDoDia) =>{
                        novaNota.push(notasDoDia.title)

                    })
                }
            });
        setNotas(novaNota)
    }, [dataSelecionada])
    





    return (
        <section className="toDoContainer">
            <article className="toDoHeader">
                <h1>{`${dataSelecionada.dia} ${nomeDosMeses[dataSelecionada.mes]} ${dataSelecionada.ano + new Date().getFullYear()}`}</h1>
                <button className="buttonAdd" onClick={() => func()}>+ New Note </button>
            </article>
            <ul className="toDoList">
                {notas.map(element => {return <div>{element}</div>})}


                <li className="listItem">
                    <div>
                        <h5>text</h5>
                        <p className="itemDescription">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti numquam dolores quam, veritatis earum laboriosam blanditiis ea sequi nobis laborum debitis ut aperiam dignissimos, illum soluta dolore necessitatibus error deserunt.
                        </p>
                    </div>
                    <div className="itemButtons">
                        <button className="button"><img className="buttonIcon" src={ArrayIcons.others.symbol[tema].unchecked} /></button>
                        <button className="button"><img className="buttonIcon" src={ArrayIcons.others.symbol[tema].checked} /></button>
                    </div>
                </li>




            </ul>
        </section>
    )
}