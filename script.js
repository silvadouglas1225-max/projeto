let jogadores = [];

function adicionarJogador() {
  const input = document.getElementById("jogador");
  const nome = input.value.trim();

  if (nome === "") return;

  jogadores.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaJogadores");
  lista.innerHTML = "";

  jogadores.forEach(jogador => {
    const li = document.createElement("li");
    li.textContent = jogador;
    lista.appendChild(li);
  });
}

function gerarTimes() {
  const tamanho = parseInt(document.getElementById("tamanhoTime").value);
  const resultado = document.getElementById("resultado");

  if (!tamanho || jogadores.length < tamanho) {
    resultado.innerHTML = "❌ Jogadores insuficientes";
    return;
  }

  let embaralhados = [...jogadores].sort(() => Math.random() - 0.5);
  let times = [];

  for (let i = 0; i < embaralhados.length; i += tamanho) {
    times.push(embaralhados.slice(i, i + tamanho));
  }

  mostrarTimes(times);
}

function mostrarTimes(times) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  times.forEach((time, index) => {
    let div = document.createElement("div");
    div.innerHTML = `<h3>Time ${index + 1}</h3>` +
      time.map(j => `<p>${j}</p>`).join("");

    resultado.appendChild(div);
  });
}