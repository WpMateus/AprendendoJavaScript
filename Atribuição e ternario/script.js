var numero = 20;
var numero2= 10;
numero += numero2; // numero = numero + 10;
numero -= numero2; // numero = numero - 10;
numero *= numero2; // numero = numero * 10;
numero /= numero2; // numero = numero / 10;
numero %= numero2; // numero = numero % 10;
numero **= numero2; // numero = numero ** 10;

console.log(numero)

var idade = 20
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

var possuiFaculdade = true;
if(possuiFaculdade)
console.log('Sim Possui');
else
console.log('Não possui')


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.


var possuiCarro = false;
var possuiCasa = true;
var darCredito;
darCredito = possuiCarro && possuiCasa;
if(darCredito)
console.log('Crédito aprovado');
else
console.log('Crédito negado');
