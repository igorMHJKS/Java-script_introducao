/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = prompt("Digite o primeiro númeoro:")
let numberTwo = prompt("Digite o segundo númeoro:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const res = numberOne % numberTwo

alert("soma " + sum)
alert("subtração " + mul)
alert("multiplicação " + sub)
alert("divisão " + div)
alert("resto de divisão " + res)




