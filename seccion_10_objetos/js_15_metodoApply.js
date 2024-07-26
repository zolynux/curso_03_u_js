let persona1 = {
	nombre: 'Juan',
	apellido: 'Perez',
	nombreCompleto: function (titulo, tel)
	{
		// return this.nombre + ' ' + this.apellido;
		return `${titulo}: ${this.nombre} ${this.apellido},  ${tel}`
	}
}

let persona2 = {
	nombre: 'Carlos',
	apellido: 'Lara'
}

// Uso de Apply para usar
// El método persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Lic', '5494654'));

let arreglo = ['Ing', '90545445']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));