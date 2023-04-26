// var pessoa  = {
//   nome: 'Mateus',
//   idade: 20,
// }

// console.log(pessoa);

// var quadradro = {
//   lados: 4,
//   area: function(lado){
//     return lado * lado
//   },
//   perimetro: function(lado) {
//     return  this.lados * lado;
//   }
// }

// console.log(quadradro.area(5));
// console.log(quadradro.perimetro(5));

//=====================================================

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Mateus',
  sobrenome: 'Wenzler Pinto',
  idade: 20,
  mora: 'Ferraz',
  estado: 'SP',
  nomeCompleto: function(){
    return this.nome + ' ' + this.sobrenome;
  }
}
console.log(dadosPessoais.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  idadeDog: 10,
  cor: 'preto',
  latir(pessoa){
   if(pessoa === 'homem'){
    return 'Latir'
   }else{
    return 'Nada'
   }
  }
}

console.log(cachorro.latir('homem'));
console.log(cachorro.latir('mulher'));
