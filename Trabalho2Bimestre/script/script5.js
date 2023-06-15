let Gasolina = document.querySelector("#Gasolina");
let Preço = document.querySelector("#Preço");
let BtCalcularGasolina = document.querySelector("#BtCalcularGasolina");
let h2ResultadoGasolina = document.querySelector("#h2ResultadoGasolina");


function CalcularLitro (){

    let valor1 = Number(Gasolina.value);
    let valor2 = Number(Preço.value);

    h2ResultadoGasolina.innerHTML =
    "Litros colocados: " + valor2 / valor1;
}

BtCalcularGasolina.onclick = function(){
    CalcularLitro();
}