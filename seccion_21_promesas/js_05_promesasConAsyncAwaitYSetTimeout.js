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
  // console.log("Inicio promesa");
  setTimeout(() => resovler("Saludo con promesa y tiemout"), 3000);
  // console.log("Fin promesa");
});

// promesas.then((valor) => console.log(valor));

// async indica que una función regresa una promesa
async function miFuncionConPromesa() {
  return "Saludo con promesa y async";
}

// miFuncionConPromesa().then((valor) => console.log(valor));

// async / await
async function funcionConPromesaYAwait() {
  let miPromesa = new Promise((resovler) => {
    resovler("Promesa con await");
  });

  console.log(await miPromesa);
}

// funcionConPromesaYAwait();

// Promesas, await, async y setTimeout
async function funcionConPromesaYAwaitTimeout() {
  console.log("Inicio función");
  let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver("Promesa con await y timeout"), 3000);
  });
  console.log(await miPromesa);
  console.log("Fin función");
}

funcionConPromesaYAwaitTimeout();
