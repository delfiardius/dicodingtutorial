import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */

async function processData(data) {
  // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
  try {
    const promises = data.map(({ delay, simulateError }) => 
        API.fetch(delay, simulateError)
    );

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
}

processData(sampleErrorData).then(console.log).catch(console.log); 
processData(sampleSuccessData).then(console.log).catch(console.log);