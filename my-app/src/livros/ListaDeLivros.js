import React, { Component } from 'react'
import LivrosData from '../data/livros.json'

import DetalhesLivros from './DetalhesLivros'

class ListaDeLivros extends Component {
  render () {
    return (
      <div className='prateleira'>
        {LivrosData.map((livroDetail, index) => {
        	return 	<DetalhesLivros livro={livroDetail} key={`livros-key ${index}`} />
        })}
      </div>
    )
  }
}

export default ListaDeLivros
