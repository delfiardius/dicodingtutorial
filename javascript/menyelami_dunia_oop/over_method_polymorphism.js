/**Overriding method 
 * 
 * Overriding method memungkinkan SubClass untuk membuat implementasi 
 * spesifik dari metode yang sudah ada di SuperClass.
*/

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

/**Extend SuperClass */
class Android extends SmartPhones {
    // overriding constructor
    constructor(color, brand, model, device) {
        super(color, brand, model);
        this.device = device;
    }

    /**Kita menulis ulang method charging() dengan implementasi spesifik 
     * di SubClass Android. Berbeda dengan overriding constructor, 
     * overriding method tidak wajib untuk menulis method super(). 
     * Namun, jika Anda butuh untuk memanggil method charging() dari
     * SuperClass bersamaan dengan method charging yang sudah di-override,
     * hal itu dapat dilakukan dengan memanggil method super() seperti 
     * contoh berikut. */
    charging() {
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log('Android have a Slit Screen');
    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'Smart TV');
android.charging();