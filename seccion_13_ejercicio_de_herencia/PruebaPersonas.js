class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
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

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  toString() {
    return `
ID: ${this._idPersona}
Nombre: ${this._nombre}
Apellido: ${this._apellido}
Edad: ${this._edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()}
ID-Empleado: ${this._idEmpleado}
Sueldo: ${this._sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._fechaRegistro = fechaRegistro;
    this._idCliente = ++Cliente.contadorClientes;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()}
ID-Cliente: ${this._idCliente}
Fecha de Registro: ${this._fechaRegistro}`;
  }
}

let persona1 = new Persona("Juan", "Perez", 32);
console.log(persona1.toString());

let persona2 = new Persona("Carlos", "Ramirez", 52);
console.log(persona2.toString());

let empleado1 = new Empleado("Karla", "Gomez", 24, 34252);
console.log(empleado1.toString());

let empleado2 = new Empleado("Laura", "Quintero", 33, 453443);
console.log(empleado2.toString());

let cliente1 = new Cliente("Miguel", "Cervantes", 30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("Maria", "Lara", 32, new Date());
console.log(cliente2.toString());
