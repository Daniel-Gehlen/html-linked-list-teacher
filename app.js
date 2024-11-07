document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username-display');
    const storedUsername = localStorage.getItem('username');
    usernameDisplay.textContent = storedUsername || 'Student';

    // Função para validar o código do Nível 1
    function validateLevel1() {
        const codeInput = document.getElementById('code-input').value.trim();
        const feedback = document.getElementById('feedback');

        if (codeInput === "let node = { value: 1, next: null };") {
            feedback.textContent = "Great job! You've created a simple node.";
            feedback.style.color = "green";
        } else if (codeInput.includes("let node = {}") && (codeInput.includes("node.value") || codeInput.includes("node.next"))) {
            feedback.textContent = "Close! Ensure both 'value' and 'next' are set in a single line.";
            feedback.style.color = "orange";
        } else {
            feedback.textContent = "Try again! Remember to define a node with 'value' and 'next'.";
            feedback.style.color = "red";
        }
    }

    // Submeter com botão ou "Enter" para o Nível 1
    document.getElementById('submit-code').addEventListener('click', validateLevel1);
    document.getElementById('code-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') validateLevel1();
    });

    // Função para validar o código do Nível 2
    function validateLevel2() {
        const codeInputLevel2 = document.getElementById('code-input-level-2').value.trim();
        const feedbackLevel2 = document.getElementById('feedback-level-2');

        if (codeInputLevel2 === "let node2 = { value: 2, next: null }; node.next = node2;") {
            feedbackLevel2.textContent = "Great job! You've linked the nodes correctly.";
            feedbackLevel2.style.color = "green";
        } else if (codeInputLevel2.includes("node2 = {") && codeInputLevel2.includes("node.next")) {
            feedbackLevel2.textContent = "Almost there! Check the structure of your node2 declaration and linking.";
            feedbackLevel2.style.color = "orange";
        } else {
            feedbackLevel2.textContent = "Try again! Make sure to link node.next to node2.";
            feedbackLevel2.style.color = "red";
        }
    }

    // Submeter com botão ou "Enter" para o Nível 2
    document.getElementById('submit-code-level-2').addEventListener('click', validateLevel2);
    document.getElementById('code-input-level-2').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') validateLevel2();
    });
});

    // Pilha de Progresso
    document.addEventListener('DOMContentLoaded', function() {
        let currentLevel = 0; // Controla o nível atual
    
        const submitButton = document.getElementById('submit-code');
        const feedback = document.getElementById('feedback');
    
        submitButton.addEventListener('click', function() {
            const codeInput = document.getElementById('code-input').value.trim();
    
            // Controle do progresso para criar o nó
            if (codeInput === "let node = { value: 1, next: null };") {
                currentLevel = 1;
                updateProgress();
                feedback.textContent = "Great job! You've created a simple node.";
                feedback.style.color = "green";
            } else if (codeInput.includes("node.value") || codeInput.includes("node.next")) {
                feedback.textContent = "Close! Make sure to set both 'value' and 'next' properties in a single statement.";
                feedback.style.color = "orange";
            } else {
                feedback.textContent = "Try again! Remember to define a node with 'value' and 'next'.";
                feedback.style.color = "red";
            }
        });
    
        function updateProgress() {
            const levels = document.querySelectorAll('.progress-level');
            
            // Preenche os níveis conforme o progresso do aluno
            for (let i = 0; i < currentLevel; i++) {
                levels[i].classList.add('filled');
            }
        }
    });
    
