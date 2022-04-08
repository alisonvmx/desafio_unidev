document.getElementById('imp').addEventListener('click', function(e) {
    var param = document.getElementById('uf').value;
    var link = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";
    var web = link+param+"/municipios";
    console.log(web);
    const dados = fetch(web).then(function(respostadoservidor){
      return respostadoservidor.json()
    })
    .then(function(respostaconvertida){
  
      var div = document.querySelector('#div1');
      var lh3 = document.createElement("h3");
      div.appendChild(lh3);
      lh3.innerHTML = "cidades da uf selecionada:";

     for(var i=0; i < respostaconvertida.length;i++){
   var cidade =+ respostaconvertida[i].id +" - "+ respostaconvertida[i].nome + " - " + respostaconvertida[i]['microrregiao']['mesorregiao']["UF"]["nome"] + " - " + respostaconvertida[i]['microrregiao']['mesorregiao']["UF"]["regiao"]["nome"];
    var elemenul = document.querySelector('#list');
    var linha = document.createElement("li");
    elemenul.appendChild(linha);
    linha.innerHTML = cidade;
    };


  })

  
  }
  );


