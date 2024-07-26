// Función constructor de objectos de tipo Persona
function Persona(nombre, apellido, email)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.nombreCompleto = function() {return  this.nombre + ' ' + this.apellido;}
}

let padre = new Persona('Juan', 'Perez', 'jperez@email.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero', 'lquintero@email.com');
console.log(madre.nombreCompleto());

padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function () { };