const numero = [1, 2, 3, 4, 5];
console.log(numero);
console.log(numero[4]);

numero[2] = 6;
console.log(numero);
console.log(numero[2]);

var dino = ["tiranossauro rex ", "estergosauro", "velocirrapitor"];
console.log(dino);
console.log(dino[0]);
console.log("");
console.table(dino); //cria tabela com os itens do array
console.log("o vetor tem ", dino.length, "elemntos!"); //mostrando quantidade de itens

//adcionando elementos ao vetor existente
dino.push("brontosauro"); //array.push adciona novos elemnetos no fim do vetor
dino.unshift("mamute");
console.table(dino);
dino[3] = "titanossauro";
console.table(dino);

//obtendo um elemento com base no seu indice
console.log("primera posição",dino[0])
console.log("primera posição",dino[2])
//removendo o ultimo elemneto do vetor
dino.pop()
console.table(dino);

dino.splice(1,3) //remove o elemento a partir do indice 1, conntando1.
console.table(dino);




