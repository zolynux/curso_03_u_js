# Promesas en JavaScript

¡Claro! Las **promesas** en JavaScript son una herramienta poderosa para manejar operaciones asíncronas de manera más eficiente y legible. Aquí tienes una explicación detallada:

### ¿Qué es una Promesa?

Una **promesa** es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Las promesas pueden estar en uno de tres estados:

1. **Pendiente**: La operación asíncrona aún no ha finalizado.
2. **Cumplida**: La operación asíncrona se completó con éxito.
3. **Rechazada**: La operación asíncrona falló.

### Cómo Consumir Promesas

Para consumir una promesa, se utilizan los métodos `.then()`, `.catch()` y `.finally()`:

- **`.then()`**: Se ejecuta cuando la promesa se cumple.
- **`.catch()`**: Se ejecuta cuando la promesa es rechazada.
- **`.finally()`**: Se ejecuta independientemente de si la promesa se cumple o se rechaza.

#### Ejemplo:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Se ejecuta si la promesa se cumple
  .then((data) => console.log(data)) // Se ejecuta con el resultado de la promesa anterior
  .catch((error) => console.error("Error:", error)) // Se ejecuta si la promesa es rechazada
  .finally(() => console.log("Operación completada")); // Se ejecuta siempre
```

### Cómo Crear Promesas

Para crear una promesa, se utiliza el constructor `Promise`, que toma una función con dos parámetros: `resolve` y `reject`.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Operación asíncrona
  let exito = true; // Simulación de éxito o fracaso
  if (exito) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Hubo un error.");
  }
});

miPromesa
  .then((mensaje) => console.log(mensaje)) // '¡Operación exitosa!'
  .catch((error) => console.error(error)); // 'Hubo un error.'
```

### Ventajas de Usar Promesas

- **Evitan el "Callback Hell"**: Hacen el código más legible y manejable.
- **Encadenamiento**: Permiten encadenar múltiples operaciones asíncronas de manera ordenada.
- **Manejo de Errores**: Facilitan el manejo de errores en operaciones asíncronas.

Espero que esta explicación te sea útil para tus apuntes. ¿Hay algo más que te gustaría saber sobre promesas o algún otro tema de JavaScript?

---

## Promesas con Async, Await y setTimeout en JavaScript

Las Promesas, Async/Await, y setTimeout son conceptos importantes en JavaScript para manejar operaciones asíncronas. Aquí te explico cada uno:

1. Promesas:

Las Promesas son objetos que representan la eventual finalización (o fallo) de una operación asíncrona. Tienen tres estados:

- Pendiente (pending): Estado inicial, ni cumplido ni rechazado.
- Cumplido (fulfilled): La operación se completó con éxito.
- Rechazado (rejected): La operación falló.

Ejemplo básico:

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Operación asíncrona
  if (/* operación exitosa */) {
    resolve("Éxito");
  } else {
    reject("Error");
  }
});

miPromesa.then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.error(error);
});
```

2. Async/Await:

Async/Await es una sintaxis que hace que las operaciones asíncronas se vean y se comporten como síncronas.

- `async` se usa para declarar una función asíncrona.
- `await` se usa dentro de una función async para esperar por una Promesa.

Ejemplo:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

3. setTimeout:

`setTimeout` es una función que permite ejecutar un bloque de código después de un tiempo específico. No es parte de las Promesas, pero a menudo se usa en ejemplos de asincronía.

Ejemplo básico:

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Este mensaje aparece después de 2 segundos");
}, 2000);

console.log("Fin");
```

Combinando los tres conceptos:

```javascript
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ejemploAsincrono() {
  console.log("Inicio");

  await esperar(2000);
  console.log("Después de 2 segundos");

  await esperar(1000);
  console.log("Después de 1 segundo más");

  console.log("Fin");
}

ejemploAsincrono();
```

En este último ejemplo:

1. `esperar` es una función que devuelve una Promesa que se resuelve después de un tiempo especificado.
2. `ejemploAsincrono` es una función async que usa `await` para esperar por cada Promesa.
3. `setTimeout` se usa dentro de `esperar` para crear el retraso.

Esta combinación permite escribir código asíncrono de una manera que parece síncrona, facilitando su lectura y mantenimiento.
