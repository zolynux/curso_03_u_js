// Paso por referencia en JS
// Objetos (array) se pasan por referencia

function cambiarValor(parametro) {
  parametro[0] = 20;
}

// Llamamos de la función
let arreglo = [10];
console.log(`Antes funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Después funcion: ${arreglo[0]}`);
