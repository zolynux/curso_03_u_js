// Función constructor de objectos de tipo Persona
function Persona(nombre, apellido, email)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.nombreCompleto = function() {return  this.nombre + ' ' + this.apellido;}
}

Persona.prototype.tel = '4335434';

let padre = new Persona('Juan', 'Perez', 'jperez@email.com');
padre.tel = '2342324'
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@email.com');
madre.tel = '764534';
console.log(madre.tel);