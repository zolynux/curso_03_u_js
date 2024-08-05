# Display en CSS

---

La propiedad `display` en CSS es una de las más importantes y versátiles, ya que define cómo se deben mostrar los elementos HTML. Esta propiedad afecta la disposición de los elementos en la página y su relación con otros elementos. Aquí tienes una explicación detallada sobre la propiedad `display` y sus valores más comunes:

### Valores de la Propiedad `display`

1. **`display: block;`**
   - Los elementos se muestran como bloques, ocupando todo el ancho disponible.
   - Inicia en una nueva línea.
   - Ejemplos de elementos con display `block` por defecto: `<div>`, `<h1>`, `<p>`, `<header>`.

   ```css
   div {
       display: block;
   }
   ```

2. **`display: inline;`**
   - Los elementos se muestran en línea, dentro del flujo del texto.
   - Solo ocupan el ancho necesario para su contenido.
   - No inicia en una nueva línea.
   - Ejemplos de elementos con display `inline` por defecto: `<span>`, `<a>`, `<strong>`.

   ```css
   span {
       display: inline;
   }
   ```

3. **`display: inline-block;`**
   - Combina características de `block` e `inline`.
   - Se comporta como un elemento en línea pero puede tener un ancho y alto especificados.
   - No inicia en una nueva línea.

   ```css
   img {
       display: inline-block;
   }
   ```

4. **`display: none;`**
   - Oculta completamente el elemento, sin ocupar espacio en el documento.
   - El elemento no se muestra y no afecta el flujo del documento.

   ```css
   .oculto {
       display: none;
   }
   ```

5. **`display: flex;`**
   - Convierte un contenedor en un contenedor flexible, permitiendo usar el modelo de diseño flexbox.
   - Se utiliza para disponer elementos de manera más compleja, con alineación y distribución controladas.

   ```css
   .contenedor {
       display: flex;
   }
   ```

6. **`display: grid;`**
   - Convierte un contenedor en un contenedor de cuadrícula, permitiendo usar el modelo de diseño grid.
   - Facilita la creación de diseños bidimensionales, con filas y columnas.

   ```css
   .grid {
       display: grid;
   }
   ```

7. **`display: inline-flex;`**
   - Similar a `flex`, pero se comporta como un elemento en línea.
   - El contenedor flexible no inicia en una nueva línea y se adapta al flujo del texto.

   ```css
   .inline-contenedor {
       display: inline-flex;
   }
   ```

8. **`display: inline-grid;`**
   - Similar a `grid`, pero se comporta como un elemento en línea.
   - El contenedor de cuadrícula no inicia en una nueva línea y se adapta al flujo del texto.

   ```css
   .inline-grid {
       display: inline-grid;
   }
   ```

9. **`display: table;`**
   - Hace que un elemento se comporte como una tabla.
   - Es útil para crear diseños de tabla sin usar elementos de tabla HTML.

   ```css
   .tabla {
       display: table;
   }
   ```

10. **`display: table-row;` y `display: table-cell;`**
    - Usados dentro de un contenedor con `display: table;`, hacen que los elementos se comporten como filas y celdas de tabla, respectivamente.

    ```css
    .fila {
        display: table-row;
    }
    .celda {
        display: table-cell;
    }
    ```

### Ejemplos Prácticos

#### Bloque vs. En línea
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .block {
            display: block;
            background-color: lightblue;
            margin-bottom: 10px;
        }
        .inline {
            display: inline;
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <div class="block">Bloque 1</div>
    <div class="block">Bloque 2</div>
    <span class="inline">En línea 1</span>
    <span class="inline">En línea 2</span>
</body>
</html>
```

#### Flexbox
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .flex-container {
            display: flex;
            justify-content: space-around;
            background-color: lightgrey;
        }
        .flex-item {
            background-color: lightcoral;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

#### Grid
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            background-color: lightgrey;
        }
        .grid-item {
            background-color: lightcoral;
            padding: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
    </div>
</body>
</html>
```

### Conclusión
La propiedad `display` es fundamental en CSS para controlar cómo se disponen y se comportan los elementos en una página web. Comprender y utilizar adecuadamente esta propiedad permite crear diseños flexibles, adaptativos y visualmente atractivos.