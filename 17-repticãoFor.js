//laço de repetição for

// for (let n = 1; n <= 20; n++) {
//   if (n % 2 != 0);
//   {
//     console.log(n);
//   }
// }
// console.log("");
// console.log("escreva todos os numeros pares entre 1 e 20");
// console.log("---------------------------------------------");
// console.log("");
// //escrever para o usuario 1000x
// //escreva todos os n umeros de 1 a 20

// //escreva todos os numeros pares entre 1 e 20 com FOR
// for (let n = 2; n <= 20; n++) {
//   if (n % 2 == 0) console.log(n);
// }

// //dado um vetor com numeros 5,6,8,14,0,9,7,2.
// //calcule o exiba a somatoria de seus elementos
// //FOR

// //var = cria variavel global
// //const = cria constante, não muda
// //let = cria variavel funcional dentro de um grupo de codigos
// //tudo que esta dentro de chaves é um grupo de codigos

// const numeros = [5,6,8,14,0,9,7,2]
// var somar = 0

// for (let i = 0; i < numeros.length; i++){somar += numeros[i]}

// console.log(`a soma dos elementos do array é ${somar}`)

// //dado um vetor com numeros 5,6,8,14,0,9,7,2.
// //multiplique todos os seus elementos por 3 utilizando o loop FOR
// //em seguida, mostre o novo vetor.


// let n =[5,6,8,14,0,9,7,2.]
// console.table(n);

// for (let i = 0; i < n.length ; i++) {n [i]*= 3}
// console.table(n);



// //dada a matriz 2x3, escrever para o usuario todos os seus elementos 
// //com a respectiva posição da matriz 
// //[8,4,1]
// //[3,7,8]

var matriz = [[8,4,1],
             [3,7,8],];
             console.table(matriz)
              for (let linha = 0; linha < matriz.length;linha++) {for (let coluna = 0;coluna < matriz[0].length; coluna++)
                console.log(`matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`)
              }
