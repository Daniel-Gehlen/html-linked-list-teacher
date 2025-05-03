## Documentação Completa do Projeto de Software: Da Concepção à Implementação

**Objetivo:** Este documento visa fornecer uma visão abrangente e cronológica de todas as iterações e implementações realizadas no projeto de software, desde o início da concepção até o momento atual. Ele serve como um guia detalhado para stakeholders e programadores, fornecendo um mapa detalhado do desenvolvimento do software, incluindo as principais decisões de design, desafios encontrados e soluções implementadas.

### Fase 1: Concepção e Engenharia de Requisitos

**Iteração 1: Definição do Problema e Objetivo do Sistema:**

- **Problema:** Dificuldade enfrentada por programadores iniciantes em compreender e aplicar o conceito de listas ligadas em programação.
- **Objetivo:** Criar um sistema de aprendizado interativo que permita aos usuários aprender sobre listas ligadas de forma prática e intuitiva, com explicações em tempo real para os conceitos e termos técnicos.

**Iteração 2: Definição do Público-Alvo e Escopo Inicial:**

- **Público-Alvo:** Programadores iniciantes com conhecimento teórico de listas ligadas, mas com dificuldade em aplicar esses conhecimentos na prática.
- **Escopo Inicial:**
    - Foco em listas ligadas simples.
    - Interface minimalista e direta, focada no código e na visualização da estrutura da lista.
    - Feedback automatizado para orientar os usuários e corrigir erros.
    - Sistema de níveis para progressão gradual de aprendizado.
    - Sistema de login para salvar o progresso.
    - Sistema de conquistas para motivar os usuários.
    - Aplicação web acessível via navegador.

**Iteração 3: Primeira Sessão de Elicitação de Requisitos com Stakeholders (Simulada com ChatGPT):**

- **Stakeholders:** Desenvolvedores, instrutores e estudantes.
- **Expectativas dos Stakeholders:**
    - **Desenvolvedores:** Facilidade de manutenção e escalabilidade do sistema.
    - **Instrutores:** Relatórios de progresso dos alunos e possibilidade de configurar novos níveis ou desafios.
    - **Estudantes:** Absorver o conteúdo de forma eficaz, com feedback constante e um sistema de conquistas.

**Iteração 4: Definição de Funcionalidades Essenciais:**

- **Funcionalidades Essenciais:**
    - **Para Desenvolvedores:** API bem estruturada.
    - **Para Instrutores:** Métricas detalhadas de desempenho dos alunos.
    - **Para Estudantes:** Feedback constante, sistema de conquistas e interface amigável para prática de codificação.

**Iteração 5: Identificação de Desafios e Riscos:**

- **Desafios:**
    - Integrar métricas detalhadas para os instrutores.
    - Garantir que o feedback para os alunos seja eficaz e preciso.
    - Implementar a progressão em níveis de forma eficaz.

**Iteração 6: Especificação de Casos de Uso:**

- **Casos de Uso para Estudantes:**
    - Fazer login.
    - Iniciar um novo nível de aprendizado.
    - Receber feedback do código.
    - Visualizar conquistas e progresso.
    - Concluir um nível e desbloquear o próximo.
- **Casos de Uso para Instrutores:**
    - Fazer login.
    - Visualizar progresso dos alunos.
    - Gerar relatório de desempenho.
    - Configurar novos níveis ou desafios.

**Iteração 7: Decisão sobre Prototipagem e Validação:**

- **Prototipagem:** Criação de um protótipo interativo com HTML, CSS e JavaScript para testar funcionalidades.
- **Validação:** Observação direta das interações dos usuários com o protótipo.
- **Documentação de Feedback:** Relatórios de revisão detalhados com os principais pontos de melhoria.

### Fase 2: Desenvolvimento do Protótipo

**Iteração 8: Criação do Protótipo Inicial:**

- **Funcionalidades Implementadas:**
    - Página de login simples (login.html) com estilo básico (styles.css).
    - Interface de aprendizado (learn.html) com:
        - Exibição do nome do usuário.
        - Instruções para o nível 1 (criar um nó).
        - Área de entrada de código (textarea).
        - Botão "Submit Code".
        - Área de feedback.
- **Lógica de Validação:**
    - Verificação se o código do usuário contém a criação de um nó com a estrutura `let node = { value: 1, next: null };`.
    - Feedback simples (correto/incorreto).

**Iteração 9: Refinamento da Validação e Feedback:**

- **Melhorias na Validação:**
    - Aceitação de diferentes formas de definir um nó (sintaxe alternativa).
    - Mensagens de erro mais específicas para guiar o usuário.
- **Feedback Mais Detalhado:**
    - Explicação textual no feedback sobre como criar um nó corretamente.

**Iteração 10: Explicação Detalhada no HTML:**

