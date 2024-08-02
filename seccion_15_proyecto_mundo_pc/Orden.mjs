export default class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadora = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadora.push(computadora);
  }

  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadora) {
      computadorasOrden += `\n${computadora}`;
    }

    console.log(`Orden: ${this._idOrden}, Computadora: ${computadorasOrden}`);
  }
}
