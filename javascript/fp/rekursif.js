// deret angka dengan for loop
function generateArray(n) {
    const result = [];
    for (let counter = 0; counter <= n; counter +=1) {
        result.push(counter);
        
    }
    return result;
}

console.log(generateArray(5));

/**deret angka dengan rekursif */
function angkaArray(n) {
    if (n < 0) {
        return [];
    }
}

console.log(angkaArray(5));