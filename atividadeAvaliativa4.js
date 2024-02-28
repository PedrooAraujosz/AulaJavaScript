var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz);
console.log("");

console.log(
  "O numeros em diagonais são:",
  matriz[0][0],
  matriz[1][1],
  matriz[2][2]
);
console.log(
  "O numeros em diagonais são:",
  matriz[0][2],
  matriz[1][1],
  matriz[2][0]
);
console.log(
  "O numeros em diagonais são:",
  matriz[2][0],
  matriz[1][1],
  matriz[0][2]
);

console.log("")
console.log("-----------------------")

var usuario = ["mel e olivia", 16, "verde", "melancia","rua irineu bagaiolo n 22", "Pedro Araujo "]

console.table(usuario);

console.log("olá",usuario[5], "seja bem vindo ao nosso sistema. seu endereço é",usuario[4],
 "e tem duas pets chmadas",usuario[0],
 "a sua idade é",usuario[1],"anos",
 "e gosta muito de",usuario[3], "sua cor favorita é",usuario[2] )

