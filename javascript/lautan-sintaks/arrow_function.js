let temperatureInFahrenheit = null;

// Function Declaration with Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
    const result = (9/5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Convertion with Regular Function : ', temperatureInFahrenheit);

// Function Declaration with Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9/5) * temperature + 32;
    return result; 
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('\nConvertion with Arrow Function : ', temperatureInFahrenheit);

/**
 * => : This notation is "fat arrow"
 * **/ 

// Arrow Function in Concise version
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => (9/5) * temperature + 32;
temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('\nConvertion with Concise Arrow Function : ',temperatureInFahrenheit);

/**
 * Noted
 * 
 * Hal yang perlu dicatat adalah pembuatan arrow function hanya tersedia 
 * dalam bentuk expression. Oleh karena itu, kita selalu menyimpan nilainya dalam variabel. 
 * Selain itu, arrow function dengan gaya seperti ini hanya mampu menampung satu return value. 
 * Silakan bungkus dengan tanda kurung kurawal buka-tutup jika memerlukan banyak kode.
 * */ 