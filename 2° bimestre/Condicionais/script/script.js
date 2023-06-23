let input1 = document.querySelector("#input1");
let btExibir = document.querySelector("#btExibir");
let h1Exibicao = document.querySelector("#h1Exibicao");


function verificar(){
    let media = Number(input1.value);

    if(media >= 60){
        alert(" O aluno esta APROVADO");
    }
    else{
        alert("O aluno está REPROVADO");
    }
}

btExibir.onclick = function(){
    verificar();
}