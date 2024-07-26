let persona1 = {
	nombre: 'Juan',
	apellido: 'Perez',
	nombreCompleto : function(titulo, tel) {return `${titulo}: ${this.nombre} ${this.apellido},  ${tel}`}
}

let persona2 = {
	nombre: 'Carlos',
	apellido: 'Lara'
}

// Uso de Call para usar
// El método persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Linc','09655554'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '435344343' ));