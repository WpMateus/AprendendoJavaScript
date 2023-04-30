// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) =>{
 item.classList.add('ativo');
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) =>{
  item.classList.remove('ativo');
 })

 itensMenu[0].classList.add('ativo')


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach((img) =>{
 const verifica = img.hasAttribute('alt')
 console.log(img, verifica)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.google.com.br/')