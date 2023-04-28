// Retorne no console todas as imagens do site
const imagemSite = document.getElementsByTagName('img');
console.log(imagemSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const retornaImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(retornaImagem);

// Selecione todos os links internos (onde o href começa com #)
const selecionarLinks = document.querySelectorAll('[href^="#"]');
console.log(selecionarLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const selecionarDescricao = document.querySelector('.animais-descricao');

const selecionarH2 = selecionarDescricao.querySelector('H2')

console.log(selecionarH2.innerHTML);

// Selecione o último p do site
const ultimaTag = document.querySelector('.copy');
const ultimoPdoSite = ultimaTag.querySelector('p')

console.log(ultimoPdoSite.innerText);

// ouuu

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1])
