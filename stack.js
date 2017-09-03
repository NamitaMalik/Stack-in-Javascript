function Node() {
    var data;
    var previous;
    this.getData = getData;
    this.setData = setData;
    this.setPrevious = setPrevious;
    this.getPrevious = getPrevious;

    function setPrevious(p) {
        previous = p;
    }

    function getPrevious() {
        return previous;
    }

    function getData() {
        return data;
    }

    function setData(d) {
        data = d;
    }
}

function Stack() {
    var root;
    this.push = push;
    this.pop = pop;
    this.print = print;

    function push(value) {
        var node = new Node();
        node.setData(value);
        if (!root) {
            root = node;
            root.setPrevious(null);
        } else {
            node.setPrevious(root);
            root = node;
        }
    }

    function pop() {
        if (!root) {
            return;
        } else {
            root = root.getPrevious();
        }

    }

    function print() {
        var temp = root;
        var result = [];
        while (temp) {
            result.push(temp.getData());
            temp = temp.getPrevious();
        }
        console.log(result.join(' => '));
    }
}

var stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.print();
stack.pop();
stack.print();