function calcularResultado() {
  const n1 = parseInt(document.getElementById("n1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const op = document.getElementById("op").value;

  let resultado;

  const form = document.querySelector("form")
  form.addEventListener("submit") // Alterar aqui

  switch(op){
    case "+":
      resultado = soma(n1, n2);
      break;
    case "-":
      resultado = subtracao(n1, n2);
      break;
    case "*":
      resultado = multiplicacao(n1, n2);
      break;
    case "/":
      resultado = divisao(n1, n2);
      break;
  }

  exibirResultado(resultado);
}

function soma(n1, n2) {
  return n1 + n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

function divisao(n1, n2) {
  if (n1 === 0 || n2 === 0) {
    return "Erro! Divisão por zero!"
  }
  return n2 >= n1 ?  n2 / n1 : n1 / n2
}

function exibirResultado(resultado){
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `Resultado: ${resultado}`;
}