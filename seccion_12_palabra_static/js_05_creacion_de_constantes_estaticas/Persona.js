// Clase Object, Método toString, Sobreescritura y Polimorfismo en JavaScript

class Persona {
  static contadorPersonas = 0; // Atributo de nuestra clase

  static get MAX_OBJ() {
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("Se han superado el máximo de objetos permitidos");
    }
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

  nombreCompleto() {
    return this.idPersona + ": " + this._nombre + " " + this._apellido;
  }
  // Sobreescritura el  método de la clase Padre (Object)
  toString() {
    // Se aplica polimorfismo (Multiples forma en tiempo de ejecución)
    // el método que se ejecuta depende si es una referencia de tipo padre
    // o de tipo hijo
    return this.nombreCompleto();
  }

  static saludar() {
    console.log("Saludo desde método static");
  }

  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
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

  // Sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString()); // Get nombre

let empleado1 = new Empleado("Maria", "Jimenez", "Sistema");
console.log(empleado1.toString());

console.log(Persona.toString());

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona("Mariano", "Lara");
let persona4 = new Persona("Armando", "Toledo");
let persona5 = new Persona("Luara", "Toro");
