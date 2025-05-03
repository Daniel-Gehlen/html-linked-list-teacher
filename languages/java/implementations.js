const javaImplementations = {
    name: "Java",
    levels: {
        1: {
            title: "Level 1: Define the Queue class",
            instructions: "Type the following code to create a Queue class:",
            code: `public class Queue {
    private Node first;
    private Node last;
    private int size;

    public Queue() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    private static class Node {
        int value;
        Node next;

        Node(int value) {
            this.value = value;
            this.next = null;
        }
    }
}`,
            explanation: "This creates a Queue class with a constructor initializing the first and last nodes as null and size as 0."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `public void enqueue(int value) {
    Node newNode = new Node(value);
    if (isEmpty()) {
        first = newNode;
        last = newNode;
    } else {
        last.next = newNode;
        last = newNode;
    }
    size++;
}`,
            explanation: "This method adds a new node to the end of the queue."
        },
        3: {
            title: "Level 3: Implement the dequeue method",
            instructions: "Define the dequeue method to remove nodes from the front of the queue:",
            code: `public Integer dequeue() {
    if (isEmpty()) return null;
    int removedValue = first.value;
    first = first.next;
    if (first == null) {
        last = null;
    }
    size--;
    return removedValue;
}`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the isEmpty method",
            instructions: "Define the isEmpty method to check if the queue is empty:",
            code: `public boolean isEmpty() {
    return size == 0;
}`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `Queue queue = new Queue();
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

export default javaImplementations;