const elementoChute = document.querySelector('#chute')
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition()

  recognition.lang = 'pt-Br'
  recognition.start()

  recognition.addEventListener('result', onSpeek)

function onSpeek(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeChuteValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
         <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}



recognition.addEventListener('end', () => recognition.start())
