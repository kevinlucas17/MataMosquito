
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
function ajustaTamanhoPalcoJogo(){
 altura = window.innerHeight
 largura = window.innerWidth

 console.log(altura,largura)
}
ajustaTamanhoPalcoJogo()

var cronometro =  setInterval(function(){
	tempo--
	getElementById('crono').innerHTML=tempo	
},1000)






function posicaoRandomica(){
	if(document.getElementById('mosquito')){
  		document.getElementById('mosquito').remove()
  			
  		if(vidas<4){	
  		document.getElementById('v'+vidas).src='imagens/coracao_vazio.png'
  		vidas++
  		}else{
  			fimDeJogo()
  		}
	}

	var posicaoY = Math.floor(Math.random()*altura) -90
	var posicaoX =Math.floor(Math.random()*largura) -90

	 posicaoX  =  posicaoX < 0 ? 0 :  posicaoX 
	 posicaoY  =  posicaoY < 0 ? 0 :  posicaoY 

	var mosquito = document.createElement('img')
	mosquito.src ='imagens/mosquito.png'
	mosquito.className = tamanhoRandom() + ' '+ladoRandom()
	mosquito.style.left = posicaoX +'px'
	mosquito.style.top = posicaoY +'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()		
	}

	document.body.appendChild(mosquito)
}

function tamanhoRandom(){
	var tamanho = Math.floor(Math.random()*3)
	switch(tamanho){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'

	}

}
function ladoRandom(){
	var lado = Math.floor(Math.random()*2)
	switch(lado){
		case 0:
		return 'ladoA'
		case 1:
		return 'ladoB'
	}
}
function fimDeJogo(){
	window.location.href ='fim_de_jogo.html'
}
