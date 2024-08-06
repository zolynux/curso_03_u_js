"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = "Juan";
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
}
let persona1 = new Persona("Juan");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
