let raio = document.querySelector("#raio");
let BtCalculo = document.querySelector("#BtCalculo");
let ResultadoPizza = document.querySelector("#ResultadoPizza");

function calculoraio(){

    let valor = Number(raio.value);

    ResultadoPizza.innerHTML = 
    "A área da pizza será de "+ (valor * valor) * 3.14 + " Cm";
}

BtCalculo.onclick = function(){
    calculoraio();
}