// function areaQuadrado(lado){
//   return lado * lado;
// }
// console.log(areaQuadrado(2));

// function pi() {
//   return 3.14;
// }
// var total = 5 * pi(); // 15.7
// console.log(total);


// function imc (peso, altura){
//   const imc = peso / (altura * altura);
//   return imc;
// }
// console.log(imc(75,1.75));

// function corFavorita(cor){
//   if(cor === 'azul'){
//     return 'Eu gosto do céu';
//   }else if (cor === 'verde'){
//     return 'Eu gosto de mato'
//   }else {
//     return 'Eu não gosto de cores';
//   }
// }

//  addEventListener('click', function(){console.log('Oi')});


// function imc2(peso, altura) {
//   const imc = peso / (altura ** 2);
//   console.log(imc);
// }

// imc2(80, 1.80); // retorna o imc
// console.log(imc2(20, 1.80)); // retorna o imc e undefined


// function terceiraIdade(idade){
// console.log(typeof idade);
// if(typeof idade !== 'number'){
//   return 'Por favor preencha um número'
// }
//   else if(idade >= 60){
//     return true;
//   }else{
//     return false
//   }
// }

// console.log(terceiraIdade(''));

// function faltaVisitar(paisesVisitados){
//   var totalPaises = 193;
//   return `falta visitar ${totalPaises - paisesVisitados} paises`;
// }


// var profissao = 'Designer';

// function dados() {
//   var nome = 'André';
//   var idade = 28;
//   function outrosDados() {
//     var endereco = 'Rio de Janeiro';
//     var idade = 29;
//     return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//   }
//   return outrosDados();
// }

// console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// //outrosDados(); // retorna um erro


//============================================



// Crie uma função para verificar se um valor é Truthy
function eTruthy(valor){
  return !!valor;
}
console.log(eTruthy(0));
console.log(eTruthy(10));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadradin(lado1, lado2, lado3, lado4){
  return lado1 + lado2 + lado3 + lado4;
}

console.log(quadradin(4,4,2,2))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(primeiroNome, segundoNome){
  const nomeCompleto = primeiroNome + ' ' + segundoNome;
  return nomeCompleto;
}
console.log(nomeCompleto('Mateus', 'Wenzler'));

// Crie uma função que verifica se um número é par
function verificando(numeroPar){
 return numeroPar % 2 === 0;
}
console.log(verificando(101));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(tipo){
  return typeof tipo
}
console.log(tipoDeDado(2));
console.log(tipoDeDado("Mateus"));
console.log(tipoDeDado(true));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Mateus Wenzler')
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
