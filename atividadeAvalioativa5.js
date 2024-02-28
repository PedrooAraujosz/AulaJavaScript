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
