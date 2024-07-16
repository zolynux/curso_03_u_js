# Operadores en JavaScript

---

### Operadores en JavaScript

Los operadores en JavaScript son símbolos que se utilizan para realizar operaciones sobre operandos (valores o variables). Estos operadores se dividen en varias categorías según su funcionalidad. A continuación, se describen los tipos principales de operadores en JavaScript con ejemplos:

### Operadores Aritméticos

Se utilizan para realizar operaciones matemáticas entre números.

- **Suma (`+`)**: Suma dos operandos.

  ```javascript
  let a = 5;
  let b = 3;
  let suma = a + b; // 8
  ```

- **Resta (`-`)**: Resta el segundo operando del primero.

  ```javascript
  let resta = a - b; // 2
  ```

- **Multiplicación (`*`)**: Multiplica dos operandos.

  ```javascript
  let multiplicacion = a * b; // 15
  ```

- **División (`/`)**: Divide el primer operando por el segundo.

  ```javascript
  let division = a / b; // 1.6667
  ```

- **Módulo (`%`)**: Devuelve el resto de la división del primer operando por el segundo.

  ```javascript
  let modulo = a % b; // 2
  ```

- **Exponenciación (`**`)**: Eleva el primer operando a la potencia del segundo.

  ```javascript
  let potencia = a ** b; // 125
  ```

- **Incremento (`++`)**: Incrementa el operando en 1.

  ```javascript
  a++; // a ahora es 6
  ```

- **Decremento (`--`)**: Decrementa el operando en 1.

  ```javascript
  b--; // b ahora es 2
  ```

### Operadores de Asignación

Asignan un valor al operando de la izquierda basado en el valor del operando de la derecha.

- **Asignación (`=`)**: Asigna el valor del operando de la derecha al operando de la izquierda.

  ```javascript
  let c = 10; // c es 10
  ```

- **Asignación con suma (`+=`)**: Suma el valor del operando de la derecha al operando de la izquierda y asigna el resultado al operando de la izquierda.

  ```javascript
  c += 5; // c ahora es 15
  ```

- **Asignación con resta (`-=`)**: Resta el valor del operando de la derecha al operando de la izquierda y asigna el resultado al operando de la izquierda.

  ```javascript
  c -= 3; // c ahora es 12
  ```

- **Asignación con multiplicación (`*=`)**: Multiplica el operando de la izquierda por el operando de la derecha y asigna el resultado al operando de la izquierda.

  ```javascript
  c *= 2; // c ahora es 24
  ```

- **Asignación con división (`/=`)**: Divide el operando de la izquierda por el operando de la derecha y asigna el resultado al operando de la izquierda.

  ```javascript
  c /= 4; // c ahora es 6
  ```

- **Asignación con módulo (`%=`)**: Calcula el resto de la división del operando de la izquierda por el operando de la derecha y asigna el resultado al operando de la izquierda.

  ```javascript
  c %= 5; // c ahora es 1
  ```

- **Asignación con exponenciación (`**=`)**: Eleva el operando de la izquierda a la potencia del operando de la derecha y asigna el resultado al operando de la izquierda.

  ```javascript
  c **= 3; // c ahora es 1
  ```

### Operadores de Comparación

Comparan dos valores y devuelven un valor booleano (`true` o `false`).

- **Igual (`==`)**: Devuelve `true` si los operandos son iguales (con conversión de tipo si es necesario).

  ```javascript
  let resultado = (5 == '5'); // true
  ```

- **Estricto igual (`===`)**: Devuelve `true` si los operandos son iguales y del mismo tipo.

  ```javascript
  resultado = (5 === '5'); // false
  ```

- **No igual (`!=`)**: Devuelve `true` si los operandos no son iguales (con conversión de tipo si es necesario).

  ```javascript
  resultado = (5 != '5'); // false
  ```

- **Estricto no igual (`!==`)**: Devuelve `true` si los operandos no son iguales o no son del mismo tipo.

  ```javascript
  resultado = (5 !== '5'); // true
  ```

- **Mayor que (`>`)**: Devuelve `true` si el operando de la izquierda es mayor que el operando de la derecha.

  ```javascript
  resultado = (5 > 3); // true
  ```

