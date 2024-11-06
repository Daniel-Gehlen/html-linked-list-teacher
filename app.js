document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Impede o envio do formulário
            const username = document.getElementById('username').value;

            if (username) {
                localStorage.setItem('username', username); // Armazena o nome do usuário
                window.location.href = 'learn.html'; // Redireciona para o painel de aprendizado
            } else {
                alert('Por favor, insira um nome de usuário.');
            }
        });
    }

    const submitButton = document.getElementById('submit-code');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const codeInput = document.getElementById('code-input').value;
            const feedback = document.getElementById('feedback');

            // Validação do nó
            let validNodeCreation = false;

            // Validação mais robusta
            if (codeInput.includes('let node = {') && 
                codeInput.includes('value:') && 
                codeInput.includes('next: null') && 
                codeInput.includes('};')) {
                validNodeCreation = true;
            }

            // Refatorando a estrutura do else para evitar um único statement
            if (validNodeCreation) {
                feedback.textContent = 'Parabéns! Você criou um nó corretamente.';
                feedback.style.color = 'green';
            } else {
                if (!codeInput.includes('value:')) {
                    feedback.textContent = 'Parece que você esqueceu a propriedade "value". Tente adicioná-la!';
                    feedback.style.color = 'red';
                } 
                if (!codeInput.includes('next: null')) {
                    feedback.textContent = 'Lembre-se de que o próximo nó deve ser "null" no seu primeiro nó!';
                    feedback.style.color = 'red';
                } 
                // Adiciona um feedback geral se o nó não for válido
                if (!codeInput.includes('value:') && !codeInput.includes('next: null')) {
                    feedback.textContent = 'Tente novamente! Lembre-se de criar um nó com as propriedades "value" e "next".';
                    feedback.style.color = 'red';
                }
            }
        });
    }
});
