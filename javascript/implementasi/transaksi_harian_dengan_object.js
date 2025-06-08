const transaksi_masuk = {
    abang: 0,
    bank: 0
};

const transaksi_keluar = {
    makan: 0,
    rokok: 0,
    kbs: 0,
    bensin: 0,
};

transaksi_masuk.abang = 50000;
transaksi_masuk.bank = 50000;
transaksi_keluar.makan = 15000;
transaksi_keluar.kbs = 8000;
transaksi_keluar.bensin = 35000;
transaksi_keluar.rokok = 15000;

const total_uang_masuk = Object.values(transaksi_masuk).reduce((acc, val) => acc + val, 0);
const total_uang_keluar = Object.values(transaksi_keluar).reduce((acc, val) => acc + val, 0);

console.log(`
    ========================================================
    =================== Transaksi Harian ===================
    ========================================================
    = Transaksi Masuk 
    = ------------------------------------------------------
    = Saldo dari Abang: ${transaksi_masuk.abang}
    = Saldo dari Rekening: ${transaksi_masuk.bank}
    = ------------------------------------------------------
    = Transaksi Keluar
    = ------------------------------------------------------
    = Makan: ${transaksi_keluar.makan}
    = KBS: ${transaksi_keluar.kbs}
    = Rokok: ${transaksi_keluar.rokok}
    = Bensin: ${transaksi_keluar.bensin}
    = ------------------------------------------------------
    = Total Uang Masuk: ${total_uang_masuk}
    = Total Uang Keluar: ${total_uang_keluar}
    ========================================================
    = Sisa Saldo: ${total_uang_masuk - total_uang_keluar}
    ========================================================
    `);
