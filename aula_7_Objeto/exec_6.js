
var vatual_pos = document.querySelector("#vatual");
var vmax_pos = document.querySelector("#vmax");
var ano_pos = document.querySelector("#ano");
var modelo_pos = document.querySelector("#modelo");
var marca_pos = document.querySelector("#marca");
var cor_pos = document.querySelector("#cor");
var acelerador_bt = document.querySelector("#acelerador");
var vatual = 0;

class Carro{
    constructor(marca,modelo,ano,cor,vmax,vatual){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.vmax = vmax;
        this.vatual = vatual;

        this.acelerar = function(){
            window.alert(vatual);
            if (vatual < vmax){
                this.vatual = vatual + 1;
            }else{
                this.vatual = vmax;
            }    
            window.alert(vatual);
            vatual_pos.innerHTML = `Teste ${vatual}`;   
            return ;

        }

    }
};

cor_pos.innerHTML = "azul";
vatual.acelerar;
//vatual_pos.innerHTML = vatual;

//acelerador_bt.addEventListener("click", acelerar());








/*
Crie um objeto chamado "carro" que tenha as seguintes propriedades:

marca: string
modelo: string
ano: número
cor: string
velocidadeMaxima: número
velocidadeAtual: número (inicialmente 0)
Em
seguida, crie um método chamado "acelerar" que receba um número como
argumento e aumente a velocidade atual do carro por esse número.
Certifique-se de que a velocidade atual não ultrapasse a velocidade
máxima do carro.*/