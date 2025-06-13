/**
 * Apa yang terjadi jika SubClass ingin mengubah implementasi dari method
 * yang diwariskan dari SuperClass dan bagaimana caranya?
 * 
 * Caranya adalah menggunakan pilar utama lainnya dari OOP yaitu
 * Polymorphism. Polymorphism berasal dari bahasa Yunani yang memiliki 
 * arti secara harfiah yaitu memiliki banyak bentuk. Polymorphism 
 * merupakan konsep di mana suatu entitas menjadi SuperClass untuk 
 * mewariskan property atau method ke SubClass. 
 */

/**Overriding 
 * Overriding adalah cara kita untuk membuat implementasi yang berbeda 
 * di SubClass untuk method yang diturunkan dari SuperClass. Overriding 
 * dapat diterapkan untuk membuat method yang lebih spesifik di SubClass. 
 * Selain itu, overriding juga dapat diterapkan untuk menambah properti 
 * baru di SubClass. Overriding dapat diterapkan pada constructor maupun 
 * pada method.
*/

/**Overriding Constructor
 * Constructor adalah method khusus yang dipanggil ketika instance class 
 * dibuat. Misalnya, ketika membuat instance class dengan keyword new, 
 * constructor akan terpanggil.
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

    splitScreen() {
        console.log('Android have a Slit Screen');
    }
}

/** Karena Android tidak hanya bisa dijalankan di smartphone, tetapi 
 * juga di perangkat lain seperti tablet atau smart TV, kita menambahkan 
 * properti baru yaitu device di dalam constructor SubClass Android. 
 * Properti device ini ditambahkan untuk memenuhi kebutuhan penamaan 
 * perangkat yang menjalankan sistem operasi Android.*/

/**Ketika melakukan overriding constructor, kita wajib memanggil method 
 * super() di dalam constructor. Hal ini digunakan untuk menandakan apa 
 * saja property yang diturunkan dari SuperClass. Di contoh, property 
 * yang diturunkan adalah color, brand, dan model. Jika tidak memanggil 
 * method super(), akan terjadi error Referrence Error. */

const android = new Android('white', 'B', 'Galaxy S21', 'Smart TV');