let PontoAvalorX = document.querySelector("#PontoAvalorX");
let PontoAvalorY = document.querySelector("#PontoAvalorY");
let PontoBvalorX = document.querySelector("#PontoBvalorX");
let PontoBvalorY = document.querySelector("#PontoBvalorY");
let BtCalcular = document.querySelector("#BtCalcular");
let h1Resultado = document.querySelector("#h1Resultado");

function CalcularDistancia()
{
    let AvalorX = Number(PontoAvalorX.value);
    let AvalorY = Number(PontoAvalorY.value);
    let BvalorX = Number(PontoBvalorX.value);
    let BvalorY = Number(PontoBvalorY.value);

    let a = AvalorX - AvalorY;
    let b = BvalorX - BvalorY;
    let c = a ** 2;
    let d = b ** 2;
    let e = c + d;

    let raiz = Math.sqrt(e);
   


    h1Resultado.innerHTML = "A distância entre dois pontos é: " + e;
    



}

BtCalcular.onclick = function()
{
    CalcularDistancia();
}