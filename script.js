/*
const ano = prompt('Em qual ano você nasceu? ')
const nome = prompt('E qual é o seu nome? ')

const anoAtual = '2020'
    
dados = anoAtual - ano;     

alert(`Olá! Seu nome é ${nome} e você tem ${dados} anos.`);
Atividade em casa 7 

*/

const ano = parseInt(prompt('Em qual ano você nasceu? '))
const nome = prompt('E qual é o seu nome? ')

const anoAtual = '2020'
    
dados = anoAtual - ano;    
function nomeeidade (nome, dados) {
    alert(`Olá! Seu nome é ${nome} e você tem ${dados} anos.`);
}
nomeeidade (nome, dados);
