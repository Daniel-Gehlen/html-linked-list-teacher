document.addEventListener('DOMContentLoaded', function () {
    const usernameDisplay = document.getElementById('username-display');
    const storedUsername = localStorage.getItem('username');
    usernameDisplay.textContent = storedUsername || 'Student';

    let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 0;

    function validateCode(level, expectedCode) {
        const codeInput = document.getElementById(`code-input-${level}`).value.trim();
        const feedback = document.getElementById(`feedback-${level}`);

        if (codeInput === expectedCode) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
            document.getElementById(`level-${level}`).classList.add('hidden');
            updateProgress(level);

            const nextLevel = level + 1;
            if (nextLevel <= 6) {
                document.getElementById(`level-${nextLevel}`).classList.remove('hidden');
                localStorage.setItem('currentLevel', nextLevel);
            } else {
                alert("Congratulations! You completed this level of the linked list!");
            }
        } else {
            feedback.textContent = "Try again!";
            feedback.style.color = "red";
        }
    }

    function updateProgress(level) {
        const progressLevel = document.getElementById(`level-progress-${level}`);
        if (progressLevel) {
            progressLevel.classList.add('filled');
        }
    }

    function resetProgress() {
        localStorage.removeItem('currentLevel');
        currentLevel = 0;

        const progressLevels = document.querySelectorAll('.progress-level');
        progressLevels.forEach(level => level.classList.remove('filled'));
        document.getElementById('level-progress-0').classList.add('filled');

        for (let i = 1; i <= 6; i++) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
        document.getElementById('level-1').classList.remove('hidden');
    }

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

    for (let i = 0; i <= currentLevel; i++) {
        updateProgress(i);
        if (i > 0) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
    }
    document.getElementById(`level-${currentLevel}`).classList.remove('hidden');
});

const explanations = {
    "class": "Você digitou 'class'...",
    "Queue": "Você nomeou a classe como 'Queue'...",
    "constructor": "Você digitou 'constructor'...",
    "this": "A palavra-chave 'this' refere-se...",
    "first": "'first' é uma propriedade...",
    "last": "'last' é uma propriedade...",
    "size": "'size' é uma propriedade usada...",
    "null": "'null' significa que a propriedade não..."
};

const explanationCloud = document.getElementById("explanation-cloud");
const explanationText = document.getElementById("explanation-text");

function showExplanation(word) {
    if (explanations[word]) {
        explanationText.textContent = explanations[word];
        explanationCloud.classList.remove("hidden");
    } else {
        explanationCloud.classList.add("hidden");
    }
}

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

let currentLanguage = 'en';

const texts = {
    en: {
        welcome: "Welcome, ",
        intro: "This is an introduction to linked lists.",
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
        submitButton: "Submit Code"
    },
    pt: {
        welcome: "Bem-vindo, ",
        intro: "Esta é uma introdução às listas ligadas.",
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
        submitButton: "Enviar Código"
    }
};


function toggleLanguage() {
    // Alterna o idioma atual entre 'en' e 'pt'
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    const langTexts = texts[currentLanguage];

    // Atualiza os textos conforme o idioma atual
    document.getElementById("username-display").textContent = langTexts.welcome + (localStorage.getItem('username') || 'Student');
    document.querySelector("p").textContent = langTexts.intro;
    document.getElementById("reset-button").textContent = langTexts.resetButton;

    // Atualiza os títulos e instruções dos níveis
    for (let i = 1; i <= 6; i++) {
        document.querySelector(`#level-${i} h2`).textContent = langTexts.levelTitles[i - 1];
        document.querySelector(`#level-${i} p`).textContent = langTexts.instructions[i - 1];
        document.getElementById(`submit-code-${i}`).textContent = langTexts.submitButton;
    }

    // Atualiza o texto do botão para alternar idioma
    document.getElementById("language-toggle").textContent = langTexts.switchLanguage;
}
