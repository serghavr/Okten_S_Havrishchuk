const input = document.getElementById("kg");
const divResult = document.getElementById("result");
input.oninput = function () {
    divResult.innerText = +this.value*2.2;
}