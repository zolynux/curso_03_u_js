# Gradientes en CSS

---

Claro, aquí tienes una explicación sobre gradientes, sombras de texto y sombras de caja en CSS:

### Gradientes en CSS

Los gradientes permiten crear transiciones suaves entre dos o más colores. Hay varios tipos de gradientes en CSS:

1. **Gradiente lineal (`linear-gradient`)**
   Un gradiente lineal es una transición suave entre colores a lo largo de una línea recta.

   ```css
   .gradiente-lineal {
     background: linear-gradient(to right, red, yellow);
   }
   ```

   En este ejemplo, el gradiente se mueve de rojo a amarillo de izquierda a derecha.

2. **Gradiente radial (`radial-gradient`)**
   Un gradiente radial es una transición suave entre colores que emana desde un punto central.

   ```css
   .gradiente-radial {
     background: radial-gradient(circle, blue, green);
   }
   ```

   En este ejemplo, el gradiente se mueve de azul a verde desde el centro hacia fuera en forma de círculo.

3. **Gradiente cónico (`conic-gradient`)**
   Un gradiente cónico es una transición suave de colores alrededor de un punto central en forma de cono.

   ```css
   .gradiente-conico {
     background: conic-gradient(from 0deg, red, yellow, green, blue, red);
   }
   ```

   En este ejemplo, el gradiente se mueve en forma de cono desde 0 grados, pasando por varios colores y volviendo al rojo.

### Sombras de Texto en CSS

La propiedad `text-shadow` permite agregar sombras al texto, creando un efecto de profundidad.

```css
.sombra-texto {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

En este ejemplo, el texto tendrá una sombra negra con un desplazamiento de 2 píxeles hacia la derecha y hacia abajo, y un desenfoque de 4 píxeles.

### Sombras de Caja en CSS

La propiedad `box-shadow` permite agregar sombras a los elementos de caja, como divs, imágenes, etc.

```css
.sombra-caja {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
```

En este ejemplo, el elemento tendrá una sombra negra con un desplazamiento de 5 píxeles hacia la derecha y hacia abajo, y un desenfoque de 10 píxeles.

#### Propiedades de `box-shadow`

- **Desplazamiento horizontal (offset-x):** La distancia de la sombra hacia la derecha (valores negativos la desplazan a la izquierda).
- **Desplazamiento vertical (offset-y):** La distancia de la sombra hacia abajo (valores negativos la desplazan hacia arriba).
- **Desenfoque (blur-radius):** Cuánto se difumina la sombra (opcional).
- **Expansión (spread-radius):** Cuánto se expande la sombra (opcional).
- **Color:** El color de la sombra.

### Ejemplo Completo

Aquí tienes un ejemplo práctico que incluye gradientes, sombras de texto y sombras de caja:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Gradiente lineal */
    .gradiente-lineal {
      background: linear-gradient(to right, red, yellow);
      width: 100%;
      height: 100px;
      margin-bottom: 20px;
    }

    /* Gradiente radial */
    .gradiente-radial {
      background: radial-gradient(circle, blue, green);
      width: 100%;
      height: 100px;
      margin-bottom: 20px;
    }

    /* Gradiente cónico */
    .gradiente-conico {
      background: conic-gradient(from 0deg, red, yellow, green, blue, red);
      width: 100%;
      height: 100px;
      margin-bottom: 20px;
    }

    /* Sombra de texto */
    .sombra-texto {
      font-size: 40px;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }

    /* Sombra de caja */
    .sombra-caja {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div class="gradiente-lineal"></div>
  <div class="gradiente-radial"></div>
  <div class="gradiente-conico"></div>

  <p class="sombra-texto">Texto con sombra</p>

  <div class="sombra-caja"></div>
</body>
</html>
```

### Explicación del Ejemplo

- **.gradiente-lineal:** Div con un fondo de gradiente lineal de rojo a amarillo.
- **.gradiente-radial:** Div con un fondo de gradiente radial de azul a verde.
- **.gradiente-conico:** Div con un fondo de gradiente cónico que pasa por varios colores.
- **.sombra-texto:** Párrafo con sombra de texto negra.
- **.sombra-caja:** Div con una sombra de caja negra.

Estos estilos te permiten crear efectos visuales atractivos y dinámicos en tus páginas web.
