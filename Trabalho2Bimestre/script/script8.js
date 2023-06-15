let Pequena = document.querySelector("#Pequena");
let Media = document.querySelector("#Media");
let Grande = document.querySelector("#Grande");
let BtCalcularCamisas = document.querySelector("#BtCalcularCamisas");
let h2ResultadoCamisas = document.querySelector("#h2ResultadoCamisas");


function CalcularCamisas(){

    let valor1 = Number(Pequena.value);
    let valor2 = Number(Media.value);
    let valor3 = Number(Grande.value);

    let P = valor1 * 10
    let M = valor2 * 12
    let G = valor3 * 15

    let T = P + M + G
    h2ResultadoCamisas.innerHTML =
    "O valor total deu: " + "R$" + (T);
    
}

BtCalcularCamisas.onclick = function(){
    CalcularCamisas();
}