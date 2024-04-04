const author: string = 'Diego García Roldán'
const date: string = Date()
const Body: HTMLElement = document.body
const paragraphAutor: HTMLElement = document.createElement('p')
paragraphAutor.innerHTML=`Hecho por ${author} en la fecha de ${date}`
Body.appendChild(paragraphAutor)