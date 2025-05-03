const rubyValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = rubyValidators.removeWhitespace(code);
        const expectedCode = `classQueuedefinitialize@first=nil@last=nil@size=0endend`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("classQueue")) {
            errors.push("A definição da classe 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("definitialize")) {
            errors.push("O método 'initialize' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("@first=nil")) {
            errors.push("O atributo 'first' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("@last=nil")) {
            errors.push("O atributo 'last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("@size=0")) {
            errors.push("O atributo 'size' não foi inicializado corretamente.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = rubyValidators.removeWhitespace(code);
        const expectedCode = `defenqueue(value)new_node={value:value,next:nil}ifis_empty?@first=new_node@last=new_nodeelse@last[:next]=new_node@last=new_nodeend@size+=1selfend`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("defenqueue(value)")) {
            errors.push("O método 'enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("new_node={value:value,next:nil}")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("ifis_empty?")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("@first=new_node@last=new_node")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("@last[:next]=new_node@last=new_node")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("@size+=1selfend")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = rubyValidators.removeWhitespace(code);
        const expectedCode = `defdequeuereturnnilifis_empty?removed_node=@first@first=@first[:next]@last=nilif@first.nil?@size-=1removed_node[:value]end`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("defdequeue")) {
            errors.push("O método 'dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnnilifis_empty?")) {
            errors.push("A verificação de fila vazia e o retorno de 'nil' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("removed_node=@first")) {
            errors.push("A criação da variável 'removedNode' para armazenar o nó removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("@first=@first[:next]")) {
            errors.push("A atualização do ponteiro 'first' para o próximo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("@last=nilif@first.nil?")) {
            errors.push("A verificação e atualização de 'last' quando a fila se torna vazia estão ausentes ou incorretas.");
        }
        if (!normalizedCode.includes("@size-=1")) {
            errors.push("A decretação do tamanho da fila ('size--') está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("removed_node[:value]end")) {
            errors.push("O retorno do valor do nó removido ('removedNode.value') está ausente ou incorreto.");
        }
    
        return { isValid: false, errors };
    },

    validateLevel4: (code) => {
        const normalizedCode = rubyValidators.removeWhitespace(code);
        const expectedCode = `defis_empty?@size==0end`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("defis_empty?")) {
            errors.push("O método 'is_empty?' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("@size==0end")) {
            errors.push("A lógica de retorno 'size == 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = rubyValidators.removeWhitespace(code);
        const expectedCode = `queue=Queue.newqueue.enqueue(10)queue.enqueue(20)queue.enqueue(30)`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue=Queue.new")) {
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
        const normalizedCode = rubyValidators.removeWhitespace(code);
        const expectedCode = `queue.dequeuequeue.dequeue`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue.dequeue")) {
            const dequeueOccurrences = normalizedCode.split("queue.dequeue").length - 1;
    
            if (dequeueOccurrences === 0) {
                errors.push("Nenhuma chamada ao método 'dequeue' foi encontrada.");
            } else if (dequeueOccurrences === 1) {
                errors.push("Apenas uma chamada ao método 'dequeue' foi encontrada, mas são esperadas duas.");
            }
        }
    
        return { isValid: false, errors };
    },
};

export default rubyValidators;