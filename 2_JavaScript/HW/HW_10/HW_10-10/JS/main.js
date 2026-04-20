const data = [];
for (let i= 1; i < 101; i++) {
    data.push ({
        id:i,
        title:`Item ${i}`
    });

}
console.log(data);
const size = 10;
let randerPage = 0;
function rander() {
    const startIndex = randerPage*size;
    const endIndex = startIndex+size;

    const currentItems = data.slice(startIndex, endIndex);

    const conteiner = document.getElementById('conteiner');
    conteiner.innerText = "";

    currentItems.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('conteinerDiv');
        div.innerText = item.title;
        conteiner.appendChild(div);
    });
}
rander();

const btnPriv = document.getElementById('btnPriv');
const btnNext = document.getElementById('btnNext');

btnPriv.addEventListener('click', e => {
    e.preventDefault();
    if (randerPage > 0) {
        --randerPage;
        rander()
    }
})
btnNext.addEventListener('click', e => {
    e.preventDefault();
    if (randerPage < 9) {
        ++randerPage;
        rander();
    }
})
