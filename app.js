document.addEventListener('DOMContentLoaded', function () {
    const usernameDisplay = document.getElementById('username-display');
    const storedUsername = localStorage.getItem('username');
    usernameDisplay.textContent = storedUsername || 'Student';

    let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 0;
    let currentLanguage = localStorage.getItem('currentLanguage') || 'en';

    const texts = {
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
                "(": "These parentheses () tell me that the previous command can receive information or settings.",
                ")": "These parentheses () tell me that the previous command can receive information or settings.",
                "class": "You typed 'class'. When I see this word, I understand that you're defining a new type of object.",
                "Queue": "You named the class 'Queue'. I understand that you want this class to represent a Queue.",
                "constructor": "You typed 'constructor'. This is a special function that tells me what to do when someone creates a new Queue.",
                "this": "The 'this' keyword refers to this specific object. In this case, it refers to the Queue object itself.",
                "this.first": "'this.first' tells me we're creating a property called first inside the Queue object.",
                "this.first = null": "You have set 'this.first = null'. This means that when you create the queue, first is still empty or has no value.",
                "this.last": "'this.last' tells me we're creating another property called last that will represent the last element in the queue.",
                "this.last = null": "'this.last = null' This indicates that, for now, there is no one or nothing at the end of the queue.",
                "this.size": "You created 'this.size'. Here, we're defining a property to track the queue's size.",
                "this.size = 0": "You put 'this.size = 0'. With this I know we are starting the queue from scratch."
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
                level2: [
                    "Verifique se está criando um novo nó com a estrutura correta",
                    "Verifique o tratamento da condição isEmpty()",
                    "Certifique-se de que está atualizando os ponteiros first e last corretamente"
                ],
                level3: [
                    "Verifique a checagem isEmpty() no início",
                    "Verifique se está atualizando o ponteiro first corretamente",
                    "Certifique-se de que está tratando o caso quando a fila fica vazia"
                ],
                level4: [
                    "Certifique-se de que está verificando a propriedade size",
                    "Verifique se está retornando um valor booleano",
                    "Verifique o operador de comparação"
                ],
                level5: [
                    "Verifique se está criando uma nova instância de Queue",
                    "Verifique se está chamando enqueue com os valores corretos",
                    "Certifique-se de que está encadeando as operações corretamente"
                ],
                level6: [
                    "Certifique-se de que está chamando dequeue o número correto de vezes",
                    "Verifique se não está armazenando os valores retornados desnecessariamente",
                    "Verifique se as operações estão na ordem correta"
                ]
            },
            completed: "Parabéns! Você completou este nível da implementação da Fila!",
            explanations: {
                ";": "Você digitou ';' - o ponto e vírgula no final de uma instrução serve como um sinal para eu entender que uma instrução chegou ao fim e a próxima pode começar.",
                "{": "Esses { } são chaves. Elas me dizem onde o código começa e termina. Tudo que está entre { } vai pertencer ao bloco e definirá o que ela faz.",
                "}": "Esses { } são chaves. Elas me dizem onde o código começa e termina. Tudo que está entre { } vai pertencer ao bloco e definirá o que ela faz.",
                "(": "Esses parênteses () me dizem que o comando anterior pode receber informações ou configurações.",
                ")": "Esses parênteses () me dizem que o comando anterior pode receber informações ou configurações.",
                "class": "Você digitou 'class'. Quando vejo essa palavra, entendo que você está definindo um novo tipo de objeto.",
                "Queue": "Você nomeou a classe como 'Queue'. Entendo que você quer que essa classe represente uma Fila.",
                "constructor": "Você digitou 'constructor'. Isso é uma função especial que me diz o que fazer quando alguém cria uma nova Queue.",
                "this": "A palavra-chave 'this' refere-se a este objeto específico. No caso, refere-se ao próprio objeto Queue.",
                "this.first": "'this.first' me diz que estamos criando uma propriedade chamada first dentro do objeto Queue.",
                "this.first = null": "Você definiu 'this.first = null'. Isso significa que, ao criar a fila, first ainda está vazio ou não tem valor.",
                "this.last": "'this.last' me diz que estamos criando outra propriedade, chamada last, que representará o último elemento na fila.",
                "this.last = null": "'this.last = null' Isso indica que, por enquanto, não há ninguém ou nada no final da fila.",
                "this.size": "Você criou 'this.size'. Aqui, estamos definindo uma propriedade para acompanhar o tamanho da fila.",
                "this.size = 0": "Você colocou 'this.size = 0'. Com isso, sei que estamos começando a fila do zero."
            }
        }
    };

    function validateCode(level, expectedCode) {
        const codeInput = document.getElementById(`code-input-${level}`).value.trim();
        const feedback = document.getElementById(`feedback-${level}`);
        const currentTexts = texts[currentLanguage];

        if (codeInput === expectedCode) {
            feedback.textContent = currentTexts.correct;
            feedback.style.color = "green";
            document.getElementById(`level-${level}`).classList.add('hidden');
            updateProgress(level);

            const nextLevel = level + 1;
            if (nextLevel <= 6) {
                document.getElementById(`level-${nextLevel}`).classList.remove('hidden');
                localStorage.setItem('currentLevel', nextLevel);
            } else {
                alert(currentTexts.completed);
            }
        } else {
            feedback.innerHTML = `${currentTexts.incorrect}<br>`;
            feedback.style.color = "red";

            // Add specific error messages based on the level
            const errors = currentTexts.errors[`level${level}`];
            errors.forEach(error => {
                feedback.innerHTML += `- ${error}<br>`;
            });
        }
    }

    function updateProgress(level) {
        const progressLevel = document.getElementById(`level-progress-${level}`);
        if (progressLevel) {
            progressLevel.classList.add('filled');
        }
    }

    function resetProgress() {
        localStorage.setItem('currentLevel', '0');
        currentLevel = 0;

        const progressLevels = document.querySelectorAll('.progress-level');
        progressLevels.forEach(level => level.classList.remove('filled'));
        document.getElementById('level-progress-0').classList.add('filled');

        for (let i = 1; i <= 6; i++) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
        document.getElementById('level-1').classList.remove('hidden');
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        localStorage.setItem('currentLanguage', currentLanguage);
        updateUILanguage();
    }

    function updateUILanguage() {
        const currentTexts = texts[currentLanguage];

        // Update main UI elements
        document.getElementById("username-display").textContent = currentTexts.welcome + (localStorage.getItem('username') || 'Student');
        document.querySelector("p").textContent = currentTexts.intro;
        document.getElementById("reset-button").textContent = currentTexts.resetButton;
        document.getElementById("language-toggle").textContent = currentTexts.switchLanguage;

        // Update levels
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`level-${i}-title`).textContent = currentTexts.levelTitles[i - 1];
            document.getElementById(`level-${i}-instructions`).textContent = currentTexts.instructions[i - 1];
            document.getElementById(`submit-code-${i}`).textContent = currentTexts.submitButton;
        }
    }

    const explanationCloud = document.getElementById("explanation-cloud");
    const explanationText = document.getElementById("explanation-text");

    function showExplanation(word) {
        const currentTexts = texts[currentLanguage];
        if (currentTexts.explanations[word]) {
            explanationText.textContent = currentTexts.explanations[word];
            explanationCloud.classList.remove("hidden");
        } else {
            explanationCloud.classList.add("hidden");
        }
    }

    // Event Listeners
    document.getElementById('submit-code-1').addEventListener('click', function () {
        validateCode(1, "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }");
    });
    document.getElementById('submit-code-2').addEventListener('click', function () {
        validateCode(2, "enqueue(value) { const newNode = { value: value, next: null }; if (this.isEmpty()) { this.first = newNode; this.last = newNode; } else { this.last.next = newNode; this.last = newNode; } this.size++; return this; }");
    });
    document.getElementById('submit-code-3').addEventListener('click', function () {
        validateCode(3, "dequeue() { if (this.isEmpty()) return null; const removedNode = this.first; this.first = this.first.next; if (this.first === null) { this.last = null; } this.size--; return removedNode.value; }");
    });
    document.getElementById('submit-code-4').addEventListener('click', function () {
        validateCode(4, "isEmpty() { return this.size === 0; }");
    });
    document.getElementById('submit-code-5').addEventListener('click', function () {
        validateCode(5, "const fila = new Queue(); fila.enqueue(10); fila.enqueue(20); fila.enqueue(30);");
    });
    document.getElementById('submit-code-6').addEventListener('click', function () {
        validateCode(6, "fila.dequeue(); fila.dequeue();");
    });

    document.getElementById('reset-button').addEventListener('click', resetProgress);
    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

    document.querySelectorAll("textarea[id^='code-input']").forEach((textarea) => {
        textarea.addEventListener("input", (event) => {
            const words = event.target.value.split(/\s+/);
            const lastWord = words[words.length - 1].trim();
            showExplanation(lastWord);
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest("textarea")) {
            explanationCloud.classList.add("hidden");
        }
    });

    // Initial setup
    for (let i = 0; i <= currentLevel; i++) {
        updateProgress(i);
        if (i > 0) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
    }
    document.getElementById(`level-${currentLevel}`).classList.remove('hidden');
    updateUILanguage();
});