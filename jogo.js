
var altura = 0
var largura = 0
function ajustaTamanhoPalcoJogo(){
 largura = window.innerHeight
 altura = window.innerWidth

 console.log(altura,largura)
}
ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
	if(document.getElementById('mosquito')){
  	document.getElementById('mosquito').remove()
	}

	var posicaoX = Math.floor(Math.random()*altura) -90
	var posicaoY =Math.floor(Math.random()*largura) -90

	 posicaoX  =  posicaoX < 0 ? 0 :  posicaoX 
	 posicaoY  =  posicaoY < 0 ? 0 :  posicaoY 

	var mosquito = document.createElement('img')
	mosquito.src ='imagens/mosquito.png'
	mosquito.className = tamanhoRandom() + ' '+ladoRandom()
	mosquito.style.left = posicaoX +'px'
	mosquito.style.top = posicaoY +'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'

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