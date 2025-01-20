// Função para ativar o Wake Lock e evitar suspensão
async function keepScreenActive() {
    if ('wakeLock' in navigator) {
        try {
            const wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock ativo!');

            // Libera o Wake Lock se a aba perder o foco
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    navigator.wakeLock.request('screen').catch(err => {
                        console.error('Erro ao reativar o Wake Lock:', err);
                    });
                }
            });
        } catch (err) {
            console.error('Erro ao ativar o Wake Lock:', err);
        }
    } else {
        console.warn('API Wake Lock não suportada neste navegador.');
    }
}

// Função para simular movimento de atividade
function simulateActivity() {
    setInterval(() => {
        const event = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            view: window,
        });
        document.dispatchEvent(event); // Simula movimento do mouse
        console.log('Movimento simulado para evitar suspensão.');
    }, 15000); // A cada 15 segundos
}

// Inicializa funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    keepScreenActive(); // Mantém a tela ativa
    simulateActivity(); // Simula atividade no navegador
    setupAutoReload(); // Configura a recarga automática
    updateClock(); // Atualiza o relógio
    setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
});
