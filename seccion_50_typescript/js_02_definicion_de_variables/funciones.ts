let saludo = "Hola Mundo desde TypeScript";

// saludo = 34;
saludo = "Hola Mundo desde JavaScript";

let numero: number = 10;

// numero = "Cambio numero"
numero = 23;

let cualquiera: any;

cualquiera = 12;
cualquiera = "Hola";
cualquiera = true;

const PI = 3.14;

// PI = 4.15;

const saludar = () => {
  console.log(saludo);
  console.log(numero);
  console.log(cualquiera);
  console.log(PI);
};

saludar();
