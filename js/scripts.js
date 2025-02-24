// Atualizar o relógio a cada segundo
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}

// Mostrar o horário da última atualização
function setLastRefresh() {
    const lastRefreshElement = document.getElementById('last-refresh');
    const now = new Date();
    lastRefreshElement.textContent = now.toLocaleString();
}

// Recarregar a página automaticamente após 5 minutos (300000 ms)
setTimeout(() => {
    location.reload();
}, 300000); // 5 minutos em milissegundos

// Atualizar a página ao clicar no botão
document.getElementById('refresh-button').addEventListener('click', () => {
    location.reload();
});

// Inicializar a página
setLastRefresh(); // Define a última atualização no carregamento
setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