- **Mayor o igual que (`>=`)**: Devuelve `true` si el operando de la izquierda es mayor o igual que el operando de la derecha.

  ```javascript
  resultado = (5 >= 5); // true
  ```

- **Menor que (`<`)**: Devuelve `true` si el operando de la izquierda es menor que el operando de la derecha.

  ```javascript
  resultado = (3 < 5); // true
  ```

- **Menor o igual que (`<=`)**: Devuelve `true` si el operando de la izquierda es menor o igual que el operando de la derecha.

  ```javascript
  resultado = (3 <= 3); // true
  ```

### Operadores Lógicos

Operan sobre valores booleanos y devuelven un valor booleano.

- **AND lógico (`&&`)**: Devuelve `true` si ambos operandos son `true`.

  ```javascript
  let resultado = (true && false); // false
  ```

- **OR lógico (`||`)**: Devuelve `true` si al menos uno de los operandos es `true`.

  ```javascript
  resultado = (true || false); // true
  ```

- **NOT lógico (`!`)**: Invierte el valor del operando (de `true` a `false` y viceversa).

  ```javascript
  resultado = !true; // false
  ```

### Operadores de Bits

Operan sobre los bits individuales de los operandos.

- **AND de bits (`&`)**: Realiza una operación AND a nivel de bits.

  ```javascript
  let resultado = (5 & 1); // 1
  ```

- **OR de bits (`|`)**: Realiza una operación OR a nivel de bits.

  ```javascript
  resultado = (5 | 1); // 5
  ```

- **XOR de bits (`^`)**: Realiza una operación XOR a nivel de bits.

  ```javascript
  resultado = (5 ^ 1); // 4
  ```

- **NOT de bits (`~`)**: Invierte todos los bits del operando.

  ```javascript
  resultado = (~5); // -6
  ```

- **Desplazamiento a la izquierda (`<<`)**: Desplaza los bits del operando a la izquierda.

  ```javascript
  resultado = (5 << 1); // 10
  ```

- **Desplazamiento a la derecha con signo (`>>`)**: Desplaza los bits del operando a la derecha, conservando el signo.

  ```javascript
  resultado = (5 >> 1); // 2
  ```

- **Desplazamiento a la derecha sin signo (`>>>`)**: Desplaza los bits del operando a la derecha, llenando los bits vacíos con ceros.

  ```javascript
  resultado = (5 >>> 1); // 2
  ```

### Operadores de Cadena (String)

Operan sobre cadenas de texto.

- **Concatenación (`+`)**: Une dos cadenas de texto.

  ```javascript
  let saludo = 'Hola, ' + 'mundo!'; // 'Hola, mundo!'
  ```

- **Concatenación con asignación (`+=`)**: Añade la cadena de la derecha a la cadena de la izquierda.

  ```javascript
  let mensaje = 'Hola';
  mensaje += ', mundo!'; // 'Hola, mundo!'
  ```

### Operador Condicional (Ternario)

Evalúa una condición y devuelve un valor basado en el resultado de esa evaluación.

```javascript
let edad = 18;
let mensaje = (edad >= 18) ? 'Adulto' : 'Menor de edad'; // 'Adulto'
```

### Operadores de Coma

Permiten evaluar múltiples expresiones en una sola línea y devuelven el valor de la última expresión.

```javascript
let x = (1 + 2, 3 + 4); // x es 7
```

### Operador de Tipo (`typeof`)

Devuelve una cadena que indica el tipo del operando.

```javascript
let tipo = typeof 42; // 'number'
```

### Operador de Eliminación (`delete`)

Elimina una propiedad de un objeto.

```javascript
let objeto = { nombre: 'Juan', edad: 30 };
delete

 objeto.edad; // objeto es { nombre: 'Juan' }
```

### Operador de In (`in`)

Devuelve `true` si la propiedad especificada está en el objeto.

```javascript
let existe = 'nombre' in objeto; // true
```

### Operador de Instancia (`instanceof`)

Devuelve `true` si el objeto es una instancia del tipo especificado.

```javascript
let esFecha = new Date() instanceof Date; // true
```

### Conclusión

Los operadores en JavaScript son fundamentales para realizar diversas operaciones y escribir lógica compleja en el código. Entender cómo y cuándo usar cada operador es crucial para desarrollar aplicaciones eficientes y efectivas.
