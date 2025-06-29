/**
 * Melalui prompt() kita dapat mengambil data input dari user 
 * melalui dialog browser. Method ini akan menampilkan sebuah
 * dialog browser yang meminta user untuk mengisi kolom inputnya.
 * Karena bisa menangkap input dari user, method ini memiliki lebih
 * banyak fungsionalitas ketimbang alert(). 
 */

// let pesanInput = prompt('Silakan masukkan angka...');
// let pesanInputConvertedToNumber = Number(pesanInput);
// console.log(`Tipe data dari \`pesanInputConvertedToNumber\` adalah ${typeof pesanInputConvertedToNumber}`);

let name = prompt('Silakan masukkan nama Anda!', 'John Doe');
console.log(name);