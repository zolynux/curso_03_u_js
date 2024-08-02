import DispositivoEntrada from "./DispositivoEntrada.mjs";

export default class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [idTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
  }
}
