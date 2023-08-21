var nome = document.querySelector("#nome");
var descricao = document.querySelector("#descricao");
var data = document.querySelector("#data");
var diretor = document.querySelector("#diretor");
var categoria = document.querySelector("#categoria");

const cadastrarBtn = document.querySelector("#cadastrar");
const filmeCadastrado = document.querySelector("#filmeCadastrado");

cadastrarBtn.addEventListener('click', cadastrar);

function cadastrar(){
    class Filme {
        constructor(nome,descricao,data,diretor,categoria){
            this.nome = nome;
            this.descricao = descricao;
            this.data = data;
            this.diretor = diretor;
            this.categoria = categoria;
        }
    }

    let nomeFilme = nome.value;
    let descricaoFilme = descricao.value;
    let dataFilme = data.value;
    let diretorFilme = diretor.value;
    let categoriaFilme = categoria.value;
    
    var filme = new Filme(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme);
    filmeCadastrado.style.display = "flex";
    filmeCadastrado.innerHTML = `Filme: ${filme.nome}<br>Desc: ${filme.descricao}<br>Data: ${filme.data}<br>Diretor: ${filme.diretor}<br>Categoria: ${filme.categoria}<br>`
} 

