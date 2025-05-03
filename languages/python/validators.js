const pythonValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = pythonValidators.removeWhitespace(code);
        const expectedCode = "classQueue:def__init__(self):self.first=None;self.last=None;self.size=0";
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("classQueue")) {
            errors.push("A definição da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("def__init__(self):")) {
            errors.push("O método 'init' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("self.first=None;")) {
            errors.push("O atributo 'first' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("self.last=None;")) {
            errors.push("O atributo 'last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("self.size=0")) {
            errors.push("O atributo 'size' não foi inicializado corretamente.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = pythonValidators.removeWhitespace(code);
        const expectedCode = "defenqueue(self,value):new_node={'value':value,'next':None}ifself.is_empty():self.first=new_nodeself.last=new_nodeelse:self.last['next']=new_nodeself.last=new_nodeself.size+=1returnself";
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("defenqueue(self,value):")) {
            errors.push("O método 'enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("new_node={'value':value,'next':None}")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("ifself.is_empty():")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("self.first=new_nodeself.last=new_node")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("self.last['next']=new_nodeself.last=new_node")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("self.size+=1returnself")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = pythonValidators.removeWhitespace(code);
        const expectedCode = "defdequeue(self):ifself.is_empty():returnNoneremoved_node=self.firstself.first=self.first['next']ifself.firstisNone:self.last=Noneself.size-=1returnremoved_node['value']";
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("defdequeue(self):")) {
            errors.push("O método 'dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("ifself.is_empty():returnNone")) {
            errors.push("A verificação de fila vazia e o retorno de 'None' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("removed_node=self.first")) {
            errors.push("A criação da variável 'removed_node' para armazenar o nó removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("self.first=self.first['next']")) {
            errors.push("A atualização do ponteiro 'first' para o próximo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("ifself.firstisNone:self.last=None")) {
            errors.push("A verificação e atualização de 'last' quando a fila se torna vazia estão ausentes ou incorretas.");
        }
        if (!normalizedCode.includes("self.size-=1")) {
            errors.push("A decretação do tamanho da fila ('size--') está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("returnremoved_node['value']")) {
            errors.push("O retorno do valor do nó removido ('removed_node.value') está ausente ou incorreto.");
        }
    
        return { isValid: false, errors };
    },

    validateLevel4: (code) => {
        const normalizedCode = pythonValidators.removeWhitespace(code);
        const expectedCode = "defis_empty(self):returnself.size==0";
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("defis_empty(self):")) {
            errors.push("O método 'is_empty' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnself.size==0")) {
            errors.push("A lógica de retorno 'self.size == 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = pythonValidators.removeWhitespace(code);
        const expectedCode = "queue=Queue()queue.enqueue(10)queue.enqueue(20)queue.enqueue(30)";
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue=Queue()")) {
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
        const normalizedCode = pythonValidators.removeWhitespace(code);
        const expectedCode = "queue.dequeue()queue.dequeue()";
    
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

export default pythonValidators;