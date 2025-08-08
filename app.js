let listaNomes = [];

function adicionarAmigo(){
    let nomeAmigo= document.getElementById('amigo').value;

    if (nomeAmigo === ""){
        alert("Campo não pode ser vazio, por gentileza, insira um nome");
        return false;
    } else {
      if (nomeAmigo){
            listaNomes.push(nomeAmigo);
        }  
    }
    limparCampo();
}

function limparCampo(){
    document.querySelector('input').value = '';
}

