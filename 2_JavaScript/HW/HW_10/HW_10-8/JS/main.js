// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
//
const table = document.getElementById('table');

const TableGeneratorForm = document.forms['TableGeneratorForm'];

TableGeneratorForm.onsubmit = function (e) {
    e.preventDefault();
    const linesValue = +TableGeneratorForm.lines.value;
    const cellsValue = +TableGeneratorForm.cells.value;
    const dataValue = TableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr')
        table.appendChild(tr);
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }

    table.appendChild(tr);
    }

};