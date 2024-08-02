# Programación Orientada a Objetos (POO) en JavaScript

La **programación orientada a objetos (POO)** en JavaScript es un paradigma de programación que utiliza objetos y sus interacciones para modelar y resolver problemas del mundo real. Aunque JavaScript no es un lenguaje basado en clases como Java o C++, se puede usar POO mediante el uso de **prototipos**.

### Conceptos clave de POO en JavaScript:

1. **Clases y Objetos**:

   - **Clase**: Es una plantilla para crear objetos. En JavaScript, se puede definir una clase usando la palabra clave `class`.
   - **Objeto**: Es una instancia de una clase. Contiene propiedades y métodos.

   ```javascript
   class Persona {
     constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
     }
     saludar() {
       console.log(`Hola, mi nombre es ${this.nombre}`);
     }
   }
   const juan = new Persona("Juan", 30);
   juan.saludar(); // Hola, mi nombre es Juan
   ```

2. **Herencia**:

   - Permite crear nuevas clases basadas en clases existentes. La nueva clase hereda las propiedades y métodos de la clase base.

   ```javascript
   class Estudiante extends Persona {
     constructor(nombre, edad, curso) {
       super(nombre, edad);
       this.curso = curso;
     }
     estudiar() {
       console.log(`${this.nombre} está estudiando ${this.curso}`);
     }
   }
   const maria = new Estudiante("María", 22, "Matemáticas");
   maria.saludar(); // Hola, mi nombre es María
   maria.estudiar(); // María está estudiando Matemáticas
   ```

3. **Encapsulación**:

   - Esconder los detalles internos de un objeto y exponer solo lo necesario. En JavaScript, se puede usar el prefijo `_` para indicar que una propiedad es privada (aunque no es una verdadera encapsulación).

   ```javascript
   class CuentaBancaria {
     constructor(saldo) {
       this._saldo = saldo;
     }
     depositar(cantidad) {
       this._saldo += cantidad;
     }
     obtenerSaldo() {
       return this._saldo;
     }
   }
   const cuenta = new CuentaBancaria(1000);
   cuenta.depositar(500);
   console.log(cuenta.obtenerSaldo()); // 1500
   ```

4. **Polimorfismo**:
   - Permite que diferentes clases puedan ser tratadas como instancias de una misma clase a través de una interfaz común.
   ```javascript
   class Animal {
     hacerSonido() {
       console.log("Sonido genérico");
     }
   }
   class Perro extends Animal {
     hacerSonido() {
       console.log("Guau");
     }
   }
   class Gato extends Animal {
     hacerSonido() {
       console.log("Miau");
     }
   }
   const animales = [new Perro(), new Gato()];
   animales.forEach((animal) => animal.hacerSonido());
   // Guau
   // Miau
   ```

Estos conceptos te ayudarán a organizar tu código de manera más estructurada y eficiente, facilitando su mantenimiento y reutilización³⁴. ¿Hay algún concepto específico que te gustaría profundizar más?

Origen: Conversación con Copilot 2/8/2024
(1) Programación Orientada a Objetos en JavaScript – Explicado con ejemplos. https://www.freecodecamp.org/espanol/news/programacion-orientada-a-objectos-en-javascript-explicado-con-ejemplos/.
(2) Orientación a objetos - Javascript en español - Lenguaje JS. https://lenguajejs.com/javascript/oop/que-es/.
(3) Programación Orientada a Objetos en JavaScript | Zoedev. https://bing.com/search?q=programaci%c3%b3n+orientada+a+objetos+POO+en+JavaScript.
(4) Programación Orientada a Objetos en JavaScript | Zoedev. https://www.zoedev.com/javascript/programacion-orientada-a-objetos-en-javascript/.
(5) Programación Orientada a Objetos en JavaScript - Platzi. https://platzi.com/tutoriales/2332-javascript-poo/11331-programacion-orientada-a-objetos-en-javascript/.
(6) Programación Orientada a Objetos en JavaScript - Platzi. https://platzi.com/tutoriales/2332-javascript-poo/21297-programacion-orientada-a-objetos-en-javascript-3/.
