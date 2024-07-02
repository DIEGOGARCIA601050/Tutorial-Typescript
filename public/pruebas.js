"use strict";
//*Funciones*
//void: no importa si devuelve algo
//never: never devuelve algo
function saludar(name) {
    console.log(`Hola ${name}`);
}
saludar('pepito');
function InfoJob({ puesto, sueldo }) {
    console.log(`Trabajo de ${puesto} ofrece $${sueldo} de sueldo`);
}
InfoJob({ puesto: 'Backend', sueldo: 1500 });
