document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username-display');
    const storedUsername = localStorage.getItem('username');
    usernameDisplay.textContent = storedUsername || 'Student';

    // Obtém o nível atual do progresso ou começa no nível 1
    let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;

    function validateCode(level, expectedCode) {
        const codeInput = document.getElementById(`code-input-${level}`).value.trim();
        const feedback = document.getElementById(`feedback-${level}`);
        
        if (codeInput === expectedCode) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
            document.getElementById(`level-${level}`).classList.add('hidden');

            // Atualiza o progresso e passa ao próximo nível ou finaliza
            updateProgress(level);

            const nextLevel = level + 1;
            if (nextLevel <= 6) {
                document.getElementById(`level-${nextLevel}`).classList.remove('hidden');
                localStorage.setItem('currentLevel', nextLevel); // Guarda o progresso
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

    // Eventos para submeter código de cada nível
    document.getElementById('submit-code-1').addEventListener('click', function() {
        validateCode(1, "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }");
    });

    document.getElementById('submit-code-2').addEventListener('click', function() {
        validateCode(2, "enqueue(value) { const newNode = { value: value, next: null }; if (this.isEmpty()) { this.first = newNode; this.last = newNode; } else { this.last.next = newNode; this.last = newNode; } this.size++; return this; }");
    });

    document.getElementById('submit-code-3').addEventListener('click', function() {
        validateCode(3, "dequeue() { if (this.isEmpty()) return null; const removedNode = this.first; this.first = this.first.next; if (this.first === null) { this.last = null; } this.size--; return removedNode.value; }");
    });

    document.getElementById('submit-code-4').addEventListener('click', function() {
        validateCode(4, "isEmpty() { return this.size === 0; }");
    });

    document.getElementById('submit-code-5').addEventListener('click', function() {
        validateCode(5, "const fila = new Queue(); fila.enqueue(10); fila.enqueue(20); fila.enqueue(30);");
    });

    document.getElementById('submit-code-6').addEventListener('click', function() {
        validateCode(6, "fila.dequeue(); fila.dequeue();");
    });

    // Atualiza a interface com o nível atual ao carregar a página
    for (let i = 1; i < currentLevel; i++) {
        updateProgress(i);
        document.getElementById(`level-${i}`).classList.add('hidden');  // Esconde os níveis já completados
    }
    document.getElementById(`level-${currentLevel}`).classList.remove('hidden');  // Mostra o nível atual
});
