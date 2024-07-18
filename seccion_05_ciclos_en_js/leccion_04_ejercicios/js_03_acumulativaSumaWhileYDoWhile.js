// Suma Acumulativa
// Sumar los primeros 5 numeros(while)

let numero = 1, acumulativaSuma = 0, maximo = 5;

while (numero <= maximo) {
  // Imprimir lo que va a sumar
  console.log(`${acumulativaSuma} + ${numero}`);
  // Realizamos la suma parcial
  acumulativaSuma += numero;
  console.log(acumulativaSuma);
  numero++;
}
console.log(acumulativaSuma);

// Sumar los primeros 5 numeros(do-while)
numero = 1; acumulativaSuma = 0; maximo = 5;

do {
  // Imprimir lo que va a sumar
  console.log(`${acumulativaSuma} + ${numero}`);
  // Realizamos la suma parcial
  acumulativaSuma += numero;
  console.log(acumulativaSuma);
  numero++;
} while (numero <= maximo);
console.log(acumulativaSuma);
