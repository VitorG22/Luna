import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './modules/header/header.jsx'
import { Chalendar, adicionaNotaAoCalendario } from './modules/chalendar/renderChalendar.jsx'
import { ToDo } from './modules/toDo/toDo.jsx'
import { PopNota } from './modules/notas/popNota.jsx'

export function App() {
  var [calendarioAnual , setCalendarioAnual] = useState([])
  var dataAtualDoSistema = new Date()
  var [dataSelecionadaNoCalendario ,setDataSelecionadaNoCalendario ] = useState({dia : dataAtualDoSistema.getDate() , mes : dataAtualDoSistema.getMonth() , ano : 0})
  const [popIsOpen, setPopIsOpen] = useState(false)

  function setPopIsOpenTrue() {
    setPopIsOpen(true)
  }
  function setPopIsOpenFalse(props) {
    console.log(props.action)
    switch (props.action) {
      case "cancel":
        console.log("cancel")
        break
      case "add":
        console.log("add")
        noteGenerate(props)
        break
    }

    setPopIsOpen(false)
  }




  function noteGenerate(props) {
    var nota = {
      date: props.date,
      title: props.title,
      descripition: props.description,
      stateComplete: props.stateComplete,
    }
    adicionaNotaAoCalendario(nota)
    console.log(nota)
  }
  
  function funcSetDiaSelecionadoNoCalendario(dia ,mes , ano){
    setDataSelecionadaNoCalendario({"dia" : dia , "mes" : mes , "ano" : ano})
  }


  return (
    <main className='mainContainer'>
      <PopNota dataSelecionada = {dataSelecionadaNoCalendario} isOpen={popIsOpen} funcSetPop={setPopIsOpenFalse} />
      <Header className="header" />
      <Chalendar className="chalendar" functSetCalendarioAnual = {setCalendarioAnual} funcSetDiaSelecionadoNoCalendario = {funcSetDiaSelecionadoNoCalendario}/>
      <ToDo classname="toDo" func={setPopIsOpenTrue}  dataSelecionada = {dataSelecionadaNoCalendario} />
    </main>
  )
}

