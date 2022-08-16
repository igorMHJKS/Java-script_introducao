/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
        name: "Igor",
        age: 19,
        weigth: 60,
        heigth: 1.60
    },

    {
        name: "Nice",
        age: 45,
        weigth: 80,
        heigth: 1.60
    },

    {
        name: "Marcos",
        age: 45,
        weigth: 90,
        heigth: 1.60
    },

    {
        name: "Ana",
        age: 22,
        weigth: 60,
        heigth: 1.60
    },
]

let parcientName = []

for(let partient of patients){
    parcientName.push(partient.name)
}

alert(parcientName)