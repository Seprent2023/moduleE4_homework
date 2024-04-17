function Device(name){
  this.name = name
}

Device.prototype.turnOn = function(name) {
    console.log(`${name} включен в розетку`)
  }

Device.prototype.turnOff = function(name) {
    console.log(`${name} выключен из розетки`)
  }

function Kettle(name, litres, power) {
    this.name = name,
    this.litres = litres,
    this.power = power
}

function FloorLamp(name, light_bulbs, power) {
    this.name = name,
    this.light_bulbs = light_bulbs,
    this.power = power
}

Kettle.prototype = new Device()
FloorLamp.prototype = new Device()


Kettle.prototype.setTemperature = function(temperature) {
    console.log(`Температура кипячения воды установлена на  ${temperature} градцсов по Цельсию`)
  }


let allPower = function(device1, device2) {
    console.log(`Общая мощность приборов ${device1.power + device2.power}`)
}

const kettle = new Kettle('kettle', 5, 10);
const lamp = new FloorLamp('lamp', 3, 70);

kettle.turnOn('kettle');
kettle.setTemperature(90);

allPower(kettle, lamp);