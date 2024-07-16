# Variables en JavaScript

---

### Variables en JavaScript

Las variables en JavaScript son contenedores que se utilizan para almacenar datos. Estos datos pueden ser de diferentes tipos, como números, cadenas de texto, objetos, arrays, etc. Aquí tienes una explicación detallada sobre las variables en JavaScript, incluyendo cómo declararlas, inicializarlas y los diferentes tipos de variables disponibles.

### Declaración de Variables

En JavaScript, existen tres formas principales de declarar variables: `var`, `let` y `const`.

#### `var`

La declaración `var` se utiliza desde las versiones iniciales de JavaScript. Las variables declaradas con `var` tienen un alcance de función o global, dependiendo de dónde se declaren.

```javascript
var nombre = 'Juan';
var edad = 30;

function ejemploVar() {
    var mensaje = 'Hola';
    console.log(mensaje); // Salida: Hola
}

console.log(nombre); // Salida: Juan
console.log(edad);   // Salida: 30
```

#### `let`

Introducida en ES6 (ECMAScript 2015), `let` permite declarar variables con un alcance de bloque. Esto significa que la variable solo existe dentro del bloque de código en el que se declara.

```javascript
let ciudad = 'Madrid';

if (true) {
    let pais = 'España';
    console.log(ciudad); // Salida: Madrid
    console.log(pais);   // Salida: España
}

console.log(ciudad); // Salida: Madrid
// console.log(pais);   // Error: pais no está definido
```

#### `const`

También introducida en ES6, `const` se utiliza para declarar variables cuyo valor no cambiará una vez asignado. Al igual que `let`, `const` tiene un alcance de bloque.

```javascript
const PI = 3.1416;
console.log(PI); // Salida: 3.1416

// PI = 3.14; // Error: No se puede reasignar una constante

if (true) {
    const GRAVEDAD = 9.8;
    console.log(GRAVEDAD); // Salida: 9.8
}

// console.log(GRAVEDAD); // Error: GRAVEDAD no está definido
```

### Tipos de Datos

JavaScript es un lenguaje de tipado dinámico, lo que significa que las variables pueden contener valores de cualquier tipo y el tipo puede cambiar durante la ejecución del programa.

#### Tipos Primitivos

1. **Número**:

   ```javascript
   let edad = 25;
   let precio = 19.99;
   ```

2. **Cadena de Texto (String)**:

   ```javascript
   let nombre = 'Juan';
   let saludo = "Hola, ¿cómo estás?";
   ```

3. **Booleano**:

   ```javascript
   let esVerdad = true;
   let esFalso = false;
   ```

4. **Nulo (Null)**:

   ```javascript
   let valorNulo = null;
   ```

5. **Indefinido (Undefined)**:

   ```javascript
   let valorIndefinido;
   ```

6. **Símbolo (Symbol)** (Introducido en ES6):

   ```javascript
   let simbolo = Symbol('descripcion');
   ```

#### Tipos de Datos Compuestos

1. **Objeto**:

   ```javascript
   let persona = {
       nombre: 'Ana',
       edad: 28,
       ciudad: 'Barcelona'
   };
   ```

2. **Array**:

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let colores = ['rojo', 'verde', 'azul'];
   ```

### Ámbito de las Variables

El ámbito (scope) de una variable determina dónde puede ser accedida. En JavaScript, hay tres tipos principales de ámbitos:

1. **Ámbito Global**: Las variables declaradas fuera de cualquier función tienen un ámbito global y pueden ser accedidas desde cualquier parte del código.

2. **Ámbito de Función**: Las variables declaradas dentro de una función solo pueden ser accedidas dentro de esa función.

3. **Ámbito de Bloque**: Las variables declaradas con `let` o `const` dentro de un bloque (`{}`) solo pueden ser accedidas dentro de ese bloque.

```javascript
function ejemploAmbito() {
    var x = 10; // Ámbito de función
    if (true) {
        let y = 20; // Ámbito de bloque
        const z = 30; // Ámbito de bloque
        console.log(x); // Salida: 10
        console.log(y); // Salida: 20
        console.log(z); // Salida: 30
    }
    console.log(x); // Salida: 10
    // console.log(y); // Error: y no está definido
    // console.log(z); // Error: z no está definido
}

ejemploAmbito();
```

### Hoisting

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones son movidas al inicio de su contexto de ejecución durante la fase de compilación.

```javascript
console.log(mensaje); // Salida: undefined
var mensaje = 'Hola Mundo';

