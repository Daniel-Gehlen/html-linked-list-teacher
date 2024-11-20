// ui-texts.js
export const texts = {
    en: {
        welcome: "Welcome, ",
        intro: "Let's Learn Queues!",
        resetButton: "Reset Progress",
        switchLanguage: "Switch to Portuguese",
        levelTitles: [
            "Level 1: Queue Class",
            "Level 2: Enqueue Method",
            "Level 3: Dequeue Method",
            "Level 4: isEmpty Method",
            "Level 5: Using the Queue",
            "Level 6: Dequeue Actions"
        ],
        instructions: [
            "Define a Queue class with properties first, last, and size.",
            "Add an enqueue method to add elements to the queue.",
            "Add a dequeue method to remove elements from the queue.",
            "Create an isEmpty method to check if the queue is empty.",
            "Initialize a queue and add elements.",
            "Remove elements from the queue."
        ],
        submitButton: "Submit Code",
        correct: "Correct! Great job! Moving to the next level...",
        incorrect: "Not quite right. Here's what to check:",
        errors: {
            level1: [
                "Make sure you've defined the class name as 'Queue'",
                "Check if you've included all three properties: first, last, and size",
                "Verify that all properties are initialized to their correct values"
            ],
            level2: [
                "Check if you're creating a new node with the correct structure",
                "Verify the isEmpty() condition handling",
                "Make sure you're updating both first and last pointers correctly"
            ],
            level3: [
                "Verify the isEmpty() check at the beginning",
                "Check if you're properly updating the first pointer",
                "Make sure you're handling the case when the queue becomes empty"
            ],
            level4: [
                "Make sure you're checking the size property",
                "Verify that you're returning a boolean value",
                "Check the comparison operator"
            ],
            level5: [
                "Verify that you're creating a new Queue instance",
                "Check if you're calling enqueue with the correct values",
                "Make sure you're chaining the operations correctly"
            ],
            level6: [
                "Make sure you're calling dequeue the correct number of times",
                "Verify that you're not storing the returned values unnecessarily",
                "Check if the operations are in the correct order"
            ]
        },
        completed: "Congratulations! You've completed this level of the Queue implementation!",
        explanations: {
            ";": "You typed ';' - the semicolon at the end of a statement serves as a signal that one instruction has ended and the next can begin.",
            "{": "These { } are curly braces. They tell me where code blocks begin and end. Everything between { } will belong to the block and define what it does.",
            "}": "These { } are curly braces. They tell me where code blocks begin and end. Everything between { } will belong to the block and define what it does.",
            "class": "You typed 'class'. When I see this word, I understand that you're defining a new type of object.",
            "Queue": "You named the class 'Queue'. I understand that you want this class to represent a Queue.",
            "constructor": "You typed 'constructor'. This is a special function that tells me what to do when someone creates a new Queue.",
            "constructor()": "These parentheses () tell me that the previous command can receive information or settings.",
            "this": "The 'this' keyword refers to this specific object. In this case, it refers to the Queue object itself.",
            "this.": "When you type a '.' after a word, you are asking to access something that belongs to what came before the dot, like an attribute or a function.",
            "this.first": "'this.first' tells me we're creating a property called first inside the Queue object.",
            "=": "When you type '=', you are telling me to take the value to the right of the '=' and store it in the variable or property to the left of the '='.",
            "===": "When you type '===', I understand that it is to compare the two values ​​and verify that they are exactly the same, including the data type.",
            "size++": "When you type '++' after a word, you are telling me to take the current value of that variable, add 1 to it, and update the variable with the new value. Now that variable is equal to the next number larger integer. For example: if the variable had the value '1', variable++ will be '2'.",
            "size--": "When you type '--' after a word, you are telling me to take the current value of that variable, subtract 1 from it, and update the variable with the new value. Now that variable is equal to the next number smaller integer. For example: if the variable had the value '2', variable-- will be '1'.", "this.first = null": "You have set 'this.first = null'. This means that when you create the queue, first is still empty or has no value.",
            "this.last": "'this.last' tells me we're creating another property called last that will represent the last element in the queue.",
            "null": "When you type null, you are telling me that there is no value here. I understand this as 'empty' or 'missing'. It's like saying: 'This variable exists, but it doesn't have anything inside it yet to I use.' ",            "this.size": "You created 'this.size'. Here, we're defining a property to track the queue's size.",
            "0": "You put '0'. With this I know we are starting the queue from scratch.",
            "0;": "You typed ';' - the semicolon at the end of a statement serves as a signal that one instruction has ended and the next can begin.",
            "null;": "You typed ';' - the semicolon at the end of a statement serves as a signal that one instruction has ended and the next can begin.",
            "if": "When you type 'if' I understand that it is to check 'if' what is between the parentheses '( )' is true, I must execute what is inside the braces '{ }'.",
            "else": "When you type 'else' I understand that it is to check 'if' the 'if' condition was false, I must execute what is inside the braces '{ }' of the block immediately following.",
            "return": "When you type 'return', I understand that it is to stop execution of the function immediately and return the specified value to the point where the function was called, in this case, at this point.",
            "const": "When you type 'const', I understand that it is to create a 'constant' variable that cannot be reassigned, but within objects or arrays, their internal values ​​can still be modified.",
            "isEmpty or empty": "When you type 'isEmpty' or 'empty', I understand that it is to check whether the structure (such as a string, array or list) is empty, that is, without content or elements.",
            "new": "When you type 'new after =', I understand that it is to create a new instance or object based on what comes after 'new'.",
            "enqueue(value)": "When you use enqueue(value), you are asking me to add the value to the end of a queue. I place the element in the last position, following the order in which the items arrive, so that the First in, first out (FIFO - First In, First Out).",
            "value": "When you write value: value, you are telling me that there is a key called value with an associated content, which is also called value. This can be used in objects, dictionaries, or data structures that store pairs key-value.",
            "next": "When you use next, you are asking me to go to the next element. I look for the next item in a sequence, list, node, or iterator, depending on the context, and return it to you.",
            "(this.isEmpty()": "When you use this.isEmpty(), you are asking me to check if the queue is empty. I look at the size property of the queue and if it is 0, I return true, indicating that the queue is empty. Otherwise, I return false, indicating that the queue is not empty.",
            "this.first = newNode;": "You have set 'this.first = newNode'. This means that when you create the queue, first is still empty or has no value.",
            "this.last.next = newNode;": "You have set 'this.last.next = newNode'. This means that when you create the queue, last is still empty or has no value.",
            "this.size++;": "You have set 'this.size++;'. This means that when you create the queue, size is still empty or has no value.",
            "return this;": "You have set 'return this;'. This means that when you create the queue, size is still empty or has no value.",
        }
    },
    pt: {
        welcome: "Bem-vindo, ",
        intro: "Vamos Aprender Filas!",
        resetButton: "Redefinir Progresso",
        switchLanguage: "Mudar para Inglês",
        levelTitles: [
            "Nível 1: Classe Fila",
            "Nível 2: Método Enqueue",
            "Nível 3: Método Dequeue",
            "Nível 4: Método isEmpty",
            "Nível 5: Usando a Fila",
            "Nível 6: Ações de Dequeue"
        ],
        instructions: [
            "Defina uma classe Fila com as propriedades first, last e size.",
            "Adicione um método enqueue para adicionar elementos na fila.",
            "Adicione um método dequeue para remover elementos da fila.",
            "Crie um método isEmpty para verificar se a fila está vazia.",
            "Inicialize uma fila e adicione elementos.",
            "Remova elementos da fila."
        ],
        submitButton: "Enviar Código",
        correct: "Correto! Ótimo trabalho! Avançando para o próximo nível...",
        incorrect: "Não está totalmente correto. Verifique:",
        errors: {
            level1: [
                "Certifique-se de que definiu o nome da classe como 'Queue'",
                "Verifique se incluiu as três propriedades: first, last e size",
                "Verifique se todas as propriedades estão inicializadas com seus valores corretos"
            ],
            // ... resto dos erros em português
        },
        completed: "Parabéns! Você completou este nível da implementação da Fila!",
        explanations: {
            "{": "Esses { } são chaves. Elas me dizem onde o código começa e termina. Tudo que está entre { } vai pertencer ao bloco e definirá o que ela faz.",
            "}": "Esses { } são chaves. Elas me dizem onde o código começa e termina. Tudo que está entre { } vai pertencer ao bloco e definirá o que ela faz.",
            "class": "Você digitou 'class'. Quando vejo essa palavra, entendo que você está definindo um novo tipo de objeto.",
            "Queue": "Você nomeou a classe como 'Queue'. Entendo que você quer que essa classe represente uma Fila.",
            "constructor": "Você digitou 'constructor'. Isso é uma função especial que me diz o que fazer quando alguém cria uma nova Queue.",
            "constructor()": "Esses parênteses () me dizem que o comando anterior pode receber informações ou configurações.",
            "this": "A palavra-chave 'this' refere-se a este objeto específico. No caso, refere-se ao próprio objeto Queue.",
            "this.": "Quando você digita um '.' depois de uma palavra, você está pedindo para acessar algo que pertence àquilo que veio antes do ponto, como um atributo ou uma função.",
            "this.first": "'this.first' me diz que estamos criando uma propriedade chamada first dentro do objeto Queue.",
            "=": "Quando você digita '=', você está me dizendo para pegar o valor à direita do '=' e guardá-lo na variável ou propriedade à esquerda do '='.",
            "===": "Quando você digita '===', eu entendo que é para comparar os dois valores e verificar se eles são exatamente iguais, incluindo o tipo de dado.",
            "size++": "Quando você digita '++' após uma palavra, está me dizendo para pegar o valor atual dessa variável, adicionar 1 a ela e atualizar a variável com o novo valor. Agora, essa variável é igual ao próximo número inteiro maior. Por exemplo: se a variável tinha o valor '1', variavel++ será '2'.",
            "size--": "Quando você digita '--' após uma palavra, está me dizendo para pegar o valor atual dessa variável, subtrair 1 a ela e atualizar a variável com o novo valor. Agora, essa variável é igual ao próximo número inteiro menor. Por exemplo: se a variável tinha o valor '2', variavel-- será '1'.",
            "null": "Quando você digita null, você está me dizendo que não há nenhum valor aqui. Eu entendo isso como 'vazio' ou 'ausente'. É como dizer: 'Esta variável existe, mas ainda não tem nada dentro dela para eu usar.' ",            "this.last": "'this.last' me diz que estamos criando outra propriedade, chamada last, que representará o último elemento na fila.",
            "this.last = null": "'this.last = null' Isso indica que, por enquanto, não há ninguém ou nada no final da fila.",
            "this.size": "Você criou 'this.size'. Aqui, estamos definindo uma propriedade para acompanhar o tamanho da fila.",
            "0": "Você colocou '0'. Com isso, sei que estamos começando a fila do zero.",
            "0;": "Você digitou ';' - o ponto e vírgula no final de uma instrução serve como um sinal para eu entender que uma instrução chegou ao fim e a próxima pode começar.",            
            "null;": "Você digitou ';' - o ponto e vírgula no final de uma instrução serve como um sinal para eu entender que uma instrução chegou ao fim e a próxima pode começar.",            
            "};": "Você digitou ';' - o ponto e vírgula no final de uma instrução serve como um sinal para eu entender que uma instrução chegou ao fim e a próxima pode começar.",            
            "if": "Quando você digita 'if' eu entendo que é para verificar 'se' o que está entre os parênteses '( )' for verdadeiro, eu devo executar o que está dentro das chaves '{ }'.",
            "else": "Quando você digita 'else' eu entendo que é para verificar 'se' a condição do 'if' foi falsa, eu devo executar o que está dentro das chaves '{ }' do bloco imediatamente a seguir.",
            "return": "Quando você digita 'return', eu entendo que é para parar a execução da função imediatamente e devolver o valor especificado para o ponto onde a função foi chamada, no caso, neste ponto.",
            "const": "Quando você digita 'const', eu entendo que é para criar uma variável 'constante' que não pode ser reatribuída, mas dentro de objetos ou arrays, seus valores internos ainda podem ser modificados.",
            "isEmpty ou empty": "Quando você digita 'isEmpty' ou 'empty', eu entendo que é para verificar se a estrutura (como uma string, array ou lista) está vazia, ou seja, sem conteúdo ou elementos.",
            "new": "Quando você digita 'new depos de =', eu entendo que é para criar uma nova instância ou objeto com base no que vem depois de 'new'.",
            "enqueue(value)": "Quando você usa enqueue(value), você está me pedindo para adicionar o value ao final de uma fila. Eu coloco o elemento na última posição, seguindo a ordem em que os itens chegam, para que o primeiro a entrar seja o primeiro a sair (FIFO - First In, First Out).",
            "value": "Quando você escreve value: value, você está me dizendo que existe uma chave chamada value com um conteúdo associado, que também se chama value. Isso pode ser usado em objetos, dicionários ou estruturas de dados que armazenam pares de chave-valor.",
            "next": "Quando você usa next, você está me pedindo para ir ao próximo elemento. Eu procuro o próximo item em uma sequência, lista, nó ou iterador, dependendo do contexto, e o retorno para você.",
            "(this.isEmpty()": "Quando você usa this.isEmpty(), está me pedindo para verificar se a fila está vazia. Se a fila estiver vazia, o método retorna true, caso contrário, retorna false.",
            "this.first = newNode;": "Quando você usa this.first = newNode;, está me dizendo que a primeira posição da fila agora está ocupada pelo novo nó que você criou. Isso significa que o novo elemento agora é o primeiro da fila.",
            "this.last = newNode;": "Quando você usa this.last = newNode;, está me dizendo que o último elemento da fila agora é o novo nó que você criou. Isso significa que o novo elemento agora é o último da fila.",
            "this.last.next = newNode;": "Quando você usa this.last.next = newNode;, está me dizendo que o próximo elemento após o último elemento da fila agora é o novo nó que você criou. Isso significa que o novo elemento agora é o próximo elemento após o último da fila.",
            "this.size++;": "Quando você usa this.size++;, está me dizendo que você está incrementando o valor da propriedade size em 1. Isso significa que o tamanho da fila agora é um número maior do que antes.",
            "return this;": "Quando você usa return this;, está me dizendo que você está retornando a instância da fila para o ponto onde a função foi chamada. Isso significa que a fila inteira é retornada para o ponto onde a função foi chamada.",
        }
    }
};