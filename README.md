### **1. Planejamento e Requisitos**
Antes de iniciar o desenvolvimento, os requisitos do sistema foram definidos de maneira clara, com base no objetivo de ensinar listas encadeadas aos estudantes. O protótipo inicial foi focado na criação e validação de um nó simples, com a estrutura de dados `value` e `next`.

![Protótipo Inicial](Vídeo.gif)

### **2. Protótipo Interativo**
O protótipo foi criado utilizando **HTML**, **CSS** e **JavaScript** com a seguinte funcionalidade:
- **Formulário de login:** O usuário deve inserir um nome de usuário que será armazenado no `localStorage`. Isso permite persistir o estado do usuário entre as sessões.
- **Área de codificação:** O aluno insere um código de criação de um nó para listas encadeadas. O código é validado e, dependendo da correção, o feedback é fornecido ao aluno.
- **Feedback:** O sistema oferece feedback claro e construtivo com base na validade do código, incentivando o aluno a corrigir seus erros.

### **3. Validação e Feedback**
A validação do código foi realizada em duas formas:
- **Formato flexível:** O sistema valida se o código do nó é inserido de forma correta, seja diretamente (`let node = { value: 1, next: null };`) ou de forma separada (usando `node.value` e `node.next`).
- **Feedback condicional:** Dependendo do que está faltando ou errado no código, o aluno recebe mensagens específicas como:
  - "Parece que você esqueceu a propriedade 'value'."
  - "Lembre-se de que o próximo nó deve ser 'null' no seu primeiro nó."

### **4. Testes de Usabilidade**
O protótipo foi testado com os usuários (instrutores e alunos) para garantir que:
- O fluxo de login funcione corretamente.
- A validação e o feedback sejam claros e fáceis de entender.
- O layout seja responsivo e funcional.

### **5. Iteração e Melhoria**
A partir do feedback dos usuários, o código foi ajustado para melhorar:
- **Validação robusta:** A validação foi estendida para garantir que o código dos alunos seja analisado de maneira mais detalhada.
- **Estilo e estrutura do código:** A estrutura do código foi ajustada para evitar alertas de linting (ex: garantir que o `else` não tenha apenas um `if` dentro).
- **Melhoria do feedback:** O feedback agora é mais específico, ajudando os alunos a entender exatamente o que falta ou precisa ser corrigido.

### **6. Ferramentas Utilizadas**
- **HTML/CSS/JavaScript**: Tecnologias essenciais para a construção do protótipo interativo.
- **localStorage**: Usado para armazenar o nome de usuário e persistir o estado do usuário entre sessões.
- **Validação de código em tempo real**: A validação é feita no momento em que o aluno submete o código, sem a necessidade de recarregar a página.

### **7. Controle de Versão**
- **Git e GitHub** foram utilizados para controle de versão, garantindo que o código fosse mantido de maneira organizada e que as alterações pudessem ser rastreadas durante as iterações.

### **8. Proximas Etapas**
- **Expansão das funcionalidades:** Adicionar mais níveis e estruturas de dados (como listas duplamente encadeadas, pilhas, filas, etc.).
- **Métricas de desempenho:** Implementar o rastreamento do progresso do aluno e geração de relatórios para instrutores.

### **Conclusão**
Este processo é uma abordagem típica em desenvolvimento de protótipos interativos com foco em usabilidade, onde é realizado o planejamento, desenvolvimento inicial, iteração e validação de feedback com usuários. As mudanças são documentadas e implementadas com o objetivo de melhorar a experiência do usuário e garantir que o sistema atenda às necessidades dos stakeholders.
