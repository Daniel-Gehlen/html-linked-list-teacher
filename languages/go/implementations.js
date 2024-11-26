const goImplementations = {
    name: "Go",
    levels: {
        1: {
            title: "Level 1: Define the Queue struct",
            instructions: "Type the following code to create a Queue struct:",
            code: `type Node struct {
    Value int
    Next  *Node
}

type Queue struct {
    First *Node
    Last  *Node
    Size  int
}

func NewQueue() *Queue {
    return &Queue{First: nil, Last: nil, Size: 0}
}`,
            explanation: "This creates a Queue struct with a constructor initializing the first and last nodes as nil and size as 0."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `func (q *Queue) Enqueue(value int) {
    newNode := &Node{Value: value, Next: nil}
    if q.Size == 0 {
        q.First = newNode
        q.Last = newNode
    } else {
        q.Last.Next = newNode
        q.Last = newNode
    }
    q.Size++
}`,
            explanation: "This method adds a new node to the end of the queue."
        },
        3: {
            title: "Level 3: Implement the dequeue method",
            instructions: "Define the dequeue method to remove nodes from the front of the queue:",
            code: `func (q *Queue) Dequeue() *int {
    if q.Size == 0 {
        return nil
    }
    removedValue := q.First.Value
    q.First = q.First.Next
    if q.First == nil {
        q.Last = nil
    }
    q.Size--
    return &removedValue
}`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the isEmpty method",
            instructions: "Define the isEmpty method to check if the queue is empty:",
            code: `func (q *Queue) IsEmpty() bool {
    return q.Size == 0
}`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `queue := NewQueue()
queue.Enqueue(10)
queue.Enqueue(20)
queue.Enqueue(30)`,
            explanation: "This demonstrates adding values to the queue. Observe how size increases and pointers update."
        },
        6: {
            title: "Level 6: Test dequeue to remove items from the queue",
            instructions: "Try removing values from the queue using dequeue:",
            code: `queue.Dequeue()
queue.Dequeue()`,
            explanation: "This demonstrates removing values from the queue. Observe how size decreases and pointers update."
        }
    }
};

export default goImplementations;