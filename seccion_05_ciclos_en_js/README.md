# Ciclos en JavaScript

Los ciclos (o bucles) en JavaScript se utilizan para repetir un bloque de código mientras se cumpla una condición específica. JavaScript proporciona varios tipos de ciclos para manejar diferentes situaciones: `for`, `while`, `do...while`, y los ciclos especiales para iterar sobre objetos y arrays como `for...in` y `for...of`. A continuación, se explican estos ciclos con ejemplos:

## Ciclo `for`

El ciclo `for` se utiliza cuando se conoce de antemano el número de iteraciones que se desea realizar. Su sintaxis general es:

```javascript
for (inicialización; condición; actualización) {
    // código a ejecutar en cada iteración
}
```

### Ejemplo

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

En este ejemplo, el ciclo `for` imprimirá los números del 0 al 4.

### Ciclo `while`

El ciclo `while` se utiliza cuando no se sabe de antemano el número de iteraciones y se basa en una condición. Su sintaxis general es:

```javascript
while (condición) {
    // código a ejecutar en cada iteración
}
```

### Ejemplo

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

En este ejemplo, el ciclo `while` imprimirá los números del 0 al 4 mientras la condición `i < 5` sea verdadera.

### Ciclo `do...while`

El ciclo `do...while` es similar al ciclo `while`, pero garantiza que el bloque de código se ejecute al menos una vez antes de comprobar la condición. Su sintaxis general es:

```javascript
do {
    // código a ejecutar en cada iteración
} while (condición);
```

### Ejemplo

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

En este ejemplo, el ciclo `do...while` imprimirá los números del 0 al 4, similar al ciclo `while`, pero siempre ejecutará el bloque de código al menos una vez.

### Ciclo `for...in`

El ciclo `for...in` se utiliza para iterar sobre las propiedades enumerables de un objeto. Su sintaxis general es:

```javascript
for (let propiedad in objeto) {
    // código a ejecutar en cada iteración
}
```

### Ejemplo

```javascript
let persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
}
```

En este ejemplo, el ciclo `for...in` imprimirá todas las propiedades del objeto `persona` y sus valores.

### Ciclo `for...of`

El ciclo `for...of` se utiliza para iterar sobre elementos de objetos iterables (como arrays, strings, mapas, conjuntos, etc.). Su sintaxis general es:

```javascript
for (let elemento of iterable) {
    // código a ejecutar en cada iteración
}
```

### Ejemplo

```javascript
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}
```

En este ejemplo, el ciclo `for...of` imprimirá cada número del array `numeros`.

### Palabras clave `break` y `continue`

- **`break`**: Se utiliza para salir de un ciclo antes de que termine.
- **`continue`**: Se utiliza para saltar a la siguiente iteración del ciclo.

#### Ejemplo con `break`

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
```

En este ejemplo, el ciclo se detendrá cuando `i` sea igual a 5.

#### Ejemplo con `continue`

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
```

En este ejemplo, el ciclo se saltará la iteración cuando `i` sea igual a 5, por lo que no se imprimirá el número 5.

### Conclusión

Los ciclos en JavaScript son herramientas poderosas para repetir bloques de código bajo ciertas condiciones. Comprender cómo y cuándo usar cada tipo de ciclo te permitirá escribir código más eficiente y fácil de mantener.
