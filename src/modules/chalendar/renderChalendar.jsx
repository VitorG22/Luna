import { useEffect } from 'react'
import './chalendar.css'
import useChalenderInfoContext from '../../hooks/useChalederInfoContext'
import { GeraCalendarioAnual } from './geraCalendario'
import { ArrayIcons } from '../lists/icons'


export var adicionaNotaAoCalendario = null
export var anos = null

export function Chalendar() {
    let nomeDosDias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    let nomeDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    var { setIsLoaded, isLoaded, setCalendarioAnual, calendarioAnual, dataSelecionadaNoCalendario, setDataSelecionadaNoCalendario } = useChalenderInfoContext()


    useEffect(() => {
        setCalendarioAnual(GeraCalendarioAnual())
        setIsLoaded(true)

    }, [])


    function modificarAnoRenderizado(action) {
        switch (action) {
            case "+":
                setDataSelecionadaNoCalendario(
                    {
                        "dia": dataSelecionadaNoCalendario.dia,
                        "mes": dataSelecionadaNoCalendario.mes,
                        "ano": dataSelecionadaNoCalendario.ano == calendarioAnual.length - 1 ? 0 : dataSelecionadaNoCalendario.ano += 1
                    })
                break;
            case "-":
                setDataSelecionadaNoCalendario(
                    {
                        "dia": dataSelecionadaNoCalendario.dia,
                        "mes": dataSelecionadaNoCalendario.mes,
                        "ano": dataSelecionadaNoCalendario.ano == 0 ? calendarioAnual.length - 1 : dataSelecionadaNoCalendario.ano -= 1
                    })
                break;
        }

    }


    function modificarMesRenderizado(action) {
        switch (action) {
            case "+":
                if (dataSelecionadaNoCalendario.mes == 11) {
                    modificarAnoRenderizado(action)
                }
                setDataSelecionadaNoCalendario(
                    {
                        "dia": dataSelecionadaNoCalendario.dia,
                        "mes": dataSelecionadaNoCalendario.mes == 11 ? 0 : dataSelecionadaNoCalendario.mes += 1,
                        "ano": dataSelecionadaNoCalendario.ano
                    })

                break
            case "-":
                if (dataSelecionadaNoCalendario.mes == 0) {
                    modificarAnoRenderizado(action)
                }
                setDataSelecionadaNoCalendario(
                    {
                        "dia": dataSelecionadaNoCalendario.dia,
                        "mes": dataSelecionadaNoCalendario.mes == 0 ? 11 : dataSelecionadaNoCalendario.mes -= 1,
                        "ano": dataSelecionadaNoCalendario.ano
                    })
                break
        }
    }



    console.log(calendarioAnual)

    return (
        <>
            {isLoaded ?
                <main class="chalendarContainer overflow-hidden relative shadow-lg shadow-neutral-950/50  rounded-lg  bg-white/[0.002] border border-stone-200/[0.05] p-2">

                <div class ="flex justify-center align-center">
                    {/* <button type="button" onClickCapture={() => modificarAnoRenderizado("-")}>ano -</button> */}
                    {/* <button type="button" onClickCapture={() => modificarAnoRenderizado("+")}>ano +</button> */}
                    <button type="button" onClickCapture={() => modificarMesRenderizado("-")} class = " h-5 fill-neutral-300 hover:fill-neutral-700 active:fill-emerald-500" > {ArrayIcons.others.arrows.arrowLeft} </button>
                    <div class = "text-neutral-200 font-semiBold tracking-wider  flex justify-center w-1/2 ">{nomeDosMeses[dataSelecionadaNoCalendario.mes]} {dataSelecionadaNoCalendario.ano + new Date().getFullYear()}</div>
                    <button type="button" onClickCapture={() => modificarMesRenderizado("+")} class = " h-5 fill-neutral-300 hover:fill-neutral-700 active:fill-emerald-500" >{ArrayIcons.others.arrows.arrowRight} </button>
                </div>


                    <div>
                        <ul className='listNameDays'>
                            {
                                nomeDosDias.map((element) => {
                                    if(element == "Dom"){
                                        return <li className="nameDay text-rose-500">{element}</li>
                                    }else{
                                        return <li className="nameDay">{element}</li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <section className='chalendar'>
                        {
                            calendarioAnual[dataSelecionadaNoCalendario.ano].calendario[dataSelecionadaNoCalendario.mes].map((element, index) => {
                                if (element == "void") {
                                    return <button className="chalendarDay" disabled> </button>
                                }
                                return (
                                    <div className='text-neutral-600 chalendarDay chalendarDayAble  has-[:checked]:text-neutral-50 has-[:checked]:border-b-2 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-900/25 hover:text-neutral-400 hover:bg-emerald-700/10'>
                                        <input type='radio' id={`dayIndex_${index}`} onClick={() => setDataSelecionadaNoCalendario({"dia": element.dia, "mes": dataSelecionadaNoCalendario.mes, "ano": dataSelecionadaNoCalendario.ano })} className="chalendarDayInput" name={"day"} defaultChecked={element.dia == dataSelecionadaNoCalendario.dia ? (true) : (false)}></input>
                                        <label htmlFor={`#dayIndex_${index}`}>{element.dia}</label>
                                    </div>
                                )
                            })
                        }
                    </section>

                </main>
                : <div>dofshdifjkshfkufh</div>}
        </>
    )
}






