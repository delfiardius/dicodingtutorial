// Membuat class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Membuat instance dari class Person
const person1 = new Person('Delfi', 26);
const person2 = new Person('Ardi', 25);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();

// Cek tipe class Person
console.log(typeof Person);