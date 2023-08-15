/*EJERCICIO 1*/
function fnParImpar(num){
    let pares = 0
    let impares = 0
    for (let i = 0; i<num; i++) {
        if(i % 2 == 0){
            pares +=  i
        }else{
            impares += i 
        }
    }

    let text = `Suma de numeros pares: ${pares} -- Suma de numeros Impares: ${impares}`
    return text
} 

fnParImpar(578934)

/* EJERCICIO 2 (PILAS CON CLASS) */

class node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

/* class stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        let newNode = new node(value)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
} */

class Stack{
    constructor(){
        this.items=[]
    }

    isEmpty(){//Verificar si esta vacio
        return this.items.length == 0;
    }

    size(){//Retornar tamaño
        return this.items.length;
    }

    clear(){
        this.items = []
    }

    push(item){//Ingresar un dato
        this.items.push(item);
    }

    pop(){//Sacar un dato
        if(this.isEmpty()){
            return "La pila esta vacia";
        }
        return this.items.pop();
    }
    peek(){//Revisar el primer dato encontrado
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        return this.items[this.items.length - 1];

    }

}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.clear()
console.log(stack.peek())

