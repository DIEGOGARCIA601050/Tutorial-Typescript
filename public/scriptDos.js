"use strict";
const { body } = document;
const paragraph = document.createElement('p');
paragraph.innerHTML = 'Using Typescript';
if (body) {
    body.appendChild(paragraph);
}
