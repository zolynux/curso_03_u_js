# Manejo de Errores en JavaScript

El manejo de errores en JavaScript es crucial para crear aplicaciones robustas y evitar que errores inesperados detengan la ejecución del código. Los bloques `try...catch` y la palabra clave `throw` son herramientas esenciales para este propósito.

### Bloques `try...catch`

El bloque `try...catch` permite manejar errores de manera controlada. La sintaxis básica es:

```javascript
try {
  // Código que puede lanzar un error
} catch (error) {
  // Código para manejar el error
}
```

- **`try`**: Contiene el código que puede causar un error.
- **`catch`**: Se ejecuta si ocurre un error en el bloque `try`. La variable `error` contiene información sobre el error.

#### Ejemplo:

```javascript
try {
  let resultado = 10 / 0;
  console.log(resultado);
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}
```

### Lanzar errores con `throw`

La palabra clave `throw` permite generar errores personalizados. Puedes lanzar cualquier tipo de dato como un error, aunque generalmente se usan objetos de tipo `Error`.

#### Ejemplo:

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
}
```

### Bloque `finally`

El bloque `finally` se ejecuta siempre, independientemente de si se produjo un error o no. Es útil para realizar tareas de limpieza.

#### Ejemplo:

```javascript
try {
  let resultado = 10 / 2;
  console.log(resultado);
} catch (error) {
  console.log("Se ha producido un error:", error.message);
} finally {
  console.log("Este bloque se ejecuta siempre");
}
```

### Resumen:

- **`try...catch`**: Para manejar errores que pueden ocurrir en el bloque `try`.
- **`throw`**: Para lanzar errores personalizados.
- **`finally`**: Para ejecutar código que debe correr siempre, sin importar si hubo un error o no.

Estos conceptos te ayudarán a manejar errores de manera efectiva en tus aplicaciones JavaScript⁴⁵⁶. ¿Te gustaría algún ejemplo adicional o más detalles sobre algún aspecto específico?

Origen: Conversación con Copilot 2/8/2024
(1) Manejo de errores, "try...catch" - JavaScript. https://es.javascript.info/try-catch.
(2) try...catch - JavaScript | MDN. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch.
(3) Manejo de errores, "try...catch" - JavaScript. https://bing.com/search?q=manejo+de+errores+en+Javascript+trycatch+throws.
(4) try, catch, finally, throw - error handling in JavaScript. https://www.youtube.com/watch?v=cFTFtuEQ-10.
(5) Manejo de ERRORES 🅾 TRY CATCH ✅ THROW de excepciones CUSTOM 😎 Curso de JAVASCRIPT desde CERO #14. https://www.youtube.com/watch?v=DVY4S32zhiY.
(6) Error Handling in Javascript | try-catch-finally & throw | Complete Web Development Course #52. https://www.youtube.com/watch?v=rHQ1etbQpmQ.
(7) throw - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw.
(8) Controlar errores en JavaScript con try catch | Estrada Web Group. https://www.estradawebgroup.com/Post/Controlar-errores-en-JavaScript-con-try-catch/20461.
