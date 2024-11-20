// main.js
import { texts } from './ui-texts.js';
import languageImplementations from './program-languages-config.js';
import validators from './validators-code.js';

document.addEventListener('DOMContentLoaded', function () {
    // State management
    let currentUILanguage = localStorage.getItem('currentUILanguage') || 'en';
    let currentProgrammingLanguage = localStorage.getItem('currentProgrammingLanguage') || 'javascript';

    // Initialize UI
    function initializeUI() {
        setupLanguageSelector();
        updateUILanguage();
        setupLevelProgress();
        setupEventListeners();
        updateUIForProgrammingLanguage();
    }

    // Language Selector Setup
    function setupLanguageSelector() {
        const selector = document.getElementById('language-selector');
        Object.keys(languageImplementations).forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = languageImplementations[lang].name;
            selector.appendChild(option);
        });
        selector.value = currentProgrammingLanguage;
    }

    function setupLevelProgress() {
        const currentLevel = parseInt(localStorage.getItem('currentLevel'), 10) || 1;
    
        // Marca os níveis concluídos
        for (let i = 0; i < currentLevel; i++) {
            const progressLevel = document.getElementById(`level-progress-${i}`);
            if (progressLevel) {
                progressLevel.classList.add('filled');
            }
        }
    
        // Mostra apenas o nível atual
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
        document.getElementById(`level-${currentLevel}`).classList.remove('hidden');
    } 

    // Code Validation
    function validateCode(level) {
        const codeInput = document.getElementById(`code-input-${level}`).value.trim();
        const feedback = document.getElementById(`feedback-${level}`);
        const currentValidator = validators[currentProgrammingLanguage]?.[`validateLevel${level}`];
    
        if (currentValidator) {
            const validationResult = currentValidator(codeInput);
    
            if (validationResult.isValid) {
                handleCorrectSubmission(level, feedback, texts[currentUILanguage]);
            } else {
                handleIncorrectSubmission(level, feedback, texts[currentUILanguage], validationResult.errors);
            }
        } else {
            feedback.textContent = "O validador para este nível não foi encontrado. Verifique o código.";
            feedback.style.color = "orange";
        }
    }  
    

    function handleCorrectSubmission(level, feedback, currentTexts) {
        // Mensagem de sucesso ao usuário
        feedback.textContent = currentTexts.correct;
        feedback.style.color = "green";
    
        // Esconde o nível atual
        document.getElementById(`level-${level}`).classList.add('hidden');
    
        // Atualiza o progresso
        updateProgress(level);
    
        // Lida com a exibição do próximo nível ou finaliza o jogo
        const nextLevel = level + 1;
        if (nextLevel <= 6) {
            document.getElementById(`level-${nextLevel}`).classList.remove('hidden');
            localStorage.setItem('currentLevel', nextLevel);
        } else {
            alert(currentTexts.completed); // Alerta ao completar o último nível
        }
    }
    
    function handleIncorrectSubmission(level, feedback, currentTexts, validationErrors) {
        // Mensagem inicial de erro ao usuário
        feedback.innerHTML = `${currentTexts.incorrect}<br>`;
        feedback.style.color = "red";
    
        // Exibe os erros retornados pelo validador
        validationErrors.forEach(error => {
            feedback.innerHTML += `- ${error}<br>`;
        });
    }
    

    // Progress Management
    function updateProgress(level) {
        const progressLevel = document.getElementById(`level-progress-${level}`);
        if (progressLevel) {
            progressLevel.classList.add('filled');
        }
    }

    function resetProgress() {
        localStorage.setItem('currentLevel', '1');
        
        const progressLevels = document.querySelectorAll('.progress-level');
        progressLevels.forEach(level => level.classList.remove('filled'));
        document.getElementById('level-progress-0').classList.add('filled');

        for (let i = 1; i <= 6; i++) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
        document.getElementById('level-1').classList.remove('hidden');
    }

    // Language Toggle
    function toggleLanguage() {
        currentUILanguage = currentUILanguage === 'en' ? 'pt' : 'en';
        localStorage.setItem('currentUILanguage', currentUILanguage);
        updateUILanguage();
    }

    // UI Updates
    function updateUILanguage() {
        const currentTexts = texts[currentUILanguage];
        
        // Update main UI elements
        document.getElementById("username-display").textContent = 
            currentTexts.welcome + (localStorage.getItem('username') || 'Student');
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

    // Event Listeners Setup
    function setupEventListeners() {
        // Submit buttons
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`submit-code-${i}`).addEventListener('click', () => validateCode(i));
        }

        // Reset and language buttons
        document.getElementById('reset-button').addEventListener('click', resetProgress);
        document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
        
        // Code input explanation handlers
        setupExplanationListeners();
    }

    function setupExplanationListeners() {
        const explanationCloud = document.getElementById("explanation-cloud");
        const explanationText = document.getElementById("explanation-text");

        document.querySelectorAll("textarea[id^='code-input']").forEach((textarea) => {
            textarea.addEventListener("input", (event) => {
                const words = event.target.value.split(/\s+/);
                const lastWord = words[words.length - 1].trim();
                showExplanation(lastWord, explanationCloud, explanationText);
            });
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest("textarea")) {
                explanationCloud.classList.add("hidden");
            }
        });
    }

    function showExplanation(word, cloud, text) {
        const currentTexts = texts[currentUILanguage];
        if (currentTexts.explanations[word]) {
            text.textContent = currentTexts.explanations[word];
            cloud.classList.remove("hidden");
        } else {
            cloud.classList.add("hidden");
        }
    }

    function updateUIForProgrammingLanguage() {
        const selector = document.getElementById('language-selector');
        selector.addEventListener('change', () => {
            currentProgrammingLanguage = selector.value;
            localStorage.setItem('currentProgrammingLanguage', currentProgrammingLanguage);
            // Adicione aqui o código para atualizar o restante da interface, se necessário.
        });
    }
    

    // Initialize application
    initializeUI();
});