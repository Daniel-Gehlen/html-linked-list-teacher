const javascriptImplementations = {
    name: "JavaScript",
    levels: {
        1: {
            title: "Level 1: Define the Queue class",
            instructions: "Type the following code to create a Queue class:",
            code: `class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}`,
            explanation: "This creates a Queue class with a constructor initializing the first and last nodes as null and size as 0."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `enqueue(value) {
    const newNode = { value: value, next: null };
    if (this.isEmpty()) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
    }
    this.size++;
    return this;
}`,
            explanation: "This method adds a new node to the end of the queue."
        },
        3: {
            title: "Level 3: Implement the dequeue method",
            instructions: "Define the dequeue method to remove nodes from the front of the queue:",
            code: `dequeue() {
    if (this.isEmpty()) return null;
    const removedNode = this.first;
    this.first = this.first.next;
    if (this.first === null) {
        this.last = null;
    }
    this.size--;
    return removedNode.value;
}`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the isEmpty method",
            instructions: "Define the isEmpty method to check if the queue is empty:",
            code: `isEmpty() {
    return this.size === 0;
}`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `const fila = new Queue();
fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);`,
            explanation: "This demonstrates adding values to the queue. Observe how size increases and pointers update."
        },
        6: {
            title: "Level 6: Test dequeue to remove items from the queue",
            instructions: "Try removing values from the queue using dequeue:",
            code: `fila.dequeue();
fila.dequeue();`,
            explanation: "This demonstrates removing values from the queue. Observe how size decreases and pointers update."
        }
    }
};

export default javascriptImplementations;