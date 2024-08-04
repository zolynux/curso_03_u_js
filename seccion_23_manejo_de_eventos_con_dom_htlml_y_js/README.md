# Manejo de eventos con DOW HTML y JavaScript

El manejo de eventos con el DOM (Document Object Model) HTML y JavaScript es una parte fundamental de la programación web interactiva. Permite que tu página web responda a las acciones del usuario y a otros cambios en el entorno del navegador. Aquí te explico los conceptos clave:

1. Qué son los eventos:
   Los eventos son acciones o ocurrencias que suceden en el sistema que estás programando, que el sistema te informa para que puedas responder a ellos. Ejemplos incluyen clics de ratón, pulsaciones de teclas, cambios en el contenido, etc.

2. Tipos comunes de eventos:

   - click: Cuando se hace clic en un elemento.
   - mouseover/mouseout: Cuando el cursor entra o sale de un elemento.
   - keydown/keyup: Cuando se presiona o suelta una tecla.
   - submit: Cuando se envía un formulario.
   - load: Cuando la página ha terminado de cargarse.
   - change: Cuando el valor de un elemento de formulario cambia.

3. Añadir un event listener:
   La forma moderna de manejar eventos es usando `addEventListener`:

   ```javascript
   elemento.addEventListener("tipoDeEvento", funcionManejadora);
   ```

   Ejemplo:

   ```javascript
   const boton = document.querySelector("#miBoton");
   boton.addEventListener("click", function () {
     console.log("Botón clickeado");
   });
   ```

4. Objeto del evento:
   Cuando ocurre un evento, se pasa automáticamente un objeto de evento a la función manejadora. Este objeto contiene información útil sobre el evento.

   ```javascript
   boton.addEventListener("click", function (event) {
     console.log("Coordenadas del clic:", event.clientX, event.clientY);
     event.preventDefault(); // Previene el comportamiento por defecto
   });
   ```

5. Propagación de eventos:
   Los eventos en el DOM se propagan en dos fases: captura (desde el documento hacia el elemento objetivo) y burbujeo (desde el elemento objetivo hacia el documento).

   ```javascript
   elemento.addEventListener(
     "click",
     function (event) {
       event.stopPropagation(); // Detiene la propagación
     },
     true
   ); // true activa la fase de captura
   ```

6. Delegación de eventos:
   Es una técnica donde se adjunta un solo event listener a un elemento padre para manejar eventos en sus hijos.

   ```javascript
   document
     .querySelector("#listaParent")
     .addEventListener("click", function (e) {
       if (e.target && e.target.nodeName == "LI") {
         console.log("Li item clicked", e.target.id);
       }
     });
   ```

7. Eventos personalizados:
   Puedes crear y disparar tus propios eventos.

   ```javascript
   const miEvento = new Event("miEventoPersonalizado");
   elemento.addEventListener("miEventoPersonalizado", function () {
     console.log("Evento personalizado disparado");
   });
   elemento.dispatchEvent(miEvento);
   ```

8. Remover event listeners:
   Es importante remover los event listeners cuando ya no son necesarios para evitar fugas de memoria.

   ```javascript
   function manejador() {
     console.log("Evento manejado");
   }
   elemento.addEventListener("click", manejador);
   // Más tarde...
   elemento.removeEventListener("click", manejador);
   ```

9. Eventos en formularios:

   ```javascript
   const form = document.querySelector("#miFormulario");
   form.addEventListener("submit", function (event) {
     event.preventDefault(); // Previene el envío por defecto
     // Lógica de validación o envío personalizado
   });
   ```

10. Eventos del teclado:
    ```javascript
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        console.log("Tecla Enter presionada");
      }
    });
    ```

El manejo de eventos es crucial para crear interfaces de usuario interactivas y responsivas. Permite que tu aplicación web responda a las acciones del usuario de manera dinámica, mejorando la experiencia del usuario y la funcionalidad de la página.
