let impacto = 50;

function acao(valor) {
  impacto += valor;

  if (impacto < 0) impacto = 0;
  if (impacto > 100) impacto = 100;

  atualizar();
}

function atualizar() {

  document.getElementById("impacto").innerText = "Impacto: " + impacto;

  let estado = document.getElementById("estado");
  let body = document.body;

  if (impacto <= 30) {
    estado.innerText = "🌿 Ambiente saudável";
    body.className = "baixo";
  } 
  else if (impacto <= 70) {
    estado.innerText = "⚠️ Atenção";
    body.className = "medio";
  } 
  else {
    estado.innerText = "🔥 Impacto crítico";
    body.className = "critico";
  }
}
