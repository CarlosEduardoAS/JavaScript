/* Verifica se TODOS os itens de um array seguem uma condição */

const idadePessoas = [{
    nome: 'João',
    idade: 18
},
{
    nome: 'Maria',
    idade: 16
},
{
    nome: 'Julia',
    idade: 21
},
{
    nome: 'Tomas',
    idade: 32
}]

// Verificar se existem apenas adultos no array

const ehAdulto = valor => valor.idade >= 18
const somenteAdulto = idadePessoas.every(ehAdulto)
console.log(somenteAdulto)