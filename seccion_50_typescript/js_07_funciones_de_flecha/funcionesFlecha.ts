let suma = function (a: number, b: number) {
  return a + b;
};

console.log(suma(1, 2));

// let sumaFlecha = (a: number, b: number) => a + b;

let sumaFlecha = (a: number, b: number) => {
  return a + b;
};

console.log(sumaFlecha(3, 2));

var obtenerNombre = function () {
  return "Juan";
};

console.log(obtenerNombre());

var obtenerNombreFlecha = () => "Juan";

console.log(obtenerNombreFlecha());
