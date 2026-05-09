let perguntas = [

{
pergunta: "Quantas sacolas plásticas uma pessoa pode usar por ano no Brasil?",
opcoes: ["Menos de 50", "Cerca de 300", "Mais de 1000"],
correta: 2,
explicacao: "O consumo pode ultrapassar 1000 sacolas por pessoa ao ano, muitas usadas por poucos minutos."
},

{
pergunta: "Quanto tempo uma sacola plástica leva para desaparecer na natureza?",
opcoes: ["1 ano", "10 anos", "Mais de 100 anos"],
correta: 2,
explicacao: "Sacolas plásticas podem permanecer no ambiente por mais de um século."
},

{
pergunta: "Uma torneira pingando pode desperdiçar por dia:",
opcoes: ["5 litros", "20 litros", "Mais de 40 litros"],
correta: 2,
explicacao: "Pequenos vazamentos podem desperdiçar dezenas de litros diariamente."
},

{
pergunta: "Queimar lixo doméstico libera:",
opcoes: ["Fumaça inofensiva", "Poluentes tóxicos", "Oxigênio"],
correta: 1,
explicacao: "A queima libera gases tóxicos prejudiciais ao meio ambiente e à saúde."
},

{
pergunta: "Quanto lixo orgânico o Brasil gera por ano?",
opcoes: ["Menos de 1 milhão", "Cerca de 37 milhões", "Mais de 100 milhões"],
correta: 1,
explicacao: "Grande parte desse lixo poderia ser reaproveitada, mas não é."
},

{
pergunta: "Deixar luzes acesas sem necessidade causa:",
opcoes: ["Nenhum impacto", "Aumento de consumo", "Economia de energia"],
correta: 1,
explicacao: "Mais consumo de energia aumenta emissões e impacto ambiental."
},

{
pergunta: "Jogar lixo em terrenos resulta em:",
opcoes: ["Nada acontece", "Acúmulo e poluição", "Reciclagem natural"],
correta: 1,
explicacao: "O lixo se acumula e contamina o ambiente."
},

{
pergunta: "Grande parte do plástico descartado:",
opcoes: ["É reciclado", "Vai para o ambiente", "Desaparece"],
correta: 1,
explicacao: "Boa parte do plástico não é reciclada corretamente."
},

{
pergunta: "Uma garrafa plástica pode levar para se decompor:",
opcoes: ["5 anos", "50 anos", "Mais de 400 anos"],
correta: 2,
explicacao: "Plásticos podem levar séculos para desaparecer."
},

{
pergunta: "O maior impacto ambiental vem de:",
opcoes: ["Ações isoladas", "Pequenos hábitos diários", "Eventos raros"],
correta: 1,
explicacao: "Pequenas ações repetidas geram grandes impactos coletivos."
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

// barra progresso
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
