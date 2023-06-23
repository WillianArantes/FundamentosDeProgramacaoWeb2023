//criando variaveis//
let h1nomesobrenome = document.querySelector('#h1nomesobrenome');// "document.querySelector" serve para puxar propriedades do elemento do html "h1" e atribuir a esta variavel ou só manipular". 
//variavel criada para puxar propriedades do elemento "h1".
let campoTexto = document.querySelector('#campoTexto');
let campoTexto2 = document.querySelector('#campoTexto2');
let btExibir = document.querySelector('#btExibir');


function exibirNomeSobrenome(){
   let nome = String(campoTexto.value);
   let sobrenome = String(campoTexto2.value);

   h1nomesobrenome.innerHTML += nome+' '+sobrenome + "<br>"; //com  innerHTML consigo colocar elementos do html
}

btExibir.onclick = function (){
   exibirNomeSobrenome();
 }
 btExibir.onclick = function (){
   exibirNomeSobrenome();
 }