# Funciones en JavaScript

Las funciones en JavaScript son bloques de código reutilizables que realizan una tarea específica. Las funciones permiten dividir un programa en partes más pequeñas y manejables, mejorar la legibilidad y reducir la repetición de código.

## Declaración de Funciones

Existen varias formas de definir funciones en JavaScript:

### Función Declarada

Una función declarada se define usando la palabra clave `function`, seguida del nombre de la función, una lista de parámetros entre paréntesis y un bloque de código entre llaves.

```javascript
function saludar(nombre) {
    console.log('Hola, ' + nombre + '!');
}

saludar('Juan'); // Salida: Hola, Juan!
```

### Función Expresada

Una función expresada es una función que se define como parte de una expresión. Las funciones expresadas pueden ser anónimas (sin nombre).

```javascript
let saludar = function(nombre) {
    console.log('Hola, ' + nombre + '!');
};

saludar('Juan'); // Salida: Hola, Juan!
```

### Función Flecha

Las funciones flecha (`arrow functions`) son una forma más concisa de escribir funciones anónimas. Utilizan la sintaxis `=>`.

```javascript
let saludar = (nombre) => {
    console.log('Hola, ' + nombre + '!');
};

saludar('Juan'); // Salida: Hola, Juan!
```

Si la función flecha tiene un solo parámetro y una sola línea de código, se puede simplificar aún más:

```javascript
let saludar = nombre => console.log('Hola, ' + nombre + '!');

saludar('Juan'); // Salida: Hola, Juan!
```

### Parámetros y Argumentos

Las funciones pueden tomar parámetros, que son variables listadas como parte de la definición de la función. Los argumentos son los valores reales que se pasan a la función cuando se invoca.

```javascript
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3); // resultado: 8
```

### Valores por Defecto para Parámetros

Puedes asignar valores por defecto a los parámetros de una función en caso de que no se proporcionen argumentos.

```javascript
function saludar(nombre = 'Visitante') {
    console.log('Hola, ' + nombre + '!');
}

saludar(); // Salida: Hola, Visitante!
saludar('Juan'); // Salida: Hola, Juan!
```

### Funciones como Valores de Retorno

Las funciones en JavaScript pueden devolver valores utilizando la palabra clave `return`.

```javascript
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 5); // resultado: 20
```

### Funciones Anidadas

Las funciones pueden definirse dentro de otras funciones. Las funciones anidadas solo están disponibles dentro de la función en la que se definen.

```javascript
function exterior() {
    let mensaje = 'Hola';

    function interior() {
        console.log(mensaje);
    }

    interior();
}

exterior(); // Salida: Hola
```

### Funciones de Primera Clase

En JavaScript, las funciones se tratan como ciudadanos de primera clase, lo que significa que pueden asignarse a variables, pasarse como argumentos a otras funciones y devolverse desde funciones.

### Asignar Funciones a Variables

```javascript
let saludar = function(nombre) {
    console.log('Hola, ' + nombre + '!');
};

saludar('Juan'); // Salida: Hola, Juan!
```

### Pasar Funciones como Argumentos

```javascript
function operar(a, b, operacion) {
    return operacion(a, b);
}

let suma = (a, b) => a + b;
let resultado = operar(5, 3, suma); // resultado: 8
```

### Devolver Funciones desde Otras Funciones

```javascript
function crearSaludo(saludo) {
    return function(nombre) {
        console.log(saludo + ', ' + nombre + '!');
    };
}

let saludar = crearSaludo('Hola');
saludar('Juan'); // Salida: Hola, Juan!
```

### Closures

Un closure es una función que recuerda el entorno léxico en el que fue creada, es decir, puede acceder a variables de su ámbito exterior incluso después de que la función exterior haya terminado de ejecutarse.

```javascript
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

let contar = crearContador();
console.log(contar()); // 1
console.log(contar()); // 2
```

### Funciones Asíncronas

Las funciones asíncronas (`async`) y la palabra clave `await` permiten trabajar con promesas de una manera más fácil y legible.

```javascript
async function obtenerDatos() {
    let respuesta = await fetch('https://api.ejemplo.com/datos');
    let datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();
```

### Conclusión

Las funciones en JavaScript son fundamentales para la programación modular y la reutilización de código. Dominar las diferentes formas de definir y usar funciones te permitirá escribir código más limpio, eficiente y mantenible.

