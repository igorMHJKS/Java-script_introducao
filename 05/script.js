/*
  Solicitar o nome do aluno: ok
   e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
let student = prompt("Qual o nome do aluno")

let n1 = prompt("Qual a nota da primeira prova")
let n2 = prompt("Qual a nota da seggunda prova")
let n3 = prompt("Qual a nota da terceira prova")

let wlole = (Number(n1) + Number(n2) + Number(n3) / 3)

wlole = wlole.toFixed(2)

if (wlole > 6) {
  alert("Parabéms, " + student + " Você foi aprovado")
}else if(wlole < 3){
  alert("reprovado")
}else{
  alert("Estude mais")
}
