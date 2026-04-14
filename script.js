/**
 * Estrutura de Dados do Portfólio
 * Adicione seus projetos reais e preencha as URLs.
 * O sistema exige um máximo de projetos preenchidos, os slots vazios ficarão como placeholders.
 */
const portfolioProjects = [
    // Preencha este array conforme publica projetos na Vercel
    // Exemplo: { id: "demo", name: "Meu App", url: "https://meuapp.vercel.app" }
];

// Configuração do Limite de Abas
const TOTAL_TABS = 5;

// Elementos do DOM
const tabsContainer = document.getElementById('tabs-container');
const projectViewer = document.getElementById('project-viewer');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const windowContainer = document.getElementById('window-container');
const fullscreenIconPath = document.querySelector('#fullscreen-icon path');

// Ícones SVG Paths
const iconExpand = "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3";
const iconShrink = "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3";

/**
 * HTML base em Base64/DataURI para a tela de "Trabalhando Nisso..."
 * Isso evita a necessidade de criar arquivos extras e complicação no deploy.
 */
const placeholderContent = `
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                background: #ffffff;
                color: #000000;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: 'Courier New', Courier, monospace;
            }
            .loader {
                width: 48px;
                height: 48px;
                border: 4px solid #000;
                border-bottom-color: transparent;
                border-radius: 50%;
                display: inline-block;
                box-sizing: border-box;
                animation: rotation 1s linear infinite;
                margin-bottom: 20px;
            }
            @keyframes rotation {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            h2 { font-weight: bold; letter-spacing: -0.5px; }
        </style>
    </head>
    <body>
        <span class="loader"></span>
        <h2>[ Trabalhando nisso... ]</h2>
    </body>
    </html>
`;
const placeholderDataURI = 'data:text/html;charset=utf-8,' + encodeURIComponent(placeholderContent);

/**
 * Função para renderizar as abas de navegação dinamicamente
 */
function renderNavigation() {
    tabsContainer.innerHTML = ''; // Limpa antes de renderizar
    let firstEmptyFound = false;

    // Garante que a lógica rode exatamente TOTAL_TABS vezes (ex: 5)
    for (let i = 0; i < TOTAL_TABS; i++) {
        const tabBtn = document.createElement('div');
        tabBtn.classList.add('tab');
        
        // Verifica se há um projeto cadastrado nesse índice (Slot Ocupado)
        if (i < portfolioProjects.length) {
            const project = portfolioProjects[i];
            tabBtn.textContent = project.name;
            tabBtn.setAttribute('data-id', project.id);
            tabBtn.setAttribute('tabindex', '0');

            // Setar a primeira aba como ativa ao carregar
            if (i === 0) {
                tabBtn.classList.add('active');
                projectViewer.src = project.url;
            }

            const loadProject = () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tabBtn.classList.add('active');
                projectViewer.src = project.url;
            };

            tabBtn.addEventListener('click', loadProject);
            tabBtn.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') loadProject();
            });

        } 
        // Lógica de abas vazias.
        else {
            // Se for o PRIMEIRO slot vazio
            if (!firstEmptyFound) {
                tabBtn.textContent = 'Em desenvolvimento';
                tabBtn.classList.add('working'); // Classe visual de trabalhando
                tabBtn.setAttribute('tabindex', '0');
                firstEmptyFound = true;

                // Ao clicar no "Em desenvolvimento", carrega o placeholder
                const loadPlaceholder = () => {
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    tabBtn.classList.add('active');
                    projectViewer.src = placeholderDataURI;
                };

                tabBtn.addEventListener('click', loadPlaceholder);
                tabBtn.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') loadPlaceholder();
                });

                // Se não houvesse *nenhum* projeto no array, inicia com aba vazia
                if (portfolioProjects.length === 0 && i === 0) {
                    tabBtn.classList.add('active');
                    projectViewer.src = placeholderDataURI;
                }
            } 
            // Slots subsequentes 
            else {
                tabBtn.textContent = 'Em breve';
                tabBtn.classList.add('disabled'); // Classe visual inerte
                tabBtn.setAttribute('tabindex', '-1'); // Remove do fluxo do teclado
            }
        }

        tabsContainer.appendChild(tabBtn);
    }
}

/**
 * Controle de Tela Cheia (Fullscreen API nativa)
 */
function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (windowContainer.requestFullscreen) {
            windowContainer.requestFullscreen();
        } else if (windowContainer.webkitRequestFullscreen) {
            windowContainer.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

fullscreenBtn.addEventListener('click', toggleFullScreen);

function handleFullscreenChange() {
    const isFullscreenNow = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    
    if (isFullscreenNow) {
        fullscreenIconPath.setAttribute('d', iconShrink);
        fullscreenBtn.setAttribute('aria-label', 'Sair da Tela Cheia');
        fullscreenBtn.setAttribute('title', 'Sair da Tela Cheia');
    } else {
        fullscreenIconPath.setAttribute('d', iconExpand);
        fullscreenBtn.setAttribute('aria-label', 'Tela Cheia');
        fullscreenBtn.setAttribute('title', 'Tela Cheia');
    }
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

// Inicia
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
});
