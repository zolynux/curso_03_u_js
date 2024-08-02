export default class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamano) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamano = tamano;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}]`;
  }
}
