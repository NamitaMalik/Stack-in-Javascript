class Node {
    constructor() {
        this.data = undefined;
        this.previous = undefined;
    }
}

class Stack {
    constructor() {
        this.root = undefined;
    }

    push(value) {
        let node = new Node();
        node.data = value;
        if (!this.root) {
            this.root = node;
            this.root.previous = null;
        } else {
            node.previous = this.root;
            this.root = node;
        }
    }

    pop() {
        if (this.root) {
            let temp = this.root;
            this.root = this.root.previous;
            return temp.data;
        }
    }

    print() {
        let temp = this.root;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.previous;
        }
        console.log(result.join(' => '));
    }
}

let stack = new Stack();
stack.push('l');
stack.push('a');
stack.push('l');
stack.push('a');
stack.print();
stack.pop();
stack.print();


// Creating Stack using array
function StackByArray() {
    let arr = [];
    this.push = push;
    this.pop = pop;
    this.print = print;

    function push(node) {
        arr.push(node)
    }

    function pop() {
        arr.pop();
    }

    function print() {
        console.log(arr.join(' => '))
    }
}

let stackByArr = new StackByArray();
stackByArr.push('l');
stackByArr.push('a');
stackByArr.push('l');
stackByArr.push('a');
stackByArr.print();
stackByArr.pop();
stackByArr.print();