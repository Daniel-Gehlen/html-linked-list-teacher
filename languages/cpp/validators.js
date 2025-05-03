const cppValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = cppValidators.removeWhitespace(code);
        const expectedCode = `classQueue{private:structNode{intvalue;Node*next;Node(intval):value(val),next(nullptr){}};Node*first;Node*last;intsize;public:Queue():first(nullptr),last(nullptr),size(0){}boolisEmpty(){returnsize==0;}}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("classQueue")) {
            errors.push("A definição da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("structNode")) {
            errors.push("A definição da estrutura 'Node' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("Node*first")) {
            errors.push("O atributo 'first' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("Node*last")) {
            errors.push("O atributo 'last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("intsize")) {
            errors.push("O atributo 'size' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("Queue():first(nullptr),last(nullptr),size(0)")) {
            errors.push("O construtor da classe 'Queue' está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = cppValidators.removeWhitespace(code);
        const expectedCode = `voidenqueue(intvalue){Node*newNode=newNode(value);if(isEmpty()){first=last=newNode;}else{last->next=newNode;last=newNode;}size++;}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("voidenqueue(intvalue)")) {
            errors.push("O método 'enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("Node*newNode=newNode(value)")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(isEmpty())")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("first=last=newNode")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("last->next=newNode;last=newNode")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("size++")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = cppValidators.removeWhitespace(code);
        const expectedCode = `intdequeue(){if(isEmpty())return-1;Node*temp=first;intremovedValue=temp->value;first=first->next;if(!first)last=nullptr;deletetemp;size--;returnremovedValue;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("intdequeue()")) {
            errors.push("O método 'dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("if(isEmpty())return-1")) {
            errors.push("A verificação de fila vazia e o retorno de '-1' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("Node*temp=first")) {
            errors.push("A criação da variável 'temp' para armazenar o nó removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("intremovedValue=temp->value")) {
            errors.push("A criação da variável 'removedValue' para armazenar o valor removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("first=first->next")) {
            errors.push("A atualização do ponteiro 'first' para o próximo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(!first)last=nullptr")) {
            errors.push("A verificação e atualização de 'last' quando a fila se torna vazia estão ausentes ou incorretas.");
        }
        if (!normalizedCode.includes("deletetemp")) {
            errors.push("A liberação da memória do nó removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("size--")) {
            errors.push("A decretação do tamanho da fila ('size--') está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("returnremovedValue")) {
            errors.push("O retorno do valor removido ('removedValue') está ausente ou incorreto.");
        }
    
        return { isValid: false, errors };
    },

    validateLevel4: (code) => {
        const normalizedCode = cppValidators.removeWhitespace(code);
        const expectedCode = `boolisEmpty(){returnsize==0;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("boolisEmpty()")) {
            errors.push("O método 'isEmpty' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnsize==0")) {
            errors.push("A lógica de retorno 'size == 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = cppValidators.removeWhitespace(code);
        const expectedCode = `Queuequeue;queue.enqueue(10);queue.enqueue(20);queue.enqueue(30);`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("Queuequeue")) {
            errors.push("A criação da instância 'queue' da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.enqueue(10)")) {
            errors.push("A primeira chamada de 'enqueue(10)' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.enqueue(20)")) {
            errors.push("A segunda chamada de 'enqueue(20)' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.enqueue(30)")) {
            errors.push("A terceira chamada de 'enqueue(30)' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },      

    validateLevel6: (code) => {
        const normalizedCode = cppValidators.removeWhitespace(code);
        const expectedCode = `queue.dequeue();queue.dequeue();`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue.dequeue()")) {
            const dequeueOccurrences = normalizedCode.split("queue.dequeue()").length - 1;
    
            if (dequeueOccurrences === 0) {
                errors.push("Nenhuma chamada ao método 'dequeue' foi encontrada.");
            } else if (dequeueOccurrences === 1) {
                errors.push("Apenas uma chamada ao método 'dequeue' foi encontrada, mas são esperadas duas.");
            }
        }
    
        return { isValid: false, errors };
    },
};

export default cppValidators;