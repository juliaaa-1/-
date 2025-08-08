document.querySelector('.name').addEventListener('input', function(e) {
    const input = e.target;
    const errorMessage = document.querySelector('.error-message');
    const cursorPosition = input.selectionStart;
    
    // Сохраняем пробелы, но удаляем другие нежелательные символы
    let value = input.value.replace(/[^a-zA-Z\s]/g, '');
    
    // Проверка на русские буквы (имеет высший приоритет)
    if (/[а-яА-Я]/.test(input.value)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Вводите английскими буквами';
        input.value = value;
        return;
    }
    
    // Форматируем слова
    let words = value.split(' ').filter(word => word.length > 0);
    
    // Обрабатываем ошибки в правильном порядке приоритета
    if (words.length > 2) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Можно ввести только имя и фамилию';
        words = words.slice(0, 2);
    } 
    else if (input.value.trim() === '') {
        errorMessage.style.display = 'none'; // Поле пустое - скрываем ошибку
    }
    else if (words.length === 1) {
        // Показываем "Недостаточно данных" только если введено слово без пробела
        if (!input.value.includes(' ')) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Недостаточно данных (введите имя и фамилию)';
        } else {
            errorMessage.style.display = 'none';
        }
    }
    else {
        errorMessage.style.display = 'none';
    }
    
    // Форматируем слова с заглавной буквы
    value = words.map(word => 
        word.length > 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''
    ).join(' ');
    
    // Восстанавливаем пробел, если пользователь его ввел после последнего слова
    if (input.value.slice(-1) === ' ' && words.length < 2) {
        value += ' ';
    }
    
    input.value = value;
    input.setSelectionRange(cursorPosition, cursorPosition);
});

document.querySelector('.name').addEventListener('paste', function(e) {
    setTimeout(() => {
        const event = new Event('input');
        e.target.dispatchEvent(event);
    }, 0);
});