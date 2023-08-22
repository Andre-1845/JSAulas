const cursos = {
    HTML : 45,
    CSS : 78,
    JS : 105,
    BOOTSTRAP : 82,
    teste :332
}
// cursos => ARROW FUNCTION

//  KEYS -- serve para selecionar os atributos de um OBJETO (os nomes dos Atributos)
// 

const cursosKey = Object.keys(cursos);

document.getElementById("keysDiv").innerHTML = cursosKey;

document.getElementById("keysDiv2").innerHTML = `<ul>${cursosKey.map(cursos => `<li>${cursos}</li>`)}</ul>`;




const cursosEntries = Object.entries(cursos);

document.querySelector("#entriesDiv").innerHTML = cursosEntries;

// MAP - para imprimir em formatos

const mapVar = ["alfa","Bravo", "Charlie", "Delta"];

const resultadoMap = mapVar.map((x) => "<li>Fruta : " + x+"</li>");

document.querySelector("#map").innerHTML = "<ul>"+resultadoMap+"</ul>";

// document.getElementById("keysDiv").innerHTML = cursosKey;