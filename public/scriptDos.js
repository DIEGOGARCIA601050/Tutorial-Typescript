"use strict";
const { body } = document;
const paragraph = document.createElement('p');
paragraph.innerHTML = 'Using Typescript';
if (body) {
    body.appendChild(paragraph);
}
class Person {
    constructor(Name, Age, Works) {
        this.Name = Name;
        this.Age = Age;
        this.Works = Works;
    }
    saludar() {
        console.log(`Hola ${this.Name}`);
    }
    setCurp(str) {
        this.curp = str;
    }
    getCurp() {
        return this.curp;
    }
    random() {
        return `La curp de ${this.Name} es ${this.curp}`;
    }
}
const person = new Person('Maria Lopez', 26, ['teacher', 'scientist']);
console.log(person);
