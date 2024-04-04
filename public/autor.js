"use strict";
const author = 'Diego García Roldán';
const date = Date();
const Body = document.body;
const paragraphAutor = document.createElement('p');
paragraphAutor.innerHTML = `Hecho por ${author} en la fecha de ${date}`;
Body.appendChild(paragraphAutor);
