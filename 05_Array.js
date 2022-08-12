// const cars = ["Мазда", "Форд","БМВ", "Мерседес"];
// // const people = [
// //     {name: "Maxim", budget: 4200},
// //     {name: "Kate", budget: 3500},
// //     {name: "Valery", budget: 1700}
// // ];
// const fib = [1, 1, 2, 3, 5, 8, 13];

//Function
// function addItemToEnd () {

// }

//Method
// cars.push("Рено");
// cars.unshift("Волга");
// const firstCar = cars.shift();
// const lastCar = cars.pop();

// console.log(firstCar);
// console.log(lastCar);


// console.log(cars.reverse());
// console.log(cars);


// const index = cars.indexOf("БМВ");
// cars[index] = "Порше";
// console.log(cars);

// const index = people.findIndex(function(person){
//     return person.budget === 3500
// });
// const person = people.find(function(person){
//     return person.budget === 3500
// });
// let findedPerson
// for (const person of people) {
//     if (person.budget ===3500){
//         findedPerson = person
//     }
// }

// console.log(findedPerson);

// const person = people.find (person => person.budget === 3500)
// console.log (person)


// console.log (cars.includes("Мазда!"))

// const upperCaseCars = cars.map(car=> {
//     return car.toLocaleUpperCase()
// });

// const pow2 = num => num ** 2;
// const sqrt = num => Math.sqrt(num)
// const pow2 = num => num ** 2;

// const pow2Fib = fib.map(pow2);

// const filteredNumbers = pow2Fib.filter (num => {
//     return num > 20
// });
// console.log(pow2Fib);
// console.log (filteredNumbers)

// const people = [
//     {name: "Maxim", budget: 4200},
//     {name: "Kate", budget: 3500},
//     {name: "Valery", budget: 1700}
// ];

// const allBudget = people
// .filter(person => person.budget > 2000)
// .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0);

// console.log(allBudget)




// // Задача 1
// const text = "Привет, мы изучаем JavaScript";
// const reverseText = text.split("").reverse().join("");
// console.log(reverseText);