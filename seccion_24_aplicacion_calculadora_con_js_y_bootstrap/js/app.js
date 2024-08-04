console.log("Aplicación Calculadora");

function sumar() {
  const forma = documento.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) {
    resultado = `<span class="text-danger">La operación no incluye números.</span>`;
  }
  document.getElementById(
    "resultado"
  ).innerHTML = `<p>Resultado: ${resultado}</p>`;
}
