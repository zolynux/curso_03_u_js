# Posicionamiento de elementos con CSS

---

El posicionamiento de elementos con CSS es una parte fundamental del diseño web. Con CSS, puedes controlar cómo se colocan los elementos en la página. Aquí te doy una explicación de las diferentes técnicas de posicionamiento en CSS:

### 1. **Posicionamiento Estático (`static`)**
El posicionamiento estático es el valor por defecto. Los elementos con posicionamiento estático siguen el flujo normal del documento.

```css
.elemento {
  position: static;
}
```

### 2. **Posicionamiento Relativo (`relative`)**
El posicionamiento relativo coloca el elemento en el flujo normal del documento, pero permite moverlo relativo a su posición original utilizando las propiedades `top`, `right`, `bottom`, y `left`.

```css
.elemento {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### 3. **Posicionamiento Absoluto (`absolute`)**
El posicionamiento absoluto saca al elemento del flujo normal del documento y lo posiciona en relación a su contenedor más cercano que tenga una posición distinta de `static`. Si no hay tal contenedor, se posiciona en relación al `<html>`.

```css
.contenedor {
  position: relative;
}

.elemento {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

### 4. **Posicionamiento Fijo (`fixed`)**
El posicionamiento fijo también saca al elemento del flujo normal del documento, pero lo posiciona en relación a la ventana del navegador. No se mueve cuando se hace scroll en la página.

```css
.elemento {
  position: fixed;
  top: 0;
  left: 0;
}
```

### 5. **Posicionamiento Sticky (`sticky`)**
El posicionamiento sticky es una combinación de relativo y fijo. El elemento se comporta como relativo hasta que se desplaza a un cierto punto en la página, momento en el cual se fija en una posición definida (fijo).

```css
.elemento {
  position: sticky;
  top: 0; /* Se fija en la parte superior cuando se alcanza este punto */
}
```

### Ejemplo Completo

Aquí tienes un ejemplo práctico que utiliza varias técnicas de posicionamiento:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .statico {
      position: static;
      background-color: lightgrey;
      padding: 10px;
      margin: 10px;
    }

    .relativo {
      position: relative;
      top: 10px;
      left: 20px;
      background-color: lightblue;
      padding: 10px;
      margin: 10px;
    }

    .contenedor {
      position: relative;
      height: 200px;
      border: 1px solid black;
    }

    .absoluto {
      position: absolute;
      top: 50px;
      left: 50px;
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
    }

    .fijo {
      position: fixed;
      bottom: 0;
      right: 0;
      background-color: lightcoral;
      padding: 10px;
      margin: 10px;
    }

    .sticky {
      position: sticky;
      top: 0;
      background-color: lightgoldenrodyellow;
      padding: 10px;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="statico">Posición estática</div>
  <div class="relativo">Posición relativa</div>
  <div class="contenedor">
    Contenedor con posición relativa
    <div class="absoluto">Posición absoluta</div>
  </div>
  <div class="fijo">Posición fija</div>
  <div class="sticky">Posición sticky</div>
</body>
</html>
```

### Explicación del Ejemplo:
- **.statico:** Elemento con posicionamiento estático, se posiciona según el flujo normal.
- **.relativo:** Elemento con posicionamiento relativo, desplazado 10px hacia abajo y 20px hacia la derecha desde su posición original.
- **.contenedor:** Contenedor con posicionamiento relativo.
- **.absoluto:** Elemento con posicionamiento absoluto, colocado 50px desde la parte superior y 50px desde la izquierda del contenedor.
- **.fijo:** Elemento con posicionamiento fijo, colocado en la esquina inferior derecha de la ventana del navegador.
- **.sticky:** Elemento con posicionamiento sticky, se mantiene fijo en la parte superior cuando se alcanza ese punto al hacer scroll.

Estas técnicas te permiten crear diseños más flexibles y dinámicos, adaptando la posición de los elementos según tus necesidades.