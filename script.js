let perguntas = [
// (use o mesmo array melhorado que te mandei — mantive aqui resumido)
{
pergunta: "Quantas sacolas plásticas uma pessoa pode usar por ano no Brasil?",
opcoes: ["Menos de 50", "Cerca de 300", "Mais de 1000"],
correta: 2,
explicacao: "O consumo pode ultrapassar 1000 sacolas por pessoa ao ano."
},
{
pergunta: "Quanto tempo uma sacola leva para desaparecer?",
opcoes: ["1 ano", "10 anos", "Mais de 100 anos"],
correta: 2,
explicacao: "Pode levar séculos para se decompor."
},
{
pergunta: "Uma torneira pingando desperdiça:",
opcoes: ["5L", "20L", "40L+"],
correta: 2,
explicacao: "Pequenos vazamentos geram grande desperdício."
},
{
pergunta: "Queimar lixo gera:",
opcoes: ["Nada", "Poluentes tóxicos", "Oxigênio"],
correta: 1,
explicacao: "Libera gases prejudiciais."
},
{
pergunta: "Lixo orgânico anual no Brasil:",
opcoes: ["<1M", "37M", ">100M"],
correta: 1,
explicacao: "Muitos poderiam ser reaproveitados."
},
{
pergunta: "Energia desperdiçada causa:",
opcoes: ["Nada", "Mais impacto", "Benefícios"],
correta: 1,
explicacao: "Aumenta emissões ambientais."
},
{
pergunta: "Lixo em terreno causa:",
opcoes: ["Nada", "Poluição", "Reciclagem"],
correta: 1,
explicacao: "Contamina o ambiente."
},
{
pergunta: "Plástico descartado:",
opcoes: ["Reciclado", "Vai à natureza", "Sumiu"],
correta: 1,
explicacao: "Grande parte não é reciclada."
},
{
pergunta: "Garrafa plástica dura:",
opcoes: ["5 anos", "50 anos", "400+ anos"],
correta: 2,
explicacao: "Permanece por séculos."
},
{
pergunta: "Maior impacto vem de:",
opcoes: ["Eventos", "Ações diárias", "Acasos"],
correta: 1,
explicacao: "Repetição gera impacto."
}
];

let atual = 0;
let pontos = 0;
let respondeu = false;

function atualizarFundo(acertou) {
if (acertou) {
document.body.style.background =
"url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e') center/cover";
}
else {
document.body.style.background =
"url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee') center/cover";
}
}

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
`${atual+1}/${perguntas.length}`;

document.getElementById("progresso").style.width =
(atual/perguntas.length)*100 + "%";
}

function responder(botao, escolha) {

if (respondeu) return;
respondeu = true;

let correta = perguntas[atual].correta;
let botoes = document.querySelectorAll("#opcoes button");

botoes.forEach((b,i)=>{
if(i === correta) b.classList.add("correto");
else if(i === escolha) b.classList.add("errado");
});

let acertou = escolha === correta;

if(acertou){
pontos++;
document.getElementById("feedback").innerText = "✅ Correto";
} else {
document.getElementById("feedback").innerText = "❌ Errado";
}

atualizarFundo(acertou);

document.getElementById("explicacao").innerText =
perguntas[atual].explicacao;
}

function proxima(){
if(atual < perguntas.length-1){
atual++;
document.querySelector(".container").classList.remove("fade");
setTimeout(()=>{
document.querySelector(".container").classList.add("fade");
carregar();
},200);
}
}

function voltar(){
if(atual > 0){
atual--;
carregar();
}
}

function encerrar(){

let nivel = "";

if(pontos <= 4) nivel = "⚠️ Baixo conhecimento";
else if(pontos <= 7) nivel = "👍 Consciente";
else nivel = "🌿 Agente ambiental";

document.querySelector(".container").innerHTML = `
<h1>Resultado Final</h1>
<h2>${nivel}</h2>
<p>Você acertou ${pontos} de ${perguntas.length}</p>
`;
}

carregar();
