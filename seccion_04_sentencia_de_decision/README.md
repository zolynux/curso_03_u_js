# Sentencia de decisión en JavaScript

---

Las sentencias de decisión en JavaScript se utilizan para ejecutar diferentes bloques de código según ciertas condiciones. Las principales sentencias de decisión son `if`, `else if`, `else`, y `switch`. A continuación se describe cada una con ejemplos:

### Sentencia `if`

La sentencia `if` ejecuta un bloque de código si una condición especificada es verdadera.

```javascript
let edad = 18;

if (edad >= 18) {
    console.log('Eres un adulto.');
}
```

En este ejemplo, el mensaje "Eres un adulto." se imprime si la variable `edad` es mayor o igual a 18.

### Sentencia `else`

La sentencia `else` especifica un bloque de código que se ejecuta si la condición `if` es falsa.

```javascript
let edad = 16;

if (edad >= 18) {
    console.log('Eres un adulto.');
} else {
    console.log('Eres menor de edad.');
}
```

En este caso, el mensaje "Eres menor de edad." se imprime porque `edad` es menor que 18.

### Sentencia `else if`

La sentencia `else if` permite probar múltiples condiciones. Si la primera condición es falsa, se prueba la siguiente, y así sucesivamente.

```javascript
let nota = 85;

if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else {
    console.log('F');
}
```

En este ejemplo, el mensaje "B" se imprime porque `nota` es 85, que es mayor o igual a 80 pero menor que 90.

### Sentencia `switch`

La sentencia `switch` evalúa una expresión y ejecuta el bloque de código correspondiente a la coincidencia del caso. Si no hay coincidencia, se puede ejecutar un bloque de código `default`.

```javascript
let dia = 3;
let diaNombre;

switch (dia) {
    case 1:
        diaNombre = 'Lunes';
        break;
    case 2:
        diaNombre = 'Martes';
        break;
    case 3:
        diaNombre = 'Miércoles';
        break;
    case 4:
        diaNombre = 'Jueves';
        break;
    case 5:
        diaNombre = 'Viernes';
        break;
    case 6:
        diaNombre = 'Sábado';
        break;
    case 7:
        diaNombre = 'Domingo';
        break;
    default:
        diaNombre = 'Día inválido';
}

console.log(diaNombre); // Salida: Miércoles
```

En este ejemplo, el mensaje "Miércoles" se imprime porque `dia` es 3. El uso de `break` es crucial para evitar que el código continúe ejecutándose en los siguientes casos.

### Operador Ternario

El operador ternario es una forma compacta de escribir una sentencia `if-else`. Tiene la sintaxis `condición ? expr1 : expr2`.

```javascript
let edad = 18;
let mensaje = (edad >= 18) ? 'Eres un adulto.' : 'Eres menor de edad.';
console.log(mensaje); // Salida: Eres un adulto.
```

En este ejemplo, `mensaje` se establece en "Eres un adulto." porque `edad` es 18, que es mayor o igual a 18.

### Conclusión

Las sentencias de decisión en JavaScript permiten que tu código ejecute diferentes bloques de código en función de condiciones específicas. Entender y utilizar correctamente estas sentencias es fundamental para controlar el flujo de ejecución de tu programa.
