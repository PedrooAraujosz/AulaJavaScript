class aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.curso = curso;
  }
  calcularidade() {
    return 2024 - this.anoNascimento;
  }
  apresentar() {
    console.log(
      `Olá meu nome é ${this.nome}, matricula ${
        this.ra
      } e tenho ${this.calcularidade()}. Estou cursando o ${this.curso}`
    );
  }
}
const aluno1 = new aluno(4448, "Pedro", 2007, "Desenvolvimento de Sistemas");
aluno1.apresentar();

console.log(`_________________`);

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  setpreco(novoPreco) {
    this.preco = novoPreco;
  }
}

const sorvete1 = new Sorvete("morango", 7, "tamanho G");
console.log(
  ` sorvete de ${sorvete1.sabor} ${sorvete1.tamanho} custa ${sorvete1.preco} reais`
);

console.log("--------------------------");

sorvete1.setpreco(10.51);
console.log(
  ` sorvete de ${sorvete1.sabor} ${sorvete1.tamanho}  agora está custando ${sorvete1.preco} reais`
);

console.log("-------------------------");

const sorvete2 = new Sorvete("chocolate", 5.5, "tamanho  ");
console.log(
  `sorvete de ${sorvete2.sabor} ${sorvete2.tamanho}P custa ${sorvete2.preco} reais`
);

console.log("-------------------------");

const sorvete3 = new Sorvete("melancia", 7.5, "tamanho M");
console.log(
  `sorvete de ${sorvete3.sabor} ${sorvete2.tamanho}M custa ${sorvete3.preco} reais`
);

console.log(
  "------------------------------------------nova atividade-------------------------------------------------"
);
console.log("");
console.log("");
//1.Comparação de strings (sem case sensitive):
//Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).

//2.Extrair números de uma string:
//Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.

//3.Inverter a ordem das palavras em uma frase:
//Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertida.

function compararStrings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

// Exemplos de uso
console.log(compararStrings("Olá", "olá")); // true
console.log(compararStrings("mundo", "Mundo")); // true
console.log(compararStrings("JavaScript", "javascript")); // true
console.log("")

function extrairNumeros(str) {
  const numeros = str.match(/\d+/g);
  return numeros ? numeros : [];
}console.log("")

// Exemplos de uso
console.log(extrairNumeros("Olá, mundo 123!")); // ["123"]
console.log(extrairNumeros("O preço é R$ 25,00")); // ["25", "00"]
console.log(extrairNumeros("Endereço: Av. Brasil, 10")); // ["10"]
console.log("")

function inverterFrase(frase) {
  const palavras = frase.split(" ");
  palavras.reverse();
  return palavras.join(" ");
}
console.log("")

console.log(inverterFrase("Olá, mundo!"));
console.log(inverterFrase("Esta é uma frase de exemplo"));
console.log(inverterFrase("JavaScript é uma linguagem de programação"));
