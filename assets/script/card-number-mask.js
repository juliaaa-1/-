document.querySelector('.card-number').addEventListener('input', function(e) {
    const cardNumber = e.target.value.replace(/\s/g, '');
    const paymentSystem = document.querySelector('.payment-system');
    const errorMessage = document.querySelector('.error-message');
    const errorText = errorMessage.querySelector('p');
    
    // Проверка на платежную систему
    if (cardNumber.startsWith('220070')) {
        paymentSystem.style.display = 'flex';
    } else {
        paymentSystem.style.display = 'none';
    }
    
    // Форматирование номера карты
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    value = value.substring(0, 16);
    
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }
    e.target.value = formattedValue;
    
    // Проверка длины номера и вывод соответствующих сообщений
    if (cardNumber.length === 0) {
        errorMessage.style.display = 'none';
    } else if (cardNumber.length < 13) {
        errorMessage.style.display = 'block';
        errorText.textContent = 'Номер карты слишком короткий';
    } else if (cardNumber.length < 16) {
        errorMessage.style.display = 'block';
        errorText.textContent = 'Неверный номер карты';
    } else if (cardNumber.length === 16) {
        errorMessage.style.display = 'none';
    }
});