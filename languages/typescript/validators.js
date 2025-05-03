const typescriptValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = typescriptValidators.removeWhitespace(code);
        const expectedCode = `classQueue<T>{privatefirst:T|null=null;privatelast:T|null=null;privatesize:number=0;constructor(){}}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("classQueue<T>")) {
            errors.push("A definição da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("privatefirst:T|null=null;")) {
            errors.push("O atributo 'first' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("privatelast:T|null=null;")) {
            errors.push("O atributo 'last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("privatesize:number=0;")) {
            errors.push("O atributo 'size' não foi inicializado corretamente.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = typescriptValidators.removeWhitespace(code);
        const expectedCode = `enqueue(value:T):this{constnewNode={value,next:null};if(this.isEmpty()){this.first=newNode;this.last=newNode;}else{(this.lastasany).next=newNode;this.last=newNode;}this.size++;returnthis;}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("enqueue(value:T)")) {
            errors.push("O método 'enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("{constnewNode={value,next:null};")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(this.isEmpty())")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("this.first=newNode;this.last=newNode;")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("(this.lastasany).next=newNode;this.last=newNode;")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("this.size++;returnthis;")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = typescriptValidators.removeWhitespace(code);
        const expectedCode = `dequeue():T|null{if(this.isEmpty())returnnull;constremovedNode=this.firstasany;this.first=removedNode.next;if(!this.first)this.last=null;this.size--;returnremovedNode.value;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("dequeue()")) {
            errors.push("O método 'dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("if(this.isEmpty())returnnull;")) {
            errors.push("A verificação de fila vazia e o retorno de 'null' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("constremovedNode=this.firstasany;")) {
            errors.push("A criação da variável 'removedNode' para armazenar o nó removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("this.first=removedNode.next;")) {
            errors.push("A atualização do ponteiro 'this.first' para o próximo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("if(!this.first)this.last=null;")) {
            errors.push("A verificação e atualização de 'this.last' quando a fila se torna vazia estão ausentes ou incorretas.");
        }
        if (!normalizedCode.includes("this.size--;")) {
            errors.push("A decretação do tamanho da fila ('this.size--') está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("returnremovedNode.value;")) {
            errors.push("O retorno do valor do nó removido ('removedNode.value') está ausente ou incorreto.");
        }
    
        return { isValid: false, errors };
    },

    validateLevel4: (code) => {
        const normalizedCode = typescriptValidators.removeWhitespace(code);
        const expectedCode = `isEmpty():boolean{returnthis.size===0;}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("isEmpty()")) {
            errors.push("O método 'isEmpty' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnthis.size===0;")) {
            errors.push("A lógica de retorno 'this.size === 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = typescriptValidators.removeWhitespace(code);
        const expectedCode = `constqueue=newQueue<number>();queue.enqueue(10);queue.enqueue(20);queue.enqueue(30);`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("constqueue=newQueue<number>();")) {
            errors.push("A criação da instância 'queue' da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.enqueue(10);")) {
            errors.push("A primeira chamada de 'enqueue(10)' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.enqueue(20);")) {
            errors.push("A segunda chamada de 'enqueue(20)' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("queue.enqueue(30);")) {
            errors.push("A terceira chamada de 'enqueue(30)' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },      

    validateLevel6: (code) => {
        const normalizedCode = typescriptValidators.removeWhitespace(code);
        const expectedCode = `queue.dequeue();queue.dequeue();`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue.dequeue();")) {
            const dequeueOccurrences = normalizedCode.split("queue.dequeue();").length - 1;
    
            if (dequeueOccurrences === 0) {
                errors.push("Nenhuma chamada ao método 'dequeue' foi encontrada.");
            } else if (dequeueOccurrences === 1) {
                errors.push("Apenas uma chamada ao método 'dequeue' foi encontrada, mas são esperadas duas.");
            }
        }
    
        return { isValid: false, errors };
    },
};

export default typescriptValidators;