export default class Computadora {
  static contadorComputadores = 0;

  constructor(nombre, monitor, raton, teclado) {
    this._idComputadora = ++Computadora.contadorComputadores;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }

  toString() {
    return `Computadora ${this._idComputadora}: ${this._nombre}\n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
  }
}
