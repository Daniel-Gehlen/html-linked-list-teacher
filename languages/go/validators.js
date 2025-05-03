const goValidators = {
    removeWhitespace: (code) => code.replace(/\s+/g, ''),
    
    validateLevel1: (code) => {
        const normalizedCode = goValidators.removeWhitespace(code);
        const expectedCode = `typeNodestruct{ValueintNext*Node}typeQueuestruct{First*NodeLast*NodeSizeint}funcNewQueue()*Queue{return&Queue{First:nil,Last:nil,Size:0}}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("typeNodestruct")) {
            errors.push("A definição da estrutura 'Node' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("typeQueuestruct")) {
            errors.push("A definição da estrutura 'Queue' está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("First*Node")) {
            errors.push("O atributo 'First' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("Last*Node")) {
            errors.push("O atributo 'Last' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("Sizeint")) {
            errors.push("O atributo 'Size' não foi inicializado corretamente.");
        }
        if (!normalizedCode.includes("funcNewQueue()*Queue")) {
            errors.push("A função 'NewQueue' está ausente ou incorreta.");
        }

        return { isValid: false, errors };
    },

    validateLevel2: (code) => {
        const normalizedCode = goValidators.removeWhitespace(code);
        const expectedCode = `func(q*Queue)Enqueue(valueint){newNode:=&Node{Value:value,Next:nil}ifq.Size==0{q.First=newNodeq.Last=newNode}else{q.Last.Next=newNodeq.Last=newNode}q.Size++}`;
        
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }

        const errors = [];
        if (!normalizedCode.includes("func(q*Queue)Enqueue(valueint)")) {
            errors.push("O método 'Enqueue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("newNode:=&Node{Value:value,Next:nil}")) {
            errors.push("A criação do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("ifq.Size==0")) {
            errors.push("A verificação de fila vazia está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("q.First=newNodeq.Last=newNode")) {
            errors.push("A atualização dos ponteiros está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("q.Last.Next=newNodeq.Last=newNode")) {
            errors.push("A adição do novo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("q.Size++")) {
            errors.push("O incremento do tamanho está ausente ou incorreto.");
        }

        return { isValid: false, errors };
    },

    validateLevel3: (code) => {
        const normalizedCode = goValidators.removeWhitespace(code);
        const expectedCode = `func(q*Queue)Dequeue()*int{ifq.Size==0{returnnil}removedValue:=q.First.Valueq.First=q.First.Nextifq.First==nil{q.Last=nil}q.Size--return&removedValue}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("func(q*Queue)Dequeue()*int")) {
            errors.push("O método 'Dequeue' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("ifq.Size==0{returnnil}")) {
            errors.push("A verificação de fila vazia e o retorno de 'nil' estão ausentes ou incorretos.");
        }
        if (!normalizedCode.includes("removedValue:=q.First.Value")) {
            errors.push("A criação da variável 'removedValue' para armazenar o valor removido está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("q.First=q.First.Next")) {
            errors.push("A atualização do ponteiro 'First' para o próximo nó está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("ifq.First==nil{q.Last=nil}")) {
            errors.push("A verificação e atualização de 'Last' quando a fila se torna vazia estão ausentes ou incorretas.");
        }
        if (!normalizedCode.includes("q.Size--")) {
            errors.push("A decretação do tamanho da fila ('Size--') está ausente ou incorreta.");
        }
        if (!normalizedCode.includes("return&removedValue")) {
            errors.push("O retorno do valor removido ('removedValue') está ausente ou incorreto.");
        }
    
        return { isValid: false, errors };
    },

    validateLevel4: (code) => {
        const normalizedCode = goValidators.removeWhitespace(code);
        const expectedCode = `func(q*Queue)IsEmpty()bool{returnq.Size==0}`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("func(q*Queue)IsEmpty()bool")) {
            errors.push("O método 'IsEmpty' está ausente ou incorreto.");
        }
        if (!normalizedCode.includes("returnq.Size==0")) {
            errors.push("A lógica de retorno 'Size == 0' está ausente ou incorreta.");
        }
    
        return { isValid: false, errors };
    },        

    validateLevel5: (code) => {
        const normalizedCode = goValidators.removeWhitespace(code);
        const expectedCode = `queue:=NewQueue()queue.Enqueue(10)queue.Enqueue(20)queue.Enqueue(30)`;
    
        if (normalizedCode === expectedCode) {
            return { isValid: true, errors: [] };
        }
    
        const errors = [];
        if (!normalizedCode.includes("queue:=NewQueue()")) {
            errors.push("A criação da instância 'queue' da estrutura 'Queue' está ausente ou incorreta.");
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
        const normalizedCode = goValidators.removeWhitespace(code);
        const expectedCode = `queue.Dequeue()queue.Dequeue()`;
    
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

export default goValidators;