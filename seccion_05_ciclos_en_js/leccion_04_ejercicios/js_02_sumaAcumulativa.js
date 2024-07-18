// Suma Acumulativa
// Sumar los primeros 5 numeros(for)

let acumulativaSuma = 0, maximo = 5;

for (let numero = 1; numero <= maximo; numero++) {
  // Imprimir lo que va a sumar
  console.log(`${acumulativaSuma} + ${numero}`);
  // Realizamos la suma parcial
  acumulativaSuma += numero;
  console.log(acumulativaSuma);
}
console.log(acumulativaSuma);
