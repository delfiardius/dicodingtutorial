# Flexbox

Flexible box layout adalah model layout satu dimensi guna menyusun elemen-elemen (flex items) dalam posisi rows atau columns. Hal ini membuat flexbox disebut dengan direction-agnostic atau mengatur tata letak di banyak arah. Hal menarik dari flexbox adalah ia menawarkan penyusunan dengan fleksibel karena flex container atau flexbox dapat mengatur dimensi setiap flex-items (child element) sehingga layout yang diinginkan dapat tercapat dengan mudah.

Flex container memperluas flex items untuk mengisi ruang kosong atau menciutkannya sehingga menghindari overflow (dimensi child element yang keluar dariparent element-nya). Dengan hadirnya flexbox, perancangan layout dalam skala yang kecil dapat dilakuakn dengan mudah pada halaman web.

# Alasan Flexbox Hadir
1. Centering Secara Vertikal: Membuat konten berada di tengah secara vertikal dalam parent element-nya. Dari beberapa kasus, hal ini bisa dicapat menggunakan line-height. Namun, ini hanya berguna jika konten berada dalam satu baris serta kitat harus mengetahui secara ekplisit tinggi dari parent element.
2. Fluid Secara Dinamis dan Rata: Membuat semua child element memenuhi ruang dari parent element-nya secara dinamis dan merata. Hal ini mungkin bisa tercapai menggunakan ukuran nilai persentase. Namun, jika jumlah child element berjumlah ganjil, kita harus memikirkan nilai persentase yang tepat. Bahkan, tetap akan meninggalkan celah urang sedikit (tidak penuh).
3. Memiliki Height yang Sma pada Multi-Column : Membentuk child element dalam layout multiple-column agar memiliki ukuran height yang sama, meskipun jumlah content di dalamnya tidak sama.