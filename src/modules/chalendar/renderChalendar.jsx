import { useEffect, useState } from 'react'
import './chalendar.css'
import { calendarioAnual } from './geraCalendario'


export var adicionaNotaAoCalendario = null
export var anos = null

export function Chalendar({ funcSetDiaSelecionadoNoCalendario }) {
    let dataAtualDoSistema = new Date()
    let [anoRenderizado, setAnoRenderizado] = useState(0)
    let [mesRenderizado, setMesRenderizado] = useState(dataAtualDoSistema.getMonth())
    let [diaSelecionado, setDiaSelecionado] = useState(dataAtualDoSistema.getDate())



    function modificarAnoRenderizado(action) {
        switch (action) {
            case "+":
                setAnoRenderizado(anoRenderizado == 4 ? 0 : anoRenderizado += 1)
                break;
            case "-":
                setAnoRenderizado(anoRenderizado == 0 ? 4 : anoRenderizado -= 1)
                break;
        }

    }


    function modificarMesRenderizado(action) {
        switch (action) {
            case "+":
                setMesRenderizado(mesRenderizado == 11 ? 0 : mesRenderizado += 1)
                break
            case "-":
                setMesRenderizado(mesRenderizado == 0 ? 11 : mesRenderizado -= 1)
                break
        }
    }

    function modificaDiaSelecionado(dia) {
        setDiaSelecionado(dia)
    }

    useEffect(() => {
        funcSetDiaSelecionadoNoCalendario(diaSelecionado, mesRenderizado, anoRenderizado)
    }, [diaSelecionado, mesRenderizado, anoRenderizado])


    // const [anos, setAnos] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let nomeDosDias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    useEffect(() => {
        anos = calendarioAnual()
        // setAnos(calendarioAnual())
        setIsLoading(false)
        var dataSelecionadaNoCalendario = new Date()
        console.log(dataSelecionadaNoCalendario)

    }, [])

    adicionaNotaAoCalendario = (prop) => {
        var novoAnos = anos
        console.log(prop)
        novoAnos[prop.date.ano].calendario[prop.date.mes].forEach((element, index) => {
            if (element.dia == prop.date.dia) {
                novoAnos[prop.date.ano].calendario[prop.date.mes][index].notas.push(
                    {
                        date: prop.date,
                        title: prop.title,
                        descripition: prop.descripition,
                        stateComplete: prop.stateComplete,
                    }
                )
            }
        });

        anos = novoAnos
        console.log(anos)
    }



    return (
        <>
            {isLoading ? (<div>Loading</div>) : (

                <main className="chalendarContainer">
                    <nav>
                        <ul className='listNameDays'>
                            {
                                nomeDosDias.map((element) => {
                                    return <li className="nameDay">{element}</li>
                                })
                            }
                        </ul>
                    </nav>
                    <section className='chalendar'>
                        {
                            anos[anoRenderizado].calendario[mesRenderizado].map((element, index) => {
                                if (element == "void") {
                                    return <button className="chalendarDay" disabled> </button>
                                }
                                return (
                                    <div className='chalendarDay chalendarDayAble'>
                                        <input type='radio' id={`dayIndex_${index}`} onClick={() => modificaDiaSelecionado(element.dia)} className="chalendarDayInput" name={"day"} defaultChecked={element.dia == diaSelecionado ? (true) : (false)}></input>
                                        <label htmlFor={`#dayIndex_${index}`}>{element.dia}</label>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <button type="button" onClickCapture={() => modificarAnoRenderizado("+")}>ano +</button>
                    <button type="button" onClickCapture={() => modificarAnoRenderizado("-")}>ano -</button>
                    <button type="button" onClickCapture={() => modificarMesRenderizado("+")}>mes +</button>
                    <button type="button" onClickCapture={() => modificarMesRenderizado("-")}>mes -</button>
                </main>
            )}
        </>
    )
}






