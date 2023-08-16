/* PILA CON ARRAY */
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

const Stack = new Stack();

Stack.push(10);
Stack.push(20);
Stack.push(30);

console.log(Stack.peek())
Stack.pop()
console.log(Stack.peek())
Stack.pop()
console.log(Stack.peek())
Stack.clear()
console.log(Stack.peek())

/* PILA CON NODE */
class node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size===0;
    }

    push(value){
        let newNode = new node(value)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    pop(){
        if (!this.top){
            return "Is Empty"
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return this.top.value;
    }
}