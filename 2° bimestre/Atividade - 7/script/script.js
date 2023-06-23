// declarando variaveis 
let InputVlr1 = document.querySelector("#InputVlr1");
let InputVlr2 = document.querySelector("#InputVlr2");
let InputVlr3 = document.querySelector("#InputVlr3");
let InputVlr4 = document.querySelector("#InputVlr4");

let BtVerificar = document.querySelector("#BtVerificar");
let h1Resultados = document.querySelector("#h1Resultados");

//criando funcao
function VerificarMenorValor(){
    let vlr1 = Number(InputVlr1.value);
    let vlr2 = Number(InputVlr2.value);
    let vlr3 = Number(InputVlr3.value); 
    let vlr4 = Number(InputVlr4.value);

    let menor;

    if(vlr1 < vlr2 && vlr1 < vlr3 && vlr1 < vlr4)// if, se... se esta condicao é verdadeira entao execute a instrucao.... 
    {
        menor = vlr1;
    }else if(vlr2 < vlr1 && vlr2 < vlr3 && vlr2 < vlr4 )// else if, senao se.... se a condicao anterior nao for verdadeira execute esta nova condição.
    {
        menor = vlr2;
    }else if(vlr3 < vlr1 && vlr3 < vlr2 && vlr3 < vlr4 )
    {
        menor = vlr3;
    }else if(vlr4 < vlr1 && vlr4 < vlr2 && vlr4 < vlr3 )
    {
        menor = vlr4;
    }else// senao, se nenhuma das condicoes anteriores forem verdadeira, entao execute instrucao abaixo. 
    {
        menor = -1;
    }

    if(menor >= 0)
    {
        h1Resultados.innerHTML = "O menor valor encontrado é:" +menor;
    }else
    {
        h1Resultados.innerHTML = "Não existe valor menor entre os 4 valores informados!"
    }
}
BtVerificar.onclick = function(){
    VerificarMenorValor();
}
