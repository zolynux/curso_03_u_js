# Introducción a CSS

CSS, o Cascading Style Sheets, es un lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. A continuación, te presento una introducción detallada a CSS:

### ¿Qué es CSS?
CSS es una herramienta fundamental en el desarrollo web que permite separar la estructura del contenido (HTML) de su presentación (CSS). Esto proporciona mayor flexibilidad y control sobre el diseño y permite mantener el código más limpio y organizado.

### ¿Por qué usar CSS?
- **Separación de Contenido y Estilo**: Facilita la modificación y el mantenimiento de los sitios web.
- **Reusabilidad**: Permite reutilizar el mismo estilo en múltiples páginas.
- **Accesibilidad**: Mejora la accesibilidad al proporcionar diferentes formas de presentar el mismo contenido.
- **Control Preciso**: Ofrece un control preciso sobre el diseño de las páginas, incluyendo colores, fuentes, márgenes, alineaciones, etc.

### Sintaxis de CSS
La sintaxis básica de CSS incluye selectores, propiedades y valores:

```css
selector {
    propiedad: valor;
}
```

- **Selector**: Indica a qué elementos HTML se aplicará el estilo.
- **Propiedad**: Describe el aspecto que se desea modificar (por ejemplo, color, tamaño de fuente).
- **Valor**: Especifica el valor de la propiedad (por ejemplo, rojo, 16px).

### Cómo Incluir CSS en HTML
Hay tres formas principales de incluir CSS en un documento HTML:

1. **CSS en Línea (Inline CSS)**:
   Se utiliza el atributo `style` dentro de un elemento HTML. Este método se utiliza generalmente para aplicar estilos únicos a un solo elemento.

   ```html
   <h1 style="color: blue; text-align: center;">Título</h1>
   ```

2. **CSS Interno (Internal CSS)**:
   Se utiliza la etiqueta `<style>` dentro del `<head>` del documento HTML. Este método es útil para aplicar estilos a una sola página.

   ```html
   <head>
       <style>
           body {
               background-color: lightblue;
           }
           h1 {
               color: navy;
               margin-left: 20px;
           }
       </style>
   </head>
   ```

3. **CSS Externo (External CSS)**:
   Se crea un archivo `.css` separado y se enlaza al documento HTML usando la etiqueta `<link>`. Este método es ideal para aplicar estilos a múltiples páginas.

   ```html
   <!-- En el archivo HTML -->
   <head>
       <link rel="stylesheet" type="text/css" href="styles.css">
   </head>
   ```

   ```css
   /* En el archivo styles.css */
   body {
       background-color: lightblue;
   }
   h1 {
       color: navy;
       margin-left: 20px;
   }
   ```

### Selectores Básicos
Los selectores se utilizan para apuntar a los elementos HTML que se quieren estilizar. Algunos selectores básicos incluyen:

- **Selector de Tipo**: Aplica estilos a todos los elementos de un tipo específico.

  ```css
  p {
      color: green;
  }
  ```

- **Selector de Clase**: Aplica estilos a elementos con una clase específica. Se define con un punto (`.`) antes del nombre de la clase.

  ```css
  .miClase {
      font-size: 20px;
  }
  ```

  ```html
  <p class="miClase">Este es un párrafo con una clase.</p>
  ```

- **Selector de ID**: Aplica estilos a un elemento con un ID específico. Se define con un símbolo de almohadilla (`#`) antes del nombre del ID.

  ```css
  #miID {
      text-align: center;
  }
  ```

  ```html
  <div id="miID">Este es un div con un ID.</div>
  ```

### Propiedades Comunes de CSS
Algunas de las propiedades más comunes en CSS incluyen:

- **Color y Fondo**:
  ```css
  color: red;
  background-color: yellow;
  ```

- **Texto**:
  ```css
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  ```

- **Espaciado**:
  ```css
  margin: 10px;
  padding: 20px;
  ```

- **Bordes**:
  ```css
  border: 1px solid black;
  ```

### Conclusión
CSS es una herramienta poderosa para dar estilo y mejorar la presentación de los documentos web. Con una comprensión básica de su sintaxis y sus capacidades, se puede empezar a crear sitios web visualmente atractivos y bien estructurados. A medida que te familiarices más con CSS, podrás explorar características avanzadas y técnicas de diseño para mejorar aún más tus habilidades en desarrollo web.