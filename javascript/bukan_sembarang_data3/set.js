/**
 * Menstrukturkan Data dengan Set
 * 
 * Set adalah struktur data yang spesial dibandingkan dengan map,
 * array, dan object. Kenapa dikatakan spesial? Jawabannya adalah
 * karena set tidak memiliki key dan indeks ketika menyimpan data.
 * Selain itu, data yang disimpan di dalam set akan bernilai unik
 * artinya tidak akan ada data yang duplikat.
 */

// Membuat set
const set = new Set();

// Inisialisasi nilai set
const mySet = new Set([1, 2, 3]);

// Menyimpan nilai di set
// Untuk menambahkan nilai set setelah diinisialisasi dapat
// menggunakan method add.

set.add(1);
set.add(2);

/** Method add hanya menerima satu argument sebagai nilai yang
 * ingin kita tambahkan ke dalam set. Jika kita memberikan nilai
 * yang sama, set hanya akan menyimpan sekali saja. Oleh karena itu,
 * data yang ada di dalam set tidak akan terduplikat.
 */

console.log(set);

// Mengakses nilai diset
/**
 * Set memiliki perbedaan untuk cara mengakses nilainya yaitu
 * menggunakan perulangan (looping). Cara pertama adalah 
 * menggunakan keyword for seperti berikut ini.
 */

set.add(3);
set.add(4);
set.add(5);

for (const number of set) {
    console.log(number);
}

// Menggunakan foreach
set.forEach((value) => console.log(value));

// Menghapus nilai di set
set.delete(1);
console.log(set);