const rubyImplementations = {
    name: "Ruby",
    levels: {
        1: {
            title: "Level 1: Define the Queue class",
            instructions: "Type the following code to create a Queue class:",
            code: `class Queue
    def initialize
        @first = nil
        @last = nil
        @size = 0
    end
end`,
            explanation: "This initializes a Queue class in Ruby."
        },
        2: {
            title: "Level 2: Implement the enqueue method",
            instructions: "Define the enqueue method to add nodes to the end of the queue:",
            code: `def enqueue(value)
    new_node = { value: value, next: nil }
    if is_empty?
        @first = new_node
        @last = new_node
    else
        @last[:next] = new_node
        @last = new_node
    end
    @size += 1
    self
end`,
            explanation: "This method adds a new node to the end of the queue."
        },
        3: {
            title: "Level 3: Implement the dequeue method",
            instructions: "Define the dequeue method to remove nodes from the front of the queue:",
            code: `def dequeue
    return nil if is_empty?
    removed_node = @first
    @first = @first[:next]
    @last = nil if @first.nil?
    @size -= 1
    removed_node[:value]
end`,
            explanation: "This method removes a node from the front of the queue and returns its value."
        },
        4: {
            title: "Level 4: Implement the is_empty method",
            instructions: "Define the is_empty method to check if the queue is empty:",
            code: `def is_empty?
    @size == 0
end`,
            explanation: "This method checks if the queue is empty by verifying if the size is 0."
        },
        5: {
            title: "Level 5: Test enqueue by adding values to the queue",
            instructions: "Try adding values to the queue with enqueue:",
            code: `queue = Queue.new
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)`,
            explanation: "This demonstrates adding values to the queue. Observe how size increases and pointers update."
        },
        6: {
            title: "Level 6: Test dequeue to remove items from the queue",
            instructions: "Try removing values from the queue using dequeue:",
            code: `queue.dequeue
queue.dequeue`,
            explanation: "This demonstrates removing values from the queue. Observe how size decreases and pointers update."
        }
    }
};

export default rubyImplementations;