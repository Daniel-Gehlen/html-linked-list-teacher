const javaValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = javaValidators.removeWhitespace(code);
        const expectedCode = `publicclassQueue{privateNodefirst;privateNodelast;privateintsize;publicQueue(){this.first=null;this.last=null;this.size=0;}privatestaticclassNode{intvalue;Nodenext;Node(intvalue){this.value=value;this.next=null;}}}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("publicclassQueue")) {
            errors.push("A definição da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("publicQueue()")) {
            errors.push("O método 'Queue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("this.first=null")) {
            errors.push("O atributo 'first' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("this.last=null")) {
            errors.push("O atributo 'last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("this.size=0")) {
            errors.push("O atributo 'size' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("privatestaticclassNode")) {
            errors.push("A definição da classe 'Node' está ausente ou incorreta.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = javaValidators.removeWhitespace(code);
        const expectedCode = `publicvoidenqueue(intvalue){NodenewNode=newNode(value);if(isEmpty()){first=newNode;last=newNode;}else{last.next=newNode;last=newNode;}size++;}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("publicvoidenqueue(intvalue)")) {
            errors.push("O método 'enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("NodenewNode=newNode(value)")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(isEmpty())")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("first=newNode;last=newNode")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("last.next=newNode;last=newNode")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("size++")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = javaValidators.removeWhitespace(code);
        const expectedCode = `publicIntegerdequeue(){if(isEmpty())returnnull;intremovedValue=first.value;first=first.next;if(first==null){last=null;}size--;returnremovedValue;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("publicIntegerdequeue()")) {
            errors.push("O método 'dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("if(isEmpty())returnnull")) {
            errors.push("A verificação de fila vazia e o retorno de 'null' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("intremovedValue=first.value")) {
            errors.push("A criação da variável 'removedValue' para armazenar o valor removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("first=first.next")) {
            errors.push("A atualização do ponteiro 'first' para o próximo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(first==null){last=null}")) {
            errors.push("A verificação e atualização de 'last' quando a fila se torna vazia estão ausentes ou incorretas.");
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
        const normalizedCode = javaValidators.removeWhitespace(code);
        const expectedCode = `publicbooleanisEmpty(){returnsize==0;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("publicbooleanisEmpty()")) {
            errors.push("O método 'isEmpty' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnsize==0")) {
            errors.push("A lógica de retorno 'size == 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = javaValidators.removeWhitespace(code);
        const expectedCode = `Queuequeue=newQueue();queue.enqueue(10);queue.enqueue(20);queue.enqueue(30);`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("Queuequeue=newQueue()")) {
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
        const normalizedCode = javaValidators.removeWhitespace(code);
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

export default javaValidators;