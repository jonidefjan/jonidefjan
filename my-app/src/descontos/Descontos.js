import React, { Component } from 'react'
import DescData from '../data/descontos.json'

import DescontoTotal from './DescontoTotal'

class Descontos extends Component {
  carrinho () {

  }

  render () {
    return (
      <div className='desc'>
        {DescData.map((DescontosDetail, index) => {
        	return 	<DescontoTotal desconto={DescontosDetail} key={`desconto-key ${index}`} />
        })}
      </div>
    )
  }
}

export default Descontos
