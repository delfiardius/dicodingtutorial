# Flexbox

Flexible box layout adalah model layout satu dimensi guna menyusun elemen-elemen (flex items) dalam posisi rows atau columns. Hal ini membuat flexbox disebut dengan direction-agnostic atau mengatur tata letak di banyak arah. Hal menarik dari flexbox adalah ia menawarkan penyusunan dengan fleksibel karena flex container atau flexbox dapat mengatur dimensi setiap flex-items (child element) sehingga layout yang diinginkan dapat tercapat dengan mudah.

Flex container memperluas flex items untuk mengisi ruang kosong atau menciutkannya sehingga menghindari overflow (dimensi child element yang keluar dariparent element-nya). Dengan hadirnya flexbox, perancangan layout dalam skala yang kecil dapat dilakuakn dengan mudah pada halaman web.

# Alasan Flexbox Hadir

1. Centering Secara Vertikal: Membuat konten berada di tengah secara vertikal dalam parent element-nya. Dari beberapa kasus, hal ini bisa dicapat menggunakan line-height. Namun, ini hanya berguna jika konten berada dalam satu baris serta kitat harus mengetahui secara ekplisit tinggi dari parent element.
2. Fluid Secara Dinamis dan Rata: Membuat semua child element memenuhi ruang dari parent element-nya secara dinamis dan merata. Hal ini mungkin bisa tercapai menggunakan ukuran nilai persentase. Namun, jika jumlah child element berjumlah ganjil, kita harus memikirkan nilai persentase yang tepat. Bahkan, tetap akan meninggalkan celah urang sedikit (tidak penuh).
3. Memiliki Height yang Sma pada Multi-Column : Membentuk child element dalam layout multiple-column agar memiliki ukuran height yang sama, meskipun jumlah content di dalamnya tidak sama.

# Dasar-Dasar dan Terminologi Flexbox

1. Flexbox dalam penggunaannya, bukanlah properti yang bekerja secara mandiri. Flexbox dapat melakukan banyak hal dengan melibatkan berbagai properti pendukung. Beberapa di antaranya digunakan oleh flex container dan sebagian lainnya digunakan oleh flex items.
2. Pada dasarnya, arah flow didasarkan pada flow dari elemen block (vertical) dan flow dari elemen inline (horizontal). Flexbox sendiri memiliki arah layout yang didasarkan pada FLEX-DIRECTION.
3. Flex container adalah parent element dari seluruh flex items, sedangkan flex items adalah elemen yang secara langsung merupakan child dari parent element.

# Posisi pada Flex Items

Flex items asalnya disejajarkan secara horizontal, yaitu dimulai dari main-start ke main-end (main axis).

- Main axis: main axis dari flex container adalah arah sumbu utama untuk flex item dijajarkan atau ditata. Perlu diingat, arah dari main axis tidak selalu horizontal. Hal ini bergantung terhadap value dari properti flex-direction.
- Main-start | Main-end : flex itema akan ditempatkan dalam flex container yang berawal dari main-start dan main-end.
- Main size: lebar atau tinggi dari flex item yang diposisikan pada sumbu utama (main axis).
- Cross axis: sumbu yang arahnya tegak lurus dengan main axis. Biasanya ini terjadi ketika flexbox menerapkan value wrap pada properti FLEX-WRAP sehingga susunan layout terlihat dua dimensi.
- Cross-start | cross-end : flex item yang memenuhi ruang kosong flex container secara vertical, mulai dari cross-start hingga cross end. Hal ini dapat kita atur menggunakakn properti ALIGN-ITEMS, ALIGN-SELF, dan ALIGN-CONTENT.
- Cross size: lebar atau tinggi dari sebuah flex item yang ditempatkan pada dimensi cross.

# Properti-properti pada Flex Container

Properti-properti berikut akan berpengaruh secara langsung kepada flex items dalam menampilkan susunannya.

## Display

Jika kita ingin mendefinisikan elemen agar disusun sebagai flexible box, kita dapat menggunakan properti " display : flex; "

# Flex Direction

# Flex Wrap
