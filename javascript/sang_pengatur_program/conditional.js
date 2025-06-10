/**Program akan menjalankan statement berurutan dari atas ke bawah 
 * (secara sekuensial) */

const number = 100;
console.log(number);

/**Flow Control adalah urutan bagaimana expressian dan statement 
 * dijalankan oleh komputer berdasarkan kondisi dan logika tertentu.
 */

/**Conditional Flow
 * 
 * adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan.
 * Jika suatu kondisi terpenuhi, kode akan dieksekusi dan kode yang
 * lainnya akan diaikan. Kondisi ini ditentukan dari inputan yang
 * diberikan oleh pengguna.
*/

/**If Statement 
 * If statement akan mengeksekusi blok jika kondisi terpenuhi (true).
 * Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi.
*/

const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
    console.log('Makan di restoran mal');
}

console.log('Pulang ke rumah');

const score = 80;

if (score >= 80) {
    console.log('Selamat. Anda lulus ujian!');
} else {
    console.log('Maaf, Anda belum lulus ujian.');
} 

const nilai = 85;

if (nilai > 90) {
    console.log('Selamat, Anda mendapatkan nilai A!');
} else if (nilai > 80) {
    console.log('Selamat, Anda lulus ujian!');
} else {
    console.log('Maaf, Anda belum lulus ujian.');
}

/**Ternaryr operator */
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkakn discount sebesar ${discount * price}`);

/**Switch Case */
const fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('I am a banana');
        break;
    case 'apple':
        console.log('I am an apple');
        break;
    case 'orange':
        console.log('I am a orange');
        break;
    case 'strawberry':
        console.log('I am a strawberry');
        break;
    default:
        console.log('I am not a fruit. I am a programmer.')
}

/**If case */
const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

/**Switch case */
switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}