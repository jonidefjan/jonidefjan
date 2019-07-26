import React from 'react'
import NavbarFeatures from './components/NavbarFeatures'
import ListaDeLivros from './livros/ListaDeLivros'
import Descontos from './descontos/Descontos'
import './App.css'

function App () {
  return (

    <div className='App'>
      <NavbarFeatures />
      <ListaDeLivros />
      <Descontos />
    </div>

  )
}

export default App
