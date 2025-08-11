let listaNomes = [];

function normalizarNome(nome){
  return nome.toLowerCase();
}

function adicionarAmigo() {
  let nomeAmigo = document.getElementById('amigo').value;
  
  if (nomeAmigo === "") {
    alert("Campo não pode ser vazio, por gentileza, insira um nome");
    return false;
  }

  let nomesNormalizados  = listaNomes.map(normalizarNome);

  let nomeNormalizado = normalizarNome(nomeAmigo);

  if(nomesNormalizados.includes(nomeNormalizado)){
    alert("Esse nome já está incluso na lista");
    return;
  }

  if (nomeAmigo) {
      listaNomes.push(nomeAmigo);
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

// Essa função retorna true se ninguém tirou a si mesma
function sorteioValido(listaOriginal, listaSorteada) {
  for(let i =0; i < listaOriginal.length; i++ ){
    if(listaOriginal[i] === listaSorteada[i]){
      return false; //sorteio é inválido
    }
  }
  return true; // sortei válido
}

function sortearAmigo() {
  if (listaNomes.length === 0) {
    alert("A lista de amigos está vazia")
  } else if (listaNomes.length < 4) {
    alert("Para sortear é necessário ter no mínimo 4 amigos na lista");
  } else {
    let listaEmbaralhada;
    do {
      listaEmbaralhada = [...listaNomes];
      for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
        let sorteado = Math.floor(Math.random() * (i + 1));
        let temp = listaEmbaralhada[i];
        listaEmbaralhada[i] = listaEmbaralhada[sorteado];
        listaEmbaralhada[sorteado] = temp;
      }
    } while(!sorteioValido(listaNomes, listaEmbaralhada));
    let resultado = document.getElementById('resultado');
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