let currentNumber = +localStorage.getItem("Number") || 0;
currentNumber += 1;
localStorage.setItem("Number", currentNumber);
document.getElementById("target").innerText = currentNumber;