El **modo estricto** en JavaScript, activado mediante la directiva `"use strict";`, es una característica introducida en ECMAScript 5 (ES5) que cambia la forma en que el motor de JavaScript ejecuta el código. Este modo impone reglas más estrictas y elimina algunas de las características más problemáticas y propensas a errores del lenguaje.

### Beneficios del modo estricto:

1. **Eliminación de errores silenciosos**: Convierte errores que normalmente serían ignorados en errores que se lanzan explícitamente.
2. **Optimización del rendimiento**: Ayuda a los motores de JavaScript a realizar optimizaciones, lo que puede resultar en un código más rápido.
3. **Prevención de malas prácticas**: Prohíbe ciertas sintaxis y comportamientos que pueden llevar a errores o que están reservados para futuras versiones de ECMAScript.

### Cómo activar el modo estricto:

- **Para todo el script**: Coloca `"use strict";` al comienzo del archivo JavaScript.
  ```javascript
  "use strict";
  var x = 3.14; // Código en modo estricto
  ```
- **Para una función específica**: Coloca `"use strict";` al comienzo de la función.
  ```javascript
  function miFuncion() {
    "use strict";
    // Código en modo estricto
  }
  ```

### Ejemplos de restricciones en modo estricto:

- No se pueden usar variables no declaradas.
- No se pueden definir propiedades duplicadas en un objeto literal.
- No se pueden usar palabras reservadas como nombres de variables.

¿Te gustaría saber más sobre algún aspecto específico del modo estricto?

Origen: Conversación con Copilot 2/8/2024
(1) Modo Estricto - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode.
(2) javascript - ¿Qué significa "use strict"? - Stack Overflow en español. https://es.stackoverflow.com/questions/2184/qu%C3%A9-significa-use-strict.
(3) Modo Estricto (Strict Mode) en JavaScript - Ariel Fuggini. https://arielfuggini.com/javascript-modo-estricto/.
(4) Strict Mode - Platzi. https://platzi.com/clases/3213-javascript-closures-scope/50365-strict-mode/.
