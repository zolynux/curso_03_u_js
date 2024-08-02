miFuncion();

function miFuncion() {
  console.log("Saludo desde mi función");
}

miFuncion();

// miFuncionVariable(); // Cannot access functions before initialization
let miFuncionVariable = function () {
  console.log("Saludo desde mi función Variable de let o const");
};

miFuncionVariable();

// miFuncionFlecha(); // Cannot access functions before initialization
// let miFuncionFlecha = () => {
//   console.log("Saludo dese mi Función Flecha en let, var o const");
// };

// const miFuncionFlecha = () => console.log("Saludo dese mi Función Flecha en let, var o const");

// miFuncionFlecha();

// const saludar = () => {
//   return "Saludo desde Función Flecha";
// };

const saludar = () => "Saludo desde Función Flecha en una línea";

console.log(saludar());

const regresarObjeto = () => ({ nombre: "Juan", apellido: "Lara" });

console.log(regresarObjeto());

const funcionConParametrosClasico = function (mensaje) {
  console.log(mensaje);
};
funcionConParametrosClasico("Salud con parametros");

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros("Salud con parametros");

// const funcionVariosParametros = (op1, op2) => op1 + op2;
const funcionVariosParametros = (op1, op2) => {
  let resultado = op1 + op2;
  // return resultado;
  return `Resultado: ${resultado}`;
};
console.log(funcionVariosParametros(2, 3));
