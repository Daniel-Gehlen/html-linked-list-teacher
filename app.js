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

    // Função para resetar o progresso
    function resetProgress() {
        localStorage.removeItem('currentLevel'); // Remove o progresso salvo
        currentLevel = 0; // Reseta o nível atual para 0

        // Remove o preenchimento dos níveis na barra de progresso
        const progressLevels = document.querySelectorAll('.progress-level');
        progressLevels.forEach(level => level.classList.remove('filled'));
        document.getElementById('level-progress-0').classList.add('filled'); // Preenche apenas o nível 0

        // Esconde todos os níveis e mostra apenas o nível 1
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
        document.getElementById('level-1').classList.remove('hidden'); // Mostra o primeiro nível
    }

    // Eventos para submeter código de cada nível
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

    // Evento para o botão de reset
    document.getElementById('reset-button').addEventListener('click', resetProgress);

    // Restaurar o progresso ao carregar
    for (let i = 0; i <= currentLevel; i++) {
        updateProgress(i);
        if (i > 0) {
            document.getElementById(`level-${i}`).classList.add('hidden');
        }
    }
    document.getElementById(`level-${currentLevel}`).classList.remove('hidden');
});
