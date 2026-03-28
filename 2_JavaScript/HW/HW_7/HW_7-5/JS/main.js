
function Client(id, name, surname , email, phone, products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}
function Products(title, price) {
    this.title = title;
    this.price = price;
}
 let Clients = [
     new Client (1,'Penya', 'Petrov', 'asd@gmail.com', '+380225522', [new Products('tv',10000),new Products('PS5',20000)]),
     new Client (2, 'Ivan', 'Ivanov', 'iv@gmail.com', '+380225555', [new Products('Phone',12000)]),
     new Client (3,'Sveta', 'Makarova', 'sv@gmail.com', '+3806625555', [new Products('blender',1000), new Products('pen',10)]),
     new Client (4, 'Kolya', 'Mihel', 'mh@ukr.net', '+380848464684', [new Products('laptop',10000)]),
     new Client (5, 'Pasha', 'Buhyan', 'jnjn@gmail.com', '+380825484948', [new Products('brush',100)]),
     new Client (6, 'Vasya', 'Tuz', 'dsfs@gmail.com', '+380825555', [new Products('moto',15000)]),
     new Client (7, 'Grisha', 'Fedorov', 'sdf@gmail.com', '+3807355265', [new Products('keyboard',1000)]),
     new Client (8, 'olya', 'Muzika', 'onno@gmail.com', '+3808254544', [new Products('mixer',1500)]),
     new Client (9, 'Misha', 'Fedorov', 'sdf@gmail.com', '+3807355265', [new Products('tv',10000), new Products('PC',100000)]),
     new Client (10, 'Tanya', 'Muzika', 'onno@gmail.com', '+3808254544',[new Products('dron',8000), new Products('tv',10000)]),
 ];
const sortedClients = Clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);