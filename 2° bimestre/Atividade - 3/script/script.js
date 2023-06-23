//declarei variaveis
let inputVlrPeso = document.querySelector("#inputVlrPeso");
let inputQtdProduto = document.querySelector("#inputQtdProduto");
let h1Resultado  = document.querySelector("#h1Resultado");
let BtCalcular = document.querySelector("#BtCalcular");

//criar função
function CalcularTotal(){
    let vlrPeso = Number(inputVlrPeso.value);
    let QtdProduto = Number(inputQtdProduto.value);

    
    h1Resultado.textContent = "Valor total do produto:"+ (QtdProduto * vlrPeso) + "KG";
}

//chamar a função
BtCalcular.onclick = function(){
    CalcularTotal();
}

