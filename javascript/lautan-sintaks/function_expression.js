const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// first-class citizen
/**
 * Dapat disimpan sebagai nilai dalam variabel.
 * Dapat dikembalikan dari suatu function.
 * Dapat dikirimkan sebagai parameter bagi function lain.
 * Dapat disimpan dalam elemen array dan object literal.
 * Dapat memiliki method dan properties sendiri.**/ 