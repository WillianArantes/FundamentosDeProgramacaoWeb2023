let InputPessoas = document.querySelector("#InputPessoas");
let BtVerificar = document.querySelector("#BtVerificar");
let h3Resultado = document.querySelector("#h3Resultado");


function Calcular()
{
    let QtdPessoas = Number(InputPessoas.value);

    let QtdDeOvos = 2 * QtdPessoas;
    let QtdDeQueijo = 50 * QtdPessoas;

    h3Resultado.innerHTML = "Quantidade de Ovos será:" + QtdDeOvos + "<br>"
    + "Quantidade de Queijo será:" + QtdDeQueijo;
}

BtVerificar.onclick = function()
{
    Calcular();
}