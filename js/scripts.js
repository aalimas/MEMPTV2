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

// Recarregar a página automaticamente após 1 minuto (60000 ms)
setTimeout(() => {
    location.reload();
}, 60000); // 1 minuto em milissegundos

// Inicializar a página
setLastRefresh(); // Define a última atualização no carregamento
setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo