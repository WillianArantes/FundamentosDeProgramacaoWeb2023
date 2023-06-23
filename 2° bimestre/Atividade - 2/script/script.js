let Valor_Pago = document.querySelector("#Valor_Pago");
let Preco_Produto = document.querySelector("#Preco_Produto");
let BtCalcular = document.querySelector("#BtCalcular")
let ExibirTroco = document.querySelector("#ExibirTroco");

function CalcularTroco(){
    let ValorPago = Number(Valor_Pago.value);
    let PrecoProduto = Number(Preco_Produto.value);

    let Resultado = ValorPago - PrecoProduto;

    ExibirTroco.textContent = Resultado;
}

BtCalcular.onclick = function(){
    CalcularTroco();
}

