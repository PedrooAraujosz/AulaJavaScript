function saudacao(nome) {
  console.log(`ola,${nome}, seja bem vindo!`);
}

saudacao("solobogala");
saudacao("tamashira")
saudacao("kokomoro")

//criando uma função de soma de dois valores, retornando um resultado
function somar (valor1,valor2) {return valor1 + valor2}

console.log(`5 + 3 = ${somar(5,3)}`)

console.log(`12 + 8 = ${somar(12,8)}`)

console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`)

var v1 = 9
var v2 = 6

console.log(`v1 + v2 = ${somar(v1, v2)}`)

//criando uma função que calcula a retorna o descono em uma venda 

function desconto(valorVenda,desc){return (valorVenda * desc) / 100; }
var tp = 1000
var td = desconto(tp,5)

console.log(`----------------------`)
console.log(`total do pedido: R$${tp}`)
console.log(`total do descontos R$${td}`)
console.log(`valor final da compra R$${tp - td}`)
console.log(`----------------------`)
//criando uma funçao que apresenta uma pessoa 

function apresentaPessoa (nome,idade,cidade){console.log(`apresenta a voces:${nome}, que tem ${idade} e mora em ${cidade}!`)}
apresentaPessoa("yudi", 35, "toquio")
