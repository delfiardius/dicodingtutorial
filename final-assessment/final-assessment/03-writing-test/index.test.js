import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Menjumlahkan dua bilangan positif', () => {
    assert.strictEqual(sum(2, 3), 5);
});

test('Menjumlahkan bilangan positif dan negatif', () => {
    assert.strictEqual(sum(10, -4), 6);
});

test('Menjumlahkan bilangan negatif dan positif', () => {
    assert.strictEqual(sum(-3, 18), 15);
});

test('Menjumlahkan dua bilangan negatif', () => {
    assert.strictEqual(sum(-7, -3), -10);
});

test('Menjumlahkan dua bilangan nol', () => {
    assert.strictEqual(sum(0, 0), 0);
});

test('Menjumlahkan dua bilangan desimal', () => {
    assert.strictEqual(sum(2.5, 3.1), 5.6);
});

test('Menjumlahkan dua angka besar', () => {
    assert.strictEqual(sum(100000, -49000), 51000);
});

test('Menjumlahkan dua bilangan desimal negatif', () => {
    assert.strictEqual(sum(-3.4, 5.5), 2.1);
});