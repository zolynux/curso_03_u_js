# Clases en JavaScript

---

### 1. Clases en JavaScript

Las clases en JavaScript son una forma de definir objetos y sus comportamientos. Fueron introducidas en ECMAScript 2015 (ES6) y proporcionan una sintaxis más sencilla para crear y gestionar objetos y herencias.

#### Definición de Clases

Puedes definir una clase utilizando la palabra clave `class`.

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let persona1 = new Persona('Juan', 30);
persona1.saludar(); // "Hola, me llamo Juan y tengo 30 años."
```

### 2. Métodos Get y Set en JavaScript

Los métodos `get` y `set` en JavaScript se utilizan para definir propiedades de objetos que se comportan como métodos, pero se acceden y asignan como propiedades.

#### Método Get

Define un accesor de propiedad que se ejecuta cuando se accede a la propiedad.

```javascript
class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}

let persona1 = new Persona('Juan');
console.log(persona1.nombre); // "Juan"
persona1.nombre = 'Carlos';
console.log(persona1.nombre); // "Carlos"
```

### 3. Hoisting y Clases en JavaScript

A diferencia de las funciones y las variables declaradas con `var`, las clases no son "hoisted". Esto significa que no puedes usar una clase antes de que sea definida.

#### Ejemplo de Hoisting con Clases

```javascript
const obj = new MiClase(); // ReferenceError: Cannot access 'MiClase' before initialization

class MiClase {
    constructor() {
        this.propiedad = 'valor';
    }
}
```

### 4. Herencia en JavaScript

La herencia permite crear nuevas clases basadas en clases existentes. Se utiliza la palabra clave `extends` para heredar de una clase base.

#### Ejemplo de Herencia

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

let estudiante1 = new Estudiante('Carlos', 20, 'Ingeniería');
estudiante1.saludar(); // "Hola, me llamo Carlos y tengo 20 años."
estudiante1.estudiar(); // "Carlos está estudiando Ingeniería."
```

### 5. Heredar Métodos en JavaScript

Cuando una clase hereda de otra, hereda todos sus métodos (y propiedades). Puedes llamar a los métodos de la clase base usando `super`.

#### Ejemplo:

```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, carrera) {
        super(nombre);
        this.carrera = carrera;
    }

    saludar() {
        super.saludar();
        console.log(`Estoy estudiando ${this.carrera}.`);
    }
}

let estudiante1 = new Estudiante('Ana', 'Matemáticas');
estudiante1.saludar();
// "Hola, me llamo Ana."
// "Estoy estudiando Matemáticas."
```

### 6. Sobreescritura en JavaScript

La sobreescritura se refiere a definir un método en una clase derivada que ya existe en la clase base. Esto permite personalizar o extender la funcionalidad heredada.

#### Ejemplo de Sobreescritura

```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, carrera) {
        super(nombre);
        this.carrera = carrera;
    }

    saludar() {
        console.log(`Hola, soy un estudiante y me llamo ${this.nombre}.`);
    }
}

let estudiante1 = new Estudiante('Luis', 'Historia');
estudiante1.saludar(); // "Hola, soy un estudiante y me llamo Luis."
```

### 7. Clase Object, Método toString, Sobreescritura y Polimorfismo en JavaScript

#### Clase `Object`

En JavaScript, todas las clases heredan de la clase base `Object`. Esto significa que todas las instancias de clases tienen propiedades y métodos de `Object`.

#### Método `toString`

El método `toString` devuelve una cadena que representa al objeto. Puedes sobreescribir este método para personalizar su comportamiento.

#### Ejemplo de `toString`

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}

let persona1 = new Persona('Marta', 28);
console.log(persona1.toString()); // "Nombre: Marta, Edad: 28"
```

#### Polimorfismo

El polimorfismo permite tratar objetos de diferentes clases de manera uniforme. En JavaScript, esto se logra mediante la sobreescritura de métodos y la herencia.

#### Ejemplo de Polimorfismo

```javascript
class Animal {
    hacerSonido() {
        console.log('El animal hace un sonido');
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log('El perro ladra');
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log('El gato maúlla');
    }
}

function hacerSonidoAnimal(animal) {
    animal.hacerSonido();
}

let perro = new Perro();
let gato = new Gato();

