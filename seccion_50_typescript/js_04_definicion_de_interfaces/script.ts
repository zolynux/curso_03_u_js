interface Usuario {
  nombreUsuario: string;
  password: string;
  confirmaPassword?: string;
}

let usuario1: Usuario = {
  nombreUsuario: "Juan",
  password: "123456",
  confirmaPassword: "123456",
};

console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar {
  abordarTransporte(): void;
}

let avion: Abordar = {
  abordarTransporte: function () {
    console.log("abordando");
  },
};

avion.abordarTransporte();
