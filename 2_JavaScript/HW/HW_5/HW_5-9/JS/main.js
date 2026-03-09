const foobar = (users) => {
    for (const user of users) {
    document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)}
}
foobar(
    [
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Bill', age: 22},
        {id: 3, name: 'Jake', age: 29},
        {id: 4, name: 'Alan', age: 40},
        {id: 5, name: 'Connor', age: 18},
    ]
)