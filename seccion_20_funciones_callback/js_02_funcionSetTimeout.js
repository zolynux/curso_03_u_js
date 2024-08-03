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

// Llamadas asíncronas con uso setTimeout
function miFuncionCallback() {
  console.log("Saludo asíncrono después de 3 seg");
}

setTimeout(miFuncionCallback, 3000); // Después de 3 segundo

setTimeout(function () {
  console.log("Saludo asíncrono 2");
}, 4000);

setTimeout(() => console.log("Saludo asíncrono 3 con funcion flecha"), 5000);
