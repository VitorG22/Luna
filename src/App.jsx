import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './modules/header/header.jsx'
import { Chalendar, adicionaNotaAoCalendario } from './modules/chalendar/renderChalendar.jsx'
import { ToDo } from './modules/toDo/toDo.jsx'
import { PopNota } from './modules/notas/popNota.jsx'
import { chalenderInfoContext } from './contexts/contexts.jsx'

export function App() {
  var [calendarioAnual, setCalendarioAnual] = useState([])
  var dataAtualDoSistema = new Date()
  var [dataSelecionadaNoCalendario, setDataSelecionadaNoCalendario] = useState({ dia: dataAtualDoSistema.getDate(), mes: dataAtualDoSistema.getMonth(), ano: 0 })
  var [isLoaded , setIsLoaded] = useState(false)
  var [toDoIsLoaded , setToDoIsLoaded] = useState(false)
  var [popIsOpen, setPopIsOpen] = useState(false)
  var [ reloadToDoList , setReloadToDoList] = useState(true)




  return (
    <main className='mainContainer'>
      <chalenderInfoContext.Provider value = {{dataSelecionadaNoCalendario , setDataSelecionadaNoCalendario, calendarioAnual , setCalendarioAnual , isLoaded , setIsLoaded , setPopIsOpen, popIsOpen , toDoIsLoaded , setToDoIsLoaded , reloadToDoList , setReloadToDoList}}>
        <PopNota />
        <Header className="header" />
        <Chalendar className="chalendar" functSetCalendarioAnual={setCalendarioAnual}  />
        <ToDo classname="toDo"   />
      </chalenderInfoContext.Provider>
    </main>
  )
}

