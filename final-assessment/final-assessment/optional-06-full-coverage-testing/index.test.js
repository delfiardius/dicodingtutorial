/**
 * Berdasarkan kode 'sum' dari index.js, logikanya dapat disimpulkan sbb:
 * 1. Jika a atau b 'bukan number' -> kembalikan 0
 * 2. Jika a atau b 'bernilai negatif' -> kembalikan 0
 * 3. Jika a dan b 'angka positif (desimal atau 0)' -> kembalikan jumlahnya
 */

import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Kasus normal (angka positif)
test('Menjumlahkan 4 + 6 = 10', () => {
    assert.strictEqual(sum(4, 6), 10);
});

// Kasus dengan nol
test('Menjumlahkan 0 + 0 = 0', () => {
    assert.strictEqual(sum(0, 0), 0);
});

test('Menjumlahkan 5 + 0 = 5', () => {
    assert.strictEqual(sum(5, 0), 5);
});

test('Menjumlahkan 0 + 12 = 12', () => {
    assert.strictEqual(sum(0, 12), 12);
});

// Kasus tipe data bukan number
test('Menggunakan string sebagai parameter', () => {
    assert.strictEqual(sum('4', 2), 0);
});

test('Menggunakan string sebagai parameter', () => {
    assert.strictEqual(sum(3, '2'), 0);
});

test('Menggunakan null dan number', () => {
    assert.strictEqual(sum(null, 3), 0);
});

test('Menggunakan null dan number', () => {
    assert.strictEqual(sum(7, null), 0);
});

test('Kedua argumen bukan number', () => {
    assert.strictEqual(sum('a', 'b'), 0);
});

// Kasus negatif
test('Angka negatif sebagai parameter', () => {
    assert.strictEqual(sum(-2, 5), 0);
});

test('Angka negatif sebagai parameter', () => {
    assert.strictEqual(sum(2, -5), 0);
});

test('Kedua parameter negatif', () => {
    assert.strictEqual(sum(-2, -5), 0);
});

// Kasus desimal
test('Menjumlahkan bilangan desimal', () => {
    assert.strictEqual(sum(2.5, 3.5), 6);
});