const primeiroPromise = new Promise((resolve, reject) => {
    var nome = "Victor";

   if(nome === "Victor"){
        resolve("O usuario foi encontrado");
    }else{
         reject("Não encontrado");
     }
 });

 primeiroPromise.then((data) => {
     console.log(data);
 });

function operacao(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Espera concluida");
            resolve()
        },2000);
    });
}
// o tempo no setTimeout é contado em milisegundos
async function carregando(){

    console.log("Iniciou");
    await operacao();
    console.log("Terminou");
}

carregando();