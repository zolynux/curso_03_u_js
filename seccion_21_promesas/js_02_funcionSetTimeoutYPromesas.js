let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) {
    resolver("Resolvió correcto");
  } else {
    rechazar("Se produjo un error");
  }
});

/*
miPromesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
*/

/*
miPromesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/

let promesas = new Promise((resovler) => {
  console.log("Inicio promesa");
  setTimeout(() => resovler("Saludo con promesa y tiemout"), 3000);
  console.log("Fin promesa");
});

promesas.then((valor) => console.log(valor));
