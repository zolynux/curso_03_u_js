// Subcadenas en JS
let cadena3 = 'Hola Mundo';
// substring(indice_inicio, indice_fin)
// No se incluye el caracter indice_fin
let cadena1 = cadena3.substring(0, 4);
console.log(cadena1); // 'Hola'

// Subcadena Mundo
let cadena2 = cadena3.substring(5); // Del indice 5 hasta el final de la cadena
console.log(cadena2); // 'Mundo'