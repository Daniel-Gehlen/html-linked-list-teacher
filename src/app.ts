// src/modules/app.ts

export class StudentDataApp {
    students: { name: string }[] = [];
    turn: number = 0;

    addStudent(name: string): void {
        this.students.push({ name });
    }

    startApp(): void {
        this.turn = 1;
    }

    checkWinner(): string | null {
        if (this.students.length === 2) {
            return this.students[0].name;
        }
        return null;
    }
}

// Global types
export interface Texts {
    welcome: string;
    intro: string;
    resetButton: string;
    switchLanguage: string;
    levelTitles: string[];
    instructions: string[];
    submitButton: string;
    explanations: Record<string, string>;
    correctFeedback: string;
    incorrectFeedback: string;
    completionMessage: string;
}

export interface WayState {
    currentLanguage: 'en' | 'pt';
    texts: Record<string, Texts>;
}

// Global state
export const wayState: WayState = {
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

// Funções globais de estado
export function switchLanguage(): void {
    // Alterna entre os idiomas 'en' (inglês) e 'pt' (português)
    wayState.currentLanguage = wayState.currentLanguage === 'en' ? 'pt' : 'en';
    // Aplica os textos do novo idioma
    applyLanguageTexts(wayState.currentLanguage);
}

export function applyLanguageTexts(language: 'en' | 'pt'): void {
    const texts = wayState.texts[language]; // Carrega os textos do idioma escolhido
    // Atualiza o conteúdo textual da página de acordo com o idioma selecionado
    document.getElementById('intro')!.textContent = texts.intro;
    document.getElementById('reset-button')!.textContent = texts.resetButton;
    document.getElementById('language-button')!.textContent = texts.switchLanguage;
    
    // Atualiza os títulos dos níveis e as instruções
    texts.levelTitles.forEach((title, index) => {
        document.getElementById(`level-title-${index + 1}`)!.textContent = title;
        document.getElementById(`level-instruction-${index + 1}`)!.textContent = texts.instructions[index];
    });
    
    // Atualiza o botão de envio
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.textContent = texts.submitButton;
    }
    
    // Exemplo para atualizar as explicações de código dinamicamente (se aplicável)
    document.querySelectorAll('.explanation').forEach(el => {
        const explanationKey = el.getAttribute('data-key');
        if (explanationKey) {
            el.textContent = texts.explanations[explanationKey];
        }
    });
}

// Em src/app.ts
export function validateCode(userCode: string, expectedCode: string): boolean {
    // Remover espaços em branco e comparar a estrutura do código
    const normalizedUserCode = userCode.replace(/\s+/g, '').trim();
    const normalizedExpectedCode = expectedCode.replace(/\s+/g, '').trim();

    // Verifica se o código do usuário corresponde ao código esperado
    return normalizedUserCode === normalizedExpectedCode;
}


export function handleCorrectSubmission(level: number, feedback: HTMLElement): void {
    // Atualiza o feedback com uma mensagem de sucesso
    feedback.textContent = 'Correct! Moving to next level.';
    feedback.style.color = 'green';

    // Avança o nível
    const currentLevel = parseInt(localStorage.getItem('currentLevel') ?? '1', 10);
    const nextLevel = currentLevel + 1;
    localStorage.setItem('currentLevel', nextLevel.toString());

    // Atualiza a barra de progresso
    const progressBar = document.getElementById(`level-progress-${nextLevel - 1}`);
    if (progressBar) {
        progressBar.classList.add('filled');
    }

    // Mostra a próxima fase
    const nextLevelElement = document.getElementById(`level-${nextLevel}`);
    if (nextLevelElement) {
        nextLevelElement.classList.remove('hidden');
    }
}


export function handleIncorrectSubmission(feedback: HTMLElement): void {
    // Exibe o feedback de erro
    feedback.textContent = 'Try again! Check your code.';
    feedback.style.color = 'red';
}


export function resetProgress(): void {
    // Reinicia o nível atual no localStorage
    localStorage.setItem('currentLevel', '1');

    // Oculta todos os níveis
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => {
        level.classList.add('hidden');
    });

    // Exibe o primeiro nível
    const firstLevel = document.getElementById('level-1');
    if (firstLevel) {
        firstLevel.classList.remove('hidden');
    }

    // Limpa a barra de progresso
    const progressLevels = document.querySelectorAll('.progress-level');
    progressLevels.forEach(level => {
        level.classList.remove('filled');
    });

    // Limpa o feedback de todos os níveis
    const feedbackElements = document.querySelectorAll('[id^="feedback-"]');
    feedbackElements.forEach(feedback => {
        feedback.textContent = '';
    });

    // Limpa os campos de entrada de código
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.value = '';
    });

    // Atualiza o texto de boas-vindas
    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) {
        usernameDisplay.textContent = 'Student';
    }
}

