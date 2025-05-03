const kotlinImplementations = {
    name: "Kotlin",
    levels: {
        1: {
            title: "Level 1: Define the Queue class",
            instructions: "Type the following code to create a Queue class:",
            code: `class Queue<T> {
    private class Node<T>(val value: T, var next: Node<T>? = null)

    private var first: Node<T>? = null
    private var last: Node<T>? = null
    private var size = 0
}`,
            explanation: "This creates a generic Queue class with Kotlin."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `fun enqueue(value: T) {
    val newNode = Node(value)
    if (isEmpty()) {
        first = newNode
        last = newNode
    } else {
        last?.next = newNode
        last = newNode
    }
    size++
}`,
            explanation: "This method adds a new node to the end of the queue."
        },
        3: {
            title: "Level 3: Implement the dequeue method",
            instructions: "Define the dequeue method to remove nodes from the front of the queue:",
            code: `fun dequeue(): T? {
    if (isEmpty()) return null
    val removedValue = first?.value
    first = first?.next
    if (first == null) {
        last = null
    }
    size--
    return removedValue
}`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the isEmpty method",
            instructions: "Define the isEmpty method to check if the queue is empty:",
            code: `fun isEmpty(): Boolean {
    return size == 0
}`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `val queue = Queue<Int>()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)`,
            explanation: "This demonstrates adding values to the queue. Observe how size increases and pointers update."
        },
        6: {
            title: "Level 6: Test dequeue to remove items from the queue",
            instructions: "Try removing values from the queue using dequeue:",
            code: `queue.dequeue()
queue.dequeue()`,
            explanation: "This demonstrates removing values from the queue. Observe how size decreases and pointers update."
        }
    }
};

export default kotlinImplementations;