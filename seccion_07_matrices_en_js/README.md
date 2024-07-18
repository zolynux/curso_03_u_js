# Matrices en JavaScript

Las matrices en JavaScript, también conocidas como arrays multidimensionales, son arrays que contienen otros arrays como elementos. Esto permite organizar los datos en una estructura de filas y columnas, similar a una tabla.

## Creación de Matrices

Para crear una matriz, simplemente defines un array cuyos elementos son otros arrays.

### Ejemplo de Creación de una Matriz 2D

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

En este ejemplo, `matriz` es una matriz de 3x3, con tres filas y tres columnas.

### Acceso a Elementos de una Matriz

Puedes acceder a los elementos de una matriz utilizando dos índices: uno para la fila y otro para la columna.

### Ejemplos

```javascript
console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8
```

En este caso, `matriz[0][0]` accede al primer elemento de la primera fila, `matriz[1][2]` accede al tercer elemento de la segunda fila, y `matriz[2][1]` accede al segundo elemento de la tercera fila.

### Modificación de Elementos en una Matriz

Puedes modificar los elementos de una matriz de manera similar a como lo haces con un array unidimensional.

### Ejemplos 1

```javascript
matriz[0][0] = 10;
matriz[1][2] = 20;
matriz[2][1] = 30;

console.log(matriz);
// Resultado:
// [
//   [10, 2, 3],
//   [4, 5, 20],
//   [7, 30, 9]
// ]
```

### Iteración sobre Matrices

Puedes utilizar bucles anidados para iterar sobre los elementos de una matriz.

### Ejemplo

```javascript
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
```

Este código imprimirá todos los elementos de la matriz.

### Métodos y Propiedades Útiles para Matrices

Algunas propiedades y métodos de los arrays también se aplican a matrices:

### `length`

La propiedad `length` se puede utilizar para obtener el número de filas en una matriz, y también el número de columnas en una fila específica.

```javascript
console.log(matriz.length); // 3 (número de filas)
console.log(matriz[0].length); // 3 (número de columnas en la primera fila)
```

### Métodos como `push()`, `pop()`, `shift()`, `unshift()`, etc

Estos métodos también funcionan con matrices.

### Ejemplos 2

- **`push()`**: Añade una nueva fila (un array) al final de la matriz.

    ```javascript
    matriz.push([10, 11, 12]);
    console.log(matriz);
    ```

- **`pop()`**: Elimina la última fila (un array) de la matriz.

    ```javascript
    matriz.pop();
    console.log(matriz);
    ```

- **`forEach()`**: Puedes usar `forEach` para iterar sobre cada fila de la matriz.

    ```javascript
    matriz.forEach(function(fila) {
        fila.forEach(function(elemento) {
            console.log(elemento);
        });
    });
    ```

### Matrices Multidimensionales

Además de matrices 2D, puedes crear matrices con más de dos dimensiones anidando más arrays.

### Ejemplo de Matriz 3D

```javascript
let matriz3D = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

console.log(matriz3D[0][1][2]); // 6
console.log(matriz3D[1][0][1]); // 8
```

### Conclusión

Las matrices en JavaScript son una herramienta poderosa para manejar datos estructurados en múltiples dimensiones. Comprender cómo crear, acceder, modificar e iterar sobre matrices es fundamental para trabajar con datos complejos de manera eficiente.
