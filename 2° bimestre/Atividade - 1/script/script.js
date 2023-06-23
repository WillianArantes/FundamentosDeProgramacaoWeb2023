//declarei variaveis
let CampoNumero = document.querySelector("#CampoNumero");
let CampoNumero2 = document.querySelector("#CampoNumero2");
let BtExibirSoma = document.querySelector("#btExibirSoma");
let ResultadoSoma = document.querySelector("#resultadoSoma");
//criei uma função
function Somar(){
    let PrimeiroNumero = Number(CampoNumero.value);
    let SegundoNumero = Number(CampoNumero2.value);

    let resultado = PrimeiroNumero - SegundoNumero;

    ResultadoSoma.textContent = resultado;
}
//chamei função
BtExibirSoma.onclick = function(){
    Somar();
}
