function verificar(){
	let data = new Date()
	let anoatual = data.getFullYear()
	let fano = document.getElementById('ano')
	let r = document.getElementById('r')
	if (fano.value.length == 0 || fano.value > anoatual){
		alert('Verifique os dados e tente novamente')
	}else{
		let sex = document.getElementsByName('sex')
		let idade = anoatual - Number(fano.value)
		let g = ''
		let img = document.createElement('img')
		img.setAttribute('id', 'foto')
		if(sex[0].checked){
			g = 'homem'
			if( idade >= 0 && idade < 10){
				img.setAttribute('src', 'menino.png')
				g = 'um menino'
			}else if(idade < 21){
				img.setAttribute('src', 'rapaz.png')
				g = 'um jovem'
			}else if(idade < 50){
				img.setAttribute('src', 'adulto.png')
				g = 'um homem'
			}else{
				img.setAttribute('src', 'idoso.png')
				g = 'um idoso'
			}
		}else if(sex[1].checked){
			g = 'mulher'
			if( idade >= 0 && idade < 10){
				img.setAttribute('src', 'menina.png')
				g = 'uma menina'
			}else if(idade < 21){
				img.setAttribute('src', 'moça.png')
				g = 'uma jovem'
			}else if(idade < 50){
				img.setAttribute('src', 'adulta.png')
				g = 'uma mulher'
			}else{
				img.setAttribute('src', 'idosa.png')
				g = 'uma idosa'
			}
		}
		r.innerHTML = `Você é ${g} de idade ${idade}`
		r.appendChild(img)
	}
}