---

## Funciones en JavaScript 2

Las funciones en JavaScript son bloques de código reutilizables que realizan una tarea específica. Permiten dividir el código en partes más manejables, mejorando la organización y la reutilización.

### Sintaxis para Definir una Función en JavaScript

#### Declaración de Función

La forma más común de definir una función es mediante una declaración de función, usando la palabra clave `function`.

```javascript
function nombreDeLaFuncion(parametro1, parametro2) {
    // cuerpo de la función
    return resultado;
}
```

#### Ejemplo

```javascript
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(3, 4); // 7
```

### Diferencia entre Parámetros y Argumentos en JavaScript

- **Parámetros**: Son los nombres listados en la definición de la función. Actúan como variables locales dentro de la función.
  
  ```javascript
  function saludar(nombre) {
      console.log('Hola, ' + nombre + '!');
  }
  ```

- **Argumentos**: Son los valores que se pasan a la función cuando se invoca. Estos valores se asignan a los parámetros correspondientes.
  
  ```javascript
  saludar('Juan'); // 'Juan' es el argumento
  ```

### Diferencia entre Procedimiento y Función en JavaScript

En programación, el término **procedimiento** se refiere a una función que realiza una acción pero no devuelve un valor explícito. En JavaScript, una función sin `return` se comporta como un procedimiento.

- **Función**: Devuelve un valor utilizando la palabra clave `return`.
  
  ```javascript
  function sumar(a, b) {
      return a + b;
  }
  
  let resultado = sumar(3, 4); // 7
  ```

- **Procedimiento**: Realiza una acción pero no devuelve un valor explícito.
  
  ```javascript
  function saludar(nombre) {
      console.log('Hola, ' + nombre + '!');
  }
  
  saludar('Juan'); // 'Hola, Juan!'
  ```

### Tipos de Funciones en JavaScript

1. **Funciones Declaradas**

   Definidas usando la palabra clave `function`. Están disponibles en todo el ámbito en el que se definen.

   ```javascript
   function saludar(nombre) {
       console.log('Hola, ' + nombre + '!');
   }
   
   saludar('Juan');
   ```

2. **Funciones Expresadas**

   Definidas dentro de una expresión y asignadas a una variable. No están disponibles hasta que la expresión se evalúa.

   ```javascript
   let saludar = function(nombre) {
       console.log('Hola, ' + nombre + '!');
   };
   
   saludar('Juan');
   ```

3. **Funciones Flecha (Arrow Functions)**

   Una forma concisa de definir funciones anónimas. No tienen su propio `this`, `arguments`, `super` o `new.target`.

   ```javascript
   let saludar = (nombre) => {
       console.log('Hola, ' + nombre + '!');
   };
   
   saludar('Juan');
   ```

   Si la función tiene un solo parámetro y una sola línea de código, puede simplificarse:

   ```javascript
   let saludar = nombre => console.log('Hola, ' + nombre + '!');
   
   saludar('Juan');
   ```

4. **Funciones Anónimas**

   Funciones sin nombre, que pueden ser asignadas a variables o utilizadas como argumentos en otras funciones.

   ```javascript
   setTimeout(function() {
       console.log('Hola, mundo!');
   }, 1000);
   ```

5. **Funciones Autoejecutables (IIFE - Immediately Invoked Function Expressions)**

   Funciones que se ejecutan inmediatamente después de ser definidas.

   ```javascript
   (function() {
       console.log('Esta función se ejecuta inmediatamente.');
   })();
   ```

6. **Funciones de Primera Clase**

   En JavaScript, las funciones son objetos de primera clase. Esto significa que pueden ser tratadas como cualquier otro valor, lo que permite asignarlas a variables, pasarlas como argumentos a otras funciones y devolverlas desde funciones.

   ```javascript
   function ejecutarFuncion(fn) {
       fn();
   }
   
   ejecutarFuncion(function() {
       console.log('Función pasada como argumento.');
   });
   ```

### Conclusión 2

Las funciones son una parte esencial de JavaScript, ofreciendo flexibilidad y modularidad en la programación. Comprender cómo definir, invocar y trabajar con diferentes tipos de funciones es fundamental para escribir código eficiente y mantenible.

---

### Paso por Valor y Paso por Referencia en JavaScript

