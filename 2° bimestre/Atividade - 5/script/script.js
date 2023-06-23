//declarando variaveis
let inputVlr1 = document.querySelector("#inputVlr1");
let inputVlr2 = document.querySelector("#inputVlr2");
let inputVlr3 = document.querySelector("#inputVlr3");
let BtCalcular = document.querySelector("#BtCalcular");
let h1Resultado = document.querySelector("#h1Resultado");

//criando funcao
function CalcularMedias(){
    let valor1 = Number(inputVlr1.value);
    let valor2 = Number(inputVlr2.value);
    let valor3 = Number(inputVlr3.value);
    
    let MediaAritmetica = (valor1 + valor2 + valor3)/3;
    //pesos: 3,2 e 5
    let somaVlrPeso = (valor1 * 3)+(valor2 * 2)+(valor3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaVlrPeso / somaPesos;

    let somaMedias = MediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;
    
    h1Resultado.innerHTML = "Media Aritmetica: " +MediaAritmetica +"<br>"
    + "Media Ponderada: " +mediaPonderada +"<br>"
     + "Soma das Medias: " + somaMedias+ "<br>"
      +"Media das Medias: " + mediaMedias;
}

//chamando funcao
BtCalcular.onclick = function(){
    CalcularMedias();
}

