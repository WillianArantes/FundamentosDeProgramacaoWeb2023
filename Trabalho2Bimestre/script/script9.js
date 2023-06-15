let XB = document.querySelector("#XB");
let XA = document.querySelector("#XA");
let YB = document.querySelector("#YB");
let YA = document.querySelector("#YA");
let BtCalcularPlano = document.querySelector("#BtCalcularPlano");
let h2ResultadoPlano = document.querySelector("#h2ResultadoPlano");

function CalcularPlano(){

    let valor1 = Number(XB.value);
    let valor2 = Number(XA.value);
    let valor3 = Number(YB.value);
    let valor4 = Number(YA.value);

    var distancia = Math.sqrt(Math.pow(valor2 - valor1, 2) + Math.pow(valor4 - valor3, 2));

    h2ResultadoPlano.innerHTML = distancia;
}

BtCalcularPlano.onclick = function(){
    CalcularPlano();
}