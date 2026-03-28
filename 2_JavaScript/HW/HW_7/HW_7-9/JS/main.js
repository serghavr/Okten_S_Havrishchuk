class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const cinderellas = [

    new Cinderella('Cin1',20,31),
    new Cinderella('Cin2',22,32),
    new Cinderella('Cin3',21,33),
    new Cinderella('Cin4',23,34),
    new Cinderella('Cin5',23,35),
    new Cinderella('Cin6',24,36),
    new Cinderella('Cin7',25,37),
    new Cinderella('Cin8',26,38),
    new Cinderella('Cin9',25,39),
    new Cinderella('Cin10',23,40 )
];

    Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};
cinderellas.myForEach(c => console.log("Привіт, я " + c.name));

Array.prototype.myFilter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i])) {
            result.push(this[i]);
        }
    }

    return result;
};

const smallFeet = cinderellas.myFilter(c => c.footSize < 35);
console.log(smallFeet);