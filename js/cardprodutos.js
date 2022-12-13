'use strict'

import { listaPizzas } from "./cards";

const listarTodosProdutos = () => {

    listaPizzas.map(element => {

        console.log(element)

        const main = document.getElementById('div-container-listar')
        const ul = document.querySelector('ul')
        const div = document.createElement('div')
        const li = document.createElement('li')
        li.classList.add('li-container')

        
        li.innerHTML = `
        <img src="${element.foto}" alt="">   
                <h3>${element.nome}</h3>
            
                <div>${element.descricao}</div>
        `
        div.classList.add('div-container-listar')
        div.appendChild(li)
        ul.appendChild(div)
        main.appendChild(div)

        if (element.status_promocao) {
            li.classList.add('promocao')
        }
        if (element.status_favoritos){
            li.classList.add('favorito')
        }
        if (element.status_favoritos && element.status_promocao){
            li.classList.add('favorito-promocao')
        }
    })
}


listarTodosProdutos()

