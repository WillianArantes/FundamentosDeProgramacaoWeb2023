let inputDias = document.querySelector("#inputDias");
let BtCalcular = document.querySelector("#BtCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function Calcular(){

    let Dias = Number(inputDias.value);

    let mes = Dias/30;
    let anos = Dias/365;

    h2Resultado.innerHTML = " Dias sem acidente = " + Dias + "<br>" + " Meses sem acidente = " + mes + "<br>" + " Anos  sem acidente = " + anos;
}

BtCalcular.onclick = function(){
    Calcular();
}