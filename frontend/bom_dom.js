/**
 * BOM : Browser Object Model
 * DOM : Document Object Model
 */

// Bagaimana JavaScript dapat mengontrol sebuah website atau browser?

/**
 * Cara pertama adalah BOM.
 * Dengan BOM, kita dapat memberikan perintah-perintah khusus ke browser, misalnya
 * melalui sebuah 'atribut' khusus milik browser yakni 'window' sehingga kit bisa membuat
 * browser menampilkan pensah pop-up. Caranya yakni menjalankan method alert() pada
 * console milik browser. Selain method alert(), objek window juga memiliki method-
 * method lainnya, seperti prompt, console, dsb.
 */

/**
 * Cara kedua adalah DOM. 
 * DOM sama seperti BOM. Perbedaannya adalah kita menggunakan global objek bernama 
 * document. Melalui global object ini, kita bisa menangkap seluruh elemen dalam dokumen
 * HTML guna memanipulasi konten HTML melalui methode 'getElementById()'. Method ini akan
 * menangkap elemen berdasarkan value dari atribut id.*/