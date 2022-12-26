const nome = "Herus";
let nome2 = "";
let pessoaDefault = {
    nome: "Herus",
    idade: "22",
    trabalho: "Estudante" 
}

let nomes = ["Herus", "Amanda","Eduardo"]
let pessoas = [
    {
        nome: "Herus",
        idade: "22",
        trabalho: "Estudante"  
    },
    {
        nome: "Amanda",
        idade: "27",
        trabalho: "Engenheira"
    },
    {
        nome: "Eduardo",
        idade: "19",
        trabalho: "Caixa"
    }
]

function alterarnome() {
    nome2 = "Isabelle"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Caroline",
    idade: "22",
    trabalho: "Analista"
});

imprimirPessoas();