hacerSonidoAnimal(perro); // "El perro ladra"
hacerSonidoAnimal(gato); // "El gato maúlla"
```

### Conclusión

Las clases y los conceptos relacionados en JavaScript proporcionan una estructura poderosa para crear y gestionar objetos, facilitando la reutilización de código y la implementación de patrones de diseño orientados a objetos. Comprender cómo funcionan las clases, la herencia, la sobreescritura y el polimorfismo te permitirá escribir código más modular, mantenible y eficiente.

---

Claro, voy a explicarte estos conceptos relacionados con la programación orientada a objetos en JavaScript.



```javascript
// 1. Clases en JavaScript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Uso de la clase
const persona1 = new Persona("Ana", 30);
persona1.saludar(); // Output: Hola, soy Ana y tengo 30 años.

// 2. Métodos Get y Set en JavaScript
class Cuenta {
  constructor(saldo) {
    this._saldo = saldo; // Convención: usar _ para propiedades "privadas"
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this._saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo");
    }
  }
}

const cuenta1 = new Cuenta(1000);
console.log(cuenta1.saldo); // Output: 1000
cuenta1.saldo = 1500;
console.log(cuenta1.saldo); // Output: 1500
cuenta1.saldo = -500; // Output: El saldo no puede ser negativo

// 3. Hoisting y Clases en JavaScript
// Las clases no son elevadas (hoisted), a diferencia de las funciones
// Este código daría un error:
// const p = new Persona(); // Error: Persona is not defined
// class Persona {}

// 4. Herencia en JavaScript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {
  hablar() {
    console.log(`${this.nombre} ladra.`);
  }
}

const perro1 = new Perro("Bobby");
perro1.hablar(); // Output: Bobby ladra.

// 5. Heredar Métodos en JavaScript
class Gato extends Animal {
  maullar() {
    console.log(`${this.nombre} maulla.`);
  }
}

const gato1 = new Gato("Whiskers");
gato1.hablar(); // Output: Whiskers hace un sonido. (Método heredado)
gato1.maullar(); // Output: Whiskers maulla. (Método propio)

// 6. Sobreescritura en JavaScript
class Pájaro extends Animal {
  constructor(nombre, color) {
    super(nombre); // Llama al constructor de la clase padre
    this.color = color;
  }

  hablar() {
    super.hablar(); // Llama al método de la clase padre
    console.log(`${this.nombre} es de color ${this.color}.`);
  }
}

const pájaro1 = new Pájaro("Piolin", "amarillo");
pájaro1.hablar();
// Output:
// Piolin hace un sonido.
// Piolin es de color amarillo.

// 7. Clase Object, Método toString, Sobreescritura y Polimorfismo
class Vehículo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  toString() {
    return `Vehículo: ${this.marca} ${this.modelo}`;
  }
}

class Coche extends Vehículo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo);
    this.puertas = puertas;
  }

  toString() {
    return `${super.toString()}, Puertas: ${this.puertas}`;
  }
}

const miCoche = new Coche("Toyota", "Corolla", 4);
console.log(miCoche.toString()); // Output: Vehículo: Toyota Corolla, Puertas: 4

```

Ahora, explicaré cada concepto en detalle:

1. Clases en JavaScript:
   Las clases en JavaScript son una "sintaxis azucarada" sobre el sistema de prototipos existente. Proporcionan una forma más clara y simple de crear objetos y lidiar con la herencia.

2. Métodos Get y Set:
   Los getters y setters permiten definir cómo se accede y modifica una propiedad. Son útiles para encapsulación y para añadir lógica al acceso a propiedades.

3. Hoisting y Clases:
   A diferencia de las funciones, las declaraciones de clase no son elevadas (hoisted). Esto significa que debes declarar una clase antes de poder usarla en tu código.

4. Herencia:
   La herencia permite que una clase herede propiedades y métodos de otra. Se utiliza la palabra clave `extends` para crear una clase hija.

5. Heredar Métodos:
   Las clases hijas heredan automáticamente los métodos de la clase padre, pero también pueden tener sus propios métodos únicos.

6. Sobreescritura:
   Las clases hijas pueden redefinir métodos heredados de la clase padre. Usando `super`, pueden acceder a los métodos de la clase padre.

7. Clase Object, toString, Sobreescritura y Polimorfismo:
   - Todas las clases en JavaScript heredan implícitamente de Object.
   - El método `toString()` es heredado de Object y puede ser sobreescrito.
   - La sobreescritura permite que diferentes clases implementen el mismo método de manera diferente.
   - El polimorfismo permite que objetos de diferentes clases respondan al mismo método de maneras específicas a su clase.

¿Hay algún concepto en particular que te gustaría que explique con más detalle?