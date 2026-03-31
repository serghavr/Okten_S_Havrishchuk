// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.innerText = (`Hello OKTEN`)
div.classList.add ('wrap');
div.classList.add ('collapse');
div.classList.add ('alpha');
div.classList.add ('beta');

const cloneNode = div.cloneNode (true);

document.body.append(div, cloneNode);
