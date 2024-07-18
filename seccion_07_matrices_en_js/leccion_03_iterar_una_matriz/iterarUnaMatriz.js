// Matrices en JS
// Declaración de una matriz

let matriz = [[100, 200, 300], [400, 500, 600]];

// Numeros Rengloes
console.log(matriz.length);
// Numeros Columnas (depende del renglon seleccionado)
console.log(matriz[0].length);
console.log(matriz[1].length);

// Renglones
for (let ren = 0; ren < matriz.length; ren++) {
  // Columnas
  for (let col = 0; col < matriz[ren].length; col++) {
    console.log(`Elemeno [${ren}][${col}] = ${matriz[ren][col]}`);
  }
}
