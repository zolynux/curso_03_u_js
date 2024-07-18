// Funciones Recursivas en JS
// Imprimir 3,2,1

function funcionRecursiva(numero) {
  // Case base
  if (numero == 1) {
    console.log(numero);
  }
  else {
    console.log(numero);
    funcionRecursiva(numero - 1);
  }
}

// Llamamos la función recursiva
funcionRecursiva(3);