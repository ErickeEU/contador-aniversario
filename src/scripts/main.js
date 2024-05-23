const timer = setInterval(function(){

const aniversario = new Date('Aug 23, 2024, 00:00:00')
const timeStampAniversario = aniversario.getTime()

const dataAtual = new Date()
const timeStampDataAtual = dataAtual.getTime()

const tempoFaltando = timeStampAniversario - timeStampDataAtual

console.log(tempoFaltando)

const tempoEmDias = Math.floor((tempoFaltando / (1000 * 60 * 60 * 24)))
const tempoEmHoras = Math.floor(tempoFaltando % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const tempoEmMinutos = Math.floor(tempoFaltando % (1000 * 60 * 60) / (1000 * 60))
const tempoEmSegundos = Math.floor(tempoFaltando % (1000 * 60) / 1000)
console.log(tempoEmSegundos)

document.getElementById('timer').innerHTML = `${tempoEmDias}d ${tempoEmHoras}h ${tempoEmMinutos}m ${tempoEmSegundos}s`

    if (tempoFaltando < 0) {
        clearInterval()
        document.getElementById('timer').innerHTML = 'Parabéns'
    }
}, 1000)
