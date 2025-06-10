/**Rest Operator
 * Rest operator memungkinkan function untuk menerima argument dalam 
 * bentuk array. Rest operator yang digunakan pada parameter fungsi 
 * sering disebut sebagai Rest Parameter. Cara menggunakan rest 
 * parameter adalah dengan menambahkan tiga titik (...) sebelum 
 * paramater terakhir.
 */

function myFunc(...name) {
    console.log('name: ', name);
}

myFunc('Delfi', 'Ardius', 'Gulo');

/**Rest parameter memungkinkan kita untuk menulis argument yang tak
 * terbatas pada function. Rest parameter akan mengangani argument
 * tersebut menjadi sebuah array dan meneruskannya ke function.
 * Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian
 * dari array yang dihasilkan rest parameter.
 */

function myFunc2(number, ...name) {
    console.log('number: ', number);
    console.log('name: ', name);
}

myFunc2('one', 'Delfi', 'Gulo');

/**Karena rest parameter menangani argument sebagai array, method
 * array.lenght juga dapat digunakan pada rest parameter seperti
 * berikut ini.
 */

function myFunc3(...name) {
    console.log(name.length);
    console.log('name: ', name);
}

myFunc3('Delfi', 'Ardius', 'Gulo');

/**Tidak hanya method array.lenght, kita juga dapat menggunakan method
 * array lainnya pada rest parameter.
 * 
 * Selain pada parameter fungsi, rest operator juga kerap digunakan
 * ketika kita melakukan destructuring array untuk menangkap seluruh
 * sisa elemen terakhir dalam bentuk array.
 */

const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];
const [first, second, ...rest] = favorites;
console.log(first);
console.log(second);
console.log(rest);