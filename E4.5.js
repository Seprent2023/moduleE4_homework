class Device {
    constructor(name) {
    this.name = name
    }
    turnOn(name) {
    console.log(`${name} включен в розетку`)
    }
    turnOff(name) {
    console.log(`${name} выключен из розетки`)
    }
}

class Kettle extends Device {
    constructor(name, litres, power) {
    super(name);
    this.name = name;
    this.litres = litres;
    this.power = power;
    }
    setTemperature(temperature) {
    console.log(`Температура кипячения воды установлена на  ${temperature} градцсов по Цельсию`)
    }
}

class FloorLamp extends Device {
    constructor(name, light_bulbs, power) {
    super(name);
    this.name = name;
    this.light_bulbs = light_bulbs;
    this.power = power;
    }
}

let allPower = function(device1, device2) {
    console.log(`Общая мощность приборов ${device1.power + device2.power}`)
}

const kettle = new Kettle('kettle', 5, 10);
const lamp = new FloorLamp('lamp', 3, 70);
kettle.turnOn('kettle');
lamp.turnOn('lamp');
kettle.setTemperature(92);
allPower(kettle, lamp)