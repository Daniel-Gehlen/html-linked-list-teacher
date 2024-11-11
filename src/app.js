// Global state
var gameState = {
    currentLanguage: 'en',
    texts: {
        en: {
            welcome: "Welcome, ",
            intro: "Learn about Queues through interactive coding challenges!",
            resetButton: "Reset Progress",
            switchLanguage: "Switch Language",
            levelTitles: [
                "Queue Class Creation",
                "Enqueue Implementation",
                "Dequeue Implementation",
                "isEmpty Check",
                "Queue Usage",
                "Queue Operations"
            ],
            instructions: [
                "Create a basic Queue class structure",
                "Implement the enqueue method",
                "Implement the dequeue method",
                "Implement the isEmpty check",
                "Create and add elements to queue",
                "Remove elements from queue"
            ],
            submitButton: "Submit Code",
            explanations: {
                "Queue": "A Queue is a First-In-First-Out (FIFO) data structure",
                "enqueue": "Adds an element to the end of the queue",
                "dequeue": "Removes and returns the first element from the queue"
            },
            correctFeedback: "Correct! Moving to next level.",
            incorrectFeedback: "Try again! Check your code.",
            completionMessage: "Congratulations! You've completed all levels!"
        },
        pt: {
            welcome: "Bem-vindo, ",
            intro: "Aprenda sobre Filas através de desafios interativos!",
            resetButton: "Reiniciar Progresso",
            switchLanguage: "Mudar Idioma",
            levelTitles: [
                "Criação da Classe Fila",
                "Implementação do Enfileirar",
                "Implementação do Desenfileirar",
                "Verificação de Vazio",
                "Uso da Fila",
                "Operações com Fila"
            ],
            instructions: [
                "Crie a estrutura básica da classe Fila",
                "Implemente o método enfileirar",
                "Implemente o método desenfileirar",
                "Implemente a verificação de vazio",
                "Crie e adicione elementos à fila",
                "Remova elementos da fila"
            ],
            submitButton: "Enviar Código",
            explanations: {
                "Fila": "Uma Fila é uma estrutura de dados Primeiro-a-Entrar-Primeiro-a-Sair (FIFO)",
                "enfileirar": "Adiciona um elemento ao final da fila",
                "desenfileirar": "Remove e retorna o primeiro elemento da fila"
            },
            correctFeedback: "Correto! Avançando para o próximo nível.",
            incorrectFeedback: "Tente novamente! Verifique seu código.",
            completionMessage: "Parabéns! Você completou todos os níveis!"
        }
    }
};
document.addEventListener('DOMContentLoaded', function () {
    try {
        validateUser();
        initializeGame();
        setupEventListeners();
    }
    catch (error) {
        console.error("Error initializing game:", error);
        alert("Failed to initialize game. Please refresh the page.");
    }
});
function validateUser() {
    var username = localStorage.getItem('username');
    if (!username) {
        var newUsername = prompt("Please enter your name:") || "Student";
        localStorage.setItem('username', newUsername);
    }
}
function initializeGame() {
    var usernameDisplay = document.getElementById('username-display');
    if (!usernameDisplay)
        throw new Error('Username display element not found');
    var storedUsername = localStorage.getItem('username') || 'Student';
    usernameDisplay.textContent = gameState.texts[gameState.currentLanguage].welcome + storedUsername;
    var currentLevel = parseInt(localStorage.getItem('currentLevel') || '1');
    setupLevels(currentLevel);
    applyLanguageTexts(gameState.currentLanguage);
}
function setupLevels(currentLevel) {
    for (var i = 1; i <= 6; i++) {
        var levelElement = document.getElementById("level-".concat(i));
        if (!levelElement)
            throw new Error("Level ".concat(i, " element not found"));
        if (i === currentLevel) {
            levelElement.classList.remove('hidden');
        }
        else {
            levelElement.classList.add('hidden');
        }
    }
    for (var i = 0; i < currentLevel; i++) {
        updateProgress(i);
    }
}
function validateCode(level, expectedCode) {
    var codeInput = document.getElementById("code-input-".concat(level));
    var feedback = document.getElementById("feedback-".concat(level));
    if (!codeInput || !feedback) {
        throw new Error("Required elements for level ".concat(level, " not found"));
    }
    var userCode = codeInput.value.trim();
    var isCorrect = compareCode(userCode, expectedCode);
    if (isCorrect) {
        handleCorrectSubmission(level, feedback);
    }
    else {
        handleIncorrectSubmission(feedback);
    }
}
function compareCode(userCode, expectedCode) {
    var normalizeCode = function (code) { return code.replace(/\s+/g, ' ').trim(); };
    return normalizeCode(userCode) === normalizeCode(expectedCode);
}
function handleCorrectSubmission(level, feedback) {
    feedback.textContent = gameState.texts[gameState.currentLanguage].correctFeedback;
    feedback.style.color = "green";
    var currentLevelElement = document.getElementById("level-".concat(level));
    if (!currentLevelElement)
        throw new Error("Level ".concat(level, " element not found"));
    currentLevelElement.classList.add('hidden');
    updateProgress(level);
    var nextLevel = level + 1;
    if (nextLevel <= 6) {
        var nextLevelElement = document.getElementById("level-".concat(nextLevel));
        if (!nextLevelElement)
            throw new Error("Next level ".concat(nextLevel, " element not found"));
        nextLevelElement.classList.remove('hidden');
        localStorage.setItem('currentLevel', nextLevel.toString());
    }
    else {
        alert(gameState.texts[gameState.currentLanguage].completionMessage);
    }
}
function handleIncorrectSubmission(feedback) {
    feedback.textContent = gameState.texts[gameState.currentLanguage].incorrectFeedback;
    feedback.style.color = "red";
}
function updateProgress(level) {
    var progressLevel = document.getElementById("level-progress-".concat(level));
    if (progressLevel) {
        progressLevel.classList.add('filled');
    }
}
function resetProgress() {
    localStorage.setItem('currentLevel', '1');
    document.querySelectorAll('.progress-level').forEach(function (level) {
        level.classList.remove('filled');
    });
    setupLevels(1);
}
function setupEventListeners() {
    var expectedCodes = [
        "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }",
        "enqueue(value) { const newNode = { value: value, next: null }; if (this.isEmpty()) { this.first = newNode; this.last = newNode; } else { this.last.next = newNode; this.last = newNode; } this.size++; return this; }",
        "dequeue() { if (this.isEmpty()) return null; const removedNode = this.first; this.first = this.first.next; if (this.first === null) { this.last = null; } this.size--; return removedNode.value; }",
        "isEmpty() { return this.size === 0; }",
        "const fila = new Queue(); fila.enqueue(10); fila.enqueue(20); fila.enqueue(30);",
        "fila.dequeue(); fila.dequeue();"
    ];
    expectedCodes.forEach(function (code, index) {
        var level = index + 1;
        var submitButton = document.getElementById("submit-code-".concat(level));
        if (submitButton) {
            submitButton.addEventListener('click', function () { return validateCode(level, code); });
        }
    });
    var resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', resetProgress);
    }
    setupExplanationCloud();
    var languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
}
var ExplanationHandler = /** @class */ (function () {
    function ExplanationHandler() {
        var cloud = document.getElementById("explanation-cloud");
        var text = document.getElementById("explanation-text");
        if (!cloud || !text) {
            throw new Error('Explanation elements not found');
        }
        this.cloud = cloud;
        this.text = text;
        this.isVisible = false;
        this.initialize();
    }
    ExplanationHandler.prototype.initialize = function () {
        var _this = this;
        document.querySelectorAll("textarea[id^='code-input']").forEach(function (area) {
            area.addEventListener("mouseover", function () { return _this.showExplanation(area.id); });
            area.addEventListener("mouseout", function () { return _this.hideExplanation(); });
        });
    };
    ExplanationHandler.prototype.showExplanation = function (areaId) {
        var language = gameState.currentLanguage;
        var term = areaId.split('-')[2];
        var explanation = gameState.texts[language].explanations[term] || "Explanation not available";
        this.text.textContent = explanation;
        this.cloud.style.opacity = "1";
        this.isVisible = true;
    };
    ExplanationHandler.prototype.hideExplanation = function () {
        if (this.isVisible) {
            this.cloud.style.opacity = "0";
            this.isVisible = false;
        }
    };
    return ExplanationHandler;
}());
function setupExplanationCloud() {
}
function toggleLanguage() {
    gameState.currentLanguage = gameState.currentLanguage === 'en' ? 'pt' : 'en';
    applyLanguageTexts(gameState.currentLanguage);
}
function applyLanguageTexts(language) {
    var langTexts = gameState.texts[language];
    var introText = document.getElementById('intro');
    var switchLangButton = document.getElementById('switch-language');
    var resetButton = document.getElementById('reset-button');
    if (introText)
        introText.textContent = langTexts.intro;
    if (switchLangButton)
        switchLangButton.textContent = langTexts.switchLanguage;
    if (resetButton)
        resetButton.textContent = langTexts.resetButton;
    langTexts.levelTitles.forEach(function (title, i) {
        var levelTitle = document.getElementById("level-title-".concat(i + 1));
        var instruction = document.getElementById("instruction-".concat(i + 1));
        if (levelTitle)
            levelTitle.textContent = title;
        if (instruction)
            instruction.textContent = langTexts.instructions[i];
    });
}
