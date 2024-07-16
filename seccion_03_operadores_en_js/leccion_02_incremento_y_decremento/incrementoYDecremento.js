// Incremento y Decremento

let a, b, c;
a = 0;
// Pre-incremento
++a;
console.log(a);
// Post-incremento
a++;
console.log(a);

// Pre-Decremento
--a;
console.log(a);
// Post-Decremento
a--;
console.log(a);

// Ejemplo
a = 5;
b = 2;
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);