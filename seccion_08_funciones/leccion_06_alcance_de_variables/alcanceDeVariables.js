// Alcance de Variables en JS

let variableGlobal = 5;

// Modificar el valor
variableGlobal = 10;

// Definición funcion
function miFuncion(variableLocal) {
  console.log(variableLocal);

  // Modficicamos la variable global
  variableGlobal = 20;
  // No podemos redefinir una variable global (let)
  // let variableGlobal = 30;
}

// Llamamos la función
miFuncion(variableGlobal);