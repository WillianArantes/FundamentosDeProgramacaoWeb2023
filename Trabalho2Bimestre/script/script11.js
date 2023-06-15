let inputNumero = document.querySelector("#inputNumero");
let BtCalcular = document.querySelector("#BtCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function Calcular(){

    let Numero= Number(inputNumero.value);

    let Unidade = Numero;
    
    if (Unidade >= 100)
    {
        let Centena = Unidade / 100;
        let Dezena = Unidade /10;

        h2Resultado.innerHTML = "Centena: " + Centena + "<br>" + "Dezena: " + Dezena + "<br>" + "Unidade: " + Unidade;        
    }else if(Unidade < 100 && Unidade >= 10)
    {
        let Dezena = Unidade /10;

        h2Resultado.innerHTML = "Não contem centena" + "<br>" + "Dezena: " + Dezena + "<br>" + "Unidade: " + Unidade;
    }else if(Unidade < 10)
    {
        h2Resultado.innerHTML = "Não contem centena" + "<br>" + "Não contem dezena" + "<br>" + "Unidade: " + Unidade;
    }else
    {
        h2Resultado.innerHTML = "Insira um valor novamente!"
    }
    
    
    
}

BtCalcular.onclick = function(){
    Calcular();
}