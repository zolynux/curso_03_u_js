// No es posible crear objetos ante de declarar la clase
// No se aplicar el concepto de Hoisting
// let persona2 = new Persona('Karla', 'Juarez');

class Persona
{
	constructor(nombre, apellido)
	{
		this._nombre = nombre;
		this._apellido = apellido;
	}

	get nombre()
	{
		return this._nombre;
	}

	set nombre(nombre)
	{
		this._nombre = nombre;
	}


}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos'; // Set nombre ('Juan Carlos')
console.log(persona1.nombre); // Get nombre

let persona2 = new Persona('Karla', 'Juarez');
console.log(persona2)