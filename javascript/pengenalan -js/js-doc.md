# JavaScript

## Pemrograman

1. Pemrograman adalah proses menyusun instruksi yang sistematis dan akan dieksekusi oleh komputer.
2. Melalui pemrograman, ada sangat banyak permasalahan yang dapat diatasi sehingga dapat memudahkan kehidupan manusia, contohnya di bawah ini.
   - Melakukan pemesanan/pembelian tiket liburan, nonton film, makanan & minuman, dan sebagainya melalui aplikasi perangkat mobile.
   - Membayar tagihan belanjaan di e-commerce dengan mengisi formulir informasi kartu kredit/debit dan klik tombol “Bayar” melalui browser.
   - Melakukan pertemuan dengan banyak orang secara daring.
   - Mengeksplorasi berbagai wilayah di dunia dengan aplikasi peta.
3. Tingkat kompleksitas program berbanding lurus dengan jumlah instruksi. Artinya, makin besar tugas komputer maka makin banyak instruksi yang akan disusun.

## Scripting dan Compiled Language

1. Serangkaian perintah komputer ditulis oleh developer dalam bentuk kode. Kode dapat berupa sekumpulan karakter, angka, dan simbol. Kode-kode ini hanya dipahami oleh manusia atau disebut dengan bahasa tingkat tinggi. Misalnya adalah JavaScript, Java, C, C++, Python, Matlab, dsb.
2. Hasil kegiatan menulis kode ini disebut sebagai source code. Berikutnya, source code tersebut akan diubah ke bahasa yang dapat dipahami oleh komputer sehingga bisa dianalisis dan dieksekusi perintah-perintahnya. Inilah yang disebut dengan bahasa mesin. Bahasa ini sangat sulit dipahami oleh manusia dan komputer hanya memahami bahasa ini dan disebut juga sebagai bahasa tingkat rendah (low-level language).
3. Agar bahasa tingkat tinggi bisa dieksekusi oleh mesin, kita perlu mengonversi atau mengolah source code ini ke bahasa rendah.
4. Dalam tahapan perubahan dari bahasa tingkat tinggi ke bahasa tingkat rendah, ada dua mekanisme yang dapat dilakukan serta setiap bahasa dapat menggunakan cara berbeda, yaitu compiler dan interpreter.

### Compiled Language

Misalnya, developer membuat sebuah program dengan suatu bahasa yang menggunakan compiler. Agar instruksi dapat dijalankan oleh komputer, source code perlu diubah dahulu ke bahasa mesin menggunakan compiler. Terakhir, program tersebut dapat diserahkan ke mesin agar dijalankan. Beberapa bahasa yang menggunakan compiler adalah Java, C++, Swift, dsb.

### Scripting Language

Tidak seperti compiled language, sebuah program atau source code yang ditulis dengan scripting language tidak memerlukan compiler. Source code dapat langsung diberikan, diterjemahkan, dan dijalankan oleh mesin. Mesin ini menggunakan interpreter dalam melakukannya. Contoh yang sangat dekat dengan kita adalah browser. Masing-masing aplikasi pasti membawa kode JavaScript dan langsung dibaca oleh browser. Beberapa bahasa pemrograman yang menggunakan interpreter adalah JavaScript, PHP, Python, dsb.

## Pengenalan JavaScript

JavaScript termasuk dalam salah satu bahasa pemrograman yang menggunakan interpreter (scripting language). Artinya, kita dapat menulis kode dengan bahasa ini dan langsung diserahkan ke mesin. Baris per baris kode akan diterjemahkan dan dieksekusi oleh mesin. Jika ada kode yang salah, error akan langsung ditampilkan pada saat runtime (program berjalan).

JavaScript sudah sangat marak digunakan dalam pengembangan aplikasi web. Bagi developer web, mereka sudah sangat andal dalam membangun beragam website dengan HTML (HyperText Markup Language) sebagai pembentuk struktur halaman dan CSS (Cascading Style Sheet) untuk styling agar terlihat cantik.

Namun, masalahnya adalah website agak statis. Tidak ada perubahan apa pun yang terjadi secara dinamis, baik dari sisi konten maupun styling. Misalnya, developer web ingin adanya interaktivitas elemen, perubahan styling, memiliki kendali terhadap struktur halaman, meminta data ke server, dll. Semua ini dilakukan hanya dengan JavaScript. Website menjadi lebih interaktif dan dinamis atas datangnya JavaScript.

