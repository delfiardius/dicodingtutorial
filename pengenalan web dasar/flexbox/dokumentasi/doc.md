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

## Flex Direction

Pada dasarnya, flexbox mengatur elemen secara satu dimensi (terlepas dari permasalahan wrapping). Dengan begitu, untuk menentukan arah susunan flex items, kita bisa definisikan menggunakan properti " flex-direction ". Secara default, value ini adalah row.

Berikut adalah penjelasan value dari properti FLEX-DIRECTION

- Row: flex items akan disusun secara horizontal dari kiri ke kanan.
- Row-reverse: flex items akan disusun secara horizontal, tetapi arah terbalik (kanan ke kiri).
- Column: flex items akan disusun secara vertikal dari atas ke bawah.
- Column-reverse: flex items akan disusun secara vertikal, tetapi dengan arah terbalik (bawah ke atas).

## Flex Wrap

Pada mulanya, ketika layout dari parent element disusun menggunakan flexbox, flex items akan selau diletakkan dalam satu baris (satu dimensi). Dengan properti FLEX-WRAP, kita bisa mengubah perilakunya menjadi dua dimensi (jika dibutuhkan). Secara bawaan, value dari properti ini adalah NOWRAP.

Berikut adalah penjelasan setiap value dari propertit FLEX-WRAP.

- nowrap: seluruh flex items hanya akan ditempatkan dalam satu baris meskipun sangat banyak jumlahnya.
- wrap: nilai ini menyebabkan flex items akan diletakkan ke baris yang baru (berikutnya) sehingga menjadi multiple lines.
- wrap-reverse: meskipun mirip dengan wrap, nilai ini akan menyebabkan beberapa flex items ditempatkan dengan menambahkan baris sebelumnya.

## Justify Content

Ada kasus saat kita perlu meletakkan child element agar berada di tengah secara HORIZONTAL, jarak child element setara, dsb. Sebelum kita mengenal flexboxk, untuk mencapai hal tersebut diperlukan penentuan nilai secara eksplisit, misalnya dengan properti margin agar jarak antar elemen sesuai dengan keinginan. Tentu saja hal ini menjadi rumit dan membuat kita frustasi.

Pada flexbox, permasalahan tersebut terselesaikan dengan mudah menggunakan properti JUSTIFY-CONTENT. Properti ini akan mengatur posisi child elemen pada main axis. Kemudahan ini tentu akan sangat dirasakan ketika membuat tampilan yang responsif.

Berikut adalah penjelasan setiap value dari properti JUSTIFY-CONTENT.

- Flex-start: peletakkan child element akan dimulai dari main-starat.
- Flex-end: peletakkan child element dimulai dari main-end.
- Center: child element akan diletakkan di tengah parent child.
- Space-between: child element akan tersusun secara merata, element pertama berada di tepi main-start dan elemen kedua berada di tepi main-end. JIka child element lebih dari dua, elemen lainnya akan didistribusikan berada ditengah dengan jarak yang sama.
- Space-around: setiap child element akan memiliki panjang celah yang smaa pada sisi horizontal.
- Space-evenly: setiap child element akan memiliki jarak yang setara, termasuk jarak ke tepi main-start dan main-end.

## Align Items

Properti ini memeiliki perilaku menempatkan flex items sepanjang cross axis. Bayangkan bahwa tingkah laku dari properti ini mirip dengan property JUSTIFY-CONTENT, tetapi mengatur child element dalam satu baris pada cross axis.

Berikut adalah penjelasan setiap value dari properti ALIGN-ITEMS

- Stretch: melebar hingga memenuhi container dalam cross axis. Setiap child element akan memiliki nilai height yang sama, meskipun isi kontent berbeda.
- Flex=start: setiap child element akan memiliki ukuran height sesuai dengan isi kontent serta seluruhnya akan berada di tepi cross-start.
- Flex-end: setiap child element akan memiliki ukuran height sesuai dengan isi kontent serta seluruhnya berada di tepi cross-end.
- Center: setiap child element memiliki ukuran height sesuai dengan isi konten dan secara vertikal posisi element berada di tengah.
- Baseline: nilai pada asalnya akan menyerupai flex-start. Namun, jika konten pertama pada masing-masing child element memiliki ukuran height yang berbeda, child element lainnya akan menyesuaikan posisinya secara cross axis dari cross-start.

## Align Content

Properti ini melakukan perataan terhadap flex items pada setiap baris dalam cross-axis. Tingkah laku properti ini hampir mirip dengan properti JUSTIFY-CONTENT yang mengatur tata letak flex items di sisi main axis.

Hal yang perlu diperhatikan adalah penggunaan properti ini hanya akan berpengaruh pada multi line flex container dan properti FLEX-WRAP dilibatkan. Flex container yang hanya memiliki single line tidak akan memiliki efek diterapkannya properti algin content.

Berikut adalah penjelasan setiap value dari properti ini.

- Normal (default): Jika kita tidak menerapkan value pada align content, flex items akan diposisikan secara default.
- Flex-start: flex items ditata pada permulaan flex container.
- Flex-end: flex items ditata pada akhir flex container.
- Center: flex items diposisikan di tengah flex container.
- Space-between: flex items akan disebar secara merata, item pertama akan diposisikan pada cross-start dan item terakhir akan disposisikan pada cross-end.
- Space-around: flex items akakn disebar secara merata dengan jarak celah yang sama juga.
- Space-evenly: flex items akan disebar secara merata dengan jarak yang merata juga.
