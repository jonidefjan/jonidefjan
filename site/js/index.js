const livrosData = [
  {
    id: 0,
    titulo: 'O Hobbit',
    autor: 'J R R Tolkien',
    preco: 40.00,
    capa: './img/o hobbit.png',
    quantidade: 0

  },
  {
    id: 1,
    titulo: 'Senhor Dos Aneis',
    autor: 'J R R Tolkien',
    preco: 40.00,
    capa: './img/o senho dos aneis.jpg',
    quantidade: 0

  },
  {
    id: 2,
    titulo: 'O Silmarillion',
    autor: 'J R R Tolkien',
    preco: 40.00,
    capa: './img/o silmarillion.jpg',
    quantidade: 0

  },
  {
    id: 3,
    titulo: 'A Arte da Guerra',
    autor: 'Sun Tzu',
    preco: 40.00,
    capa: './img/a arte da guerra.jpg',
    quantidade: 0

  },
  {
    id: 4,
    titulo: 'O Milagre Da Manhã',
    autor: 'Elrod,Hal',
    preco: 40.00,
    capa: './img/o milagre da manha.jpg',
    quantidade: 0

  },
  {
    id: 5,
    titulo: 'Do Mil Ao Milhão',
    autor: 'Nigro,Thiago',
    preco: 40.00,
    capa: './img/do mil ao milhao.jpg',
    quantidade: 0

  },
  {
    id: 6,
    titulo: '1000 lugares para conhecer antes de morrer',
    autor: 'Patricia Schultz',
    preco: 40.00,
    capa: './img/1000 lugares para conhecer antes de morrer.jpg',
    quantidade: 0

  },
  {
    id: 7,
    titulo: 'MILLER ANESTESIA',
    autor: 'RONALD D. MILLER MD MS',
    preco: 40.00,
    capa: './img/MILLER ANESTESIA.jpg',
    quantidade: 0
  }
]

const descData = [
  {
    qtd: 2,
    desc: 0.05
  },
  {
    qtd: 3,
    desc: 0.1
  },
  {
    qtd: 4,
    desc: 0.2
  },
  {
    qtd: 5,
    desc: 0.25
  }
]

let total
let quantidadeTotal = 0
let precoTotal = 0
let unidade = 0

function adicionar (num) {
  let add
  unidade = livrosData[num].quantidade
  add = livrosData[num].id
  unidade = unidade + 1
  quantidadeTotal = quantidadeTotal + 1
  precoTotal = precoTotal + livrosData[num].preco
  livrosData[num].quantidade = unidade
  return add, unidade, quantidadeTotal, precoTotal
}

function remover (num) {
  let add
  unidade = livrosData[num].quantidade
  add = livrosData[num].id
  if (unidade > 0) {
 	unidade = unidade - 1
 	quantidadeTotal = quantidadeTotal - 1
 	precoTotal = precoTotal - livrosData[num].preco
  	livrosData[num].quantidade = unidade
  }
  return add, unidade, quantidadeTotal, precoTotal
}

function Livros () {
  return `
  ${alert(livrosData[1].titulo)}
  `
}

function desconto () {
  if (quantidadeTotal == 1) {
    return precoTotal
  }

  let data = descData[descData.length - 1]

  for (let i = 0; i < descData.length - 1; i++) {
    if (quantidadeTotal === data.qtd) {
      data = descData[i]
      break
    }
  }

  return precoTotal - precoTotal * data.desc
}

function livroTemplate (livro) {
  return `
	  <div id="${livro.id}" class="col-3 px-1">
	    <div class="card mb-2">
	    	<img class="card-img-top" src="${livro.capa}" alt="${livro.titulo}">
	      	<div class="card-body text-body">
	        <h5 class="card-title">${livro.titulo}</h5>
	        <p class="card-text">${livro.autor}</p>
	        <p mx-auto>R$: ${livro.preco}</p>
	        <button type="button" id="r${livro.id}" class="btn btn-dark" onclick="remover(${livro.id})">Remover</button>
			
	        <button type="button" id="a${livro.id}" class="btn btn-dark" onclick="adicionar(${livro.id})")>Adicionar</button>
	        
	      </div>
	    </div>
	  </div>
`
}

function carrinhoTemplate (livro) {
  return `
  	<div class="border-bottom border-info border-bottom mb-2 valida card">
	  <ul id="c${livro.id}" class="list-group-flush">
		<li class="list-group-item">Título: ${livro.titulo}</li>
		<li class="list-group-item">R$: ${livro.preco}</li>
		<li class="list-group-item">
			<button type="button" id="rc${livro.id}" class="btn btn-dark" onclick="remover(${livro.id})">
				<i class="fas fa-minus" onclick="remover(${livro.id})"></i>
			</button>
			<button type="button" id="ac${livro.id}" class="btn btn-dark" onclick="adicionar(${livro.id})">
				<i class="fas fa-plus" onclick="adicionar(${livro.id})"></i>
			</button>

		</li>
		<li class="list-group-item">
			<p class="h4" >quantidade: <span class="unidades h2 px-2" id="q${livro.id}">0</span></p>
		</li>
	  </ul>
	</div>
`
}

document.getElementById('final').innerHTML = `
	<div class="card">
		<p class="h5"> subtotal sem desconto: <em id="subTotal"></em></h1>
		<h1>total com desconto: <em id="carrinhoFinal"></em></h1>
	</div>
`

document.getElementById('cart').innerHTML = `
	${livrosData.map(carrinhoTemplate).join('')}

`

document.getElementById('prateleira').innerHTML = `
	${livrosData.map(livroTemplate).join('')}

`
