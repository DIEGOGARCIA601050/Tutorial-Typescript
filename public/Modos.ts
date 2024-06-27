const modosButton = document.getElementById('Modos') as HTMLButtonElement;

modosButton.addEventListener('click', () => {
  if (modosButton.classList.contains('dark')) {
    modosButton.classList.remove('dark')
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
    modosButton.innerText = 'Modo claro';
  } else {
    modosButton.classList.add('dark')
    body.style.color = 'black';
    body.style.backgroundColor = 'white';
    modosButton.innerText = 'Modo oscuro';
  }
});
