# Objetos en JavaScript

1. Objetos
2. Agregar Métodos a Objetos
3. Creación de Objetos
4. Acceder a las propiedades de los objetos
5. Agregar y Eliminar Propiedades de un Objeto
6. Distintas Formas de Imprimir un Object
7. Método get en Objetos de JavaScript
8. Método set en Objetos de JavaScript
9. Método Constructor Objetos en JavaScript
10. Agregar Métodos a un Método Constructor de Objetos
11. Distintas Formas de Crear Objetos
12. Uso de Prototype
13. Uso de Call
14. Paso de Argumentos a Call
15. Método Apply

---

Entendido. Te explicaré cada uno de estos conceptos relacionados con objetos en JavaScript:

1. Objetos:
Los objetos en JavaScript son estructuras de datos que contienen propiedades y métodos. Se utilizan para almacenar colecciones de datos y funcionalidades relacionadas.

2. Agregar Métodos a Objetos:
Puedes agregar métodos (funciones) a un objeto de la siguiente manera:

```javascript
let persona = {
  nombre: "Juan",
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};
persona.saludar(); // Imprime: "Hola, soy Juan"
```

3. Creación de Objetos:
Puedes crear objetos de varias formas, la más común es usando la notación literal:

```javascript
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};
```

4. Acceder a las propiedades de los objetos:
Puedes acceder a las propiedades de un objeto usando la notación de punto o la notación de corchetes:

```javascript
console.log(coche.marca); // "Toyota"
console.log(coche["modelo"]); // "Corolla"
```

5. Agregar y Eliminar Propiedades de un Objeto:
Para agregar una propiedad, simplemente asígnale un valor. Para eliminar, usa el operador `delete`:

```javascript
coche.color = "rojo"; // Agregar propiedad
delete coche.año; // Eliminar propiedad
```

6. Distintas Formas de Imprimir un Object:
Puedes usar `console.log()`, `JSON.stringify()`, o recorrer el objeto con un bucle:

```javascript
console.log(coche);
console.log(JSON.stringify(coche));
for (let prop in coche) {
  console.log(prop + ": " + coche[prop]);
}
```

7. Método get en Objetos de JavaScript:
Los getters permiten acceder a una propiedad como si fuera un valor, pero ejecutan una función:

```javascript
let persona = {
  nombre: "Ana",
  apellido: "García",
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
};
console.log(persona.nombreCompleto); // "Ana García"
```

8. Método set en Objetos de JavaScript:
Los setters permiten establecer un valor de una propiedad ejecutando una función:

```javascript
let persona = {
  nombre: "Juan",
  set cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre.toUpperCase();
  }
};
persona.cambiarNombre = "pedro";
console.log(persona.nombre); // "PEDRO"
```

9. Método Constructor Objetos en JavaScript:
Los constructores son funciones que se usan para crear objetos:

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
let persona1 = new Persona("María", 30);
```

10. Agregar Métodos a un Método Constructor de Objetos:
Puedes agregar métodos dentro del constructor:

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log("Hola, soy " + this.nombre);
  };
}
```

11. Distintas Formas de Crear Objetos:
Además de la notación literal y constructores, puedes usar `Object.create()`:

```javascript
let prototipoPersona = {
  saludar: function() {
    console.log("Hola");
  }
};
let persona = Object.create(prototipoPersona);
```

12. Uso de Prototype:
`prototype` se usa para agregar propiedades y métodos a todos los objetos creados por un constructor:

```javascript
Persona.prototype.nacionalidad = "Española";
Persona.prototype.presentarse = function() {
  console.log("Soy " + this.nombre + " y soy " + this.nacionalidad);
};
```

13. Uso de Call:
`call` permite llamar a una función estableciendo el valor de `this`:

```javascript
function saludar() {
  console.log("Hola, soy " + this.nombre);
}
let persona = { nombre: "Luis" };
saludar.call(persona); // "Hola, soy Luis"
```

14. Paso de Argumentos a Call:
`call` también permite pasar argumentos a la función:

```javascript
function presentar(saludo, despedida) {
  console.log(saludo + ", soy " + this.nombre + ". " + despedida);
}
presentar.call(persona, "Hola", "Adiós"); // "Hola, soy Luis. Adiós"
```

15. Método Apply:
`apply` es similar a `call`, pero acepta los argumentos como un array:

```javascript
presentar.apply(persona, ["Hola", "Hasta luego"]); // "Hola, soy Luis. Hasta luego"
```

¿Hay algún tema en particular de estos que te gustaría que explicara con más detalle?