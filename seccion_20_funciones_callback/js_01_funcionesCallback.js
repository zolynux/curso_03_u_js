miFunction1();
miFunction2();

function miFunction1() {
  console.log("función 1");
}

function miFunction2() {
  console.log("Función 2");
}

// Función de tipo callback
let imp = function imprimir(mensaje) {
  console.log(mensaje);
};

function sumar(op1, op2, funcionCallback) {
  let res = op1 + op2;
  funcionCallback(`Resultado: ${res}`);
}

sumar(3, 5, imp);
