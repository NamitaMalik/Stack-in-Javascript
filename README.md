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


