/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


const patients = [
    {
        name: "Igor",
        age: 19,
        weigth: 60,
        heigth: 180
    },

    {
        name: "Nice",
        age: 45,
        weigth: 80,
        heigth: 190
    },

    {
        name: "Marcos",
        age: 45,
        weigth: 90,
        heigth: 150
    },

    {
        name: "Ana",
        age: 22,
        weigth: 60,
        heigth: 170
    },
]
function IMC(weigth, heigth){
    return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}
function printIMC(patient){
  return `
  paciente ${patient.name} Possui o IMC de ${ IMC (patient.weigth, patient.heigth)}`
}

for(let partient of patients){
    let IMGmessage = printIMC(partient)
    alert(IMGmessage)
}