class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
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

const prince = new Prince('Prin',30,34);

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper) {
//         prince.wife = cinderella;
//     }
// }

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
    prince.wife = cinderellaMain;
console.log(prince);