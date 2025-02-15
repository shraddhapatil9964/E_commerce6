//creating an object and adding prototype to it
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototypr.greet = function (){
    console.log(`Hello, I am ${this.name} and my age is ${this.age}`);
}

const person1 = new Person("karti",20);
const person2 = new Person("Aishwarya",19);
person1.greet();
person2.greet();

