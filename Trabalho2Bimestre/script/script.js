let Frente = document.querySelector("#Frente");
let Comprimento = document.querySelector("#Comprimento");
let BtCalcularArea = document.querySelector("#BtCalcularArea");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularArea(){

    let valor1 = Number(Frente.value);
    let valor2 = Number(Comprimento.value);
    
    h2Resultado.innerHTML = 
     "A area do terreno é:"+ valor1 * valor2+"m²";
}

BtCalcularArea.onclick = function(){
    CalcularArea();
}

let Cavalos = document.querySelector("#Cavalos");
let BtCalcular = document.querySelector("#BtCalcular");
let h2ResultadoCavalo = document.querySelector("#h2ResultadoCavalo");

function CalcularFerraduras(){

    let valor1 = Number(Cavalos.value);

    h2ResultadoCavalo.innerHTML =
    "O tanto de ferraduras necessarias são:"+ valor1 * 4;
}

BtCalcular.onclick = function(){
    CalcularFerraduras();

}


let Pães = document.querySelector("#Pães");
let Broas = document.querySelector("#Broas");
let BtCalcularPadaria = document.querySelector("#BtCalcularPadaria");
let h2ResultadoPadaria = document.querySelector("#h2ResultadoPadaria");
let h2ResultadoPoupança = document.querySelector("#h2ResultadoPoupança");

function calcularTotal(){

    let valor1 = Number(Pães.value);
    let valor2 = Number(Broas.value);
    T = valor1 * 0.12 + valor2 * 1.50

    h2ResultadoPadaria.innerHTML="O valor total vendido hoje foi:" + (T) + "R$"
    h2ResultadoPoupança.innerHTML= "Você deverá guardar:" + (10 * T / 100) + "R$";
}

BtCalcularPadaria.onclick = function() {
    calcularTotal();
}

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


let Gasolina = document.querySelector("#Gasolina");
let Preço = document.querySelector("#Preço");
let BtCalcularGasolina = document.querySelector("#BtCalcularGasolina");
let h2ResultadoGasolina = document.querySelector("#h2ResultadoGasolina");


function CalcularLitro (){

    let valor1 = Number(Gasolina.value);
    let valor2 = Number(Preço.value);

    h2ResultadoGasolina.innerHTML =
    "Litros colocados:" + valor2 / valor1;
}

BtCalcularGasolina.onclick = function(){
    CalcularLitro();
}

let Dia = document.querySelector("#Dia");
let Mes = document.querySelector("#Mes");
let BtCalcularData = document.querySelector("#BtCalcularData");
let h2ResultadoData = document.querySelector("#h2ResultadoData");


function CalcularData(){

    let valor1 = Number(Dia.value);
    let valor2 = Number(Mes.value);

    let menosdias = 30 - valor1;

    let caldias = 30 - menosdias;
    let calmes = valor2 * 30 - 30;

    let totaldias = calmes + caldias

    h2ResultadoData.innerHTML =
    "Este ano já se passaram, " + totaldias + " dias";


}

BtCalcularData.onclick = function(){
    CalcularData();
}


let Pequena = document.querySelector("#Pequena");
let Media = document.querySelector("#Media");
let Grande = document.querySelector("#Grande");
let BtCalcularCamisas = document.querySelector("#BtCalcularCamisas");
let h2ResultadoCamisas = document.querySelector("#h2ResultadoCamisas");


function CalcularCamisas(){

    let valor1 = Number(Pequena.value);
    let valor2 = Number(Media.value);
    let valor3 = Number(Grande.value);

    let P = valor1 * 10
    let M = valor2 * 12
    let G = valor3 * 15

    let T = P + M + G
    h2ResultadoCamisas.innerHTML =
    "O valor total deu:" + "R$" + (T);
    
}

BtCalcularCamisas.onclick = function(){
    CalcularCamisas();
}



let XB = document.querySelector("#XB");
let XA = document.querySelector("#XA");
let YB = document.querySelector("#YB");
let YA = document.querySelector("#YA");
let BtCalcularPlano = document.querySelector("#BtCalcularPlano");
let h2ResultadoPlano = document.querySelector("#h2ResultadoPlano");

function CalcularPlano(){

    let valor1 = Number(XB.value);
    let valor2 = Number(XA.value);
    let valor3 = Number(YB.value);
    let valor4 = Number(YA.value);

    Math.pow(valor1, 2 - valor2, 2) + Math.pow(valor3, 2 - valor4, 2);2

}

BtCalcularPlano.onclick = function(){
    CalcularPlano();
}