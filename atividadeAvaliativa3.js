var frutas = ["banana", "maçã", "pera", "uva", "morango"];
console.table(frutas);

frutas.push("tangerina");
console.table(frutas);

frutas.unshift("goiaba");
console.table(frutas);

console.log(frutas[5]);
frutas.splice[(1, 4)];
console.table(frutas);

var proc = frutas.indexOf("uva");
console.log(proc);
frutas.splice(proc, 1);
console.table(frutas);

var numero = [7, 12, 11, 10, 9];
console.log("o 3 elemento é",numero[3]);
console.table(numero);
var copia1 = numero.slice();
console.table(copia1);

copia1[0] = numero[0] * 2;

console.log(copia1[0]);

copia1[1] = numero[1] * 2;

console.log(copia1[1]);

copia1[2] = numero[2] * 2;

console.log(copia1[2]);

copia1[3] = numero[3] * 2;

console.log(copia1[3]);

copia1[4] = numero[4] * 2;

console.log(copia1[4]);

