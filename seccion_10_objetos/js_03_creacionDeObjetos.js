let x = 10;

console.log(x.length);

let persona = {
	nombre: 'Juan',
	apellido: 'Perez',
	email: 'jperez@mail.com',
	edad: 28,
	nombreCompleto: function ()
	{
		return this.nombre + ' ' + this.apellido;
	}
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '123456789';

console.log(persona2.tel);