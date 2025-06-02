# Lautan Sintaks

## Expression dan Statement

Pemrograman pada dasarnya adalah cara kita berkomunikasi dengan komputer. Komunikasi ini melibatkan pemberian instruksi kepada komputer agar menjalankan tugas-tugas tertentu dengan benar. Tentu saja, kita perlu mengikuti aturan tertentu untuk memberikan instruksi kepada komputer.

Instruksi yang diberikan kepada komputer berhubungan erat dengan proses komputasi. Oleh karena itu, instruksi tersebut haruslah jelas, terstruktur, dan sistematis. Contoh instruksi yang umum dilakukan pada komputer sebagai berikut.

- Instruksi 1: buat variabel bernama "age" dan berikan nilai 10.
- Instruksi 2: buat variabel bernama name dan berikan nilai “Dicoding”.
- Instruksi 3: cetak teks “Aku [name], umurku [age] tahun.”, [name] diambil dari nilai variabel name dan [age] diambil dari nilai variabel age.

### Statement

Pada pemrograman, satu instruksi umumnya ditulis dalam satu baris kode. Jadi, tiga instruksi umumnya ditulis dalam tiga baris kode. Istilah yang digunakan untuk "instruksi" dalam bahasa pemrograman adalah "statement".

Namun, penting untuk dicatat bahwa dalam bahasa pemrograman, tidak selalu satu baris hanya memiliki satu statement. Kita dapat menuliskan beberapa statement dalam satu baris kode sekaligus.

Bisa disimpulkan bahwa statement adalah instruksi yang akan dieksekusi oleh komputer.

### Expression

Selain statement, ada istilah lain yang penting untuk diketahui, yaitu expression. Ini merupakan bagian dari sebuah statement yang menghasilkan nilai. Setiap statement biasanya mengandung setidaknya satu expression. Contoh, expression dalam statement di atas adalah nilai age 10, teks “Dicoding”, dan teks “Aku Dicoding, umurku 10 tahun.”.

Expression dapat berupa hal-hal yang menghasilkan nilai, tidak hanya nilai statis, seperti angka 10 atau teks “Dicoding”. Namun, hasil operasi matematika seperti 4 + 4 yang akan menghasilkan nilai 8 atau penggabungan teks seperti “Dicoding” + “ “ + “Indonesia” yang akan menghasilkan teks “Dicoding Indonesia” juga merupakan sebuah expression.

Memahami istilah-istilah ini dalam struktur kode JavaScript sangatlah penting, baik dalam proses pembelajaran maupun pengembangan aplikasi nyata. Salah satu manfaat utamanya adalah ketika Anda menghadapi pesan error dari interpreter JavaScript yang sering menggunakan istilah statement atau expression dalam pesan error-nya.

## Komentar

Komentar adalah teks bersifat penjelasan yang dapat dibaca oleh programmer dan ditulis dalam berkas kode. Pada JavaScript, untuk menuliskan teks komentar, ada dua cara, yaitu menggunakan tanda // dan /\* \*/. Teks yang ditulis dengan tanda tersebut dianggap bukan instruksi dan tidak akan dijalankan oleh interpreter.

## Variabel

Variabel adalah wadah untuk menampung sebuah nilai. Nilai yang ditampung dapat berupa angka, teks, atau apa pun yang menghasilkan nilai (expression). Pada JavaScript, kita bisa membuat variabel melalui dua cara, yakni dengan sintaksis const dan let.

Perbedaan dari variabel yang dibuat dengan const dan let adalah variabel yang dibuat dengan const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya.

Namun, ketika Anda membuat variabel dengan const, nilai yang ditetapkan ketika variabel dibuat, tidak bisa diubah. Jika Anda coba untuk mengubahnya, program akan terhenti dan menghasilkan error.

Variabel yang dibuat dengan const juga umum disebut sebagai constant (konstan) karena dalam matematika istilah tersebut memiliki arti tetap atau tidak berubah-ubah.

### Aturan Penamaan Variabel

1. Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
   Nama variabel haruslah unik dalam cakupannya. Anda tidak bisa menggunakan nama yang sama dengan variabel yang sudah terdefinisi sebelumnya. Anda boleh menggunakan nama variabel yang sama selama cakupannya berbeda, contohnya variabel yang berada dalam sebuah fungsi berbeda.
2. Nama Variabel Hanya Terdiri dari Karakter Tertentu
   Nama variabel tidak boleh mengandung karakter selain huruf, angka, garis bawah (underscore), dan tanda dolar
3. Nama Variabel Tidak Boleh Diawali dengan Angka
   Walau angka boleh digunakan dalam penamaan variabel, tetapi jika nama variabel diawali dengan angka, nama tersebut dianggap salah
