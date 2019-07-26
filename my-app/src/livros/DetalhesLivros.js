import React, { Component } from 'react'

class DetalhesLivros extends Component {
  constructor (props) {
    super(props)
    this.RemovidoDoCarrinho = this.RemovidoDoCarrinho.bind(this)
    this.AdicionadoAoCarrinho = this.AdicionadoAoCarrinho.bind(this)
  }

  RemovidoDoCarrinho (event) {
    event.preventDefault()
    alert(this.props)
    console.log(this.props)
  }

  AdicionadoAoCarrinho (event) {
    event.preventDefault()
    alert(this.props)
    console.log(this.props)
  }

  render () {
    const { livro } = this.props
    return (
      <div className='livro'>
        <h2>{livro.titulo}</h2>
        <h3>{livro.autor}</h3>
        <img src={livro.capa} alt='{livro.titulo}' className='capa' />
        <div>
          <span>{livro.preco}</span><br />
          <span>Remover do carrinho: </span>
          <span id='menos' onClick={this.RemovidoDoCarrinho}> <strong>-</strong> </span><br />
          <span>Adicionar ao carrinho: </span>
          <span id='mais' onClick={this.AdicionadoAoCarrinho}> <strong>+</strong> </span>
        </div>
      </div>

    )
  }
}

export default DetalhesLivros
