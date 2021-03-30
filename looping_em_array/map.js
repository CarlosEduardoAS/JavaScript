/* Similar ao forEach, com o diferencial de não mudar o array
principal, mas retornar um novo array com os resultados.*/

const temperaturaCelsius = [0, 22, 31, 40, 45, 12, 3]
const toFahreinheit = value => ((value * 9) / 5) + 32
const temperaturaFahreinheit = temperaturaCelsius.map(toFahreinheit)

console.log(temperaturaCelsius)
console.log(temperaturaFahreinheit)