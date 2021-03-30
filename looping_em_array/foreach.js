// Faz parte do prototype de um array, e recebe uma função callback

const bolsaMulher = [
    'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de cabelo',
    'lenço de papel',
    'perfume',
    'alcool gel'
]

bolsaMulher.forEach((value, index) =>{
    console.log(`${index+1}. ${value}`)
})

/*Vantagens: Trabalhar dentro do contexto do próprio array.
Devantagens: Não tem retorno,
não é aconselhável usar em arrays muito grandes e
não possui break.*/