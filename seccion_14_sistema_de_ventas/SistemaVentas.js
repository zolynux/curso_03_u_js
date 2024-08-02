class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    return (this._precio = precio);
  }

  toString() {
    return `idProducto: ${this._idProducto}\nNombre: ${this.nombre}\nPrecio: ${this.precio}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProductos(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      // this._productos[this._contadorProductosAgregados++] = producto;
    } else {
      console.log("No se pueden agregar más productos");
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this._productos) {
      productoOrden += "\n{ " + producto.toString() + " }";
    }

    console.log(
      `Orden: ${
        this._idOrden
      }\nTotal: ${this.calcularTotal()}, productos: $${productoOrden}`
    );
  }
}
let producto1 = new Producto("Pantalón", 324);
let producto2 = new Producto("Camisa", 200);

let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();
