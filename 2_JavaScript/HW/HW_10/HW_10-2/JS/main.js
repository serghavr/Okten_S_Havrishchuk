// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const input = document.createElement("input");
input.type = "number";
input.placeholder = 'Вкажіть ваш вік';
const button = document.createElement("button");
button.innerText = "Перевірити"
button.onclick = function(){
    if (input.value >= 18 && input.value <= 120){
        alert('Вхід дозволено');
    }
    else if (input.value < 18 && input.value > 0){
        alert('Вхід заборонено!');
    }
    else {
        alert('невірний формат вводу');
    }
}
document.body.append(input,button);