function criptografar(){
  let sectionMsg = document.querySelector("#mensagem")
  let pCriptografada = document.querySelector("#msgCriptografada")
  let img = document.querySelector("#imgDaSectionMensagem")
  let nenhumaMsg = document.querySelector("#nenhumaMensagem")
  let textoDesejado = document.querySelector("#textoDesejado")
  let botaoCopiar = document.querySelector("#botaoCopiar")
  let msgCriptografada = ''

  for(let i = 0; i < texto.length; i++){
    if(texto[i] == 'a'){
      msgCriptografada += "ai"
    }
    else if(texto[i] == 'e'){
      msgCriptografada += "enter"
    }
    else if(texto[i] == 'i'){
      msgCriptografada += "imes"
    }
    else if(texto[i] == 'o'){
      msgCriptografada += "ober"
    }
    else if(texto[i] == 'u'){
      msgCriptografada += "ufat"
    }
    else{
      msgCriptografada += texto[i]
    }
  }

  sectionMsg.style.justifyContent = "space-between"
  img.style.display = "none"
  nenhumaMsg.style.display = "none"
  textoDesejado.style.display = "none"
  botaoCopiar.style.display = "flex"

  pCriptografada.innerHTML = `${msgCriptografada}`
}