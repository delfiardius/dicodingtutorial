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

// Materi #konversi_tipe_data
console.log("\n====Konversi Tipe Data - Oleh Developer====");
console.log("\n====Ubah ke String====");
const number = 123;
const boolean = true;
const strNumber = String(number);
const strBool = boolean.toString();

console.log(strNumber);
console.log(strBool);

console.log("\n====Ubah ke Number====");
const strNbr = '123';
const strFloat = '3.14';
const __benar = true;

const numFromString = Number(strNbr);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(__benar);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

console.log("\n====Parse Int dan Parse FLoat====");
const cm = '20.55cm';
const px = '64.23px';
const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);

console.log(floatFromCM);
console.log(floatFromPX);

console.log("\n====Ubah ke Boolean====");
const number2 = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number2);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromNull);

console.log("\n====Konversi Implisit - Oleh Internal JS====");
const age2 = 28;
const pesan = 'Umurku: ' + age2;

console.log(pesan);

const strNumber2 = '123';
const result2 = strNumber2 * 2;

console.log(result2);

// Materi #operator
/***
 * Operator Unary: Satu operand, misalnya typeof
 * Operator Binary: Dua operand, misalnya +, -, *, /, <, >, etc.
 * Operator Ternary: Tiga operand
 * Operator Assignment/Penugasan: (= -> sama dengan)
 * Operator Arithmetic/Aritmetika: (% -> modulus, ++ -> increment, -- -> decrement, ** -> exponensial)
 * Operator Comparison/Perbandingan: 
 * (== -> sama, != -> tidak sama, === -> identik, !== -> tidak identik, 
 * > -> lebih dari, >= -> lebih dari atau sama dengan, < -> kurang dari, <= -> kurang dari atau sama dengan)
 * Operator Logical/Logika: (&& -> AND, || -> OR, ! -> NOT)
 * Operator String: + (apa bila salah satu atau kedua nilai adalah string, maka nilai tersebut akan digabungkan menjadi string,
 * tetapi apabila kedua nilai tersebut nilainya adalah angka, maka simbol + akan berubah fungsi sebagai operator aritmetika
 * untuk menjumlahkan kedua bilangan tersebut.)
 */