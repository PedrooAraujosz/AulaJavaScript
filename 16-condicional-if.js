var anoNascimento = 2004;

if (anoNascimento > 2003) console.log(`A pessoa nacseu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nacseu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nacseu em 2003!`);

// sinaleiro
//condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000) console.log(`a pessoa nasceu depois de 2000`);
else console.log(`a pessoa nasceu antes de 2000`);
const login = "admin";
var senha = "123456";
//-----------------------------//
const LoginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados
//-----------------------------//
if (login == LoginUser && senha == senhaUser) console.log(`acesso permitido`);
console.log(`acesso negado`);

//condicional composto com if

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(Pare);
  else if (cor == "amarelo") console.log("Preste atenção");
  else if (cor == "verde") console.log("Siga");
  else
    console.log("Você informou cores diferentes de verde, amarelo ou vermelho");
}
sinaleiro("vinho");

var idade = 18;

if (idade <= 18) {
  console.log(`entrou no if...`);
  idade++, console.log("Incrementei a idade...");
  console.log(`a nova idade é ${idade}`);
  console.log(`agora estou saindo do bloco de codigos if`);
}

console.log(`terminei`);
//desvio condicional if incline (ternario)
//validaçao (alhgo == algo) ou (algo > algumacoisa)
// ? (if)
//se for verdadeiro
// : (else)
//se for falso
//testeDeValidção == teste ? "bla bla"

var preco =500
var resultado = preco <= 100 ? "ta barto" : "vish ta caro!"

console.log(resultado)
 