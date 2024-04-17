"""Прототипы"""
/*
const person = {
    city: 'Moscow'
}

// Создаем объект который будет прототипом

const student = Object.create(person);

// Создаем обект student и добавляем ему свойство person

student.ownCity = 'Piter';

// обращаемся к свойству, которого нет в объекте student, но есть в его прототипе person

console.log(student.city);
*/


"""Задание 1."""
/*
Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение
*/

const apple = {
    shape: 'round',
    color: 'green'
}
function objectProperty(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key, object[key])
        }
    }
}
objectProperty(apple);


"""Задание 2."""
/*
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

const apple = {
    shape: 'round',
    color: 'green',
    price: 'low'
}
const str = prompt('Введите имя свойства объекта: ')
function objectProperty(string, object) {
    console.log(Boolean(string && object[string]));
}
objectProperty(str, apple);


"""Задание 3."""
/*
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function func() {
    const obj = Object.create();
    return obj
}
console.log(obj);