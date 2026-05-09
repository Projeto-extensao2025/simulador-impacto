let perguntas = [

{
pergunta: "Quantas sacolas plásticas uma pessoa usa por ano no Brasil?",
opcoes: ["Cerca de 50", "Cerca de 300", "Mais de 1000"],
correta: 2,
explicacao: "O consumo de sacolas plásticas no Brasil é extremamente alto e acumula milhares por pessoa ao longo do tempo."
},

{
pergunta: "Quanto tempo uma sacola leva para se decompor?",
opcoes: ["1 ano", "10 anos", "Mais de 100 anos"],
correta: 2,
explicacao: "Sacolas plásticas podem levar séculos para desaparecer completamente."
},

{
pergunta: "Uma torneira pingando pode desperdiçar por dia:",
opcoes: ["5 litros", "20 litros", "Mais de 40 litros"],
correta: 2,
explicacao: "Pequenos vazamentos acumulam um grande desperdício ao longo do tempo."
},

{
pergunta: "Queimar lixo gera:",
opcoes: ["Ar limpo", "Poluentes perigosos", "Oxigênio"],
correta: 1,
explicacao: "Queimadas liberam gases tóxicos e poluentes prejudiciais à saúde."
},

{
pergunta: "Separar lixo ajuda a:",
opcoes: ["Poluir mais", "Reciclar materiais", "Aumentar resíduos"],
correta: 1,
explicacao: "Separar corretamente facilita a reciclagem e reduz impacto ambiental."
},

{
pergunta: "Desperdício de alimentos gera:",
opcoes: ["Menos impacto", "Mais lixo e poluição", "Economia"],
correta: 1,
explicacao: "Alimentos descartados geram gases e desperdício de recursos."
},

{
pergunta: "Plástico descartado geralmente vai para:",
opcoes: ["Reciclagem imediata", "Rios e oceanos", "Desaparece"],
correta: 1,
explicacao: "Grande parte do plástico acaba em ambientes naturais."
},

{
pergunta: "Uso excessivo de energia causa:",
opcoes: ["Nenhum impacto", "Aumento de emissões", "Benefícios ambientais"],
correta: 1,
explicacao: "Mais energia consumida = mais impacto ambiental."
},

{
pergunta: "Jogar lixo em terreno leva a:",
opcoes: ["Nada", "Acúmulo e poluição", "Limpeza natural"],
correta: 1,
explicacao: "Resíduos acumulam e degradam o ambiente."
},

{
pergunta: "O maior impacto vem de:",
opcoes: ["Uma ação só", "Pequenas ações repetidas", "Eventos raros"],
correta: 1,
explicacao: "O impacto coletivo vem da repetição diária."
}

];

let atual = 0;
let pontos = 0;
let respondeu = false;

function carregar() {

respondeu = false;

let p = perguntas[atual];

document.getElementById("pergunta").innerText = p.pergunta;

let opDiv = document.getElementById("opcoes");
opDiv.innerHTML = "";

p.opcoes.forEach((opcao, i) => {
let btn = document.createElement("button");
btn.innerText = opcao;

btn.onclick = () => responder(btn, i);

opDiv.appendChild(btn);
});

document.getElementById("feedback").innerText = "";
document.getElementById("explicacao").innerText = "";

document.getElementById("contador").innerText =
`Pergunta ${atual+1} de ${perguntas.length}`;

// barra
let progresso = document.getElementById("progresso");
progresso.style.width = ((atual) / perguntas.length * 100) + "%";

}

function responder(botao, escolha) {

if (respondeu) return;
respondeu = true;

let correta = perguntas[atual].correta;
let botoes = document.querySelectorAll("#opcoes button");

botoes.forEach((b, i) => {
if (i === correta) b.classList.add("correto");
else if (i === escolha) b.classList.add("errado");
});

if (escolha === correta) {
document.getElementById("feedback").innerText = "✅ Correto!";
pontos++;
} else {
document.getElementById("feedback").innerText = "❌ Errado!";
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

let nivel = "";

if (pontos <= 4) nivel = "⚠️ Baixo conhecimento";
else if (pontos <= 7) nivel = "👍 Consciente";
else nivel = "🌿 Agente ambiental";

document.querySelector(".container").innerHTML = `
<h1>Resultado Final</h1>
<h2>${nivel}</h2>
<p>Você acertou ${pontos} de ${perguntas.length}</p>
`;
}

carregar();
