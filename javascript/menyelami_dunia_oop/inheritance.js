/**Inheritance
 * 
 * Di OOP, inheritance memungkinkan class untuk mewarisi property dan 
 * method yang dimilikinya sehingga membantu mengurangi penulisan kode
 * secara berulang (mengurangi redundancy kode). Misalnya, ketika kita 
 * membuat sebuah class dengan property dan method, keduanya dapat 
 * digunakan kembali oleh class lainnya melalui inheritance.
 */

/**SuperClass dan SubClass
 * Istilah SuperClass dan SubClass akan sering kita dengar ketika 
 * bahas inheritancne di OOP. Class yang mewariskan property dan
 * method-nya disebut dengan SuperClass, Induk, Base, atau Parent Class.
 * Class yang mewarisi property dan method dari class lain disebut 
 * dengan SubClass dan Children Class (Anak).
 */

/**Contoh: Class SmartPhones dengan SubClass Android dan iOS */
class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class iOS extends SmartPhones {
    airDrop() {
        console.log('iOS have a behaviour AirDrop');
    }
}

class Android extends SmartPhones {
    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

const ios = new iOS('Black', 'A', '12 Pro Max');
const android = new Android('White', 'B', 'Galaxy S21');

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();

// Cek asal muasal class
console.log(ios instanceof SmartPhones);
console.log(android instanceof SmartPhones);