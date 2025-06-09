/**
 * Map adalah tipe data yang mirip dengan object yaitu menyimpan data
 * dengan key-value. Kalau sama seperti object, lalu apa fungsinya map?
 * Map berfungsi untuk menutupi kekurangan dari object. Map dapat
 * menggunakan key dengan tipe data apa pun, tidak seperti object 
 * yang hanya menerima string. Jadi perbedaan mendasarnya terletak
 * pada key yang digunakan.
 */

// Membuat map menggunakan object constructor.
const map = new Map();

// Menginisialisasi map
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250],
]);

console.log(productMap);

// Menyimpan nilai di map menggunakan set
// Set menerima dua nilai yang pertama adalalh keynya dan yang 
// kedua adalah valuenya.
map.set('name', 'aras');
map.set('last name', 'gulo');
console.log(map);

// Menggunakan number sebagai key-nya
const numberMap = new Map();
numberMap.set(1, 'number one');
console.log(numberMap);

// Mengakses nilai di map berdasarkan key tertentu dengan method get
console.log(map.get('name'));

// Menghapus nilai di map
map.delete('last name');
console.log(map);
