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

📌 **Pemahaman Akhir tentang Statement & Expression**

Statement adalah instruksi yang diberikan kepada komputer untuk melakukan tugas tertentu.  
Statement bisa berisi expression — bagian dari kode yang menghasilkan nilai (disebut juga data).  
Data inilah yang sering kita olah dalam program, misalnya disimpan ke dalam variabel, digunakan dalam operasi, atau dikirim ke fungsi.

💬 Catatan pribadi (pemahaman awal):
Awalnya saya berpikir bahwa statement adalah instruksi yang di dalamnya terdapat expression (data) yang selalu disimpan ke dalam variabel. Ternyata tidak semua statement menyimpan data — ada juga yang langsung melakukan aksi seperti `console.log()` atau `if`.

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

## Tipe Data

Nilai yang dihasilkan dari sebuah expression dapat disebut juga sebagai data. Dalam pemrograman, data adalah elemen dasar yang sering kita simpan dan olah untuk membuat instruksi atau statement. Agar kita dapat menggunakan dan mengelola data dengan baik, penting untuk memahami berbagai tipe data yang ada, terutama pada JavaScript.

Pada materi ini, kita akan membahas tipe data dasar atau yang lebih dikenal sebagai tipe data primitif. Dalam JavaScript, ada tipe data primitif yang penting untuk diketahui, yaitu string, number, boolean dan nilai kosong (null dan undefined).

1. String
   String adalah tipe data yang merepresentasikan teks. Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string. Dalam JavaScript, nilai string diapit oleh tanda kutip. Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string, yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick). Backticks sering disebut juga sebagai template literals karena memungkinkan kita menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.
2. Number
   Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan. Untuk membuat nilai number, kita cukup menuliskan angkanya secara langsung tanpa menggunakan tanda khusus. Selain angka normal, tipe data number juga memiliki nilai spesial, yaitu Infinity dan NaN. Nilai Infinity dihasilkan ketika kita melakukan operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.
3. Boolean
   Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false. Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false. Untuk membuat nilai boolean, kita bisa menuliskan true atau false secara langsung. Dengan memahami cara kerja boolean, kita dapat menggunakan tipe data ini untuk membuat logika pemrograman yang lebih efektif dan efisien.
4. Nilai Kosong
   JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, yaitu null dan undefined. Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something).
   **Null** banyak diadopsi dalam berbagai bahasa pemrograman sebagai tipe data standar untuk menunjukkan nilai yang tidak ada. Untuk membuat null, kita cukup menulis sintaksis null. Adapun **undefined** hadir dalam JavaScript sebagai nilai implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun. Secara teknis, kita juga bisa secara eksplisit memberikan nilai undefined ke dalam sebuah variabel. Namun, hal ini tidak disarankan. Sebaiknya, gunakan null jika berniat untuk memberikan nilai kosong secara eksplisit.

## Mengubah Nilai Antar Tipe Data

Saat mengelola sebuah data dalam JavaScript, seringkali kita perlu mengubah nilai dari satu tipe data ke tipe data lain. Proses ini sangat penting karena dalam berbagai situasi, kita perlu menyesuaikan tipe data dengan konteks atau kebutuhan tertentu, baik untuk keperluan perhitungan, perbandingan, maupun manipulasi data.

JavaScript adalah bahasa pemrograman yang dinamis dan fleksibel, ia menyediakan berbagai cara untuk mengonversi tipe data. Konversi tipe data dapat dilakukan secara eksplisit oleh developer atau secara implisit oleh interpreter. Memahami cara konversi tipe data penting agar dapat menulis kode yang efisien, efektif, dan bebas dari kesalahan.

### Konversi Eksplisit

Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data karena dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer.

1. **Mengubah Ke String**
   Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara, yaitu menggunakan fungsi String() dan method .toString().

2. **Mengubah Ke Number**
   Secara umum, untuk mengubah bentuk numerik, seperti “10”, “3.14” dapat dilakukan dengan menggunakan fungsi Number(). Selain dengan fungsi Number(), ada juga cara yang lebih spesifik, seperti fungsi parseInt() dan parseFloat().

   Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer). Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. Ketika menemukan karakter yang tidak bisa diubah menjadi angka, proses konversi terhenti di sana. Dengan kemampuan ini, parseInt() dapat digunakan untuk mengubah nilai string, seperti "20CM", "64px", atau angka dengan satuan lainnya.

   Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter string satu per satu sehingga dapat mengubah numerik yang mengandung satuan.

3.
