// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та
// вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим
// об’єктом

let target = document.getElementById("target");

someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const someForm = document.forms.someForm;
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obg = {nameValue, surnameValue, ageValue};
    console.log(obg);
    target.innerText = obj.nameValue + ' '+ obj.surnameValue + " " + obg.ageValue;
})

// const name = document.createElement('input')
// name.type = 'text';
// name.placeholder = "Введіть ім'я";
//
// const surname = document.createElement('input')
// surname.type = 'text';
// surname.placeholder = "Введіть призвище";
//
// const age = document.createElement('input')
// age.type = 'number';
// age.placeholder = "Введіть вік";
//
// const btn = document.createElement('button');
// btn.type = 'button';
// btn.innerText = 'Заповнити';
//
// document.body.append(name, surname, age, btn);
//
// let user ={};
//
// btn.addEventListener('click', (e) => {
//     const user = {
//         name: name.value,
//         surname: surname.value,
//         age: age.value
//     }
//     const div = document.createElement('div');
//     div.classList.add('user');
//     div.innerText = JSON.stringify(user);
//     document.body.appendChild(div);
// })

