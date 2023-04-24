'use strict' //Serve para o JavaScript verificar se as variáveis estão sendo declaradas corretamente

// function mostrarCarro() {
//   var carro = 'Fusca'; // Caso declarado fora, é possível acessar onde da o erro
//   console.log(carro);
// }

// mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined


const semana = 'sexta';


console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro'
}

data.ano = 2019;
data.dia = 25;

// ====================================================================

// Por qual motivo o código abaixo retorna com erros?
//Porque é um elemento de bloco e o const e o let não é possível chamar eles fora do elemento
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}
// console.log(cor, marca, portas);


// Como corrigir o erro abaixo?

const dois = 2; //tirado o const de dentro da função somarDois
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));


// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
