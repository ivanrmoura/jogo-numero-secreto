

function verificaSeChuteValido(chute){
    const numero = +chute

    if(chuteIsInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor Inválido <div>`
        return
    }


    if (numeroForaDoIntervalo(chute)){
     elementoChute.innerHTML += `<div>Valor inválido, Fale um valor entre ${menorValor} - ${maiorValor} <div>`
     return   
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3> O número secreto era: ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    
    }else if(numero > numeroSecreto){
       elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
        `     
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
       `
    }
}

function numeroForaDoIntervalo(numero){
    return numero > maiorValor || numero < menorValor
}


function chuteIsInvalido(numero){
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
    window.location.reload()
    }
})