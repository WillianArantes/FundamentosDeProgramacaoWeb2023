let InputPeso = document.querySelector("#InputPeso");
let BtCalcular = document.querySelector("#BtCalcular");
let h1Resultado = document.querySelector("#h1Resultado");


function CalcularVlrPagar(){
    let peso = Number(InputPeso.value);
    let DscPrato = peso * 12 - 0.300;
    let decimal = DscPrato.toFixed(2);

    h1Resultado.innerHTML = ("Valor a pagar: "+ "R$" + decimal); 
}

BtCalcular.onclick = function(){
    CalcularVlrPagar();
}