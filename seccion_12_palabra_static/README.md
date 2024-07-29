# Palabra Static en JavaScript

---

Claro, voy a explicarte en detalle el uso de la palabra clave `static` en JavaScript.

```javascript
class Matemáticas {
  static PI = 3.14159;

  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }

  static saludar() {
    console.log("Hola, soy la clase Matemáticas");
  }
}

console.log(Matemáticas.PI); // Output: 3.14159
console.log(Matemáticas.sumar(5, 3)); // Output: 8
console.log(Matemáticas.restar(10, 4)); // Output: 6
Matemáticas.saludar(); // Output: Hola, soy la clase Matemáticas

// Ejemplo de uso de static con herencia
class FormaGeométrica {
  static crearCuadrado(lado) {
    return new this(lado, lado);
  }

  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  área() {
    return this.ancho * this.alto;
  }
}

class Rectángulo extends FormaGeométrica {
  static crearDobleAncho(alto) {
    return new this(alto * 2, alto);
  }
}

const cuadrado = FormaGeométrica.crearCuadrado(5);
console.log(cuadrado.área()); // Output: 25

const rectángulo = Rectángulo.crearDobleAncho(3);
console.log(rectángulo.área()); // Output: 18
```

Explicación detallada sobre la palabra clave `static` en JavaScript:

1. Definición:
   La palabra clave `static` se utiliza para definir métodos y propiedades que pertenecen a la clase misma, no a las instancias de la clase.

2. Propiedades estáticas:

   - Se definen directamente en la clase, no en el constructor.
   - Se acceden usando el nombre de la clase, no a través de instancias.
   - Son compartidas por todas las instancias de la clase.
   - Útiles para valores constantes o datos que deben ser compartidos entre todas las instancias.

3. Métodos estáticos:

   - Se definen en la clase usando la palabra clave `static`.
   - Se llaman directamente en la clase, no en las instancias.
   - No tienen acceso a `this` dentro de ellos (porque no están asociados a una instancia específica).
   - Útiles para funciones de utilidad que no necesitan acceder al estado de la instancia.

4. Uso con herencia:

   - Los métodos y propiedades estáticos se heredan.
   - Pueden ser sobrescritos en las clases hijas.
   - Dentro de un método estático, `this` se refiere a la clase en la que se llama el método, no necesariamente a la clase donde se define.

5. Ventajas:

   - Ahorro de memoria: las propiedades estáticas solo existen una vez, no se copian para cada instancia.
   - Organización del código: permite agrupar funciones relacionadas dentro de una clase sin necesidad de crear instancias.
   - Utilidad: ideal para métodos de fábrica, constantes de clase, o funciones de utilidad relacionadas con la clase.

6. Consideraciones:

   - No se pueden acceder propiedades o métodos no estáticos desde métodos estáticos.
   - Los métodos estáticos no pueden usar `this` para acceder a propiedades de instancia.

7. Casos de uso comunes:
   - Constantes de clase (como `Math.PI`).
   - Funciones de utilidad (como `Math.random()`).
   - Métodos de fábrica para crear instancias de la clase de manera específica.
   - Caché o estado compartido entre todas las instancias de una clase.

En el ejemplo proporcionado, la clase `Matemáticas` demuestra el uso de propiedades y métodos estáticos, mientras que las clases `FormaGeométrica` y `Rectángulo` muestran cómo los métodos estáticos pueden ser útiles para crear instancias de maneras específicas y cómo funcionan con la herencia.

¿Hay algún aspecto específico del uso de `static` que te gustaría que explique con más detalle?
