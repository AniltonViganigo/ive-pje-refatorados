function(element, empresaReclamada){	
	let verificacao = document.getElementsByClassName('sem-padding sem-margem-top sem-marcacao ng-star-inserted')[i].length 
	for( let i =0; i <= verificacao;i++){
		let polo = document.getElementsByClassName('sem-padding sem-margem-top sem-marcacao ng-star-inserted')[i].innerText
			if(polo.includes('empresaReclamada') == true){
    			return polo
			}
	}
}