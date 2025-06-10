// const error = new Error('Terjadi error');
// console.error(error);

// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error('Pembayaran kurang');
// }

// try catch
try {
  console.log('Memulai program');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena tidak ada error, blok ini akan diabaikan');
}

try {
  console.log('Memulai program');
  throw new Error('Error: Program berhenti');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena ada error, blok ini akan dieksekusi');
}

// finally
try {
  console.log('Ini try block');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}