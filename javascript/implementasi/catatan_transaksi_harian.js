/**
 * Buatlah program untuk menampilkan catatan transaksi keuangan harian
 * dalam bentuk console. Berikut adalah beberapa kriteria yang harus ada:
 * 1. Catatan Uang Masuk dan Totalnya
 *    Uang masuk terdiri dari beberapa sumber, untuk itu buatkan fungsi yang menerima 
 *    uang masuk tersebut
 * 2. Catatan Uang Keluar dan Totalnya
 *    Uang keluar juga dihasilkan berdasarkan banyaknya jumlah transaksi keluar
 * 3. Jenis Pengeluaran
 *    Jenis pengeluaran merupakan kategori pengeluaran harian misalnya jenis makanan,
 *    transportasi, dan lain-lain.
 * 4. Wajib menggunakan fungsi
*/ 

// Tanggal Transaksi
const hari_ini = new Date();

// Uang Masuk
const uang_masuk = (dari_abang = 0, dari_rekening = 0) => {
    const total_uang_masuk = dari_abang + dari_rekening;
    return total_uang_masuk;
}

// Uang Keluar
const uang_keluar = (kbs = 0, rokok = 0, jajan = 0) => {
    const total_uang_keluar = kbs + rokok + jajan;
    return total_uang_keluar;
}

const masuk = uang_masuk(dari_rekening = 50000);
const keluar = uang_keluar(
    kbs = 25000,
    rokok = 12000,
    jajan = 1000,
)


console.log(`
    ============== Transaksi Harian ==============
    ==============================================
    Hari : ${hari_ini.toLocaleDateString()}

    Uang Masuk: ${masuk}
    Uang Keluar: ${keluar}
    ==============================================
    Sisa Saldo : ${masuk - keluar}
    ==============================================
    `);