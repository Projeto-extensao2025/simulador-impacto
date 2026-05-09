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

  if (!barra || !estado || !msg) {
    console.log("Elementos não encontrados");
    return;
  }

  barra.style.width = impacto + "%";

  if (impacto <= 30) {
    estado.innerText = "🌿 Ambiente saudável";
    msg.innerText = "Suas escolhas estão ajudando!";
  } 
  else if (impacto <= 70) {
    estado.innerText = "⚠️ Atenção";
    msg.innerText = "Pequenas ações acumulam impacto.";
  } 
  else {
    estado.innerText = "🔥 Crítico";
    msg.innerText = "O ambiente está sendo degradado.";
  }
}
