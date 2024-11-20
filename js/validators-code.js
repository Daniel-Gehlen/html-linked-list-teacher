// Funções de validação específicas para cada linguagem
const validators = {
    javascript: {
        removeWhitespace: (code) => code.replace(/\s+/g, ''),
        
        validateLevel1: (code) => {
            const normalizedCode = validators.javascript.removeWhitespace(code);
            const expectedCode = "classQueue{constructor(){this.first=null;this.last=null;this.size=0;}}";
            
            if (normalizedCode === expectedCode) {
                return { isValid: true, errors: [] };
            }

            // Lista de possíveis erros
            const errors = [];
            if (!normalizedCode.includes("classQueue")) {
                errors.push("A definição da classe 'Queue' está ausente ou incorreta.");
            }
            if (!normalizedCode.includes("constructor(){")) {
                errors.push("O método 'constructor' está ausente ou incorreto.");
            }
            if (!normalizedCode.includes("this.first=null;")) {
                errors.push("O atributo 'first' não foi inicializado corretamente.");
            }
            if (!normalizedCode.includes("this.last=null;")) {
                errors.push("O atributo 'last' não foi inicializado corretamente.");
            }
            if (!normalizedCode.includes("this.size=0;")) {
                errors.push("O atributo 'size' não foi inicializado corretamente.");
            }

            return { isValid: false, errors };
        },

        validateLevel2: (code) => {
            const normalizedCode = validators.javascript.removeWhitespace(code);
            const expectedCode = "enqueue(value){constnewNode={value:value,next:null};if(this.isEmpty()){this.first=newNode;this.last=newNode;}else{this.last.next=newNode;this.last=newNode;}this.size++;returnthis;}";
            
            if (normalizedCode === expectedCode) {
                return { isValid: true, errors: [] };
            }

            // Lista de possíveis erros
            const errors = [];
            if (!normalizedCode.includes("enqueue(value)")) {
                errors.push("O método 'enqueue' está ausente ou incorreto.");
            }
            if (!normalizedCode.includes("{constnewNode={value:value,next:null};")) {
                errors.push("A criação do novo nó está ausente ou incorreta.");
            }
            if (!normalizedCode.includes("if(this.isEmpty())")) {
                errors.push("A verificação de fila vazia está ausente ou incorreta.");
            }
            if (!normalizedCode.includes("this.first=newNode;this.last=newNode;")) {
                errors.push("A atualização dos ponteiros está ausente ou incorreta.");
            }
            if (!normalizedCode.includes("if(this.isEmpty()){this.first=newNode;this.last=newNode;}else{this.last.next=newNode;this.last=newNode;")) {
                errors.push("A adição do novo nó está ausente ou incorreta.");
            }
            if (!normalizedCode.includes("this.size++;returnthis;")) {
                errors.push("O incremento do tamanho está ausente ou incorreto.");
            }

            return { isValid: false, errors };
        },
        // ... outros validadores para JavaScript
    },

    python: {
        removeWhitespace: (code) => code.replace(/\s+/g, ''),
        
        validateLevel1: (code) => {
            const normalizedCode = validators.python.removeWhitespace(code);
            const expectedCode = "classQueue:def__init__(self):self.first=None;self.last=None;self.size=0";
            return normalizedCode === expectedCode;
        },

        validateLevel2: (code) => {
            const normalizedCode = validators.python.removeWhitespace(code);
            const expectedCode = "defenqueue(self,value):new_node={'value':value,'next':None}ifself.is_empty():self.first=new_nodeself.last=new_nodeelse:self.last['next']=new_nodeself.last=new_nodeself.size+=1returnself";
            return normalizedCode === expectedCode;
        },
        // ... outros validadores para Python
    },
    // Adicione mais validadores para outras linguagens
};

export default validators;
