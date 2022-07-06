const funcionario = {
    nome: "Jhon", 
    code: 1234
}

//Questão 2

enum Trabalho {
    Atriz, 
    Padeiro
}

interface Pessoa {
    nome: string, 
    idade: number, 
    profissao: Trabalho
}

let pessoa1: Pessoa = {
    nome: "Jhon", 
    idade: 29,
    profissao: Trabalho.Padeiro
};


let pessoa2: Pessoa = {
    nome: "Bianca", 
    idade: 30,
    profissao: Trabalho.Atriz
}

let pessoa3: Pessoa = {
   nome: "Larissa",
   idade: 18,
   profissao: Trabalho.Atriz
};

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 25,
    profissao: Trabalho.Padeiro
}

// questão 3 

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;

function somarAoSaldo(soma: number) {
    if(campoSaldo){
        saldoTotal+=soma;
        campoSaldo.innerHTML = saldoTotal.toString();
    }       
}

function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0; 
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
