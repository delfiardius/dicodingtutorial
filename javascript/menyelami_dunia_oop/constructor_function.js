/**
 * Constructor function adalah cara yang digunakan untuk membuat 
 * object dan class sebelum adanya ES6. Cara membuat object dan class 
 * menggunakan constructor function dapat dilihat pada contoh berikut.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

/**
 * Kode di atas merupakan contoh membuat blueprint dari entitas person. 
 * JavaScript bukan bahasa pemrograman berbasis class, melainkan bahasa 
 * pemrograman berbasis prototype (prototype-based language). 
 * Oleh karena itu, Anda melihat penggunaan prototype pada contoh 
 * kode di atas. 
 * 
 * Prototype adalah salah satu konsep fundamental dalam JavaScript yang 
 * memungkinkan pewarisan sifat dan method antar object (akan dibahas 
 * nanti). Semua object di JavaScript memiliki properti tersembunyi 
 * bernama [[Prototype]] yang mengarah ke object prototype lain atau null.
 */

/**
 * Kemudian, untuk membuat object person dengan constructor function 
 * dapat dilakukan seperti berikut. */

const person1 = new Person('Ardi', 25);
const person2 = new Person('Delfi', 26);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();