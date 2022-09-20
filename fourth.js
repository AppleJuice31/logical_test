class Stack {
    constructor() {
        this.stackElements = []
    }

    showElements() {
        while (!stack.isEmpty()) {
            console.log(stack.remove() + " ");
        }
    }

    add(element) {
        return this.stackElements.push(element);
    }

    remove() {
        if (this.stackElements.length == 0) {
            console.log("underflow");
        }
        return this.stackElements.pop();
    }

    top() {
        return this.stackElements[this.stackElements.length - 1];
    }

    isEmpty() {
        return this.stackElements.length == 0;
    }

    size() {
        return this.stackElements.length
    }
}

let stack = new Stack();
stack.add(12);
stack.add(2);
stack.add(4);
stack.add(7);
stack.add(8);
stack.showElements()
duplicateStack(stack)
removeOddnumbers(stack)
stack.showElements()
stack.remove()
stack.remove()
console.log(stack.stackElements);
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.size());


function removeOddnumbers(stack) {
    let temp = new Stack()
    while (!stack.isEmpty()) {
        let element = stack.remove();
        if (element % 2 == 0) {
            temp.add(element)
        }
    }

    while (!temp.isEmpty()) {
        stack.add(temp.remove())
    }
    stack.showElements()
}


function duplicateStack(stack) {
    let duplicateStack = new Stack();
    for (let i = 0; i < stack.size(); i++) {
        duplicateStack.add(stack.top()+" ")
    }
    duplicateStack.showElements();
}
