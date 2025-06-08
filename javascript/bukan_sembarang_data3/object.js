// membuat object dengan objet literals
const user = {}; // dengan properti kosong
const products = {name: 'Sepatu', price: 230000}; // dengan beberapa properti

// properti have key and value
const user2 = {
    name: 'Dicoding',
    // 'last name': 'Indonesia',
    lastName: 'Indonesia',
    age: 9,
};

// mengakses properti object
// menggunakan dot (.)
console.log(user2.name);

// menggunakan square bracket
// console.log(user2["last name"]);

// mengakses menggunakan object destructuring
// Destructuring dalam JS merupakan sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (variabel)
const {name, lastName} = user2;
console.log(name, lastName);

/** Object destructuring sangat berguna sekali ketika Anda memiliki object
 * dengan properti yang banyak dan ingin mendapatkan nilai masing-masing 
 * propereti seperti contoh berikut.
*/

const pengguna = {
    id: 24,
    email: 'user@gmail.com',
    name: 'user',
    nickName: 'phone user',
    username: 'user123',
    password: 'secret',
};

const {id, email} = pengguna;
console.log(id, email);

// mengubah nilai di properti object
// dapat dilakukan asalkan nama object dan nama propertinya diketahui
const account = {
    balance: 1000,
    debt: 10,
};

account.balance = 2000;
console.log(account.balance);

// menghapus properti di object menggunakan operator delete.
delete account.debt;
console.log(account);

delete user2['lastName'];
console.log(user2);