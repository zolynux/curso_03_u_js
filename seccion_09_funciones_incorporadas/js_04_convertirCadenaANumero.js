// Convertir de cadena a numero en JS
let a = '10', b = '20';
// Si son cadenas se concatenan
console.log(a + b); // '1020'

// Convertir a numeros para que se sumen
// let suma = +a + +b;
// let suma = Number(a) + Number(b);
let suma = parseInt(a) + parseInt(b);
console.log(suma); // 30