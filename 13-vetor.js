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
console.log("primera posição", dino[0]);
console.log("primera posição", dino[2]);
//removendo o ultimo elemneto do vetor
dino.pop();
console.table(dino);

dino.splice(1, 3); //remove o elemento a partir do indice 1, conntando1.
console.table(dino);
console.log("");
console.log("----------continuação da aula------------");

var dino = [
  "triceratops",
  "tiranossauro rex",
  "pedrosauro",
  "cacosauro",
  "alabosauro",
  "manosauro",
  "feiosauro",
  "castelosauro",
];
console.table(dino);

var elementoProcurado = "pedrosauro";
var posição = dino.indexOF (elementoProcurado);
console.log("O " + elementoProcurado + " está no indice " + posição);

var elementoProcurado = "cacosauro";
var posição = dino.indexOF(elementoProcurado);
console.log("O " + elementoProcurado + " está no indice " + posição);

var elementoProcurado = "castelosauro";
var posição = dino.indexOF(elementoProcurado);
console.log("O" + elementoProcurado + " está no indice " + posição);

var copia1 = dino.splice(); // quando colocamos o slice dessa forma ele copia o item do vetor
console.log("vetor copia 1");
console.table(copia1);

var copia2 = dino.splice(1, 3); // quando colocamos o slice dessa forma ele copia o item do vetor
console.log("vetor copia 1");
console.table(copia2);
