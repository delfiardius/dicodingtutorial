import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
    .then(
        (value) => {
            return sendCoffee(value);
        },
        (error) => {
            console.log(error.message);
            throw error;
        },
    )
    .then(
        (value) => {
            console.log(`Pramusaji memberikan ${value} pesanan.`);
            console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
        },
        (error) => {
            console.log(error.message);
            throw error;
        },
    )