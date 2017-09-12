# Stack-in-Javascript

We had discussed about [Linked List in Javascript](https://namitamalik.github.io/Linked-list-in-Javascript/) in the previous blog. In this post
we would be discussing about another data structure i.e. **Stack**.

A **Stack** can logically be thought of as a real-life stack/pile where insertion/removal take place from one end. Stack are LIFO i.e. 
Last In First Out which means that last inserted element is removed first.

**Stack** basically has two methods:
1. **push()** - For insertion
2. **pop()** - For deletion

Let's see some action now.

We are taking a **Node** class, as given below:

```
class Node {
    constructor(){
        this.data = undefined;
        this.previous = undefined;
    }
}
```

Now, let's move on to the **Stack** class, which will have **push()** and **pop()** methods.

```
class Stack{
    constructor(){
        this.root = undefined;
    }

    push() {
    //To Be Implemented
    }

    pop() {
    //To Be Implemented
    }
}
```

1. **push()**

**push()** method does the following in order to insert a node to the Stack:

1. Initializes the stack with root node when the first node is being inserted.
2. When a new insertion happens, the new node is assigned to the root node and the previous root node starts pointing to the new root node.

Hence our pretty simple **push()** looks like this:
 
 ```
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
 }
 ```

2. **pop()**

**pop()** method does the following in order to delete a node from the Stack:

1. If there is no root node, that means that stack is empty and nothing needs to be done.
2. In case there are node(s) in stack, then the previous node of the current root node can be assigned to the root and the old root node would now be up for garbage collectiom.

Here is the **pop()** method:

```
pop() {
    if (!this.root) {
    } else {
        let temp = this.root;
        this.root = this.root.previous;
        return temp.data;
    }
}
```

Now, our implementation for **Stack** is complete, but we still need a **print()** method, let's quickly implement it:

```
print() {
    let temp = this.root;
    let result = [];
    while (temp) {
        result.push(temp.data);
        temp = temp.previous;
    }
    console.log(result.join(' => '));
}
```

Here is how the complete code would look like:

```
class Node {
    constructor(){
        this.data = undefined;
        this.previous = undefined;
    }
}

class Stack{
    constructor(){
        this.root = undefined;
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
    }

    pop() {
        if (!this.root) {
        } else {
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
```

Let's check if the code works:

```
var stack = new Stack();
stack.push('l');
stack.push('a');
stack.push('l');
stack.push('a');
stack.print(); // a => l => a => l
stack.pop();
stack.print(); //l => a => l
```

Now, many of you might have a thought when in Javascript, we have a **Array** that has **push** and **pop** methods, why to do so much of hard work.

Well, in **Javascript** even though we have **push** and **pop** methods, we have other methods as well like **shift()**, **unshift()**, **join()**, hence it is not purely a stack.
So, let's create a stack using array. The idea is to have an array assigned to a private variable with only **push** and **pop** methods exposed:

```
function StackByArray() {
    var arr = [];

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
```

Let's check the code:

```
function StackByArray() {
    var arr = [];
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
var stackByArr = new StackByArray();
stackByArr.push('l');
stackByArr.push('a');
stackByArr.push('l');
stackByArr.push('a');
stackByArr.print(); //l => a => l => a
stackByArr.pop();
stackByArr.print(); //l => a => l
```

One can use any of the above mentioned implementations. 

A very common example where **Stack** data structure is used is the undo/redo mechanism. In this case all text changes are kept in the stack. Another common example is the **Back** button
of your browser. When a user navigates between the pages, navigated urls are stored in the form of **Stack**. Well, there are many more use cases...think about them!