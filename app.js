let listaNomes = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById('amigo').value;

  if (nomeAmigo === "") {
    alert("Campo não pode ser vazio, por gentileza, insira um nome");
    return false;
  } else {
    if (nomeAmigo) {
      listaNomes.push(nomeAmigo);
    }
  }
  atualizarLista();
  limparCampo();
}

function limparCampo() {
  document.querySelector('input').value = '';
}

function atualizarLista() {
  let listarAmigos = document.getElementById('listaAmigos');
  listarAmigos.innerHTML = "";
  for (let i = 0; i < listaNomes.length; i++) {
    listarAmigos.innerHTML += `<li>${listaNomes[i]}</li>`;
  }
}


