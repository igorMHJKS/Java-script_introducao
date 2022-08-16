/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/


let items = [];

for(let item = 0; item < 10; item++){
    let listName = prompt("Digite o produto " + (item + 1))

    items[item] = listName;

}
alert(items)