- **Mudança no HTML:** Adição de um parágrafo explicativo sobre a estrutura de um nó, com exemplo de código.
- **Objetivo:** Tornar o protótipo mais didático, fornecendo um guia claro para os usuários.

**Iteração 11: Refinamento da Interface e Experiência do Usuário:**

- **Submissão com Tecla Enter:** Possibilidade de submeter o código pressionando "Enter", além do botão.
- **Ajustes no Layout:** Centralização do input e dos textos na página.
- **Adição da Barra de Progresso:**
    - Barra vertical, representando o progresso como uma pilha.
    - Subníveis separados por tracinhos, totalizando 14 subníveis para o nível 1.
    - Preenchimento com cor verde neon para indicar o progresso.

**Iteração 12: Ajuste da Barra de Progresso:**

- **Modificações no CSS:**
    - Reduzir a altura da barra de progresso para metade.
    - Fixar a barra lateralmente na tela durante a rolagem.

**Iteração 13: Correção da Lógica da Barra de Progresso:**

- **Correções no JavaScript:**
    - Implementação da lógica para atualizar a barra de progresso a cada nível submetido corretamente.

**Iteração 14: Implementação da Estrutura de Fila:**

- **Expansão do Escopo:** Introdução do conceito de fila (Queue) e suas operações básicas (enqueue, dequeue, isEmpty).
- **Definição dos Níveis de Aprendizado:**
    - Nível 1: Criação da estrutura de fila.
    - Nível 2: Implementação do método enqueue.
    - Nível 3: Implementação do método dequeue.
    - Nível 4: Implementação do método isEmpty.
    - Nível 5: Testar o enfileiramento (enqueue).
    - Nível 6: Testar o desenfileiramento (dequeue).

**Iteração 15: Validação Passo-a-Passo e Expansão do HTML:**

- **Implementação de Validação Detalhada:** O código é validado linha por linha, com feedback específico para cada etapa.
- **Expansão do HTML:** Adição de novos níveis no HTML para acompanhar a estrutura da fila.
- **Mudanças no JavaScript:**
    - Implementação de funções de validação para cada nível (validateLevel1, validateLevel2, etc.).
    - Atualização da lógica da barra de progresso para acompanhar os novos níveis.

**Iteração 16: Ajuste do Textarea e Barra de Progresso:**

- **Ajustes no CSS:**
    - Remoção da barra de rolagem do textarea, permitindo que ele se expanda verticalmente.
    - Correção da altura da barra de progresso.

**Iteração 17: Correção do Preenchimento da Barra de Progresso:**

- **Correções no JavaScript:** Garantia de que todos os níveis, incluindo o nível 6, sejam preenchidos na barra de progresso após a validação.

**Iteração 18: Correção do Estado Inicial da Barra de Progresso:**

- **Ajustes no JavaScript:**
    - O nível 1 só é preenchido na barra de progresso após a validação, não ao carregar a página.
    - Correção da lógica para salvar o progresso do usuário no localStorage.

**Iteração 19: Nuvem de Explicação:**

- **Nova Funcionalidade:** Implementação de "nuvens de explicação" (tooltips) que aparecem ao lado das palavras-chave digitadas pelo usuário.
- **Explicações Detalhadas:** Criação de um objeto `explanations` com textos explicativos para cada palavra-chave, em inglês e português.
- **Lógica de Exibição:** Implementação da lógica para detectar palavras-chave no código digitado e exibir a explicação correspondente na "nuvem de explicação".

**Iteração 20: Implementação da Nuvem de Explicação no Código:**

- **Ajustes no HTML:** Criação da estrutura para a "nuvem de explicação" (um elemento com id "explanation-cloud").
- **Modificações no JavaScript:**
    - Implementação da função `setupExplanationCloud()` para detectar as palavras-chave digitadas.
    - Adição da lógica para exibir a explicação correspondente do objeto `explanations`.

**Iteração 21: Refinamento da Nuvem de Explicação:**

- **Explicação para Ponto e Vírgula:** Adição da explicação para o ponto e vírgula (";") no objeto `explanations`.
- **Ajustes no Código:** Correções e melhorias na função `setupExplanationCloud()` para garantir o funcionamento correto da exibição das explicações.

**Iteração 22: Implementação de um Botão para Troca de Idioma:**

- **Ajustes no HTML:** Adição de um botão para alternar o idioma.
- **Mudanças no JavaScript:**
    - Implementação da função `switchLanguage()` para alternar entre inglês e português.
    - Tradução de todos os textos da interface para ambos os idiomas.

**Iteração 23: Correção de Erros e Implementação de Funcionalidades:**

- **Correções:**
    - Ajuste da lógica para evitar a repetição da variável `texts`.
    - Correção da lógica de preenchimento dos níveis na barra de progresso.
- **Funcionalidade de Reset:** Implementação de um botão para redefinir o progresso do usuário.
- **Ajuste Visual da Barra de Progresso:** Redução da altura da barra de progresso para eliminar espaços em branco desnecessários.