#### Paso por Valor

En JavaScript, los tipos de datos primitivos (como números, cadenas, booleanos, `null`, `undefined`, y `symbol`) se pasan por valor. Esto significa que cuando se pasa una variable que contiene un valor primitivo a una función, se copia el valor real de la variable, y cualquier cambio en ese valor dentro de la función no afectará la variable original.

#### Ejemplo 3

```javascript
function cambiarValor(x) {
    x = 10;
    console.log(x); // 10
}

let a = 5;
cambiarValor(a);
console.log(a); // 5
```

En este caso, `a` no se ve afectado por el cambio realizado dentro de la función `cambiarValor`.

#### Paso por Referencia

Los objetos (incluyendo arrays y funciones) se pasan por referencia en JavaScript. Esto significa que cuando se pasa un objeto a una función, se pasa una referencia a ese objeto, no una copia del objeto. Como resultado, los cambios realizados en el objeto dentro de la función afectan al objeto original.

#### Ejemplo 3.1

```javascript
function cambiarPropiedad(obj) {
    obj.propiedad = 10;
}

let miObjeto = { propiedad: 5 };
cambiarPropiedad(miObjeto);
console.log(miObjeto.propiedad); // 10
```

En este caso, el objeto `miObjeto` se ve afectado por el cambio realizado dentro de la función `cambiarPropiedad`.

### Paso de Cadenas (Strings)

En JavaScript, las cadenas (strings) son inmutables y se comportan como tipos primitivos, lo que significa que se pasan por valor. Cuando se pasa una cadena a una función, se pasa una copia del valor de la cadena.

#### Ejemplo 3.2

```javascript
function cambiarCadena(str) {
    str = "Nueva cadena";
    console.log(str); // "Nueva cadena"
}

let miCadena = "Cadena original";
cambiarCadena(miCadena);
console.log(miCadena); // "Cadena original"
```

En este caso, la cadena `miCadena` no se ve afectada por el cambio realizado dentro de la función `cambiarCadena`.

### Alcance de Variable en Funciones de JavaScript

El alcance de una variable determina dónde se puede acceder a esa variable en el código. En JavaScript, existen dos tipos principales de alcance: alcance global y alcance local.

#### Alcance Global

Las variables declaradas fuera de cualquier función tienen un alcance global y pueden ser accedidas desde cualquier parte del código.

```javascript
let variableGlobal = "Soy global";

function mostrarGlobal() {
    console.log(variableGlobal); // "Soy global"
}

mostrarGlobal();
console.log(variableGlobal); // "Soy global"
```

#### Alcance Local

Las variables declaradas dentro de una función tienen un alcance local y solo pueden ser accedidas desde dentro de esa función.

```javascript
function miFuncion() {
    let variableLocal = "Soy local";
    console.log(variableLocal); // "Soy local"
}

miFuncion();
console.log(variableLocal); // Error: variableLocal is not defined
```

#### Alcance de Bloque

Con la introducción de `let` y `const` en ES6, también tenemos el alcance de bloque, que se refiere a las variables declaradas dentro de un bloque de código (como un bloque `if` o `for`). Estas variables solo pueden ser accedidas desde dentro del bloque donde se declararon.

```javascript
if (true) {
    let variableBloque = "Soy un bloque";
    console.log(variableBloque); // "Soy un bloque"
}

console.log(variableBloque); // Error: variableBloque is not defined
```

### Hoisting

El "hoisting" es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su contexto (global o función) durante la fase de compilación. Esto significa que las variables y funciones pueden ser usadas antes de ser declaradas.

#### Ejemplo de Hoisting con Variables

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

Aquí, la declaración `var x` se mueve al inicio, pero no su asignación.

#### Ejemplo de Hoisting con Funciones

```javascript
miFuncion();

function miFuncion() {
    console.log("Función llamada antes de su declaración");
}
```

En este caso, la declaración de la función `miFuncion` se mueve al inicio, permitiendo que sea llamada antes de ser definida.

### Conclusión 3

Comprender cómo JavaScript maneja el paso por valor y referencia, así como el alcance de las variables y el comportamiento del hoisting, es esencial para escribir código eficiente y evitar errores comunes. Estos conceptos son fundamentales para desarrollar aplicaciones robustas y mantener un código limpio y comprensible.
