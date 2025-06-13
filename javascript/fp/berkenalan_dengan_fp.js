/**Imperatif 
 * Dengan imperatif, untuk mencapai suatu tujuan, kita perlu menulis
 * instruksi yang sifatnya langkah demi langkah. Kita perlu mendefinisikan
 * cara melakukan perulangan, waktu perulangannya harus berhenti, hingga
 * mengisikan nilai ke array baru. Dampaknya, kode yang ditulis menjadi 
 * banyak. Gaya imperatif memang fokusnya pada 'how to solve' bukan
 * 'what to solve'
*/

const names = ['Delfi', 'Ardi', 'Gulo', 'Dear', 'Dius'];
const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/**Deklaratif 
 * Berikut adalah kode untuk menyelesaikan masalah yang sama,
 * tetapi menggunakan gaya deklaratif.
*/

const nama = ['Delfi', 'Ardi', 'Gulo', 'Dear', 'Dius'];
const kumpulanNamaBaru = nama.map((nama) => `${nama}!`);
console.log(kumpulanNamaBaru);

/**Fungsi .map() yang Anda lihat di atas merupakan salah satu
 * implementasi dari konsep FP. Konsep utama dalam FP meliputi pure
 * function, high-order function, recursion, dan immutability.
 * 
 * Tantangan terberat dalam mempelajari FP adalah menghilangkan
 * kebiasaan berpikir dari paradigma imperatif yang sudah sering kita
 * anut. Tentu hal ini membutuhkan waktu yang panjang agar Anda 
 * benar-benar terbiasa dengan cara berpikir functional programming.
 */
