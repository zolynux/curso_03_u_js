# Flexbox en CSS

---

Flexbox (o Flexible Box Layout) es un modelo de diseño en CSS que se utiliza para distribuir espacio y alinear elementos dentro de un contenedor, incluso cuando el tamaño de estos es desconocido o dinámico. Este sistema es particularmente útil para crear diseños de interfaz de usuario complejos y responsivos.

### Conceptos Básicos de Flexbox

En Flexbox, hay dos componentes principales:

- **Contenedor flex (flex container):** El elemento que tiene la propiedad `display: flex` o `display: inline-flex`.
- **Ítems flex (flex items):** Los elementos hijos directos del contenedor flex.

### Propiedades del Contenedor Flex

1. **`display: flex`**
   Define un contenedor flex.

   ```css
   .contenedor {
     display: flex;
   }
   ```

2. **`flex-direction`**
   Define la dirección en la que los ítems flex se organizan dentro del contenedor.

   ```css
   .contenedor {
     flex-direction: row; /* valores: row, row-reverse, column, column-reverse */
   }
   ```

3. **`flex-wrap`**
   Define si los ítems flex deben ajustarse o no en una nueva línea.

   ```css
   .contenedor {
     flex-wrap: nowrap; /* valores: nowrap, wrap, wrap-reverse */
   }
   ```

4. **`justify-content`**
   Define cómo se distribuye el espacio entre los ítems flex a lo largo del eje principal.

   ```css
   .contenedor {
     justify-content: center; /* valores: flex-start, flex-end, center, space-between, space-around, space-evenly */
   }
   ```

5. **`align-items`**
   Define cómo se alinean los ítems flex a lo largo del eje transversal.

   ```css
   .contenedor {
     align-items: center; /* valores: flex-start, flex-end, center, baseline, stretch */
   }
   ```

6. **`align-content`**
   Define cómo se distribuye el espacio entre las líneas del contenedor flex cuando hay múltiples líneas.

   ```css
   .contenedor {
     align-content: space-between; /* valores: flex-start, flex-end, center, space-between, space-around, stretch */
   }
   ```

### Propiedades de los Ítems Flex

1. **`order`**
   Define el orden de los ítems flex dentro del contenedor.

   ```css
   .item {
     order: 1; /* valores: enteros positivos o negativos */
   }
   ```

2. **`flex-grow`**
   Define la capacidad de un ítem flex para crecer si es necesario.

   ```css
   .item {
     flex-grow: 1; /* valores: números positivos */
   }
   ```

3. **`flex-shrink`**
   Define la capacidad de un ítem flex para encogerse si es necesario.

   ```css
   .item {
     flex-shrink: 1; /* valores: números positivos */
   }
   ```

4. **`flex-basis`**
   Define la base flexible del ítem flex, es decir, el tamaño inicial antes de que se distribuya el espacio restante.

   ```css
   .item {
     flex-basis: 100px; /* valores: tamaño (px, %, etc.) */
   }
   ```

5. **`align-self`**
   Permite que un ítem flex anule la alineación a lo largo del eje transversal definida por el contenedor.

   ```css
   .item {
     align-self: center; /* valores: auto, flex-start, flex-end, center, baseline, stretch */
   }
   ```

### Ejemplo Completo

Aquí tienes un ejemplo práctico que ilustra el uso de Flexbox:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .contenedor {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      height: 200px;
      border: 2px solid black;
    }

    .item {
      background-color: lightblue;
      padding: 20px;
      margin: 10px;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 100px;
      text-align: center;
    }

    .item2 {
      order: -1; /* Este ítem aparecerá primero */
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="item">Item 1</div>
    <div class="item item2">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>
```

### Explicación del Ejemplo

- **`.contenedor`:** Es el contenedor flex que define la dirección de los ítems como fila (`row`), permite el ajuste de los ítems (`wrap`), distribuye los ítems con espacios alrededor (`space-around`) y alinea los ítems en el centro a lo largo del eje transversal (`center`).
- **`.item`:** Cada ítem tiene un color de fondo, padding, margin y propiedades flexibles (`flex-grow`, `flex-shrink`, `flex-basis`).
- **`.item2`:** Este ítem tiene un orden de -1, por lo que aparece primero a pesar de estar en el segundo lugar en el HTML.

### Resumen

Flexbox es una poderosa herramienta para crear diseños responsivos y alineados de manera eficiente. Sus propiedades permiten un control detallado sobre la distribución y alineación de los elementos dentro de un contenedor. Con Flexbox, puedes crear diseños complejos y adaptativos con menos esfuerzo y código más limpio.
