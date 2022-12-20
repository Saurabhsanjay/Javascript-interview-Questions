// Q1.what are the possible ways to create object 
// 1st Way
let Obj = new Object()
console.log(Obj);

// 2nd Way 
let object = Object.create(null)
console.log(object);

// 3rd way 
let object1 = {
    name: "saurabh",
    lastname: "ubale",
    age: 24
}
console.log(object1);

// 4th Way using  es6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let obj = new Person("saurabh", 24)
console.log(obj);

console.log(Object.getPrototypeOf(Person));

//Q.2 what is protoype chaining 
// when we create an object we get an proto of that object
//  we can use the property inside of that proto this is called protoype chaining.


// Q.3 What is JSON and its common operations
// JSON stands for javascript object notation 
// we can use jsonfile by using .json extension 
// JSON is used to store data to make it readable 

let text={Name:"saraubh",Age:24}
console.log(JSON.parse(JSON.stringify(text))) 
// stringify method converts object into json format and parse converts into text readable format 
// JSON.parse(text)
// console.log(JSON.parse(text));


//Q.4 what is array.slice( )
array.slice()
// slice method tooks two argument one is start and second is end eg(slice(0,1))
// it will return only 0th index 
//it does not modified original array 

// Q.5 what is Array.splice() 
array.splice()
// splice method tooks two arguments start and delete count splice(start,deletecount) 
// eg. splice(0,2) it starts from zero and delete first two elements;
// splice modifies original array whereas slice does not modified original array;  

// Q.6 Diffference between slice and splice 
// splice modfifes original array whereas slice does not


