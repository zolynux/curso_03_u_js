# Fuentes en CSS

---

El manejo de fuentes en CSS es crucial para definir la apariencia y la legibilidad del texto en una página web. CSS ofrece diversas propiedades para especificar y controlar las fuentes. Aquí tienes una guía completa sobre cómo trabajar con fuentes en CSS:

### Propiedades de Fuente en CSS

1. **`font-family`**: Especifica la familia de fuentes para el texto. Se pueden listar múltiples fuentes como alternativas, en caso de que la primera no esté disponible.

    ```css
    p {
        font-family: "Arial", "Helvetica", sans-serif;
    }
    ```

    - **Fuentes genéricas**: CSS permite el uso de fuentes genéricas como `serif`, `sans-serif`, `monospace`, `cursive`, y `fantasy`.

2. **`font-size`**: Define el tamaño de la fuente. Puede especificarse en varias unidades como píxeles (`px`), puntos (`pt`), ems (`em`), rems (`rem`), porcentajes (`%`), etc.

    ```css
    p {
        font-size: 16px;
    }
    ```

3. **`font-weight`**: Controla el grosor del texto. Los valores pueden ser `normal`, `bold`, `bolder`, `lighter`, o números entre 100 y 900 (en incrementos de 100).

    ```css
    p {
        font-weight: bold;
    }
    ```

4. **`font-style`**: Define el estilo de la fuente. Los valores comunes son `normal`, `italic`, y `oblique`.

    ```css
    p {
        font-style: italic;
    }
    ```

5. **`font-variant`**: Controla la variante de la fuente, como `small-caps` para usar mayúsculas pequeñas.

    ```css
    p {
        font-variant: small-caps;
    }
    ```

6. **`line-height`**: Define la altura de la línea. Esto puede mejorar la legibilidad del texto.

    ```css
    p {
        line-height: 1.5;
    }
    ```

7. **`letter-spacing`**: Ajusta el espacio entre caracteres.

    ```css
    p {
        letter-spacing: 2px;
    }
    ```

8. **`word-spacing`**: Ajusta el espacio entre palabras.

    ```css
    p {
        word-spacing: 4px;
    }
    ```

### Uso de Fuentes Web

Las fuentes web permiten a los desarrolladores utilizar fuentes que no están instaladas en el dispositivo del usuario. Esto se logra mediante servicios como Google Fonts o mediante la inclusión de archivos de fuentes en el proyecto.

#### Google Fonts

1. **Incluir Google Fonts**:
    - Ve a [Google Fonts](https://fonts.google.com/).
    - Selecciona la fuente deseada y copia el enlace proporcionado.

    ```html
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    ```

2. **Usar la fuente en CSS**:

    ```css
    body {
        font-family: 'Roboto', sans-serif;
    }
    ```

#### Fuentes Personalizadas (Archivo Local)

1. **Incluir la fuente en tu proyecto**: Descarga la fuente y colócala en tu proyecto, por ejemplo en una carpeta llamada `fonts`.

2. **Declarar la fuente en CSS**:

    ```css
    @font-face {
        font-family: 'MiFuentePersonalizada';
        src: url('fonts/MiFuente.woff2') format('woff2'),
             url('fonts/MiFuente.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'MiFuentePersonalizada', sans-serif;
    }
    ```

### Unidades de Tamaño de Fuente

- **Píxeles (`px`)**: Unidad absoluta, comúnmente usada.
  
    ```css
    p {
        font-size: 16px;
    }
    ```

- **Ems (`em`)**: Unidad relativa al tamaño de la fuente del elemento padre.

    ```css
    p {
        font-size: 1.5em;
    }
    ```

- **Rems (`rem`)**: Unidad relativa al tamaño de la fuente del elemento raíz (`html`).

    ```css
    p {
        font-size: 1rem;
    }
    ```

- **Porcentajes (`%`)**: También relativo al tamaño de la fuente del elemento padre.

    ```css
    p {
        font-size: 100%;
    }
    ```

### Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 1.6;
        }
        h1 {
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 1px;
        }
        p {
            font-size: 1rem;
            font-weight: 400;
            font-style: italic;
            line-height: 1.5;
            letter-spacing: 0.5px;
            word-spacing: 2px;
        }
    </style>
    <title>Ejemplo de Fuentes en CSS</title>
</head>
<body>
    <h1>Ejemplo de Uso de Fuentes en CSS</h1>
    <p>Este es un párrafo que muestra cómo se pueden aplicar diferentes propiedades de fuente usando CSS. Utiliza la fuente 'Roboto' desde Google Fonts.</p>
</body>
</html>
```

### Conclusión

El manejo de fuentes en CSS es fundamental para crear diseños web atractivos y legibles. Con el uso adecuado de las propiedades de fuente y la inclusión de fuentes web, puedes personalizar el texto de tus páginas web para que se adapten a la identidad visual de tu proyecto.