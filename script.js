let perguntas = [
{
pergunta: "Qual destes materiais é reciclável?",
opcoes: ["Embalagem suja", "Garrafa PET", "Papel usado"],
correta: 1,
explicacao: "Materiais recicláveis devem estar limpos."
},
{
pergunta: "Quanto tempo leva o plástico para se decompor?",
opcoes: ["10 anos", "50 anos", "Mais de 400 anos"],
correta: 2,
explicacao: "Plástico pode durar séculos no ambiente."
}
];

let atual = 0;
let pontos = 0;
let respondeu = false;

window.onload = function () {
  try {
    carregar();
  } catch (erro) {
    console.error("Erro ao iniciar:", erro);
  }
};

function carregar() {
  try {
    respondeu = false;

    let p = perguntas[atual];

    // 🔥 proteção total
    if (!p) {
      console.error("Pergunta não encontrada");
      return;
    }

    let perguntaEl = document.getElementById("pergunta");
    let opDiv = document.getElementById("opcoes");

    if (!perguntaEl || !opDiv) {
      console.error("Elemento HTML não encontrado");
      return;
    }

    perguntaEl.innerText = p.pergunta;

    opDiv.innerHTML = "";

    p.opcoes.forEach((opcao, i) => {
      let btn = document.createElement("button");
      btn.innerText = opcao;
      btn.onclick = function () {
        responder(i);
      };
      opDiv.appendChild(btn);
    });

    document.getElementById("feedback").innerText = "";
    document.getElementById("explicacao").innerText = "";

    let contador = document.getElementById("contador");
    if (contador) {
      contador.innerText = `Pergunta ${atual + 1} de ${perguntas.length}`;
    }

  } catch (erro) {
    console.error("Erro no carregar:", erro);
  }
}

function responder(escolha) {
  if (respondeu) return;

  respondeu = true;

  let correta = perguntas[atual].correta;

  if (escolha === correta) {
    document.getElementById("feedback").innerText = "✅ Correto";
    pontos++;
  } else {
    document.getElementById("feedback").innerText = "❌ Errado";
  }

  document.getElementById("explicacao").innerText =
    perguntas[atual].explicacao;
}

function proxima() {
  if (atual < perguntas.length - 1) {
    atual++;
    carregar();
  }
}

function voltar() {
  if (atual > 0) {
    atual--;
    carregar();
  }
}

function encerrar() {
  document.querySelector(".container").innerHTML = `
    <h1>Resultado</h1>
    <p>Você acertou ${pontos} de ${perguntas.length}</p>
  `;
}
