// class Pessoa {
//   constructor(pNome, Pidade) {
//     this.nome = pNome;
//     this.idade = Pidade;
//   }
//   apresentarSe() {
//     console.log(`olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //criando objetos do "tipo" Pessoa
// var pessoa1 = new Pessoa("dienifer", 52);
// var p2 = new Pessoa("taldo pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();
// console.log("----------------------------------------");
// // Abstração -abstraindo as caracteristicas mais importantes e descarta os dethalhes não relevantes

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "cachorro");
// console.log(
//   `meu pet é um ${meuPet.tipo},chmando ${meuPet.nome} e tem ${meuPet.idade} anos`
// );

// meuPet.alimentar();

// // console.log(
// //   "--------------------------------herança--------------------------------"
// // }
// // );
// // class Animal {
// //     constructor(nome,idade,tipoAlimentação) {
// //     this.nome = nome
// //     this.idade = idade
// //     this.tipoAlimentação = tipoAlimentação
// //     }
// // }
// // alimentar ()
// // console.log(`barulho padrão de animal!`)

// // class cachorro extends Animal {
// //     alimentar() {
// //         console.log(``)
// //     }
// // }

// // console.log("--------------------Herança--------------------");
// // class Animal {
// //   constructor(nome, idade, tipoAlimentacao) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipoAlimentacao = tipoAlimentacao;
// //   }

// //   alimentar() {
// //     console.log(`O animal ${this.nome} foi alimentado!`);
// //   }

// //   emitirSom() {
// //     console.log(`Barulho padrão de animal!`);
// //   }
// // }

// // class Cachorro extends Animal {
// //   alimentar() {
// //     console.log(`O cachorro ${this.nome} foi alimentado`);
// //   }

// //   emitirSom() {
// //     console.log(`🐶 Au au! 🐶`);
// //   }
// // }
// // const pet = new Animal("Carlos", 10, "Comida espacial");
// // const meuCachorro = new Cachorro("Rex", 3, "Ração");

// // pet.alimentar();
// // pet.emitirSom();
// // console.log("");
// // meuCachorro.alimentar();
// // meuCachorro.emitirSom;

// // console.log("---------------------encapsulamento-----------------");
// // class Petzinho {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }
// //   getnome() {
// //     return this.nome;
// //   }
// //   setNome(novoNome) {
// //     this.nome = novoNome;
// //   }
// // }

// // const novoPetzinho = new Petzinho("Bob", 3, "cachorro");

// // console.log(novoPetzinho.getnome());
// // novoPetzinho.setNome("Rex");
// // console.log(novoPetzinho.getnome());

// console.log("--------------------Polimorfismo--------------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log("--------------------exemplos-----------------");
//criando uma classe Retangul
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }

  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novoLargura) {
    this.largura = novoLargura;
  }
}
//criando um objeto do tipo Retangulo

const ret1 = new Retangulo(10,15)

function displayRet(retengulo) {
  console.log(retengulo);
  console.table(retengulo);
  console.log(`comprimento = ${retengulo.comprimentro}`);
  console.log(`largura = ${retengulo.largura}`);
  console.log(`área = ${ retengulo.obterArea()}`);
  console.log(`perimetro = ${retengulo.obterPerimetro()}`);
}

displayRet(ret1);
ret1.setComprimento(20);
displayRet(ret1);
ret1.setLargura(20)
displayRet(ret1)