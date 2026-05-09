let perguntas = [
{
pergunta: "Qual destes materiais é reciclável na maioria dos sistemas urbanos?",
opcoes: ["Embalagem suja", "Garrafa PET limpa", "Papel usado"],
correta: 1,
explicacao: "Materiais recicláveis devem estar limpos."
},
{
pergunta: "Quanto tempo uma garrafa plástica pode levar para se decompor?",
opcoes: ["Até 10 anos", "50 anos", "Mais de 400 anos"],
correta: 2,
explicacao: "Plásticos podem levar séculos para desaparecer."
},
{
pergunta: "Qual hábito mais contribui para o desperdício de água?",
opcoes: ["Fechar a torneira", "Vazamento constante", "Usar balde"],
correta: 1,
explicacao: "Pequenos vazamentos causam grande desperdício."
},
{
pergunta: "Qual desses itens geralmente NÃO é reciclável?",
opcoes: ["Lata de alumínio", "Copo engordurado", "Vidro"],
correta: 1,
explicacao: "Resíduos sujos não podem ser reciclados."
},
{
pergunta: "Aparelhos em stand-by causam:",
opcoes: ["Consumo de energia", "Nada", "Economia"],
correta: 0,
explicacao: "Mesmo desligados, continuam consumindo energia."
},
{
pergunta: "Qual material demora mais para se decompor?",
opcoes: ["Papel", "Plástico", "Orgânico"],
correta: 1,
explicacao: "Plástico leva muito mais tempo."
},
{
pergunta: "Separar o lixo permite:",
opcoes: ["Mais lixo", "Reciclagem", "Eliminar resíduos"],
correta: 1,
explicacao: "Facilita o reaproveitamento."
},
{
pergunta: "Qual atitude reduz consumo de energia?",
opcoes: ["Luz ligada", "Uso consciente", "Abrir geladeira"],
correta: 1,
explicacao: "Uso consciente evita desperdício."
},
{
pergunta: "O descarte incorreto causa:",
opcoes: ["Sujeira", "Contaminação", "Nada"],
correta: 1,
explicacao: "Pode gerar riscos ambientais."
},
{
pergunta: "Pequenas ações são importantes porque:",
opcoes: ["São fortes isoladas", "Se acumulam", "Substituem grandes ações"],
correta: 1,
explicacao: "Impacto coletivo vem da repetição."
}
];

let atual = 0;
let pontos = 0;
let respondeu = false;

window.onload = function () {
  carregar();
};

function carregar() {
  respondeu = false;

  let p = perguntas[atual];

  document.getElementById("pergunta").innerText = p.pergunta;

  let opDiv = document.getElementById("opcoes");
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

  document.getElementById("contador").innerText =
    `Pergunta ${atual + 1} de ${perguntas.length}`;

  document.getElementById("progresso").style.width =
    (atual / perguntas.length) * 100 + "%";
}

function responder(escolha) {
  if (respondeu) return;
  respondeu = true;

  let correta = perguntas[atual].correta;

  let botoes = document.querySelectorAll("#opcoes button");

  botoes.forEach((b, i) => {
    if (i === correta) b.classList.add("correto");
    else if (i === escolha) b.classList.add("errado");
  });

  if (escolha === correta) {
    pontos++;
    document.getElementById("feedback").innerText = "✅ Correto";
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
    <h1>Resultado Final</h1>
    <p>Você acertou ${pontos} de ${perguntas.length}</p>
  `;
}
