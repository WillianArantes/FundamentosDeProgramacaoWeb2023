let Pães = document.querySelector("#Pães");
let Broas = document.querySelector("#Broas");
let BtCalcularPadaria = document.querySelector("#BtCalcularPadaria");
let h2ResultadoPadaria = document.querySelector("#h2ResultadoPadaria");
let h2ResultadoPoupança = document.querySelector("#h2ResultadoPoupança");

function calcularTotal(){

    let valor1 = Number(Pães.value);
    let valor2 = Number(Broas.value);
    T = valor1 * 0.12 + valor2 * 1.50

    h2ResultadoPadaria.innerHTML="O valor total vendido hoje foi: " + (T) + " R$"
    h2ResultadoPoupança.innerHTML= "Você deverá guardar: " + (10 * T / 100) + " R$";
}

BtCalcularPadaria.onclick = function() {
    calcularTotal();
}