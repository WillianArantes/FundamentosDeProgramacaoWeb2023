let Nome = document.querySelector("#Nome");
let Idade = document.querySelector("#Idade");
let BtCalcularDias = document.querySelector("#BtCalcularDias");
let h2ResultadoIdade = document.querySelector("#h2ResultadoIdade");


function CalcularDias(){

    let texto = String(Nome.value);
    let valor2 = Number(Idade.value);

    h2ResultadoIdade.innerHTML =

    texto + ", voce já viveu " + valor2 * 365 + " Dias";
}

BtCalcularDias.onclick = function(){
    CalcularDias();
}
