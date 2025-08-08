document.querySelector('.month-year').addEventListener('input', function(e) {
    const input = e.target;
    const errorMessage = document.querySelector('.error-message');
    
    // Удаляем все нецифровые символы
    let value = input.value.replace(/\D/g, '');
    
    // Добавляем / после первых 2 цифр
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    input.value = value;
    
    // Валидация
    if (value.length > 0) {
        const parts = value.split('/');
        const month = parts[0];
        const year = parts[1];
        
        // Проверка месяца
        if (month && month.length === 2) {
            const monthNum = parseInt(month, 10);
            if (monthNum < 1 || monthNum > 12) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Некорректные данные (введите месяц в диапазоне 1-12)';
                return;
            }
        }
        
        // Проверка года (если введен полностью)
        if (year && year.length === 2) {
            const currentYear = new Date().getFullYear() % 100;
            const currentMonth = new Date().getMonth() + 1;
            const yearNum = parseInt(year, 10);
            const monthNum = month ? parseInt(month, 10) : 0;
            
            if (yearNum < currentYear || 
                (yearNum === currentYear && monthNum < currentMonth)) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Карта просрочена';
                return;
            }
            
            if (yearNum < 25) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Карта просрочена';
                return;
            }
        }
        
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
    }
});

document.querySelector('.month-year').addEventListener('blur', function(e) {
    const input = e.target;
    const errorMessage = document.querySelector('.error-message');
    
    if (input.value.length > 0 && input.value.length < 5) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Неверный формат MM/YY';
    }
});