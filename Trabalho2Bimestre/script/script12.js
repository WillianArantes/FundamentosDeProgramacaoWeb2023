let inputSalario = document.querySelector("#inputSalario");
let BtCalcular = document.querySelector("#BtCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function Calcular(){

    let Salario= Number(inputSalario.value);

    let AumentoSlr = Salario + (Salario * (15/100));
    let DescontoSlr = AumentoSlr - (AumentoSlr * (8/100));

    h2Resultado.innerHTML = "Salário após aumento: " + AumentoSlr + "<br>" + "Salario após desconto de 8%: " + DescontoSlr;
}

BtCalcular.onclick = function(){
    Calcular();
}