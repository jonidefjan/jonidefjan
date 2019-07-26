import React, { Component } from 'react'

class DetalhesLivros extends Component {
  render () {
    const desconto = this.props.desconto
    return (
      <div>
        <h2>{desconto.qtd}</h2>
        <h3>{desconto.desc}</h3>
      </div>

    )
  }
}

export default DetalhesLivros
