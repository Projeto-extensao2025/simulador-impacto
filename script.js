let perguntas = [
{
pergunta: "Quantos quilos de plástico uma pessoa gera por ano no Brasil em média?",
opcoes: ["Cerca de 10kg", "Cerca de 40kg", "Cerca de 100kg"],
correta: 1
},
{
pergunta: "Quanto tempo uma sacola plástica leva para se decompor?",
opcoes: ["1 ano", "10 anos", "Mais de 100 anos"],
correta: 2
},
{
pergunta: "Qual dessas ações mais impacta o meio ambiente?",
opcoes: ["Jogar lixo na rua", "Desperdiçar água", "Queimar resíduos"],
correta: 2
},
{
pergunta: "Quanto de água uma torneira pingando pode desperdiçar por dia?",
opcoes: ["1 litro", "10 litros", "Mais de 40 litros"],
correta: 2
},
{
pergunta: "Qual atitude é mais sustentável?",
opcoes: ["Usar descartáveis", "Reutilizar materiais", "Queimar lixo"],
correta: 1
},
{
pergunta: "Qual desses poluentes é comum em queimadas?",
opcoes: ["CO2", "Oxigênio", "Nitrogênio puro"],
correta: 0
},
{
pergunta: "Separar lixo ajuda a:",
opcoes: ["Aumentar resíduos", "Reciclar materiais", "Poluir mais"],
correta: 1
},
{
pergunta: "Desperdício de alimentos contribui para:",
opcoes: ["Redução do impacto", "Aumento de resíduos", "Economia"],
correta: 1
},
{
pergunta: "Plásticos descartados frequentemente acabam:",
opcoes: ["Reciclados", "Em rios e oceanos", "Desaparecem"],
correta: 1
},
{
pergunta: "O maior impacto vem de:",
opcoes: ["Uma ação isolada", "Pequenas ações repetidas", "Grandes empresas apenas"],
correta: 1
}
];

let atual = 0;
let pontos = 0;

function carregar() {

document.getElementById("pergunta").innerText = perguntas[atual].pergunta;

let opcoesDiv = document.getElementById("opcoes");
opcoesDiv.innerHTML = "";

perguntas[atual].opcoes.forEach((opc, i) => {
let btn = document.createElement("button");
btn.innerText = opc;
btn.onclick = () => responder(i);
opcoesDiv.appendChild(btn);
});

document.getElementById("feedback").innerText = "";
document.getElementById("progresso").innerText =
`Pergunta ${atual+1} de ${perguntas.length}`;
}

function responder(i) {

let correta = perguntas[atual].correta;

if (i === correta) {
document.getElementById("feedback").innerText = "✅ Correto!";
pontos++;
} else {
document.getElementById("feedback").innerText = 
"❌ Errado!";
}
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
document.querySelector(".container").innerHTML =
`<h1>Resultado</h1>
<p>Você acertou ${pontos} de ${perguntas.length}</p>`;
}

carregar();
