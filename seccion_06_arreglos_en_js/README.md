# Arreglos en JavaScript

---

Los arreglos (arrays) en JavaScript son estructuras de datos utilizadas para almacenar una colección de elementos, que pueden ser de cualquier tipo, como números, cadenas de texto, objetos, etc. Los elementos en un array están ordenados y se acceden mediante índices numéricos, que comienzan desde cero.

## Creación de Arreglos

Existen varias formas de crear un array en JavaScript:

1. **Usando corchetes (`[]`)**:

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   ```

2. **Usando el constructor `Array`**:

   ```javascript
   let frutas = new Array('Manzana', 'Banana', 'Cereza');
   ```

3. **Arreglo vacío**:

   ```javascript
   let vacio = [];
   ```

### Acceso a Elementos del Arreglo

Se accede a los elementos del array usando el índice del elemento:

```javascript
let frutas = ['Manzana', 'Banana', 'Cereza'];
console.log(frutas[0]); // 'Manzana'
console.log(frutas[1]); // 'Banana'
console.log(frutas[2]); // 'Cereza'
```

### Modificación de Elementos

Puedes modificar los elementos de un array asignándoles un nuevo valor:

```javascript
frutas[1] = 'Mango';
console.log(frutas); // ['Manzana', 'Mango', 'Cereza']
```

### Propiedades y Métodos de los Arreglos

#### Propiedad `length`

La propiedad `length` devuelve el número de elementos en un array:

```javascript
let frutas = ['Manzana', 'Banana', 'Cereza'];
console.log(frutas.length); // 3
```

#### Métodos Comunes de los Arreglos

1. **`push()`**: Añade uno o más elementos al final del array y devuelve la nueva longitud del array.

   ```javascript
   frutas.push('Naranja');
   console.log(frutas); // ['Manzana', 'Banana', 'Cereza', 'Naranja']
   ```

2. **`pop()`**: Elimina el último elemento del array y lo devuelve.

   ```javascript
   let ultimaFruta = frutas.pop();
   console.log(ultimaFruta); // 'Naranja'
   console.log(frutas); // ['Manzana', 'Banana', 'Cereza']
   ```

3. **`shift()`**: Elimina el primer elemento del array y lo devuelve.

   ```javascript
   let primeraFruta = frutas.shift();
   console.log(primeraFruta); // 'Manzana'
   console.log(frutas); // ['Banana', 'Cereza']
   ```

4. **`unshift()`**: Añade uno o más elementos al inicio del array y devuelve la nueva longitud del array.

   ```javascript
   frutas.unshift('Fresa');
   console.log(frutas); // ['Fresa', 'Banana', 'Cereza']
   ```

5. **`indexOf()`**: Devuelve el primer índice en el que se encuentra un elemento dado en el array, o `-1` si el elemento no está presente.

   ```javascript
   let indice = frutas.indexOf('Banana');
   console.log(indice); // 1
   ```

6. **`includes()`**: Determina si un array incluye un cierto elemento, devolviendo `true` o `false`.

   ```javascript
   let existe = frutas.includes('Cereza');
   console.log(existe); // true
   ```

7. **`slice()`**: Devuelve una copia superficial de una parte del array en un nuevo array, seleccionada desde `start` hasta `end` (sin incluir `end`).

   ```javascript
   let algunasFrutas = frutas.slice(1, 2);
   console.log(algunasFrutas); // ['Banana']
   ```

8. **`splice()`**: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

   ```javascript
   frutas.splice(1, 1, 'Kiwi');
   console.log(frutas); // ['Fresa', 'Kiwi', 'Cereza']
   ```

9. **`concat()`**: Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

   ```javascript
   let masFrutas = frutas.concat(['Mango', 'Papaya']);
   console.log(masFrutas); // ['Fresa', 'Kiwi', 'Cereza', 'Mango', 'Papaya']
   ```

10. **`join()`**: Une todos los elementos de un array (o un objeto similar a un array) en una cadena y devuelve esta cadena.

    ```javascript
    let cadenaFrutas = frutas.join(', ');
    console.log(cadenaFrutas); // 'Fresa, Kiwi, Cereza'
    ```

11. **`reverse()`**: Invierte el orden de los elementos de un array. Este método cambia el array original.

    ```javascript
    frutas.reverse();
    console.log(frutas); // ['Cereza', 'Kiwi', 'Fresa']
    ```

12. **`sort()`**: Ordena los elementos de un array y devuelve el array ordenado. Este método cambia el array original.

    ```javascript
    frutas.sort();
    console.log(frutas); // ['Cereza', 'Fresa', 'Kiwi']
    ```

### Iteración sobre Arreglos

#### Ciclo `for`

```javascript
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

#### Ciclo `for...of`

```javascript
for (let fruta of frutas) {
    console.log(fruta);
}
```

#### Método `forEach()`

```javascript
frutas.forEach(function(fruta, indice) {
    console.log(indice, fruta);
});
```

### Arreglos Multidimensionales

Los arreglos en JavaScript pueden contener otros arreglos, creando arreglos multidimensionales.

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][1]); // 2
```

### Conclusión

Los arreglos son una estructura fundamental en JavaScript para manejar colecciones de datos. Ofrecen una amplia gama de métodos y propiedades para manipular y acceder a sus elementos de manera eficiente. Entender cómo trabajar con arreglos te permitirá escribir código más potente y flexible.
