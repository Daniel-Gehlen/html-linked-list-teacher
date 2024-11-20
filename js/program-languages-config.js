// Configuração das implementações de fila em diferentes linguagens
const languageImplementations = {
    javascript: {
        name: "JavaScript",
        levels: {
            1: {
                title: "Level 1: Define the Queue class",
                instructions: "Type the following code to create a Queue class:",
                code: "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }",
                explanation: "This creates a Queue class with a constructor initializing the first and last nodes as null and size as 0."
            },
            2: {
                title: "Level 2: Implement the enqueue method",
                instructions: "Define the enqueue method to add nodes to the end of the queue:",
                code: "enqueue(value) { const newNode = { value: value, next: null }; if (this.isEmpty()) { this.first = newNode; this.last = newNode; } else { this.last.next = newNode; this.last = newNode; } this.size++; return this; }",
                explanation: "This method adds a new node to the end of the queue."
            },
            // ... outros níveis para JavaScript
        }
    },
    python: {
        name: "Python",
        levels: {
            1: {
                title: "Level 1: Define the Queue class",
                instructions: "Type the following code to create a Queue class:",
                code: "class Queue:\n    def __init__(self):\n        self.first = None\n        self.last = None\n        self.size = 0",
                explanation: "This creates a Queue class with an initializer setting first and last nodes as None and size as 0."
            },
            2: {
                title: "Level 2: Implement the enqueue method",
                instructions: "Define the enqueue method to add nodes to the end of the queue:",
                code: "def enqueue(self, value):\n    new_node = {'value': value, 'next': None}\n    if self.is_empty():\n        self.first = new_node\n        self.last = new_node\n    else:\n        self.last['next'] = new_node\n        self.last = new_node\n    self.size += 1\n    return self",
                explanation: "This method adds a new node to the end of the queue."
            },
            // ... outros níveis para Python
        }
    },
    typescript: {
        name: "TypeScript",
        levels: {
            1: {
                title: "Level 1: Define the Queue class",
                instructions: "Type the following code to create a Queue class:",
                code: `class Queue<T> {
        private first: T | null = null;
        private last: T | null = null;
        private size: number = 0;
    }`,
                explanation: "This creates a generic Queue class with TypeScript."
            },
            // Outros níveis
        }
    },
    ruby: {
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
            // Outros níveis
        }
    }
    //Outras linguagens aqui    
};

export default languageImplementations;
