function descricaoReclamante(){
	let tabelaTM =  document.getElementsByClassName('andamentos')[0].getElementsByTagName('tr').length;
	let arrayDescricao = [];	
	for(let i=0; i <= tabelaTM; i++){
    		let descricao = document.getElementsByClassName('andamentos')[0].getElementsByTagName('tr')[i].innerText;
    			if(descricao.includes('RECLAMANTE')){
        			arrayDescricao.push(descricao);
    	}    
	}
	return arrayDescricao;
}

