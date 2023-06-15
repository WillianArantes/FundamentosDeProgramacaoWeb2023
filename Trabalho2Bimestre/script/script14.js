let Conta = document.querySelector("#Conta");
let BtCalculoConta = document.querySelector("#BtCalculoConta");
let ResultadoConta = document.querySelector("#ResultadoConta");

function pagarconta (){

    let ValorConta = Number(Conta.value);
    let calculo1 = (ValorConta / 3);
    let calculo2 = (parseInt(calculo1));
    let calculo3 = (ValorConta - calculo2) - calculo2;

    ResultadoConta.innerHTML = 
    "Carlos pagará, " + calculo2+ "R$" + "<br>" +
    "André pagará, " + calculo2+ "R$" + "<br>"+
    "Felipe pagará o restante, "+ calculo3 + " R$";
}

BtCalculoConta.onclick = function(){
    pagarconta();
}