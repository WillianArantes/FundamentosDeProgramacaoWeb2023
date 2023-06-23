let CampoNumero1 = document.querySelector("#CampoNumero1");
let CampoNumero2 = document.querySelector("#CampoNumero2");
let ExibirSoma = document.querySelector("#ExibirSoma");

function ResultadoSoma(){
    let Numero1 = Number(CampoNumero1.value);
    let Numero2 = Number(CampoNumero2.value);
    let soma = Numero1 + Numero2;

    ExibirSoma.textContent = soma;

}

ExibirSoma.onclick = function(){
    ResultadoSoma();
}