let total_masuk = null;
let total_keluar = null;
let saldo_sebelumnya = 2000;
let sisa_saldo = null;
let tanggal_hari_ini = new Date();

/** Transaksi */
/** Masuk*/ 
const abng = 0;
const rekening = 50000;
total_masuk = abng + rekening + saldo_sebelumnya;

/** Keluar*/ 
const jajan = 1000;
const kbs = 25000;
const rokok = 12000;
total_keluar = jajan + kbs + rokok;

/** Sisa saldo*/
sisa_saldo = total_masuk - total_keluar; 

console.log(`
    ========= Pengeluaran Harian =========
    ======================================
    Tanggal: ${tanggal_hari_ini.toLocaleDateString()}

    Jenis Transaksi
    --------------------------------------
    Masuk: 
    1. Dari Abang: Rp ${abng}
    2. Dari Rekening: Rp ${rekening}
    3. Saldo Sebelumnya: Rp ${saldo_sebelumnya}
    Total Masuk: Rp ${total_masuk}
    --------------------------------------
    Keluar:
    1. Jajan: Rp ${jajan}
    2. Kbs: Rp ${kbs}
    3. Rokok: Rp ${rokok}
    Total Keluar: Rp ${total_keluar}
    ======================================
    Sisa Saldo: Rp ${sisa_saldo}
    ======================================
    `);