const {body} = document
const paragraph = document.createElement('p')
paragraph.innerHTML='Using Typescript'
if (body) {
    body.appendChild(paragraph)
}

class Person <T> {
    Name:string
    Age:number
    Works:string[]
    private curp?: T
    constructor(Name:string, Age:number, Works:string[]) {
        this.Name = Name
        this.Age = Age
        this.Works = Works
    }
    saludar():void {
        console.log(`Hola ${this.Name}`);
    }
    setCurp(str:T):void {
        this.curp = str
    }
    getCurp(){
        return this.curp
    }
    public random(): string {
        return `La curp de ${this.Name} es ${this.curp}`
    }
}
const person = new Person<string>('Maria Lopez',26 ,['teacher','scientist'])
console.log(person);