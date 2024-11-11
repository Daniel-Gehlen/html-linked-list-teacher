const { WayState, validateCode, handleCorrectSubmission, handleIncorrectSubmission, switchLanguage, applyLanguageTexts, resetProgress } = require('../src/app'); // Ajuste o caminho conforme necessário

const initialWayState: typeof WayState = {
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

describe('Game Logic Tests', () => {

    test('should switch language between English and Portuguese', () => {
        // Inicializa o estado do jogo com idioma em inglês
        let currentLanguage = initialWayState.currentLanguage;

        // Verifica o idioma inicial
        expect(currentLanguage).toBe('en');

        // Troca para português
        switchLanguage();
        expect(initialWayState.currentLanguage).toBe('pt');

        // Troca novamente para inglês
        switchLanguage();
        expect(initialWayState.currentLanguage).toBe('en');
    });

    test('should apply correct language texts on switch', () => {
        // Troca para português
        switchLanguage();
        applyLanguageTexts(initialWayState.currentLanguage);

        // Verifica se os textos da interface foram atualizados para o português
        expect(initialWayState.texts.pt.welcome).toBe("Bem-vindo, ");
        expect(initialWayState.texts.pt.intro).toBe("Aprenda sobre Filas através de desafios interativos!");

        // Troca novamente para inglês
        switchLanguage();
        applyLanguageTexts(initialWayState.currentLanguage);

        // Verifica se os textos da interface foram atualizados para o inglês
        expect(initialWayState.texts.en.welcome).toBe("Welcome, ");
        expect(initialWayState.texts.en.intro).toBe("Learn about Queues through interactive coding challenges!");
    });

    test('should validate correct code and give feedback', () => {
        const expectedCode = "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }";
        const userCodeCorrect = "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }";
        const userCodeIncorrect = "class Queue { constructor() { this.first = null; this.size = 0; } }";

        // Teste de código correto
        expect(validateCode(userCodeCorrect, expectedCode)).toBe(true);

        // Teste de código incorreto
        expect(validateCode(userCodeIncorrect, expectedCode)).toBe(false);
    });

    test('should handle correct submission and update progress', () => {
        const level = 1;
        const feedback = { textContent: '', style: { color: '' } };

        // Simula uma submissão correta
        handleCorrectSubmission(level, feedback as HTMLElement);
        expect(feedback.textContent).toBe(initialWayState.texts.en.correctFeedback);
        expect(feedback.style.color).toBe("green");

        // Verifica se o nível foi avançado
        expect(localStorage.getItem('currentLevel')).toBe('2');
    });

    test('should handle incorrect submission and show feedback', () => {
        const level = 1;
        const feedback = { textContent: '', style: { color: '' } };

        // Simula uma submissão incorreta
        handleIncorrectSubmission(feedback as HTMLElement);
        expect(feedback.textContent).toBe(initialWayState.texts.en.incorrectFeedback);
        expect(feedback.style.color).toBe("red");
    });

    test('should reset game progress correctly', () => {
        localStorage.setItem('currentLevel', '3');

        // Função que simula o reset
        resetProgress();
        expect(localStorage.getItem('currentLevel')).toBe('1');
        expect(document.querySelectorAll('.progress-level.filled').length).toBe(0); // Nenhum nível preenchido após reset
    });
});