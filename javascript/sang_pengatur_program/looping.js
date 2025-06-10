const foods = ['Nasi Goreng', 'Pasta', 'Sate'];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

// For loop
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

// For in
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// For of
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}

// While
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// Do While
do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);

// Control statement
// Break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}

// Continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}