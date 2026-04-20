// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const savedTime = localStorage.getItem("startTime");
const savedValue = localStorage.getItem("numberValue") || 100;
const currentTime = Date.now()
const displayBlock = document.getElementById("numberValue");
displayBlock.innerText = savedValue
if (savedTime && (currentTime - savedTime)/1000 > 10) {
    let newValue = +savedValue + 10;
    localStorage.setItem("numberValue", newValue);
    displayBlock.innerText = newValue
}
localStorage.setItem("startTime", currentTime);



