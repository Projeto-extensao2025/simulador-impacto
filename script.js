let perguntas = [

{
pergunta: "Qual destes materiais é reciclável na maioria dos sistemas urbanos?",
opcoes: [
"Embalagem suja de comida",
"Garrafa PET limpa",
"Papel higiênico usado"
],
correta: 1,
explicacao: "Materiais recicláveis precisam estar limpos para serem processados."
},

{
pergunta: "Quanto tempo pode levar uma garrafa plástica para se decompor?",
opcoes: [
"Até 10 anos",
"Cerca de 50 anos",
"Mais de 400 anos"
],
correta: 2,
explicacao: "Plásticos podem levar séculos para desaparecer no ambiente."
},

{
pergunta: "Qual hábito contribui mais para desperdício de água?",
opcoes: [
"Fechar a torneira ao escovar os dentes",
"Deixar um pequeno vazamento",
"Usar balde para limpeza"
],
correta: 1,
explicacao: "Pequenos vazamentos podem desperdiçar muitos litros por dia."
},

{
pergunta: "Qual desses itens geralmente NÃO é reciclável?",
opcoes: [
"Lata de alumínio",
"Copo descartável engordurado",
"Garrafa de vidro"
],
correta: 1,
explicacao: "Resíduos sujos dificultam ou impedem o processo de reciclagem."
},

{
pergunta: "Deixar aparelhos em stand-by impacta principalmente:",
opcoes: [
"Aumento no consumo de energia",
"Nenhum efeito",
"Economia de energia"
],
correta: 0,
explicacao: "Mesmo desligados, aparelhos consomem energia em modo stand-by."
},

{
pergunta: "Qual desses resíduos demora mais para se decompor?",
opcoes: [
"Papel",
"Plástico",
"Restos orgânicos"
],
correta: 1,
explicacao: "Plásticos levam muito mais tempo que materiais orgânicos."
},

{
pergunta: "Separar o lixo corretamente permite:",
opcoes: [
"Aumentar o volume de resíduos",
"Facilitar a reciclagem",
"Eliminar completamente o lixo"
],
correta: 1,
explicacao: "A separação é essencial para reaproveitamento de materiais."
},

{
pergunta: "Qual atitude ajuda mais a reduzir consumo de energia?",
opcoes: [
"Deixar luz ligada sem uso",
"Usar energia de forma consciente",
"Abrir geladeira com frequência"
],
correta: 1,
explicacao: "Uso consciente reduz desperdício e impacto ambiental."
},

{
pergunta: "O descarte incorreto de lixo pode causar:",
opcoes: [
"Apenas impacto visual",
"Contaminação e pragas",
"Nenhum impacto"
],
correta: 1,
explicacao: "Além de poluição, há riscos à saúde."
},

{
pergunta: "Por que pequenas ações são importantes?",
opcoes: [
"Porque têm impacto isolado alto",
"Porque somadas geram grande impacto",
"Porque substituem grandes ações"
],
correta: 1,
explicacao: "O impacto coletivo vem da repetição das ações."
}

];

let atual = 0;
let pontos = 0;
let respondeu = false;

// 🔥 CARREGA QUIZ COM SEGURANÇA
window.onload = function() {
  carregar();
};

function carregar() {

respondeu = false;

let p = perguntas[atual];

// ✅ garante que não quebra
document.getElementById("pergunta").innerText = p.pergunta;

let opDiv = document.getElementById("opcoes");
opDiv.innerHTML = "";

p.opcoes.forEach((opcao, i) => {

let btn = document.createElement("button");
btn.innerText = opcao;

btn.onclick = function() {
responder(btn, i);
};

opDiv.appendChild(btn);

});

document.getElementById("feedback").innerText = "";
document.getElementById("explicacao").innerText = "";

document.getElementById("contador").innerText =
`Pergunta ${atual + 1} de ${perguntas.length}`;

// barra
let prog = document.getElementById("progresso");
prog.style.width = (atual / perguntas.length * 100) + "%";

}

function responder(botao, escolha) {

if (respondeu) return;
respondeu = true;

let correta = perguntas[atual].correta;
let botoes = document.querySelectorAll("#opcoes button");

botoes.forEach((b, i) => {

if (i === correta) {
b.classList.add("correto");
}
else if (i === escolha) {
b.classList.add("errado");
}

});

if (escolha === correta) {
document.getElementById("feedback").innerText = "✅ Correto";
pontos++;
}
else {
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
else nivel = "🌿 Alto nível de consciência";

document.querySelector(".container").innerHTML = `
<h1>Resultado Final</h1>
<h2>${nivel}</h2>
<p>Você acertou ${pontos} de ${perguntas.length}</p>
`;

}
