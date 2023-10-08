identidades = document.querySelector('.identidades')
virarPaginaBotoes = document.querySelectorAll('.virar-pagina')


virarPaginaBotoes.forEach((virar) => { 
  virar.addEventListener('click', () => {
    identidades.classList.toggle('rotacionadas');
  })
})
