const relogio = document.querySelector('.relogio')
const btnZerar = document.querySelector('.zerar')
const btnIniciar = document.querySelector('.iniciar')
const btnPausar = document.querySelector('.pausar')

let segundos = 0
let timer

const criaHora = (segundos) => {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const iniciaRelogio = () => {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criaHora(segundos)
    }, 1000)
}

const zerar = () => {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
    btnIniciar.classList.remove('hidden')
    btnPausar.classList.add('hidden')
}

const iniciar = () => {
    clearInterval(timer)
    iniciaRelogio()
    btnIniciar.classList.add('hidden')
    btnPausar.classList.remove('hidden')
}

const pausar = () => {
    clearInterval(timer)
    btnIniciar.classList.remove('hidden')
    btnPausar.classList.add('hidden')
    
}