let Cavalos = document.querySelector("#Cavalos");
let BtCalcular = document.querySelector("#BtCalcular");
let h2ResultadoCavalo = document.querySelector("#h2ResultadoCavalo");

function CalcularFerraduras(){

    let valor1 = Number(Cavalos.value);

    h2ResultadoCavalo.innerHTML =
    "O tanto de ferraduras necessarias são: "+ valor1 * 4 + "mil";
}

BtCalcular.onclick = function(){
    CalcularFerraduras();

}