// Equivalente a:
var mensaje;
console.log(mensaje); // Salida: undefined
mensaje = 'Hola Mundo';
```

### Conclusión

Las variables son fundamentales en JavaScript y conocer cómo declararlas y utilizarlas correctamente es esencial para escribir código efectivo y eficiente. Usar `let` y `const` en lugar de `var` es una buena práctica para evitar errores relacionados con el ámbito y el hoisting. Además, es importante entender los diferentes tipos de datos y cómo manejarlos adecuadamente en tus programas.

---

Definir variables en JavaScript sigue ciertas reglas y convenciones que aseguran que tu código sea legible, mantenible y libre de errores. Aquí te explico las reglas para definir variables en JavaScript:

### Reglas para Definir una Variable

1. **Declaración con `var`, `let` o `const`**:
   - `var`: Se usa para declarar variables globales o de ámbito de función.
   - `let`: Se usa para declarar variables de ámbito de bloque.
   - `const`: Se usa para declarar constantes de ámbito de bloque que no pueden ser reasignadas.

   ```javascript
   var nombre = 'Juan';
   let edad = 30;
   const PI = 3.1416;
   ```

2. **Nombres Válidos**:
   - Los nombres de las variables deben comenzar con una letra (a-z, A-Z), un signo de dólar ($) o un guion bajo (_).
   - Los caracteres posteriores pueden ser letras, dígitos (0-9), signos de dólar ($) o guiones bajos (_).
   - No pueden empezar con un número.

   ```javascript
   let nombre;
   let $dinero;
   let _privado;
   let edad2;
   ```

3. **Palabras Reservadas**:
   - No puedes usar palabras reservadas de JavaScript como nombres de variables. Ejemplos de palabras reservadas son: `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `let`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`.

   ```javascript
   // Incorrecto
   // let for = 10; // SyntaxError: Unexpected token 'for'
   ```

4. **Sensible a Mayúsculas y Minúsculas**:
   - JavaScript distingue entre mayúsculas y minúsculas, por lo que `nombre` y `Nombre` son variables diferentes.

   ```javascript
   let nombre = 'Juan';
   let Nombre = 'Ana';
   console.log(nombre); // Salida: Juan
   console.log(Nombre); // Salida: Ana
   ```

### Buenas Prácticas para Definir Variables

1. **Nombres Descriptivos**:
   - Usa nombres de variables que describan claramente el propósito de la variable. Esto hace que tu código sea más legible y fácil de entender.

   ```javascript
   let edadUsuario = 25;
   let precioProducto = 19.99;
   ```

2. **Camel Case**:
   - Usa camel case para nombres de variables. Esto significa comenzar con una letra minúscula y capitalizar la primera letra de cada palabra subsiguiente.

   ```javascript
   let nombreCompleto;
   let numeroDeTelefono;
   ```

3. **Declaración y Asignación Separadas**:
   - Puedes declarar una variable sin asignarle un valor y luego asignarle un valor más tarde.

   ```javascript
   let nombre;
   nombre = 'Carlos';
   ```

4. **Evita Variables Globales**:
   - Limita el uso de variables globales para evitar conflictos y problemas de mantenimiento. Usa `let` y `const` dentro de bloques o funciones para mantener el ámbito limitado.

   ```javascript
   function ejemplo() {
       let mensaje = 'Hola';
       console.log(mensaje);
   }
   ```

5. **Usa `const` por Defecto**:
   - Siempre que sea posible, usa `const` para declarar variables que no cambiarán. Esto ayuda a evitar errores de reasignación accidental.

   ```javascript
   const PI = 3.1416;
   ```

### Ejemplos de Declaración y Uso de Variables

```javascript
// Usando var
var nombre = 'Juan';
console.log(nombre); // Salida: Juan

// Usando let
let edad = 30;
if (edad > 18) {
    let esAdulto = true;
    console.log(esAdulto); // Salida: true
}
// console.log(esAdulto); // Error: esAdulto no está definido

// Usando const
const PI = 3.1416;
console.log(PI); // Salida: 3.1416

// Nombres válidos
let $dolar = 100;
let _privado = 'datos';
let nombreCompleto = 'Ana Pérez';
```

### Conclusión

Seguir estas reglas y buenas prácticas te ayudará a escribir código JavaScript más claro, legible y libre de errores. Elegir nombres de variables descriptivos y utilizar `let` y `const` en lugar de `var` son pasos importantes hacia la escritura de código moderno y mantenible.

---

### Tipos de Datos en JavaScript

JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que las variables pueden contener valores de cualquier tipo y el tipo de dato puede cambiar durante la ejecución del programa. A continuación, se explican los tipos de datos principales en JavaScript:

### Tipos de Datos Primitivos

1. **Número (Number)**:
   - Incluye tanto números enteros como de punto flotante.
   - Ejemplos: `42`, `3.14`, `-7`.

   ```javascript
   let entero = 42;
   let flotante = 3.14;
   let negativo = -7;
   ```

2. **Cadena de Texto (String)**:
   - Se utiliza para representar texto.
   - Las cadenas pueden estar delimitadas por comillas simples (`'`), comillas dobles (`"`) o backticks (`` ` ``).

   ```javascript
   let simple = 'Hola';
   let doble = "Mundo";
   let backtick = `¡Hola, ${simple} ${doble}!`;
   ```

