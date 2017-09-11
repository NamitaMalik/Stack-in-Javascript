class Node {
    constructor(){
        this.data = undefined;
        this.previous = undefined;
    }
}

class Stack{
    constructor(){
        this.root = undefined;
        this.length = 0;
    }

    push(value) {
        let node = new Node();
        node.data= value;
        if (!this.root) {
            this.root = node;
            this.root.previous = null;
        } else {
            node.previous = this.root;
            this.root = node;
        }
        this.length++;
    }

    pop() {
        if (!this.root) {
        } else {
            let temp = this.root;
            this.root = this.root.previous;
            this.length--;
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

var stack = new Stack();
stack.push('b');
stack.push('a');
stack.push('k');
stack.push('e');
stack.print();
stack.pop();
stack.print();