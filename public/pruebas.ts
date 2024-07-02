//*Funciones*
//void: no importa si devuelve algo
//never: never devuelve algo
function saludar(name:string) {
    console.log(`Hola ${name}`);
    
}
type Job = {
    puesto:string
    sueldo:number
}
saludar('pepito')
function InfoJob(job:Job) {
    console.log(`Trabajo de ${job.puesto} ofrece $${job.sueldo} de sueldo`);
    
}
InfoJob({puesto:'Backend', sueldo:1500})