const cppImplementations = {
    name: "C++",
    levels: {
        1: {
            title: "Level 1: Define the Queue class",
            instructions: "Type the following code to create a Queue class:",
            code: `class Queue {
private:
    struct Node {
        int value;
        Node* next;
        Node(int val) : value(val), next(nullptr) {}
    };

    Node* first;
    Node* last;
    int size;

public:
    Queue() : first(nullptr), last(nullptr), size(0) {}

    bool isEmpty() {
        return size == 0;
    }
};`,
            explanation: "This creates a Queue class with a constructor initializing the first and last nodes as null and size as 0."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `void enqueue(int value) {
    Node* newNode = new Node(value);
    if (isEmpty()) {
        first = last = newNode;
    } else {
        last->next = newNode;
        last = newNode;
    }
    size++;
}`,
            explanation: "This method adds a new node to the end of the queue."
        },
        3: {
            title: "Level 3: Implement the dequeue method",
            instructions: "Define the dequeue method to remove nodes from the front of the queue:",
            code: `int dequeue() {
    if (isEmpty()) return -1;
    Node* temp = first;
    int removedValue = temp->value;
    first = first->next;
    if (!first) last = nullptr;
    delete temp;
    size--;
    return removedValue;
}`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the isEmpty method",
            instructions: "Define the isEmpty method to check if the queue is empty:",
            code: `bool isEmpty() {
    return size == 0;
}`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `Queue queue;
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

export default cppImplementations;