var msgCriptografada = ''
var pCriptografada = document.querySelector("#msgCriptografada")

function criptografar(){
  let texto = document.querySelector("#itexto").value
  let sectionMsg = document.querySelector("#mensagem")
  let img = document.querySelector("#imgDaSectionMensagem")
  let nenhumaMsg = document.querySelector("#nenhumaMensagem")
  let textoDesejado = document.querySelector("#textoDesejado")
  let botaoCopiar = document.querySelector("#botaoCopiar")

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
  document.querySelector("#itexto").value = ''

  pCriptografada.innerHTML = `${msgCriptografada}`
  msgCriptografada = ''
}

function copiar(){
  let textoCriptografado = document.querySelector("#msgCriptografada").innerText
    navigator.clipboard.writeText(textoCriptografado).then(function() {
      pCriptografada.innerHTML = 'Mensagem copiada!'
    }, function(err) {
      pCriptografada.innerHTML = 'Erro ao copiar a mensagem!'
    });
}

function descriptografar(){
  let texto = document.querySelector("#itexto").value

  for(let i = 0; i < texto.length; i++){
    if(texto[i] == 'a' && texto[i+1] == 'i'){
      msgCriptografada += "a"
      i++
    }
    else if(texto[i] == 'e' && texto[i+1] == 'n' && texto[i+2] == 't' && texto[i+3] == 'e' && texto[i+4] == 'r' && msgCriptografada.slice(-1) !== 'e'){
      msgCriptografada += "e"
      i += 4
    }
    else if(texto[i] == 'i' && texto[i+1] == 'm' && texto[i+2] == 'e' && texto[i+3] == 's'){
      msgCriptografada += "i"
      i += 3
    }
    else if(texto[i] == 'o' && texto[i+1] == 'b' && texto[i+2] == 'e' && texto[i+3] == 'r'){
      msgCriptografada += "o"
      i += 3
    }
    else if(texto[i] == 'u' && texto[i+1] == 'f' && texto[i+2] == 'a' && texto[i+3] == 't'){
      msgCriptografada += "u"
      i += 3
    }
    else{
      msgCriptografada += texto[i]
    }
  }

  document.querySelector("#itexto").value = ''
  pCriptografada.innerHTML = `${msgCriptografada}`
  msgCriptografada = ''
}