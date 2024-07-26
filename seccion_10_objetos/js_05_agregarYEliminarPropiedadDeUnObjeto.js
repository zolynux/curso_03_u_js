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

persona.tel = '454334';
persona.tel = '54343346';

console.log(persona)

delete persona.tel;

console.log(persona);