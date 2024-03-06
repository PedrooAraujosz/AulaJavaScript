//operadores de incremento e decremento
var idade = 16;
console.log(idade);

idade++; //idade = idade + 1
console.log(idade);

idade--; //idade = idade - 1
console.log(idade);

console.log("-----------------------------");

var novaIdade = idade++;
console.log("idade:", idade, "| nova idade:", novaIdade);

var novaIdade = idade++;
console.log("idade:", idade, "| nova idade:", novaIdade);

//incremento e decremento com valor especifico
//operadores de atribuação aritimetico
novaIdade += 10++;
console.log(novaIdade);


novaIdade -= 20;
console.log(novaIdade);
