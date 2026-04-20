// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let div = document.createElement('div');
div.id = 'text';
let btn = document.createElement('button');
btn.innerText = 'Delete';
document.body.append(div,btn);
btn.onclick = function(){
    div.remove();
}