**Iteração 24: Refatoração para Classe `ExplanationHandler`:**

- **Melhoria da Estrutura do Código:**
    - Criação da classe `ExplanationHandler` para encapsular a lógica de exibição de explicações.
    - Reorganização do código para melhorar a legibilidade e evitar conflitos de escopo.

**Iteração 25: Ajustes no `tsconfig.json` e na Estrutura do Projeto:**

- **Configuração do TypeScript:** Adição de opções de compilação ao `tsconfig.json` para melhorar a compatibilidade e organização do projeto.
- **Estrutura de Diretórios:** Discussão sobre boas práticas para organização de arquivos (HTML, CSS, JSON, TS) em um projeto front-end.

**Iteração 26: Implementação das Funções de Validação e Feedback:**

- **Lógica de Validação:** Implementação das funções `validateCode`, `handleCorrectSubmission` e `handleIncorrectSubmission`.
- **Feedback Detalhado:** Criação de mensagens de feedback específicas para auxiliar o usuário na correção de erros.

**Iteração 27: Testes Unitários para `resetProgress`:**

- **Criação de Testes:** Implementação de testes unitários para garantir que a função `resetProgress` funcione corretamente.
- **Verificação do Comportamento:** Os testes verificam se o progresso do usuário é resetado para o nível inicial ao clicar no botão de reset.

**Iteração 28: Criação do Arquivo `.gitignore`:**

- **Definição de Arquivos a Serem Ignorados:** Criação do arquivo `.gitignore` para excluir arquivos e diretórios desnecessários do repositório Git.

**Iteração 29: Documentação Detalhada de Todas as Iterações:**

- **Criação de um Documento Abrangente:** Elaboração de uma documentação técnica detalhada, abrangendo todas as iterações, desde a concepção inicial até o estágio atual do projeto.
- **Objetivo da Documentação:** Fornecer um guia completo para stakeholders e programadores, descrevendo os requisitos, a estrutura do código e as decisões de design.

### Conclusão

Este documento aborda todas as iterações realizadas no projeto de software, desde a ideia inicial até o estado atual. Ele serve como um guia para o desenvolvimento futuro, permitindo que a equipe compreenda as decisões tomadas, a estrutura do código e os próximos passos.

## Documentação Técnica Detalhada para Stakeholders e Programadores

### Fase Atual do Projeto: Implementação da "Nuvem de Explicações"

**Objetivo:**

Criar uma funcionalidade que auxilie os usuários a entender os termos e conceitos de programação enquanto digitam o código, exibindo explicações contextuais em tempo real.

**Implementação:**

1. **Estrutura de Dados das Explicações:**

- Foi criado um objeto `texts` que armazena as explicações para as palavras-chave em diferentes idiomas (inglês e português).

```typescript
const texts = {
  en: {
    explanations: {
      ";": "You typed ';'. The semicolon at the end of a statement is a sign for me to understand that a statement has come to an end and the next one can begin.",
      // ... outras explicações em inglês
    }
  },
  pt: {
    explanations: {
      ";": "Você digitou ';' o ponto e vírgula no final de uma instrução serve como um sinal para eu entender que uma instrução chegou ao fim e a próxima pode começar.",
      // ... outras explicações em português
    }
  }
};
```

2. **Classe `ExplanationHandler`:**

- A classe `ExplanationHandler` foi criada para encapsular a lógica de exibição das explicações.
- Ela contém métodos para mostrar e esconder a "nuvem de explicações", detectar palavras-chave no código digitado pelo usuário e gerenciar a troca de idiomas.

```typescript
class ExplanationHandler {
  // ... propriedades e métodos da classe
}
```

3. **Lógica de Exibição:**

- A lógica de exibição das explicações é implementada na função `setupExplanationCloud()`, que detecta palavras-chave no código e exibe a explicação correspondente na "nuvem de explicações".

```typescript
function setupExplanationCloud(): void {
  // ... lógica para detectar palavras-chave e exibir a explicação
}
```

4. **Interface do Usuário:**

- Um elemento HTML com o ID "explanation-cloud" foi adicionado à interface para exibir as explicações.

```html
<div id="explanation-cloud"></div>
```

### Funcionalidades Implementadas:

- Exibição de explicações em tempo real para palavras-chave específicas, como "class", "this.first", "constructor", etc.
- Suporte a múltiplos idiomas (inglês e português), permitindo que o usuário alterne entre eles.
- Lógica para esconder a "nuvem de explicações" quando o usuário não está mais digitando uma palavra-chave.

### Próximos Passos:

- Implementar testes unitários para a classe `ExplanationHandler` para garantir que a lógica de exibição das explicações esteja funcionando corretamente.
- Integrar a funcionalidade de "nuvem de explicações" com o restante do sistema de aprendizado.
- Refinar a interface do usuário para tornar a experiência mais intuitiva e agradável.