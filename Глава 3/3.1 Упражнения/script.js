// console.log(`Задание 1
// ----------------------`)
// let a = "Привет, Simbirsoft"
// let b = 2022
// let c = true
// let d = "false"
// console.log(typeof(a) + ', ' + typeof(b) + ', ' + typeof(c) + ', ' + typeof(d));

// console.log(`Задание 2
// ----------------------`)
// let str1 = "Привет, "
// let str2 = "Мир!"

// console.log(str1 + str2);

// console.log(`Задание 3
// ----------------------`)
// const name = "Денис"

// console.log(`Привет, ${name}`);

// console.log(`Задание 4
// ----------------------`)
// const age = 19

// console.log(`Мне ${age} лет!`);

// console.log(`Задание 5
// ----------------------`)
// const str = 'abcde'

// console.log(str[0] + ' ' + str[2] + ' ' + str[4]);

// console.log(`Задание 6
// ----------------------`)
// const hour = 18
// const minutes = 46
// const second = 31

// console.log(hour + ':' + minutes + ':' + second);

// console.log(`Задание 7
// ----------------------`)
// const number = 10

// console.log((Math.sqrt(number).toFixed(3)));

console.log(`Задание 8
----------------------`);
const user = {
  id: 1,
  login: 'Administrator',
  email: 'admin@admin.admin',
  name: 'Иванов Анатолий',
  age: 23,
  account: '125$',
  phone: '+79602542214',
  address: {
    city: 'г. Ульяновск',
    street: 'ул. Ленина',
    build: 'д.25',
    flat: 'кв.15',
  },
  isActive: true,
  role: {
    id: 1,
    title: 'Администратор',
    name: 'administrator',
  },
};

console.log(user.name);
console.log(user.age);
console.log(parseInt(user.account));
console.log(
  user.address.city +
    ', ' +
    user.address.street +
    ', ' +
    user.address.build +
    ', ' +
    user.address.flat,
);
console.log(user.role.name);
console.log(2023 - user.age);
console.log(user.name.slice(0, -8));
