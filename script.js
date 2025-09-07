const Cookie = document.getElementById("cookie");
const Contador = document.getElementById("counter");
const Dobrar = document.getElementById("double");
let contagem = 0;
let clique = 1;
let custo = 100;



Cookie.onclick = function(){
    contagem += clique
    Contador.textContent = contagem;
}

Dobrar.onclick = function(){
    if(contagem >= custo){
        contagem -= custo;
        clique *= 2;
        custo *= 2;
        Contador.textContent = contagem;
        Dobrar.textContent  = `Clique x2. Custo = ${custo}`;
    }
}