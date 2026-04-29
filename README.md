# Portfólio Visual em Pastas 📁

Um portfólio web minimalista, projetado para se assemelhar a um sistema de pastas/janelas clássico. Ele permite a visualização de diferentes projetos web diretamente na mesma página usando iframes e navegação por abas.

## 🌟 Funcionalidades

- **Design Minimalista e Retrô**: Interface limpa simulando uma janela de sistema operacional.
- **Navegação por Abas**: Alterne entre os projetos sem recarregar a página principal.
- **Visualização Integrada**: Os projetos são carregados dentro de um iframe, permitindo aos visitantes testarem as aplicações sem sair do seu portfólio.
- **Modo Tela Cheia**: Expanda a visualização de qualquer projeto para uma experiência mais imersiva.
- **Fácil de Atualizar**: Adicione novos projetos editando um único array de dados em JavaScript.
- **Placeholders Inteligentes**: Slots vazios mostram uma tela de "Em desenvolvimento" elegante até que um novo projeto seja adicionado.

## 🚀 Como usar e configurar

1. Clone ou baixe este repositório.
2. Abra o arquivo `script.js`.
3. Localize o array `portfolioProjects`.
4. Adicione seus projetos seguindo o formato:

```javascript
const portfolioProjects = [
    { id: "meu-projeto-1", name: "Nome do Projeto", url: "https://link-do-seu-projeto.com" },
    { id: "meu-projeto-2", name: "Outro Projeto", url: "https://outro-link.com" }
];
```

5. O limite padrão de abas é definido pela constante `TOTAL_TABS` (padrão é 5). Você pode alterar esse valor no `script.js` conforme necessário.
6. Atualize as informações de contato no `index.html`:
   - Link do seu LinkedIn.
   - Link do seu GitHub.
   - Substitua `curriculo.pdf` pelo arquivo real do seu currículo.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica.
- **CSS3**: Estilização, variáveis CSS e design responsivo/adaptativo.
- **JavaScript (Vanilla)**: Lógica de injeção dinâmica das abas, manipulação de iframes e controle da API de tela cheia.

## 🎨 Personalização

Para modificar as cores e a aparência geral, edite o arquivo `style.css`. As fontes utilizadas são *Space Mono* e *Inter*, importadas do Google Fonts, o que garante uma tipografia moderna mas com um toque técnico.

## 📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para clonar, modificar e usar como seu próprio portfólio!
