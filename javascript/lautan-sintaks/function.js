/**
 * Create a function to count the temperature and 
 * convert it to another type of temperature
 * */

// Function Declaration

function convertCelciusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Convertion result: ', temperatureInFahrenheit);
}

const temperatureInCelcius = 90; // initialed the temperature in Celcius degree

// Called the function
convertCelciusToFahrenheit(temperatureInCelcius);
