// var cliente1nome = "Alice";
// var cliente1CPF = 999999999;
// var cliente1RG = 8888888;
// var cliente1Agencia = 101;
// var cliente1Conta = 258978;
// var cliente1Saldo = 200.85;

// var cliente2Conta = ["Nome : Alice" , "CPF : 999999"];

class Cliente {
  nome;
  cpf;
};

class Conta {
  numeroConta;
  agencia;
  saldo;
  
  sacar(valorSacado) {
        if(this.saldo >= valorSacado){
            this.saldo = this.saldo - valorSacado;
            return valorSacado;
        }else{
            return;
        }
    
    }
  depositar(valor) {
      if(this.saldo <=0){
          return;
      } else{

          this.saldo = this.saldo + valor;
          return valor;
        }     
    }
};


    
    var contaAlice = new Conta();
    contaAlice.numeroConta = 1;
    contaAlice.agencia = 1080;
    contaAlice.saldo = 0;
    
var cliente1 = new Cliente();

cliente1.nome = "Alice";
// cliente1.agencia = "234";
cliente1.cpf = "99999999";
// cliente1.conta = "1080";

var cliente2 = new Cliente();
cliente2.nome = "Mario";
// cliente2.agencia = "555";
cliente2.cpf = "8888888";
// cliente2.conta = "2654";

console.log(cliente1);
console.log(cliente2);
console.log(contaAlice);

contaAlice.saldo = 3000;

console.log(contaAlice);


contaAlice.sacar(1000);

console.log(contaAlice);

contaAlice.sacar(5000);

console.log(contaAlice);

contaAlice.depositar(185000);
contaAlice.depositar(20);
contaAlice.depositar(200);

console.log(contaAlice);

contaAlice.saldo = 239;

console.log(contaAlice);





