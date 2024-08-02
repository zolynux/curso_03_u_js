import Producto from "./Producto.mjs";
import Orden from "./Orden.mjs";

let producto1 = new Producto("Pantalón", 324);
let producto2 = new Producto("Camisa", 200);

let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Cinturon", 40);

orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);
orden2.agregarProductos(producto3);

orden2.mostrarOrden();
