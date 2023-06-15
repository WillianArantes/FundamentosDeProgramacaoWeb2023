let Frente = document.querySelector("#Frente");
let Comprimento = document.querySelector("#Comprimento");
let BtCalcularArea = document.querySelector("#BtCalcularArea");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularArea(){

    let valor1 = Number(Frente.value);
    let valor2 = Number(Comprimento.value);
    
    h2Resultado.innerHTML = 
     "A area do terreno é:"+ valor1 * valor2 +"m²";
}

BtCalcularArea.onclick = function(){
    CalcularArea();
}