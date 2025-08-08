document.getElementById('confirm-btn').addEventListener('click', function() {
    const container = document.querySelector('.card-container');
    container.classList.toggle('flipped');
    
    if (container.classList.contains('flipped')) {
        this.textContent = 'Вернуться';
    } else {
        this.textContent = 'Подтвердить';
    }
});
