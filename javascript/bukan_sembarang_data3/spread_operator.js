/**Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan. 
 * Spread operator digunakan untuk menyebarkan nilai yang ada pada object 
 * dan array. Spread operator yang ditandai dengan sintaks 
 * tiga titik  (...) adalah fitur yang menarik dan membantu dalam 
 * pengelolaan object dan array. Dengan menggunakan spread operator, 
 * nilai object dan array dapat di-iterable menjadi beberapa element. 
*/

// Object
// menggabungkan dua object
const obj1 = {namaDepan: 'Delfi'};
const obj2 = {namaBelakang: 'Gulo',  alamat: 'Kav. Lama Sei Daun'};
const newObj = {...obj1, ...obj2};
console.log(newObj);

// menyalin object
const transaksiKeluar = {
    makan: 'Ayam Geprek',
    harga: 15000,
};

const salinTransaksi = {
    ...transaksiKeluar,
};

console.log('Data Original: ',transaksiKeluar);
console.log('Salinan Data: ',salinTransaksi);

// Array
const array1 = ['Ardi'];
const array2 = ['Gulo', 'Kav. Lama Sei Daun'];
const newArray = [...array1, ...array2];
console.log(newArray);