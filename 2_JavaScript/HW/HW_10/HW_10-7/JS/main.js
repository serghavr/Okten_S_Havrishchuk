// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd) {
    const localStorageItem = localStorage.getItem(arrayName);
    if (!localStorageItem) {
        throw new Error("Could not add to local storage");
    }
    const arrayToAdd = JSON.parse(localStorageItem);
    if (typeof objToAdd === "object") {
        arrayToAdd.push(objToAdd);
    }

    localStorage.setItem(arrayName, JSON.stringify(arrayToAdd));
}
addToLocalStorage('sessionList', {});
