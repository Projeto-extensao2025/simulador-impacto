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

  barra.style.width = impacto + "%";

  if (impacto <= 30) {
    estado.innerText = "🌿 Ambiente saudável";
    msg.innerText = "Suas ações estão ajudando o meio ambiente.";
    barra.style.background = "green";
    document.body.style.background = "linear-gradient(#0b3d0b, #000)";
  }

  else if (impacto <= 70) {
    estado.innerText = "⚠️ Situação de atenção";
    msg.innerText = "O impacto está aumentando.";
    barra.style.background = "orange";
    document.body.style.background = "linear-gradient(#a67c00, #000)";
  }

  else {
    estado.innerText = "🔥 Impacto crítico";
    msg.innerText = "O ambiente está sendo degradado!";
    barra.style.background = "red";
    document.body.style.background = "linear-gradient(#660000, #000)";
  }
}
