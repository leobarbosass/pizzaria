'use strict'

const login = {

    usuario: 'eduardo',
    senha: '123'
    
}

const testeLogin = () => {

    const form = document.querySelector('form')
    const usuario = document.getElementById('user').value
    const senha = document.getElementById('password').value

    if (form.reportValidity()) {
        
        if (login.usuario == usuario && login.senha == senha) {

            window.location.href = './crud1.html'
    
        }else{
            alert('ta errado')
        }
    }

}

document.getElementById("buttonJoin").addEventListener('click', () => {
    testeLogin()
})