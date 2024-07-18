// Imprimir los primeros 10 numeros de 3 en 3
// 1 4 7 10
// 1 -2 -5 -8 -11

let maximo = 10, minimo = -10;
console.log('Incremento de 3 en 3');

for (let numero = 1; numero <= maximo; numero += 3) {
  console.log(numero);
}

// 1 -2 -5 -8 
console.log('Decremento de 3 en 3');
for (let numero = 1; numero >= minimo; numero -= 3) {
  console.log(numero);
}