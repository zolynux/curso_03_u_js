# Funciones Incorporadas en JavaScript

Claro, te explicaré sobre esas funciones y operaciones en JavaScript:


1. Funciones incorporadas:
JavaScript tiene muchas funciones incorporadas que puedes usar directamente. Algunas de las más comunes son:
- `parseInt()`: Convierte una cadena a un número entero.
- `parseFloat()`: Convierte una cadena a un número decimal.
- `isNaN()`: Verifica si un valor no es un número.

2. Subcadenas:
Para extraer parte de una cadena, puedes usar:
- `slice(inicio, fin)`: Extrae una parte de la cadena desde 'inicio' hasta 'fin' (no incluido).
- `substring(inicio, fin)`: Similar a slice, pero no acepta índices negativos.

Ejemplo:
```javascript
let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"
```

3. Concatenación de cadena:
Puedes unir cadenas usando el operador `+` o el método `concat()`:
```javascript
let str1 = "Hola";
let str2 = "Mundo";
console.log(str1 + " " + str2); // "Hola Mundo"
console.log(str1.concat(" ", str2)); // "Hola Mundo"
```

4. Convertir Cadena a número:
- `parseInt(str)`: Convierte a entero.
- `parseFloat(str)`: Convierte a decimal.
- `Number(str)`: Convierte a número (entero o decimal).

Ejemplo:
```javascript
let num = parseInt("42");
console.log(num); // 42
```

5. Convertir de número a cadena:
- Método `toString()`.
- Función `String()`.

Ejemplo:
```javascript
let num = 42;
console.log(num.toString()); // "42"
console.log(String(num)); // "42"
```

6. Valor absoluto de un número:
Use la función `Math.abs()`:
```javascript
console.log(Math.abs(-5)); // 5
```

7. Redondeo y truncado:
- `Math.round()`: Redondea al entero más cercano.
- `Math.floor()`: Redondea hacia abajo.
- `Math.ceil()`: Redondea hacia arriba.
- `Math.trunc()`: Elimina la parte decimal.

Ejemplo:
```javascript
console.log(Math.round(3.7)); // 4
console.log(Math.floor(3.7)); // 3
console.log(Math.ceil(3.2)); // 4
console.log(Math.trunc(3.7)); // 3
```