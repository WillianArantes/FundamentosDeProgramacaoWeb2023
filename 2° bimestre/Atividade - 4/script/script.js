//declarei variaveis
let inputVlrSaldo = document.querySelector("#inputVlrSaldo");
let BtCalcular = document.querySelector("#BtCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function CalcularReajuste(){
    let vlrsaldo = Number(inputVlrSaldo.value);
    

    h3Resultado.textContent = "Valor Reajustado: " + (vlrsaldo + (vlrsaldo *(1/100)));

}


BtCalcular.onclick = function(){
    CalcularReajuste();
}


