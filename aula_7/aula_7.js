class Loja{
    constructor (nome,localidade,marca,dono){
        this.nome = nome;
        this.localidade = localidade;
        this.marca = marca;
        this.dono = dono;
        this.produtos =[];

        this.listarProdutos = function(){
            console.log(this.produtos);
        };

        this.cadastrar.Produtos = function(nomeProduto,corProduto,valorProduto){
            this.produtos.push(new Produto(nomeProduto,corProduto,valorProduto));
            return `Produto : ${nomeProduto} foi adicionado`;

        };

        this.removerProdutos = function(indice){
            this.produtos.splice(indice,1);
            return `Produto : ${nomeProduto} foi removido`;
        };
    };
};

console.log(Loja)

var loja5 = new Loja ("aa","ww","mm","dd1");
var nike = new Produto ("tenis","preto",230.00);

console.log(nike);
console.log(loja5);


class Produto{
    constructor(nome,cor,valor){
        this.nome = nome;
        this.cor = cor;
        this.valor = valor;
    };
};

// const dono = "Victor";
// const netshoes = new Loja("Netshoes","W3Sul","Topper",dono);