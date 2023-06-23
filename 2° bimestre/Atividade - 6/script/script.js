//declarando variaveis
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let BtVerificar = document.querySelector("#BtVerificar");
let h1Maior = document.querySelector("#h1Maior");

//criando funcao com condicionais
function RetornandoMaiorNumero(){
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);

    if (valor1 > valor2){
        h1Maior.textContent = valor1;
    }
    else{
        h1Maior.textContent = valor2;
    }

}
//chamando funcao
BtVerificar.onclick = function(){
    RetornandoMaiorNumero();
}