Pesatnya perkembangan teknologi menuntun JavaScript berkembang. Saat ini, JavaScript sudah merambah berbagai platform. Selain aplikasi browser, banyak juga aplikasi server, desktop, dan lainnya yang dapat dibangun dengan JavaScript. Ini tercapai berkat runtime JavaScript, seperti Node.js dan Bun. Bahkan, beberapa database management system (DBMS), salah satunya MongoDB, juga menggunakan JavaScript sebagai bahasa scripting dan kuerinya.

## JavaScript Runtime Environment

Runtime environment adalah tempat sebuah program akan dieksekusi. Ia akan menentukan global object yang dapat diakses oleh program JavaScript. Lalu, apa yang dimaksud dengan global object? Nah, kita akan memahaminya ketika mempelajari masing-masing runtime environment.

Ada tiga macam yang akan kita bahas dalam materi ini, yaitu Browser, Node.js, dan Bun.

### Browser

Kebanyakan program JavaScript dijalankan melalui lingkungan browser untuk membuat aplikasi browser interaktif dan dapat menampilkan data yang dinamis. Program JavaScript yang dijalankan dalam lingkungan browser memiliki akses terhadap global object window. Selain menampilkan alert saja, ia juga memberikan akses developer untuk memanipulasi seluruh konten yang tampil di browser. Caranya adalah mengakses properti window.document. Program apa pun yang dijalankan dalam runtime ini dapat mengakses objek tersebut.

Program yang dibuat dan dieksekusi di lingkungan browser biasanya dikenal dengan aplikasi front-end atau aplikasi client. Jika ingin menjalankan program JavaScript dalam sistem komputer atau membangun aplikasi back-end, kita memerlukan runtime environment lain, seperti Node.js dan Bun.

1. Internal HTML
   Hal ini disebut juga sebagi embedded JavaScript.

2. External JavaScript
   Kode program dalam cara ini ditulis secara terpisah dari berkas HTML. Berkas JavaScript ditulis dengan berkas berekstensi “js”. Pemisahan ini membuat program JavaScript tidak lagi terhubung dengan HTML. Oleh karena itu, kita gunakan 'script' untuk mengimpornya.

3. REPL versi Browser
   Cara ketiga adalah menjalankannya secara langsung melalui browser atau REPL. Read-Eval-Print-Loop atau disingkat REPL dimiliki juga oleh browser. Caranya sangatlah mudah.
   Buka browser kesukaan Anda dan Developer Tools di dalamnya. Developer Tools adalah fitur browser untuk mendukung proses pengembangan aplikasi web. Salah satu fitur yang dimiliki adalah REPL. Ini dapat kita akses dengan membuka tab Console dan mulai menuliskan kode JavaScript.

Program yang dibuat dan dieksekusi di lingkungan browser biasanya dikenal dengan aplikasi front-end atau aplikasi client. Jika ingin menjalankan program JavaScript dalam sistem komputer atau membangun aplikasi back-end, kita memerlukan runtime environment lain, seperti Node.js dan Bun.

### Node.js

Node.js adalah runtime environment untuk JavaScript yang berbeda dari browser. Meskipun berbeda, seluruh fitur dari bahasa pemrograman JavaScript, yakni membuat variabel, melakukan operasi aritmetika, dsb. dapat dilakukan juga di sana. Hanya saja kita tidak memiliki akses lagi terhadap global object milik browser, seperti alert. Sebagai gantinya, Node.js memberikan akses kepada developer untuk mengakses file system, mengatur database, dan lainnya.

### Bun

Ada alternatif yang dapat digunakan untuk menjalankan program dalam sistem komputer selain Node.js, yaitu Bun. Ia adalah JavaScript runtime baru yang menyajikan ekosistem JavaScript terkini dan berbagai fitur yang mengedepankan kecepatan. Jika mengacu ke halaman resminya, ia dibangun agar tetap kompatibel dengan berbagai fitur dari Node.js.

Sama seperti Node.js, Bun mendukung berbagai sistem operasi, seperti Linux, MacOS, dan Windows. Untuk menjalankan program dengan Bun, kita perlu memasangnya terlebih dahulu dan kita dapatkan perintah bun di terminal setelahnya.

Ada dua cara untuk menjalankan programnya, yaitu mengeksekusi berkas dan REPL.

Itu dia beberapa runtime environment untuk bahasa pemrograman JavaScript. Ternyata ada beberapa runtime, ya. Meskipun demikian, JavaScript memiliki fitur yang seragam dengan beberapa platform atau runtime lainnya. Ya, hal ini karena mereka tetap patuh terhadap standar ECMAScript.
