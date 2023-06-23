let InputCodigo = document.querySelector("#InputCodigo");
let BtVerificar = document.querySelector("#BtVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function RetorneProduto()
{
    let codigo = String(InputCodigo.value);

    let produto;

    if(codigo === "001" )
    {
        produto = "Parafuso";
    }
    else if(codigo === "002")
    {
        produto = "Porca";
    }
    else if( codigo === "003")
    {
        produto = "Prego";
    }
    else 
    {
        produto = "diversos";
    }

    h3Resultado.textContent = produto;
}

BtVerificar.onclick = function(){
    RetorneProduto();
}
