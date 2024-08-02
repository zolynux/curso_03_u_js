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
let miFuncionFlecha = () => {
  console.log("Saludo dese mi Función Flecha");
};

miFuncionFlecha();
