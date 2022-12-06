'use strict'

const testeCards =
[
    {

        nome: 'Pizza 1',
        imagem: '../img/add.png'

    },
    {

        nome: 'Pizza 2',
        imagem: '../img/att.png'

    }
]

const createCard = (dados) => {

        const ul = document.querySelector('ul')
        const div = document.createElement('div')
        div.classList.add('div-container')
        let split = item.split('-')
        div.innerHTML = `
            <li>    
                <h3>${split[0]}</h3>
               
                <div >${split[1]}</div>
            </li>`
        ul.appendChild(div)
    
}
testeCards.forEach(createCard)


    // const infosImg = document.createElement("div")
    // infosImg.classList.add("infos-img")
    
    // const infos = document.createElement("div")
    // infos.classList.add("infos")

    // const div = document.createElement("div")
    // div.classList.add("card")

    // const ul = document.createElement("ul")
    // const liNome = document.createElement("li")
    // const liPreco = document.createElement("li")

    // ul.appendChild(liNome)
    // ul.appendChild(liPreco)
    
    // const h3Nome = document.createElement("h3")
    // h3Nome.textContent = "Nome:"

    // const h3preco = document.createElement("h3")
    // h3preco.textContent = "Preço:"

    // const pNome = document.createElement("p")
    // pNome.textContent = dados.nome
    // pNome.classList.add('nome')

    // const pPreco = document.createElement("p")
    // pPreco.textContent = dados.preco
    // pPreco.classList.add('preco')

    // const img = document.createElement("img")
    // img.src = dados.imagem
    // img.classList.add('img-card')

    // const Promocao = document.createElement("img")
    // if (dados.status_promocao == 0) {
        
                
    //     Promocao.src = "./img/FundoTransparente.png"
    //     Promocao.classList.add("promocaoOff")
    //     Promocao.classList.remove("promocaoOn")
        
    // }else {
        
        
    //     Promocao.src = "./img/promocao.png"
    //     Promocao.classList.add("promocaoOn")
    //     Promocao.classList.remove("promocaoOff")

    // }
    
    // infosImg.appendChild(img)
    // infosImg.appendChild(infos)
    // div.appendChild(infosImg)
    // div.appendChild(Promocao)
    // infos.appendChild(ul)
    // liNome.appendChild(h3Nome)
    // liNome.appendChild(pNome)
    // liPreco.appendChild(h3preco)
    // liPreco.appendChild(pPreco)

    
    // return div
//}

// const loadCardPizza = () => {
    
//     // const dados = Pizzas
//     // const container = document.getElementById('container-cardsPizzas')

//     // const creationCards = dados.map(createCard)
//     // container.replaceChildren(...creationCards)

// }
