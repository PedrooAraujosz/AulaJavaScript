// let contador = 0;
// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }

// var x = 10;
// while (x >= 10) {
//   console.log(`entrei no laço while...`);
//   x = 0;
// }

// console.log(`terminei`);

// let countdown = 5;
// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }

// console.log("lancamento");

// //estourando o limite do cartão- versão while

// let limite = 500;
// let fatura = 0;

// while (fatura <= limite) {
//   let gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(`gastei R$ ${gasto.toFixed(2)}----
//     fatura: R$ ${fatura.toFixed(2)}`);
//     fatura > limite
//     && console.log(`estourou o limite do cartão`)
//   }

// //jogo de cara ou coroa melhor de 3 tentativas
// repetição - 3
// variavel cara ou coroa - aleatoria - 50%
// placar - vitorias ou derrotas

var rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "cara" : "coroa";
  escolhaJogador = Math.random() >= 0.5 ? "cara" : "coroa";

  if (escolhaJogador == "cara") {
    console.log(`Parabens, você ganhou!`);
    vitoria++;
  } else {
    console.log(`Que pena, você perdeu`);
    derrota++;
  }
  console.log(moeda);
  rodada++;
}

console.log(`-------------------------------------`);
console.log("               placar                 ");
console.log(`-------------------------------------`);
console.log(vitoria > derrota ?"💵você ganhou🎉🥳" :
"💸você perdeu 😨" );
console.log(`derrotas: ${derrota}`);
console.log(`-------------------------------------`);
