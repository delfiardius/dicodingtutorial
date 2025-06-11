# Menggunakan Modularisasi ESM di Node.js

Karena ESModule adalah barang baru di dunia persilatan Node.js, kita perlu menambahkan konfigurasi dalam project Node.js. Kalau Anda mengikuti latihan di modul ini pada lokal komputer, Anda akan mengalami error ketika menggunakan import dan export. Mungkin beberapa dari Anda sudah menyadari akan hal ini dan telah mencari solusi error dengan berselancar di internet.

Sebenarnya, kita hanya membutuhkan konfigurasi sederhana. Berikut cara yang dapat kita terapkan jika ingin menggunakan ES Modul di Node.js.

## Mengubah ekstensi berkas

Cara pertama yaitu mengubah ekstensi berkas dari .js menjadi mjs. Dengan mengubah format ini, kita memberitahu ke Node.js bahwa kita ingin menggunakan ESModule. Cara ini terbilang sangat sederhana. Namun, bagaimana jika berkas project Anda sangat banyak? Tidak mungkin Anda mengubahnya satu per satu karena pasti memakan waktu cukup lama dan tidak efisien.

## Menambahkan konfigurasi di package.json

Cara berikut ini akan menyelesaikan masalah yang ada pada cara sebelumnya yaitu dengan menambahkan konfigurasi pada level package. Dengan menambahkan konfigurasi pada level package, kita tidak perlu lagi untuk mengganti ekstensi berkas menjadi .mjs dan cara inilah yang kami lakukan sepanjang modul ini.
