const age = 10;
const name = 'Dicoding';
console.log(`Aku ${name}, umurku ${age} tahun.`);

// ini adalah #komentar
/**
 * Yang 
 * ini 
 * juga
 * adalah
 * komentar
 * */ 

// Materi #variabel
const id = 123;
let username = 'Dicoding';

console.log(id);
console.log('Sebelum diubah: ',username);

username = 'Dicoding Indonesia';
console.log('Setelah diubah: ',username);
console.log('Keunggulan penulisan variabel dengan let, nilainya dapat diubah');

// Materi #tipe_data

console.log("\n====Materi Tipe Data====");
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;
console.log("\n====String====");
console.log(text);

console.log("\n====Number-Infinity====");
const result = 50/0;
console.log(result);

console.log("\n====Number-NaN====");
const hasil = Number('Dicoding');
console.log(hasil);

console.log("\n====Boolean====");
const _benar = true;
const _salah = false;
console.log(_benar);
console.log(_salah);

console.log("\n====Null dan Undefined====");
let message = null;
let _pesan;
console.log(message);
console.log(_pesan);