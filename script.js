let impacto = 50;

function acao(valor) {
  impacto += valor;

  if (impacto < 0) impacto = 0;
  if (impacto > 100) impacto = 100;

  atualizar();
}

function atualizar() {

  let barra = document.getElementById("progresso");
  let estado = document.getElementById("estado");
  let msg = document.getElementById("mensagem");
  let body = document.body;

  // barra
  barra.style.width = impacto + "%";

  if (impacto <= 30) {
    estado.innerText = "🌿 Ambiente saudável";
    msg.innerText = "Suas escolhas estão ajudando o meio ambiente!";
    barra.style.background = "green";
    body.style.background = "linear-gradient(green, #0b3d0b)";
  }

  else if (impacto <= 70) {
    estado.innerText = "⚠️ Situação de atenção";
    msg.innerText = "Pequenas atitudes estão gerando impacto.";
    barra.style.background = "orange";
    body.style.background = "linear-gradient(#a67c00, #5c4300)";
  }

  else {
    estado.innerText = "🔥 Impacto crítico";
    msg.innerText = "O ambiente está sendo degradado rapidamente!";
    barra.style.background = "red";
    body.style.background = "linear-gradient(#660000, black)";
  }
}
