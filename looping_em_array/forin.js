const familia = [{
    nome: 'Carlos',
    papel: 'pai'
},
{
    nome: 'Renata',
    papel: 'mãe'
},
{
    nome: 'Carlos',
    papel: 'filho'
},
{
    nome: 'Amanda',
    papel: 'filha'
}]

for (let pessoa in familia) {
    console.log(familia[pessoa])
}