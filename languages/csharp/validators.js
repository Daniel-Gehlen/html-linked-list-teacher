const csharpValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = csharpValidators.removeWhitespace(code);
        const expectedCode = `publicclassQueue{privateNodefirst;privateNodelast;privateintsize;publicQueue(){first=null;last=null;size=0;}privateclassNode{publicintValue;publicNodeNext;publicNode(intvalue){Value=value;Next=null;}}}`;
        
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
        if (!normalizedCode.includes("first=null")) {
            errors.push("O atributo 'first' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("last=null")) {
            errors.push("O atributo 'last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("size=0")) {
            errors.push("O atributo 'size' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("privateclassNode")) {
            errors.push("A definição da classe 'Node' está ausente ou incorreta.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = csharpValidators.removeWhitespace(code);
        const expectedCode = `publicvoidEnqueue(intvalue){NodenewNode=newNode(value);if(IsEmpty()){first=newNode;last=newNode;}else{last.Next=newNode;last=newNode;}size++;}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("publicvoidEnqueue(intvalue)")) {
            errors.push("O método 'Enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("NodenewNode=newNode(value)")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(IsEmpty())")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("first=newNode;last=newNode")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("last.Next=newNode;last=newNode")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("size++")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = csharpValidators.removeWhitespace(code);
        const expectedCode = `publicint?Dequeue(){if(IsEmpty())returnnull;intremovedValue=first.Value;first=first.Next;if(first==null){last=null;}size--;returnremovedValue;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("publicint?Dequeue()")) {
            errors.push("O método 'Dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("if(IsEmpty())returnnull")) {
            errors.push("A verificação de fila vazia e o retorno de 'null' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("intremovedValue=first.Value")) {
            errors.push("A criação da variável 'removedValue' para armazenar o valor removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("first=first.Next")) {
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
        const normalizedCode = csharpValidators.removeWhitespace(code);
        const expectedCode = `publicboolIsEmpty(){returnsize==0;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("publicboolIsEmpty()")) {
            errors.push("O método 'IsEmpty' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnsize==0")) {
            errors.push("A lógica de retorno 'size == 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = csharpValidators.removeWhitespace(code);
        const expectedCode = `Queuequeue=newQueue();queue.Enqueue(10);queue.Enqueue(20);queue.Enqueue(30);`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("Queuequeue=newQueue()")) {
            errors.push("A criação da instância 'queue' da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.Enqueue(10)")) {
            errors.push("A primeira chamada de 'Enqueue(10)' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.Enqueue(20)")) {
            errors.push("A segunda chamada de 'Enqueue(20)' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.Enqueue(30)")) {
            errors.push("A terceira chamada de 'Enqueue(30)' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },      

    validateLevel6: (code) => {
        const normalizedCode = csharpValidators.removeWhitespace(code);
        const expectedCode = `queue.Dequeue();queue.Dequeue();`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue.Dequeue()")) {
            const dequeueOccurrences = normalizedCode.split("queue.Dequeue()").length - 1;
    
            if (dequeueOccurrences === 0) {
                errors.push("Nenhuma chamada ao método 'Dequeue' foi encontrada.");
            } else if (dequeueOccurrences === 1) {
                errors.push("Apenas uma chamada ao método 'Dequeue' foi encontrada, mas são esperadas duas.");
            }
        }
    
        return { isValid: false, errors };
    },
};

export default csharpValidators;