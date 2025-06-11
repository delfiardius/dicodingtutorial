# Menggunakan Modularisasi ESM di Browser

ESModule tak hanya dapat digunakan pada Node.js, tetapi juga di browser. Hal ini merupakan kabar gembira bagi Web Developer, khususnya Front-End Developer yang banyak berkecimpung di browser. Penasaran bagaimana caranya?

Caranya adalah dengan menambahkan type pada saat memanggil tag script seperti contoh berikut ini.

<script src="./esmodule.js" type="module"></script>

Dengan begitu, Anda dapat memuat berkas JavaScript sebagai ESModule pada berkas HTML dan dijalankan di browser. Perlu diingat bahwa tidak semua browser mendukung ESModule sehingga untuk menangani hal itu, tambahkan kode berikut ini.

<script nomodule src="fallback.js"></script>

Atribut nomodule akan memberitahu browser untuk memuat berkas fallback.js jika tidak mendukung ESModule.

Selain menulis JavaScript pada berkas terpisah dari HTML, Anda juga dapat menambahkan JavaScript dengan ESModule secara inline.

<script type="module">
  import App from "./app.js";
  console.log(App);
</script>
