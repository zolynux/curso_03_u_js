# Formato de Texto en CSS

---

El formato de texto en CSS incluye una variedad de propiedades que permiten estilizar y mejorar la presentación del texto en las páginas web. Aquí tienes una explicación detallada sobre las propiedades más comunes usadas para formatear texto en CSS:

### Propiedades de Color
- **`color`**: Define el color del texto.

  ```css
  p {
      color: blue;
  }
  ```

### Propiedades de Fuente
- **`font-family`**: Especifica la familia de fuentes del texto. Puedes listar múltiples fuentes como alternativas.

  ```css
  p {
      font-family: Arial, sans-serif;
  }
  ```

- **`font-size`**: Define el tamaño de la fuente. Puede especificarse en píxeles (`px`), ems (`em`), rems (`rem`), porcentajes (`%`), etc.

  ```css
  p {
      font-size: 16px;
  }
  ```

- **`font-weight`**: Define el grosor del texto. Los valores comunes son `normal`, `bold`, `bolder`, `lighter`, o un número entre 100 y 900.

  ```css
  p {
      font-weight: bold;
  }
  ```

- **`font-style`**: Define el estilo de la fuente. Los valores comunes son `normal`, `italic`, y `oblique`.

  ```css
  p {
      font-style: italic;
  }
  ```

- **`font-variant`**: Especifica si el texto debe mostrarse en una variante especial. Un valor común es `small-caps`.

  ```css
  p {
      font-variant: small-caps;
  }
  ```

- **`line-height`**: Define la altura de la línea. Puede ayudar a mejorar la legibilidad del texto.

  ```css
  p {
      line-height: 1.5;
  }
  ```

### Propiedades de Alineación y Espaciado
- **`text-align`**: Define la alineación horizontal del texto. Los valores comunes son `left`, `right`, `center`, y `justify`.

  ```css
  p {
      text-align: center;
  }
  ```

- **`text-indent`**: Define la indentación de la primera línea del texto.

  ```css
  p {
      text-indent: 20px;
  }
  ```

- **`letter-spacing`**: Define el espacio entre caracteres.

  ```css
  p {
      letter-spacing: 2px;
  }
  ```

- **`word-spacing`**: Define el espacio entre palabras.

  ```css
  p {
      word-spacing: 4px;
  }
  ```

### Decoración del Texto
- **`text-decoration`**: Añade decoraciones al texto. Los valores comunes son `none`, `underline`, `overline`, `line-through`, y combinaciones de estos.

  ```css
  p {
      text-decoration: underline;
  }
  ```

### Transformación del Texto
- **`text-transform`**: Controla la capitalización del texto. Los valores comunes son `none`, `capitalize`, `uppercase`, y `lowercase`.

  ```css
  p {
      text-transform: uppercase;
  }
  ```

### Sombra del Texto
- **`text-shadow`**: Añade una sombra al texto. Los valores incluyen el desplazamiento horizontal y vertical, el desenfoque, y el color de la sombra.

  ```css
  p {
      text-shadow: 2px 2px 5px gray;
  }
  ```

### Ejemplo Completo

Aquí tienes un ejemplo que utiliza varias propiedades de formato de texto:

```css
p {
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    text-align: justify;
    text-indent: 30px;
    letter-spacing: 1px;
    word-spacing: 2px;
    text-decoration: underline;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}
```

```html
<p>
    Este es un ejemplo de texto que utiliza varias propiedades de formato en CSS para mejorar su presentación y legibilidad.
</p>
```

### Conclusión

El formato de texto en CSS ofrece una gran variedad de opciones para estilizar el texto de manera efectiva, mejorando tanto la estética como la legibilidad de las páginas web. Con el uso adecuado de estas propiedades, puedes crear diseños atractivos y profesionales.