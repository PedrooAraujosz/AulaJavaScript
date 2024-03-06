//supondo que a população de um pais a seja de a habitantes com uma
//taxa anual de crescimento de 3% e que a população de um pais B seja
//de B habitantes, com uma taxa anual de crescimento de 1,5% , fazer um
//algoritimo que calcule e escreva o numero de anos necessario para que
//a população do pais A ultrapasse ou iguale a população so pais b
// mantidas essas taxas de crescimento

// var anos = 0;
// var pa = 100003;
// var pb = 300004;

// console.log(Math.round(pa));
// while (pa < pb) {
//   anos++;
//   pa *= 1.03;
//   pb *= 1.015;
// }

// console.log(`A população A (${Math.round(pa)}) irá passar a população B
// (${Math.round(pa)}) em ${anos} Anos!`);
console.log("=====================");

//criar um "jogo da velha" que mostre as informações dentro da imagem abaixo.
//inserir as informações de forma randomica.informar ao final quem ganhou x ou O.
console.log("JOGO DA VELHINHA");
// var vitoria = 0
// var derrota = 0

// while (vitoria & derrota <= 3) {
//     vitoria = Math.random() >= 0.5 ? "bolinha" : "xizinho";
//     derrota = Math.random() >= 0.5 ? "xizinho" : "bolinha";}

// console.log("___|___|___");
// console.log("___|___|___");
// console.log("   |   |   ");

// jogadorx =
// jogadorO =

// function tabuleiro = [
//     ("","","")
//     ("","","")
//     ("","","")
// ]

// const tabuleiro = [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   [" ", " ", " "],
// ];
// let jogadorX = "X";
// let jogadorO = "O";

// function jogar(jogador) {
//   let linha = Math.floor(Math.random() * 3);
//   let coluna = Math.floor(Math.random() * 3);
//   if (tabuleiro[linha][coluna] == " ") tabuleiro[linha][coluna] = jogador;
//   else {
//     jogar(jogador);
//   }
// }

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);

console.table(tabuleiro);

function verificaVencedor (){
    //   $([0] = [0]);
    //   $([1] = [1]);
    //   $([2] = [2]);
console.table(tabuleiro);
}
// if $([0] = [0]);
// if $([1] = [1]);
// if $([2] = [2]);



// console.log(`-------------------------------------`);
// console.log("               placar                 ");
// console.log(`-------------------------------------`);
// console.log( > derrota ?"💵você ganhou🎉🥳" :
// "💸você perdeu 😨" );
// console.log(`derrotas: ${derrota}`);
// console.log(`-------------------------------------`);
