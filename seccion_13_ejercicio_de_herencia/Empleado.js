class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(sueldo) {
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
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
    return `
		${super.toString()}
		ID-Empleado: ${this._idEmpleado}
		Sueldo: ${this._sueldo}`;
  }
}
