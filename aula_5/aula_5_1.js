class Computador {
    perifericos;
    gabinete;
    monitor;
    sistOp;
    dono;
}

class Dono {
     constructor(nome,idade){
         this.nome = nome;
         this.idade = idade;
     }
    }

    var dono1 = new Dono("Mario", 29);
    var dono2 = new Dono("jose", 34);

var computador_1 = new Computador();
computador_1.perifericos = ["teclado RedDragon", "Mouse Gamer", "Mouse Pad"];
computador_1.gabinete = "ATX";
computador_1.monitor = "27 pol, Samsung";
computador_1.sistOp = "Mac OS";
computador_1.dono = [dono1, dono2];

console.log(computador_1);