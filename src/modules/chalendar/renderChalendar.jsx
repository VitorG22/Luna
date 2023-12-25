import { useEffect } from 'react'
import './chalendar.css'
import useChalenderInfoContext from '../../hooks/useChalederInfoContext'
import { GeraCalendarioAnual } from './geraCalendario'

export var adicionaNotaAoCalendario = null
export var anos = null

export function Chalendar() {
    let nomeDosDias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    var { setIsLoaded , isLoaded, setCalendarioAnual, calendarioAnual, dataSelecionadaNoCalendario, setDataSelecionadaNoCalendario } = useChalenderInfoContext()


    useEffect(() => {
        setCalendarioAnual(GeraCalendarioAnual())
        setIsLoaded(true)

    } , [])


    function modificarAnoRenderizado(action) {
        switch (action) {
            case "+":
                setDataSelecionadaNoCalendario(
                    {"dia" : dataSelecionadaNoCalendario.dia ,
                    "mes" : dataSelecionadaNoCalendario.mes ,
                    "ano" : dataSelecionadaNoCalendario.ano == calendarioAnual.length-1 ? 0: dataSelecionadaNoCalendario.ano+=1}) 
                break;
            case "-":
                setDataSelecionadaNoCalendario(
                    {"dia" : dataSelecionadaNoCalendario.dia ,
                    "mes" : dataSelecionadaNoCalendario.mes ,
                    "ano" : dataSelecionadaNoCalendario.ano == 0? calendarioAnual.length-1: dataSelecionadaNoCalendario.ano-=1}) 
                break;
        }

    }


    function modificarMesRenderizado(action) {
        switch (action) {
            case "+":
                setDataSelecionadaNoCalendario(
                    {"dia" : dataSelecionadaNoCalendario.dia ,
                    "mes" : dataSelecionadaNoCalendario.mes == 11 ? 0 : dataSelecionadaNoCalendario.mes+=1,
                    "ano" : dataSelecionadaNoCalendario.ano }) 
                break
            case "-":
                setDataSelecionadaNoCalendario(
                    {"dia" : dataSelecionadaNoCalendario.dia ,
                    "mes" : dataSelecionadaNoCalendario.mes == 0 ? 11 : dataSelecionadaNoCalendario.mes-=1,
                    "ano" : dataSelecionadaNoCalendario.ano })
                break
        }
    }



    console.log(calendarioAnual)

    return (
        <>
            {isLoaded ?
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
                            calendarioAnual[dataSelecionadaNoCalendario.ano].calendario[dataSelecionadaNoCalendario.mes].map((element, index) => {
                                if (element == "void") {
                                    return <button className="chalendarDay" disabled> </button>
                                }
                                return (
                                    <div className='chalendarDay chalendarDayAble'>
                                        <input type='radio' id={`dayIndex_${index}`} onClick={() => setDataSelecionadaNoCalendario({"dia" : element.dia , "mes" : dataSelecionadaNoCalendario.mes , "ano" : dataSelecionadaNoCalendario.ano }) } className="chalendarDayInput" name={"day"} defaultChecked={element.dia == dataSelecionadaNoCalendario.dia ? (true) : (false)}></input>
                                        <label htmlFor={`#dayIndex_${index}`}>{element.dia}</label>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <button type="button" onClickCapture={() => modificarAnoRenderizado("-")}>ano -</button>
                    <button type="button" onClickCapture={() => modificarAnoRenderizado("+")}>ano +</button>
                    <button type="button" onClickCapture={() => modificarMesRenderizado("-")}>mes -</button>
                    <button type="button" onClickCapture={() => modificarMesRenderizado("+")}>mes +</button>
                    
                </main>
                : <div>dofshdifjkshfkufh</div>}
        </>
    )
}






