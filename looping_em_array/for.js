const bolsaMulher = [
    'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de cabelo',
    'lenço de papel',
    'perfume',
    'alcool gel'
]

for (let index = 0; index < bolsaMulher.length; index++) {
    console.log(`${index+1}. ${bolsaMulher[index]}`)
    // exemplo de break
    if (bolsaMulher[index] == 'dinheiro') break
}