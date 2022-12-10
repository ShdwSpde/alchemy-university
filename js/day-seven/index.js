// Recursion

// ALWAYS START WITH THE BASE CASE

function go(n) {
    if(n === 0) {
        // base case, exit recursion
        return;
    }
    // change our argument 
    go(n - 1);
}

// call the function
go(5);


function factorial(n) {
    if (n === 1){
        return 1
    } else {
        return (n * factorial(n-1))
    }
}


function walk(node) {
    if(node.next === undefined){
        return node
    }else {
        return walk(node.next)
    }
    
}

// STACKS

/* 

In a stack, you push a new element on to the top of the data structure. This element then becomes the new top element of the stack. When you pop an element from the stack, the top element is removed from the stack.

For example:

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
Notice how the elements get popped off in reverse order in a stack!
*/


//

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if(this.items.length >= MAX_STACK_SIZE){
            throw new Error('Stack Overflow')
        } else{
            this.items.push(item)
        }
    }
    pop() {
        if(this.items.length === 0){
            throw new Error('Stack Underflow')
        } else{
        return this.items.pop()
        }
    }
    isEmpty() {
       return this.items.length === 0 ? true:false;
    }
    peek() {
        return this.items[this.items.length - 1]
    }
}

const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack()
        this.undos = new Stack()
    }
    addOperation(operation) {
        this.operations.push(operation)
    }

    undo() {
        const operation = this.operations.pop()
        this.undos.push(operation)
    }

    redo() {
        const operation = this.undos.pop()
        this.operations.push(operation)
    }

    redoAll() {
        for(let i = 0; i < this.undos.length; i++){
           this.operations.redo()
        }
        
    }
}
