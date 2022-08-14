// const person = {
//     name:"Maxim",
//     age: 25,
//     isProgrammer: true,
//     languages: ["ru", "eng"],
//     // "complex key" : "Complex Value",
//     // ["key_" + (1 + 3)]: "Computed key", //key_4
//     greet () {
//     console.log("greet from person")
//     },
//     info(){
//         console.log("this:", this)
//         console.info ("Информация про человека по имени:", this.name);
//     }
// };

// console.log (person.name);
// const ageKey = "age";
// console.log (person[ageKey]);
// console.log (person ["complex key"]);
// console.log (person);
// person.greet ()

// person.age++;
// person.languages.push ("de");
// person["key_4"] = undefined;
// delete person ["key_4"];

// console.log(person);
// console.log(person["key_4"]);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

// const {name, age: personAge = 10, languages} = person;

// console.log(name, age, languages);
// console.log (person);

// for (let key in person){
//     if (person.hasOwnProperty(key)){
//     console.log("key:" , key);
//     console.log("value:", person[key]);
//     }
// };

// Object.keys (person).forEach ((key) => {
//     console.log("key:" , key)
//     console.log("value:", person[key])
// })

//Context

// person.info();

// const logger = {
//     keys(){
//         console.log("Object keys:", Object.keys(this))
//     }
// }

// const bound = logger.keys.bind(person);
// bound();
// logger.keys.call(person);
