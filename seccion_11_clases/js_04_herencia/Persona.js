class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); // Llamar al constructor de la clase padre
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre); // Get nombre

let empleado1 = new Empleado("Maria", "Jimenez", "Sistema");
console.log(empleado1);
console.log(empleado1.nombre);
