// Dengan Array kumpulan data disimpan dengan terurut
// Data diakses menggunakan pola indeks.

const array = [1, 2];
console.log(typeof array);

// Membuat array
// menggunakan object constructor
const user = new Array();
const numbers = new Array(5);

console.log(user);
console.log(numbers);

// menggunakan sintaks Array.from
// Array.from merupakan method untuk membuat array yang diperkenalkan di ES6.
const foo = Array.from('foo');
console.log(foo);

// Array.from juga dapat dimanfaatkan untuk menyalin array lainnya sebagai berikut.
const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer);

/**Menggunakan array literal
 * Cara yang paling mudah, singkat, dan disarankan untuk membuat array
 * adalah menggunakan object literals. Membuat array dengan literals
 * lebiih disarankan karena lebih sederhana dan mudah untuk dibaca.
 */

const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits);

/**Mengakses Elemen Array 
 * 
 * Gunakan nilai indeks untuk mengakses nilai elemen array nya
*/

const myArray = [45, 55, 30, 24];
console.log(myArray[1]);

/**Manipulasi Nilai Array 
 * manipulasi nilai pada array dapat dilakukan dengan menggunakan 
 * indexing dan method push
*/

myArray[1] = 67;
console.log(myArray[1]);

/** Menggunakan push. Push adalah cara yang kita gunakan untuk 
 * menambahkan nilai ke dalam array pada element terakhir.
 */

myArray.push(27);
console.log(myArray);

/**Menghapus Element dan Data Array
 * menggunakan keyword delete dengan catatan harus mengetahui indeksnya
 * terlebih dahulu
 */

// Menghapus nilai atau data
delete fruits[1];
console.log(fruits);

// Menghapus element menggunakan method splice()
// Method splice membutuhkan dua parameter yaitu "indeks" dari element
// yang ingin dihapus dan "jumlah element" yang ingin dihapus
fruits.splice(1,1);
console.log(fruits);

// Hapus dua element
myArray.splice(1.2);
console.log(myArray);

// Menghapus nilai atau data menggunakan method shift dan pop
// Kekurangan dari kedua method ini adalah tidak sefleksibel
// delete dan spliice karena shift hanya menghapus element pertama 
// dan pop menghapus element terakhir.

// Menghapus element pertama fruits
fruits.shift();
console.log(fruits);

// Menghapus element terakhir fruits
fruits.pop();
console.log(fruits);

/**Array Destructuring 
 * Destructuring digunakan untuk melihat isi dari array. Destructuring
 * cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang 
 * di dalamnya adalah nama variabel yang kita assign. Kemudian
 * diikuti dengan assignment operator sama dengan (=) dan array 
 * yang ingin diambil nilainya.
*/

const introduction = ['Hello', 'Delfi'];
const [greeting, name] = introduction;
console.log(greeting);

const [cherry, apple] = fruits;
console.log(fruits);

myArray.push(23);
myArray.push(30);

// Array Method Reverse
console.log(myArray);
myArray.reverse();
console.log(myArray);

// Sort
myArray.sort();
console.log(myArray);