3. **Booleano (Boolean)**:
   - Solo tiene dos valores posibles: `true` o `false`.
   - Se utiliza en lógica de control y condiciones.

   ```javascript
   let esVerdad = true;
   let esFalso = false;
   ```

4. **Indefinido (Undefined)**:
   - Una variable declarada pero no inicializada tiene el valor `undefined`.

   ```javascript
   let valorIndefinido;
   console.log(valorIndefinido); // Salida: undefined
   ```

5. **Nulo (Null)**:
   - Representa la ausencia intencional de un valor.

   ```javascript
   let valorNulo = null;
   ```

6. **Símbolo (Symbol)** (Introducido en ES6):
   - Un valor único e inmutable, utilizado como identificador único para las propiedades de objetos.

   ```javascript
   let simbolo1 = Symbol('descripcion');
   let simbolo2 = Symbol('descripcion');
   console.log(simbolo1 === simbolo2); // Salida: false
   ```

### Tipos de Datos Compuestos

1. **Objeto (Object)**:
   - Colección de propiedades y métodos.
   - Las propiedades son pares clave-valor.

   ```javascript
   let persona = {
       nombre: 'Ana',
       edad: 30,
       saludar: function() {
           console.log('Hola, me llamo ' + this.nombre);
       }
   };
   console.log(persona.nombre); // Salida: Ana
   persona.saludar(); // Salida: Hola, me llamo Ana
   ```

2. **Array**:
   - Una lista ordenada de valores.
   - Los arrays son un tipo especial de objeto.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   console.log(numeros[0]); // Salida: 1
   numeros.push(6);
   console.log(numeros); // Salida: [1, 2, 3, 4, 5, 6]
   ```

3. **Función (Function)**:
   - Una función es un bloque de código diseñado para realizar una tarea particular.

   ```javascript
   function sumar(a, b) {
       return a + b;
   }
   let resultado = sumar(2, 3);
   console.log(resultado); // Salida: 5
   ```

### Tipos de Datos Especiales

1. **BigInt** (Introducido en ES2020):
   - Utilizado para representar números enteros grandes que exceden el rango de `Number`.

   ```javascript
   let numeroGrande = BigInt(123456789012345678901234567890);
   console.log(numeroGrande); // Salida: 123456789012345678901234567890n
   ```

### Operadores `typeof` y `instanceof`

Para verificar el tipo de dato de una variable, puedes usar el operador `typeof`.

```javascript
console.log(typeof 42);           // Salida: "number"
console.log(typeof 'Hola');       // Salida: "string"
console.log(typeof true);         // Salida: "boolean"
console.log(typeof undefined);    // Salida: "undefined"
console.log(typeof null);         // Salida: "object" (esto es un error histórico en JavaScript)
console.log(typeof Symbol('id')); // Salida: "symbol"
console.log(typeof {});           // Salida: "object"
console.log(typeof []);           // Salida: "object"
console.log(typeof function(){}); // Salida: "function"
console.log(typeof 123n);         // Salida: "bigint"
```

Para verificar si un objeto es de un tipo específico, puedes usar el operador `instanceof`.

```javascript
let arreglo = [1, 2, 3];
console.log(arreglo instanceof Array); // Salida: true
console.log(arreglo instanceof Object); // Salida: true

let fecha = new Date();
console.log(fecha instanceof Date); // Salida: true
```

### Conversión de Tipos

JavaScript permite la conversión entre tipos de datos. Las conversiones pueden ser implícitas o explícitas.

#### Conversión Implícita

JavaScript convierte automáticamente los tipos de datos según el contexto.

```javascript
let resultado = '5' + 2; // '52' (concatenación)
let resta = '5' - 2; // 3 (conversión implícita a número)
```

#### Conversión Explícita

Puedes convertir explícitamente tipos de datos usando funciones globales como `Number()`, `String()`, `Boolean()`, `BigInt()`, etc.

```javascript
let numeroCadena = '123';
let numero = Number(numeroCadena); // 123

let booleano = Boolean(1); // true
let cadena = String(123); // '123'
let grande = BigInt(123); // 123n
```

### Conclusión

JavaScript ofrece una variedad de tipos de datos que te permiten manejar y manipular diferentes tipos de información en tus programas. Comprender estos tipos de datos y cómo trabajar con ellos es esencial para escribir código efectivo y eficiente.
