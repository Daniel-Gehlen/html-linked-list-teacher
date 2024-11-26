const typescriptImplementations = {
    name: "TypeScript",
    levels: {
        1: {
            title: "Level 1: Define the Queue class",
            instructions: "Type the following code to create a Queue class:",
            code: `class Queue<T> {
    private first: T | null = null;
    private last: T | null = null;
    private size: number = 0;

    constructor() {}
}`,
            explanation: "This creates a generic Queue class with TypeScript."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `enqueue(value: T): this {
    const newNode = { value, next: null };
    if (this.isEmpty()) {
        this.first = newNode;
        this.last = newNode;
    } else {
        (this.last as any).next = newNode;
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
            code: `dequeue(): T | null {
    if (this.isEmpty()) return null;
    const removedNode = this.first as any;
    this.first = removedNode.next;
    if (!this.first) this.last = null;
    this.size--;
    return removedNode.value;
}`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the isEmpty method",
            instructions: "Define the isEmpty method to check if the queue is empty:",
            code: `isEmpty(): boolean {
    return this.size === 0;
}`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);`,
            explanation: "This demonstrates adding values to the queue. Observe how size increases and pointers update."
        },
        6: {
            title: "Level 6: Test dequeue to remove items from the queue",
            instructions: "Try removing values from the queue using dequeue:",
            code: `queue.dequeue();
queue.dequeue();`,
            explanation: "This demonstrates removing values from the queue. Observe how size decreases and pointers update."
        }
    }
};

export default typescriptImplementations;