// menerima argumen sebuah fungsi
function memoize(fn) {
    const cache = new Map();

    // mengembalikan nilai berupa fungsi
    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
} 

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time('Memoized Sum First Call');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum First Call');

console.time('Memoized Sum Second Call (Chached)');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum Second Call (Chached)');

// Teknik Currying HOF
function adjectivfy(adjective) {
    return function (noun) {
        return `${noun} ${adjective}.`;
    }
}

function multipleBy(x) {
    return function (y) {
        return x * y;
    }
}

const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');
const multipleByFive = multipleBy(5);

console.log(coolifier('Dicoding'));
console.log(funnifier('JavaScript'));
console.log(multipleByFive(7));
console.log(multipleByFive(10));

// HOF untuk komposisi fungsi
function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return (x) => {
        return f(g(x));
    };
}

const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(2));