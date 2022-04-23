function getURL(){
	var cont_img = document.getElementsByClassName("tabelaComScrollMaior")[0].getElementsByTagName("img").length;
	var arrayURL = [];
	for (let i = 0; i < cont_img; i++){    
    	 var elemento = document.getElementsByClassName("tabelaComScrollMaior")[0].getElementsByTagName("img")[i].attributes[2].nodeValue;
    	  const regexTest = RegExp("(=).*(')"); 
   	    if(regexTest.test(elemento) == true){
        	elemento = regexTest.exec(elemento);
        	elemento[0] = elemento[0].replace("=","");
        	elemento[0] = elemento[0].replace("'","");
        	arrayURL.push(`http://consulta.trtrio.gov.br/portal/downloadArquivoPdf.do?sqDocumento=${elemento[0]}`);
    		}    
	  }
	return arrayURL;
}
