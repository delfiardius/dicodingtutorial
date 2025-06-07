/**
 * Create a function to convert a temperature to another type
 * */

// Function #declaration
// the convertCelsiusToFahrenheit is identifier

function convertCelsiusToFahrenheit(temperature = 0) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Convertion result: ', temperatureInFahrenheit);
}

const temperatureInCelsius = 90; // initialed the temperature in Celsius degree

// #calling the function
// To running a function, calling the identifier that follow with parentheses.
convertCelsiusToFahrenheit(temperatureInCelsius);

/**
 * #parameter and argument
 * 
 * In our case before, the "temperature" in parentheses is a PARAMETER. Parameter can be
 * more then one, separate by comma. 
 * **/

convertCelsiusToFahrenheit();

// #return value
function sumNumbers(a, b) {
    const result = a + b;
    return result;
}

const result = sumNumbers(2, 4);
console.log('2 + 4: ',  result);

// The program will stopped when the return statament has executed.
// So, the program under the return statement will not execute.

// Update the calculation temperature
function convertCToF(temperature = 0) {
    const result = (9/5) * temperature + 32;
    return result;
}

const temperatureInF = convertCToF(90);
console.log('Hasil konversi: ', temperatureInF);

