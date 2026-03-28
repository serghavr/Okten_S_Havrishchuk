function User (id,name,surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let Users = [
    new User(1,'Penya', 'Petrov', 'asd@gmail.com', '+380225522'),
    new User (2, 'Ivan', 'Ivanov', 'iv@gmail.com', '+380225555'),
    new User (3,'Sveta', 'Makarova', 'sv@gmail.com', '+3806625555'),
    new User (4, 'Kolya', 'Mihel', 'mh@ukr.net', '+380848464684'),
    new User (5, 'Pasha', 'Buhyan', 'jnjn@gmail.com', '+380825484948'),
    new User (6, 'Vasya', 'Tuz', 'dsfs@gmail.com', '+380825555'),
    new User (7, 'Grisha', 'Fedorov', 'sdf@gmail.com', '+3807355265'),
    new User (8, 'olya', 'Muzika', 'onno@gmail.com', '+3808254544'),
    new User (9, 'Misha', 'Fedorov', 'sdf@gmail.com', '+3807355265'),
    new User (10, 'Tanya', 'Muzika', 'onno@gmail.com', '+3808254544'),
]
 console.log(Users)