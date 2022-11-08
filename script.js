let listPainting = []
let listFigure = []

function createPaintingItem(imagemProduto, nomeProduto, valorProduto){
    let item = {
        imagem:imagemProduto,
        nome:nomeProduto,
        valor:valorProduto
    }
    listPainting.push(item)
    return listPainting
}

createPaintingItem('./assets/img/painting/clock.jpg', 'Relógio', 'R$ 50,00')
createPaintingItem('./assets/img/painting/gamepad.jpg', 'Controle', 'R$ 50,00')
createPaintingItem('./assets/img/painting/personagem.jpg', 'C-3PO', 'R$ 50,00')

for(let i = 0; i<7; i++){
    createPaintingItem('./assets/img/none.jpg', 'Nome do item', 'Valor do item')   
}

function createActionItem(imagemProduto, nomeProduto, valorProduto, ){
    let item = {
        imagem:imagemProduto,
        nome:nomeProduto,
        valor:valorProduto
    }
    listFigure.push(item)
    return listFigure
}

createActionItem('./assets/img/actions/animewoman.jpg', 'Anime Garora', 'R$ 100,00')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg', 'Goku', 'R$ 100,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg', 'Baby Yoda', 'R$ 100,00')

for(let i = 0; i<7; i++){
    createActionItem('./assets/img/none.jpg', 'Nome do item', 'Valor do item')  
}

let secaoListPainting = document.getElementsByClassName('secao_painting')[0]
let secaoListFigures = document.getElementsByClassName('secao_figure')[0]

function listarItem (listaProduto, seletor){
    for (let i = 0; i<listaProduto.length; i++){
        criarItem(listaProduto[i], seletor)
    }
}

function criarItem (objeto,seletor){
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('h2')
    let valor = document.createElement('p')
    elementoLista.className = 'produto'
    imagem.className = 'imagem_produto'
    imagem.src = objeto.imagem
    nome.className = 'nome_produto'
    nome.innerText = objeto.nome
    valor.className = 'valor_produto'
    valor.innerText = objeto.valor
    elementoLista.appendChild(imagem)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    if(seletor.toLowerCase() == 'painting'.toLowerCase()){
        secaoListPainting.appendChild(elementoLista)
    }if(seletor.toLowerCase() == 'figure'.toLowerCase()){
        secaoListFigures.appendChild(elementoLista)
    }
}

listarItem(listPainting, 'painting')
listarItem(listFigure, 'figure')