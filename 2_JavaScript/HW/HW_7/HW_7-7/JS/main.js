
class Car {

    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        if (newValue > 1900) this.year = newValue;
    }

    addDriver(driverObject) {
        if (driverObject) this.driver = driverObject;

    }
}

const car = new Car('Tiguan', 'VW', 2016,200,2);

console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(250)
car.changeYear(2020)
car.addDriver({name: 'Igor', age:32})
console.log(car)


