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

function sortearAmigo() {

  if (listaNomes.length === 0) {
    alert("A lista de amigos está vazia")
  } else if (listaNomes.length < 4) {
    alert("Para sortear é necessário ter no mínimo 4 amigos na lista");
  } else {
    let resultado = document.getElementById('resultado');
    let listaEmbaralhada = [...listaNomes];

    for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
      let sorteado = Math.floor(Math.random() * (i + 1));
      let temp = listaEmbaralhada[i];
      listaEmbaralhada[i] = listaEmbaralhada[sorteado];
      listaEmbaralhada[sorteado] = temp;
    }
    for (let i = 0; i < listaNomes.length; i++) {
      if (listaNomes[i] === listaEmbaralhada[i]) {
        let tempList = listaEmbaralhada[i];
        listaEmbaralhada[i] = listaEmbaralhada[listaEmbaralhada.length - 1];
        listaEmbaralhada[listaEmbaralhada.length - 1] = tempList;
      }
    }
    resultado.innerHTML = '';
    for (let i = 0; i < listaNomes.length; i++) {
      resultado.innerHTML += `<li>${listaNomes[i]} tirou ${listaEmbaralhada[i]}</li>`;
    }
  }
}

function reiniciar() {
  listaNomes = [];
  limparCampo();
  atualizarLista();
  resultado.innerHTML = '';
}

let botaoReiniciar = document.getElementById('btnReiniciar');
botaoReiniciar.addEventListener('click', reiniciar);

