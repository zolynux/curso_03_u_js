import Monitor from "./Monitor.mjs";
import Raton from "./Raton.mjs";
import Teclado from "./Teclado.mjs";
import Computadora from "./Computadora.mjs";
import Orden from "./Orden.mjs";

let raton1 = new Raton("USD", "HP");
let raton2 = new Raton("Bluetooth", "Dell");
let teclado1 = new Teclado("USD", "MSI");
let teclado2 = new Teclado("Bluetooth", "MSI");
let monitor1 = new Monitor("HP", 13);
let monitor2 = new Monitor("Acer", 22);

// console.log(raton1.toString());
// console.log(raton2.toString());

// console.log(teclado1.toString());
// console.log(teclado2.toString());

// console.log(monitor1.toString());
// console.log(monitor2.toString());

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);

// console.log(`${computadora1}`);

let computadora2 = new Computadora("DELL", monitor2, raton2, teclado2);

// console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
