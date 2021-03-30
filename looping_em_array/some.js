/* Verifica se ALGUM item de um array segue uma condição */

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

// Verifica se há algum adulto no array

const ehAdulto = valor => valor.idade >= 18
const temAdulto = idadePessoas.some(ehAdulto)
console.log(temAdulto)