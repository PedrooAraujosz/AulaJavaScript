//crie uma função que recebe como parametro o ano de nacsimento de uma pessoa a retorne sua idade
//crie uma funçao que receba a quantidade de combustivel de um carro e retorne quantos kms ele pode
//viajar com esse combustivel. considere que o veiculo faz uma media de 12kms/L

function idade(Ano, Idade) {
  return Ano - Idade;
}

console.log(`2024 - 2007 = ${idade(2024, 2007)}`);

function quantidadeDeCombustivel(qt, kms) {
  return qt * kms;
}
var lts = 25;
var km = 12;

console.log(
  `Tenho ${lts}lts, meu carro faz ${km} km/l percorrerei ${quantidadeDeCombustivel(
    lts,
    km
  )}kms`
);
console.log("-------------------");
// var idade = 16;
// if (login == LoginUser && idade == senhaUser) console.log(`não é obrigatorio`);
// console.log(`não vota`);

// function idadeDEVotacao (Podevotar,NaoPodeVotar,votoobrigatorio,votoNaoObrigatorio) {if idade}
// var idade = 16;
// function votar(idade) {
//     if (idade >= 16) console.log(`pode votar`);
//   if (idade < 16) console.log(`não pode vota`);
//   else

//   console.log(`vota`);
// }
// votar("idade");

var idade = 16;

function votar(idade) {
  if (idade >= 16) console.log("Com sua Idade Você ja pode votar");
  else console.log("Você nao tem idade para Votar");
}
votar(idade);

function votacao(idade) {}
switch (true) {
  case idade < 16:
    console.log(`voce pode votar `);
    break;
  case idade < 16 && idade < 18:
    console.log(`voce pode votar,mas não é obrigatorio `);
    break;

  default:
    console.log(`você pode votar`);
    break;
}
