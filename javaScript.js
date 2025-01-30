const tables = document.querySelectorAll('.table.tableMulti');

// Проходим по каждому контейнеру
tables.forEach((table, tableIndex) => {
    // Нумеруем каждый контейнер
    const tableHeader = document.createElement('h3');
    tableHeader.textContent = `Таблица ${tableIndex + 1}`;
    table.prepend(tableHeader); // Добавляем заголовок в начало контейнера

    // Выбираем все элементы с классом .num внутри текущего контейнера
    const elements = table.querySelectorAll('.num');

    // Проходим по всем элементам и добавляем к ним текст
    elements.forEach((element, index) => {
        element.textContent = `${index + 1} * ${tableIndex + 1} = ${(index + 1) * (tableIndex + 1)}`;
    });
});
