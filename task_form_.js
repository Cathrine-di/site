let calculatedResult; // Переменная для хранения результата

// Слушаем событие нажатия кнопки "Вычислить x"
document.getElementById('calculateButton').addEventListener('click', function() {
    // Получаем значение A
    const A = parseFloat(document.getElementById('numberA').value);
    const condition = document.getElementById('condition').value;

    // Условия для вычисления x
    if (A > 100) {
        calculatedResult = 0;
    } else if (A < 61) {
        calculatedResult = A;
    } else {
        calculatedResult = Math.pow(A, 4); // A^4
    }

    // Выводим результат на страницу
    document.getElementById('result').textContent = calculatedResult;

    // Активируем кнопку отправки данных
    document.getElementById('submitButton').disabled = false;
});

// Слушаем событие нажатия кнопки "Отправить данные"
document.getElementById('submitButton').addEventListener('click', async function() {
    // Формируем данные для отправки на сервер
    const dataToSend = {
        condition: document.getElementById('condition').value,
        input: parseFloat(document.getElementById('numberA').value),
        result: calculatedResult
    };

    try {
        // Отправка данных на сервер (поменяйте URL на реальный сервер API)
        const response = await fetch('https://example.com/api/submit', { // Замените этот URL на ваш сервер
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
        });

        // Проверка ответа сервера
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }

        const responseData = await response.json();
        console.log('Ответ от сервера:', responseData);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
});
