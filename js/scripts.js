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

// Atualizar a página ao clicar no botão
document.getElementById('refresh-button').addEventListener('click', () => {
    location.reload();
});

// Inicializar a página
setLastRefresh();
setInterval(updateClock, 1000);
